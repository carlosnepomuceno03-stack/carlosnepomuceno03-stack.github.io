import type { PGlite } from '@electric-sql/pglite';
import { beforeAll, describe, expect, it } from 'vitest';
import { createTestDatabase } from '../src';

const OWNER = '33333333-3333-3333-3333-333333333333';
const VIEWER = '44444444-4444-4444-4444-444444444444';
const STRANGER = '55555555-5555-5555-5555-555555555555';
const SHA = 'c'.repeat(64);

let db: PGlite;
let orgId: string;
let projectId: string;

const one = async <T>(sql: string, params: unknown[] = []) => (await db.query<T>(sql, params)).rows[0]!;
const content = (docId: string, revision: number, extra: Record<string, unknown> = {}) =>
  JSON.stringify({ schemaVersion: 1, id: docId, projectId, revision, name: 'Flyer', width: 1080, height: 1350, layers: [], ...extra });

beforeAll(async () => {
  db = await createTestDatabase([OWNER, VIEWER, STRANGER]);
  orgId = (await one<{ id: string }>(`insert into organizations (name, created_by) values ('Org', $1) returning id`, [OWNER])).id;
  await db.query(`insert into organization_members values ($1, $2, 'owner'), ($1, $3, 'viewer')`, [orgId, OWNER, VIEWER]);
  projectId = (await one<{ id: string }>(`insert into projects (organization_id, name, kind, created_by) values ($1, 'Noite Neon', 'event', $2) returning id`, [orgId, OWNER])).id;
});

async function newDoc() {
  return (await one<{ id: string }>(`select public.create_document($1, $2, 'Flyer', 'master') as id`, [OWNER, projectId])).id;
}
async function asset(sha = SHA) {
  return (await one<{ id: string }>(
    `select public.register_asset($1, $2, 'logo', $3, 'image/png', 100, $4, 10, 10, true) as id`,
    [OWNER, projectId, `${orgId}/${projectId}/${crypto.randomUUID()}.png`, sha],
  )).id;
}

describe('recursos', () => {
  it('registra recurso só dentro do caminho do projeto e com direito de uso confirmado', async () => {
    await expect(db.query(`select public.register_asset($1, $2, 'logo', 'outra-org/x.png', 'image/png', 1, $3, 1, 1, true)`, [OWNER, projectId, SHA])).rejects.toThrow(/fora do projeto/);
    await expect(db.query(`select public.register_asset($1, $2, 'logo', $3, 'image/png', 1, $4, 1, 1, false)`, [OWNER, projectId, `${orgId}/${projectId}/a.png`, SHA])).rejects.toThrow(/direito de uso/);
    expect(await asset()).toMatch(/[0-9a-f-]{36}/);
  });
  it('viewer e estranhos não registram recursos', async () => {
    for (const u of [VIEWER, STRANGER]) {
      await expect(db.query(`select public.register_asset($1, $2, 'logo', $3, 'image/png', 1, $4, 1, 1, true)`, [u, projectId, `${orgId}/${projectId}/v.png`, SHA])).rejects.toThrow(/sem permissão/);
    }
  });
});

describe('revisões', () => {
  it('salva revisões em sequência e rejeita base desatualizada (conflito de versão)', async () => {
    const doc = await newDoc();
    expect((await one<{ r: number }>(`select public.save_document_revision($1, $2, 0, $3, '[]') as r`, [OWNER, doc, content(doc, 1)])).r).toBe(1);
    expect((await one<{ r: number }>(`select public.save_document_revision($1, $2, 1, $3, '[]') as r`, [OWNER, doc, content(doc, 2)])).r).toBe(2);
    await expect(db.query(`select public.save_document_revision($1, $2, 1, $3, '[]')`, [OWNER, doc, content(doc, 2)])).rejects.toThrow(/conflito de versão/);
  });

  it('rejeita camada que aponta para recurso com hash diferente do registrado', async () => {
    const doc = await newDoc();
    const a = await asset();
    const bad = JSON.stringify([{ layer_id: 'logo', type: 'image', role: 'logo', z_index: 0, asset_id: a, asset_sha256: 'd'.repeat(64) }]);
    await expect(db.query(`select public.save_document_revision($1, $2, 0, $3, $4)`, [OWNER, doc, content(doc, 1), bad])).rejects.toThrow(/hash diferente/);
    const good = JSON.stringify([{ layer_id: 'logo', type: 'image', role: 'logo', z_index: 0, asset_id: a, asset_sha256: SHA, locked: true }]);
    await db.query(`select public.save_document_revision($1, $2, 0, $3, $4)`, [OWNER, doc, content(doc, 1), good]);
    expect((await one<{ n: number }>(`select count(*)::int as n from layers where document_id = $1`, [doc])).n).toBe(1);
  });

  it('rejeita conteúdo de outro documento ou revisão', async () => {
    const doc = await newDoc();
    await expect(db.query(`select public.save_document_revision($1, $2, 0, $3, '[]')`, [OWNER, doc, content(doc, 5)])).rejects.toThrow(/não corresponde/);
  });

  it('viewer não salva revisões', async () => {
    const doc = await newDoc();
    await expect(db.query(`select public.save_document_revision($1, $2, 0, $3, '[]')`, [VIEWER, doc, content(doc, 1)])).rejects.toThrow(/sem permissão/);
  });
});

describe('aprovação e restauração', () => {
  it('aprova, congela identidade, substitui aprovação anterior e restaura sem apagar histórico', async () => {
    const doc = await newDoc();
    await db.query(`select public.save_document_revision($1, $2, 0, $3, '[]')`, [OWNER, doc, content(doc, 1, { name: 'v1' })]);
    const c1 = JSON.stringify({ sourceDocumentId: doc, sourceDocumentRevision: 1, elements: [] });
    const id1 = (await one<{ id: string }>(`select public.approve_document_revision($1, $2, 1, $3, 'ok') as id`, [OWNER, doc, c1])).id;
    await expect(db.query(`select public.approve_document_revision($1, $2, 1, $3)`, [OWNER, doc, c1])).rejects.toThrow(/já aprovada/);

    await db.query(`select public.save_document_revision($1, $2, 1, $3, '[]')`, [OWNER, doc, content(doc, 2, { name: 'v2' })]);
    const c2 = JSON.stringify({ sourceDocumentId: doc, sourceDocumentRevision: 2, elements: [] });
    await db.query(`select public.approve_document_revision($1, $2, 2, $3)`, [OWNER, doc, c2]);

    const statuses = (await db.query<{ revision: number; status: string }>(`select revision, status from layout_versions where document_id = $1 order by revision`, [doc])).rows;
    expect(statuses).toEqual([{ revision: 1, status: 'superseded' }, { revision: 2, status: 'approved' }]);
    const identities = (await db.query<{ revision: number; parent_revision: number | null }>(`select revision, parent_revision from visual_identities where project_id = $1 order by revision`, [projectId])).rows;
    expect(identities.at(-1)!.parent_revision).toBe(identities.at(-2)!.revision);
    expect(id1).toBeTruthy();

    // restaurar a v1 cria a revisão 3 (rascunho) com o conteúdo da v1; v1 e v2 permanecem
    const r = (await one<{ r: number }>(`select public.restore_document_revision($1, $2, 1) as r`, [OWNER, doc])).r;
    expect(r).toBe(3);
    const v3 = await one<{ content: { name: string; revision: number; parentRevision: number }; status: string }>(`select content, status from layout_versions where document_id = $1 and revision = 3`, [doc]);
    expect(v3).toMatchObject({ status: 'draft', content: { name: 'v1', revision: 3, parentRevision: 1 } });
    expect((await one<{ n: number }>(`select count(*)::int as n from layout_versions where document_id = $1`, [doc])).n).toBe(3);
    expect((await one<{ n: number }>(`select count(*)::int as n from approvals where document_id = $1`, [doc])).n).toBe(2);
  });

  it('rejeita contrato que não corresponde à revisão e aprovação de revisão antiga', async () => {
    const doc = await newDoc();
    await db.query(`select public.save_document_revision($1, $2, 0, $3, '[]')`, [OWNER, doc, content(doc, 1)]);
    await db.query(`select public.save_document_revision($1, $2, 1, $3, '[]')`, [OWNER, doc, content(doc, 2)]);
    await expect(db.query(`select public.approve_document_revision($1, $2, 2, $3)`, [OWNER, doc, JSON.stringify({ sourceDocumentId: doc, sourceDocumentRevision: 1 })])).rejects.toThrow(/contrato não corresponde/);
    await expect(db.query(`select public.approve_document_revision($1, $2, 1, $3)`, [OWNER, doc, JSON.stringify({ sourceDocumentId: doc, sourceDocumentRevision: 1 })])).rejects.toThrow(/mais recente/);
  });
});

describe('permissões das funções', () => {
  it('usuário autenticado não executa funções de mutação diretamente', async () => {
    await db.exec(`set role authenticated; select set_config('request.jwt.claim.sub', '${OWNER}', false);`);
    try {
      await expect(db.query(`select public.create_document($1, $2, 'X', 'master')`, [OWNER, projectId])).rejects.toThrow(/permission denied/);
    } finally {
      await db.exec(`reset role;`);
    }
  });
  it('bucket de storage é privado', async () => {
    expect(await one(`select public from storage.buckets where id = 'studio-private'`)).toEqual({ public: false });
  });
});
