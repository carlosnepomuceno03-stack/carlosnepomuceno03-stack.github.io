import { PGlite } from '@electric-sql/pglite';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Executa as migrações reais contra um Postgres embutido.
 * O Supabase fornece o schema `auth`; aqui criamos um substituto mínimo com o mesmo contrato:
 * auth.users(id) e auth.uid() lendo o claim `sub` da sessão, como no PostgREST.
 */
const MIGRATIONS = join(__dirname, '../../../supabase/migrations');
const U1 = '11111111-1111-1111-1111-111111111111';
const U2 = '22222222-2222-2222-2222-222222222222';
const SHA = 'b'.repeat(64);

let db: PGlite;

async function as<T>(user: string, fn: () => Promise<T>): Promise<T> {
  await db.exec(`set role authenticated; select set_config('request.jwt.claim.sub', '${user}', false);`);
  try {
    return await fn();
  } finally {
    await db.exec(`reset role; select set_config('request.jwt.claim.sub', '', false);`);
  }
}

beforeAll(async () => {
  db = new PGlite();
  await db.exec(`
    create schema auth;
    create table auth.users (id uuid primary key);
    create function auth.uid() returns uuid language sql stable as
      $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
    create role authenticated;
    insert into auth.users values ('${U1}'), ('${U2}');
  `);
  for (const f of readdirSync(MIGRATIONS).filter((n) => n.endsWith('.sql')).sort()) {
    await db.exec(readFileSync(join(MIGRATIONS, f), 'utf8'));
  }
  await db.exec(`
    grant usage on schema public, auth to authenticated;
    grant select, insert, update, delete on all tables in schema public to authenticated;
    grant execute on all functions in schema public, auth to authenticated;
  `);
});

async function setupOrgAndProject(user: string) {
  return as(user, async () => {
    const org = await db.query<{ id: string }>(`insert into organizations (name, created_by) values ('Org', $1) returning id`, [user]);
    const orgId = org.rows[0]!.id;
    await db.query(`insert into organization_members values ($1, $2, 'owner')`, [orgId, user]);
    const p = await db.query<{ id: string }>(
      `insert into projects (organization_id, name, kind, created_by) values ($1, 'Festa', 'event', $2) returning id`,
      [orgId, user],
    );
    return { orgId, projectId: p.rows[0]!.id };
  });
}

describe('migração inicial', () => {
  it('cria todas as tabelas do modelo de dados com RLS habilitado', async () => {
    const r = await db.query<{ tablename: string; rowsecurity: boolean }>(
      `select tablename, rowsecurity from pg_tables where schemaname = 'public' order by tablename`,
    );
    const names = r.rows.map((x) => x.tablename);
    for (const t of ['organizations', 'profiles', 'projects', 'briefings', 'assets', 'project_references', 'visual_identities',
      'graphic_documents', 'layers', 'layout_versions', 'approvals', 'format_presets', 'agents', 'production_jobs',
      'agent_tasks', 'generated_materials', 'audit_logs']) {
      expect(names).toContain(t);
    }
    expect(r.rows.every((x) => x.rowsecurity)).toBe(true);
  });

  it('semeia os quatro formatos com dimensões exatas', async () => {
    const r = await db.query<{ id: string; width: number; height: number }>(`select id, width, height from format_presets order by id`);
    expect(r.rows).toEqual([
      { id: 'feed', width: 1080, height: 1440 },
      { id: 'story', width: 1080, height: 1920 },
      { id: 'sympla', width: 1600, height: 838 },
      { id: 'telao', width: 1920, height: 1080 },
    ]);
  });
});

describe('isolamento entre usuários (RLS)', () => {
  it('um usuário não vê nem altera projetos de outra organização', async () => {
    const { projectId } = await setupOrgAndProject(U1);
    const seenByOwner = await as(U1, () => db.query(`select id from projects where id = $1`, [projectId]));
    expect(seenByOwner.rows).toHaveLength(1);

    const seenByOther = await as(U2, () => db.query(`select id from projects where id = $1`, [projectId]));
    expect(seenByOther.rows).toHaveLength(0);

    const upd = await as(U2, () => db.query(`update projects set name = 'Invadido' where id = $1`, [projectId]));
    expect(upd.affectedRows ?? 0).toBe(0);
  });

  it('não permite se adicionar a uma organização alheia', async () => {
    const { orgId } = await setupOrgAndProject(U1);
    await expect(
      as(U2, () => db.query(`insert into organization_members values ($1, $2, 'owner')`, [orgId, U2])),
    ).rejects.toThrow(/row-level security/);
  });

  it('não permite criar projeto em organização alheia', async () => {
    const { orgId } = await setupOrgAndProject(U1);
    await expect(
      as(U2, () => db.query(`insert into projects (organization_id, name, kind, created_by) values ($1, 'X projeto', 'event', $2)`, [orgId, U2])),
    ).rejects.toThrow(/row-level security/);
  });
});

describe('imutabilidade', () => {
  it('assets originais não podem ter conteúdo trocado', async () => {
    const { projectId } = await setupOrgAndProject(U1);
    const a = await db.query<{ id: string }>(
      `insert into assets (project_id, kind, storage_path, mime_type, size_bytes, sha256, created_by)
       values ($1, 'logo', 'o/p/logo-${Date.now()}', 'image/png', 100, $2, $3) returning id`,
      [projectId, SHA, U1],
    );
    await expect(db.query(`update assets set sha256 = $1 where id = $2`, ['c'.repeat(64), a.rows[0]!.id])).rejects.toThrow(/imutáveis/);
  });

  it('revisão aprovada não pode ser alterada nem apagada, mas pode ser marcada como substituída', async () => {
    const { projectId } = await setupOrgAndProject(U1);
    const d = await db.query<{ id: string }>(`insert into graphic_documents (project_id, name, kind) values ($1, 'Flyer', 'master') returning id`, [projectId]);
    const docId = d.rows[0]!.id;
    await db.query(
      `insert into layout_versions (document_id, revision, schema_version, content, content_sha256, status) values ($1, 1, 1, '{"a":1}', $2, 'approved')`,
      [docId, SHA],
    );
    await expect(db.query(`update layout_versions set content = '{"a":2}' where document_id = $1`, [docId])).rejects.toThrow(/imutável/);
    await expect(db.query(`delete from layout_versions where document_id = $1`, [docId])).rejects.toThrow(/não podem ser apagadas/);
    await db.query(`update layout_versions set status = 'superseded' where document_id = $1`, [docId]);
    await expect(db.query(`update layout_versions set status = 'approved' where document_id = $1`, [docId])).rejects.toThrow(/imutável/);
  });

  it('usuário do app só insere revisões em rascunho', async () => {
    const { projectId } = await setupOrgAndProject(U1);
    const docId = await as(U1, async () => {
      const d = await db.query<{ id: string }>(`insert into graphic_documents (project_id, name, kind) values ($1, 'Flyer', 'master') returning id`, [projectId]);
      return d.rows[0]!.id;
    });
    await expect(
      as(U1, () => db.query(
        `insert into layout_versions (document_id, revision, schema_version, content, content_sha256, status, created_by) values ($1, 1, 1, '{}', $2, 'approved', $3)`,
        [docId, SHA, U1],
      )),
    ).rejects.toThrow(/row-level security/);
  });

  it('logs de auditoria são somente-inserção', async () => {
    await db.query(`insert into audit_logs (action) values ('teste')`);
    await expect(db.query(`delete from audit_logs`)).rejects.toThrow(/somente-inserção/);
  });
});

describe('idempotência de jobs', () => {
  it('rejeita job duplicado com a mesma chave no mesmo projeto', async () => {
    const { projectId } = await setupOrgAndProject(U1);
    const ins = `insert into production_jobs (project_id, kind, status, max_cost_cents, idempotency_key, requested_by) values ($1, 'export', 'not_started', 0, 'k-123', $2)`;
    await db.query(ins, [projectId, U1]);
    await expect(db.query(ins, [projectId, U1])).rejects.toThrow(/duplicate key/);
  });
});
