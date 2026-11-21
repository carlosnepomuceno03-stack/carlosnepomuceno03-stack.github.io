import type { PGlite } from '@electric-sql/pglite';
import { beforeAll, describe, expect, it } from 'vitest';
import { createTestDatabase } from '../src';

const ANA = '66666666-6666-4666-8666-666666666666';
const RUI = '77777777-7777-4777-8777-777777777777';
let db: PGlite;
let orgAna: string;

/** Executa como o usuário (papel authenticated + claim sub), como o PostgREST faria. */
async function as<T>(user: string | null, fn: () => Promise<T>, role = 'authenticated'): Promise<T> {
  await db.exec(`set role ${role}; select set_config('request.jwt.claim.sub', '${user ?? ''}', false);`);
  try {
    return await fn();
  } finally {
    await db.exec(`reset role; select set_config('request.jwt.claim.sub', '', false);`);
  }
}
const rpc = async <T = unknown>(sql: string, params: unknown[] = []) => (await db.query<{ r: T }>(`select ${sql} as r`, params)).rows[0]!.r;

beforeAll(async () => {
  db = await createTestDatabase([ANA, RUI]);
  orgAna = (await rpc<{ organizationId: string }>(`public.api_bootstrap_user($1)`, [ANA])).organizationId;
  await rpc(`public.api_bootstrap_user($1)`, [RUI]);
});

const upsert = (id: string, org: string, name = 'Festa') =>
  rpc(`public.api_upsert_project($1, $2, $3, 'event', null, null, 'briefing', '{"create_project":"completed","briefing":"not_started","add_references":"not_started"}'::jsonb)`, [id, org, name]);

describe('privilégios no padrão do Supabase', () => {
  it('anônimo não executa nenhuma função da API', async () => {
    await expect(as(null, () => rpc(`public.api_list_projects()`), 'anon')).rejects.toThrow(/permission denied/);
  });
  it('usuário logado não executa funções de backend (bootstrap, registro de arquivo, aprovação)', async () => {
    await expect(as(ANA, () => rpc(`public.api_bootstrap_user($1)`, [RUI]))).rejects.toThrow(/permission denied/);
    await expect(as(ANA, () => rpc(`public.approve_document_revision($1, $1, 1, '{}'::jsonb, null)`, [ANA]))).rejects.toThrow(/permission denied/);
    await expect(as(ANA, () => rpc(`public.register_asset($1,$1,'logo','x','image/png',1,$2,1,1,true)`, [ANA, 'a'.repeat(64)]))).rejects.toThrow(/permission denied/);
  });
});

describe('sincronização de projetos', () => {
  it('upsert com ID do app é idempotente e preserva o primeiro registro', async () => {
    const id = crypto.randomUUID();
    const a = await as(ANA, () => upsert(id, orgAna, 'Primeiro nome'));
    const b = await as(ANA, () => upsert(id, orgAna, 'Reenvio'));
    expect(a).toMatchObject({ id, name: 'Primeiro nome' });
    expect(b).toMatchObject({ id, name: 'Primeiro nome' });
    expect((await as(ANA, () => rpc<unknown[]>(`public.api_list_projects()`))).filter((p) => (p as { id: string }).id === id)).toHaveLength(1);
  });
  it('outro usuário não cria projeto na organização alheia nem enxerga o existente', async () => {
    await expect(as(RUI, () => upsert(crypto.randomUUID(), orgAna))).rejects.toThrow(/row-level security/);
    expect(await as(RUI, () => rpc<unknown[]>(`public.api_list_projects()`))).toEqual([]);
  });
  it('briefing: cada salvamento é uma revisão; reenviar o mesmo ID não duplica', async () => {
    const pid = crypto.randomUUID();
    await as(ANA, () => upsert(pid, orgAna));
    const b1 = crypto.randomUUID();
    await as(ANA, () => rpc(`public.api_save_briefing($1, $2, 'Objetivo 1', '', '', array['SÁB 20.12'], '')`, [pid, b1]));
    await as(ANA, () => rpc(`public.api_save_briefing($1, $2, 'Objetivo 1', '', '', array['SÁB 20.12'], '')`, [pid, b1]));
    const r2 = await as(ANA, () => rpc<{ revision: number }>(`public.api_save_briefing($1, $2, 'Objetivo 2', '', '', null, '')`, [pid, crypto.randomUUID()]));
    expect(r2.revision).toBe(2);
    const list = await as(ANA, () => rpc<{ revision: number }[]>(`public.api_list_briefings($1)`, [pid]));
    expect(list.map((b) => b.revision)).toEqual([1, 2]);
    const p = (await as(ANA, () => rpc<{ id: string; steps: Record<string, string> }[]>(`public.api_list_projects()`))).find((x) => x.id === pid)!;
    expect(p.steps.briefing).toBe('completed');
  });
  it('referências: adicionar marca a etapa em andamento; remover funciona; estranho não vê', async () => {
    const pid = crypto.randomUUID();
    await as(ANA, () => upsert(pid, orgAna));
    const rid = crypto.randomUUID();
    await as(ANA, () => rpc(`public.api_add_reference($1, $2, 'pinterest_link', 'https://pin.it/x', null, null)`, [rid, pid]));
    expect(await as(RUI, () => rpc<unknown[]>(`public.api_list_references($1)`, [pid]))).toEqual([]);
    expect(await as(ANA, () => rpc<unknown[]>(`public.api_list_references($1)`, [pid]))).toHaveLength(1);
    expect(await as(RUI, () => rpc(`public.api_delete_reference($1)`, [rid]))).toEqual({ deleted: false });
    expect(await as(ANA, () => rpc(`public.api_delete_reference($1)`, [rid]))).toEqual({ deleted: true });
  });
  it('exclusão lógica: some da lista, outro usuário não exclui', async () => {
    const pid = crypto.randomUUID();
    await as(ANA, () => upsert(pid, orgAna));
    await expect(as(RUI, () => rpc(`public.api_delete_project($1)`, [pid]))).rejects.toThrow(/não encontrado/);
    await as(ANA, () => rpc(`public.api_delete_project($1)`, [pid]));
    expect((await as(ANA, () => rpc<{ id: string }[]>(`public.api_list_projects()`))).some((p) => p.id === pid)).toBe(false);
    expect((await db.query(`select deleted_at from projects where id = $1`, [pid])).rows[0]).toBeTruthy(); // dado preservado
  });
});

describe('materiais gerados são imutáveis', () => {
  it('só o estado de revisão pode mudar; arquivo e revisão de origem não', async () => {
    const pid = crypto.randomUUID();
    await as(ANA, () => upsert(pid, orgAna));
    const sha = 'e'.repeat(64);
    const asset = await rpc<string>(`public.register_asset($1,$2,'export',$3,'image/png',10,$4,1,1,true)`, [ANA, pid, `${orgAna}/${pid}/x.png`, sha]);
    const other = await rpc<string>(`public.register_asset($1,$2,'export',$3,'image/png',10,$4,1,1,true)`, [ANA, pid, `${orgAna}/${pid}/y.png`, sha]);
    const doc = await rpc<string>(`public.create_document($1,$2,'F','master')`, [ANA, pid]);
    await rpc(`public.save_document_revision($1,$2,0,$3::jsonb,'[]'::jsonb)`, [ANA, doc, JSON.stringify({ schemaVersion: 1, id: doc, projectId: pid, revision: 1 })]);
    const mat = await rpc<string>(`public.register_generated_material($1,$2,$3,1,null,'story',$4,1080,1920,'r','{}'::jsonb)`, [ANA, pid, doc, asset]);
    await as(ANA, () => db.query(`update generated_materials set review_status = 'approved' where id = $1`, [mat]));
    await expect(as(ANA, () => db.query(`update generated_materials set asset_id = $1 where id = $2`, [other, mat]))).rejects.toThrow(/imutáveis/);
    await expect(db.query(`update generated_materials set document_revision = 2 where id = $1`, [mat])).rejects.toThrow(/imutáveis/);
    await expect(db.query(`delete from generated_materials where id = $1`, [mat])).rejects.toThrow(/somente-inserção/);
  });
});
