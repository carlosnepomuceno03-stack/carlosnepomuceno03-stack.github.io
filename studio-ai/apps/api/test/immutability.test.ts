import type { PGlite } from '@electric-sql/pglite';
import { DEMO_EVENT_DIR, produceAdaptation, sha256 } from '@studio-ai/graphics-core';
import { GraphicDocumentSchema, VisualIdentityContractSchema, getFormat } from '@studio-ai/shared';
import { createTestDatabase } from '@studio-ai/db';
import { SignJWT } from 'jose';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app';
import { createVerifier } from '../src/auth';
import { sqlDataPort } from '../src/data';
import type { Db } from '../src/db';
import { localStorage } from '../src/storage';

/**
 * Item 8: nenhuma alteração posterior (nova revisão, restauração, nova aprovação, nova exportação)
 * afeta materiais exportados de uma versão aprovada anterior.
 */
const SECRET = 'segredo-de-teste-local-com-32-caracteres!';
const USER = 'cccccccc-0000-4000-8000-000000000003';
let pglite: PGlite;
let app: ReturnType<typeof buildApp>;
let storage: ReturnType<typeof localStorage>;

const call = async (method: 'GET' | 'POST', url: string, body?: unknown) => {
  const token = await new SignJWT({}).setProtectedHeader({ alg: 'HS256' }).setSubject(USER).setAudience('authenticated').setExpirationTime('1h').sign(new TextEncoder().encode(SECRET));
  const r = await app.inject({ method, url, headers: { authorization: `Bearer ${token}` }, ...(body !== undefined ? { payload: body as object } : {}) });
  if (r.statusCode >= 400) throw new Error(`${method} ${url} → ${r.statusCode} ${r.body}`);
  return r.json();
};
const download = async (url: string) => {
  const u = new URL(url);
  return new Uint8Array((await app.inject({ method: 'GET', url: u.pathname + u.search })).rawPayload);
};

type Material = { id: string; format_id: string; document_revision: number; identity_id: string; sha256: string; url: string };

beforeAll(async () => {
  pglite = await createTestDatabase([USER]);
  const db: Db = {
    query: (sql, params) => pglite.query(sql, params) as never,
    transaction: (fn) => pglite.transaction((tx) => fn({ query: (sql, params) => tx.query(sql, params) as never })),
    close: async () => {},
  };
  storage = localStorage({ dir: mkdtempSync(join(tmpdir(), 'lumpli-imm-')), secret: 'segredo-urls-local-teste', publicBaseUrl: 'http://api.test' });
  app = buildApp({ data: sqlDataPort(db), storage, verify: createVerifier({ jwtSecret: SECRET }), demoDir: DEMO_EVENT_DIR, now: () => new Date('2026-11-22T10:00:00Z') });
});

describe('materiais de versões aprovadas são preservados', () => {
  let documentId = '';
  let projectId = '';
  let firstMaterials: Material[] = [];
  const firstBytes = new Map<string, string>();
  let v1Sha = '';

  it('aprova a v1 e exporta Story, Feed, Sympla e Telão', async () => {
    const me = await call('POST', '/v1/me');
    ({ documentId, projectId } = await call('POST', '/v1/demo/seed', { organizationId: me.organizationId }));
    await call('POST', `/v1/documents/${documentId}/revisions/1/approve`, {});
    await call('POST', `/v1/documents/${documentId}/exports`, { formatIds: ['story', 'feed', 'sympla', 'telao'] });
    firstMaterials = (await call('GET', `/v1/projects/${projectId}/materials`)).items;
    expect(firstMaterials).toHaveLength(4);
    for (const m of firstMaterials) firstBytes.set(m.id, sha256(await download(m.url)));
    v1Sha = (await call('GET', `/v1/documents/${documentId}/revisions/1`)).contentSha256;
  }, 60_000);

  it('alterações posteriores, nova aprovação e nova exportação não tocam nos materiais anteriores', async () => {
    // v2: muda posição do título e cor da linha; aprova v2 (substitui a v1) e exporta de novo
    const doc = (await call('GET', `/v1/documents/${documentId}`)).document;
    doc.layers.find((l: { id: string }) => l.id === 'title').y += 20;
    doc.layers.find((l: { id: string }) => l.id === 'divider').fill = '#FF3FA4';
    await call('POST', `/v1/documents/${documentId}/revisions`, { baseRevision: 1, document: doc });
    await call('POST', `/v1/documents/${documentId}/revisions/2/approve`, {});
    await call('POST', `/v1/documents/${documentId}/exports`, { formatIds: ['story', 'feed', 'sympla', 'telao'] });
    // restauração também não afeta nada exportado
    await call('POST', `/v1/documents/${documentId}/revisions/1/restore`);

    const all: Material[] = (await call('GET', `/v1/projects/${projectId}/materials`)).items;
    expect(all).toHaveLength(8);
    for (const old of firstMaterials) {
      const now = all.find((m) => m.id === old.id)!;
      expect(now).toMatchObject({ document_revision: 1, identity_id: old.identity_id, sha256: old.sha256, format_id: old.format_id });
      expect(sha256(await download(now.url))).toBe(firstBytes.get(old.id)); // bytes no armazenamento idênticos
    }
    const newer = all.filter((m) => !firstMaterials.some((o) => o.id === m.id));
    expect(newer.every((m) => m.document_revision === 2)).toBe(true);
    for (const n of newer) {
      const o = firstMaterials.find((x) => x.format_id === n.format_id)!;
      expect(n.sha256).not.toBe(o.sha256); // a nova versão gerou arquivos novos, sem sobrescrever os antigos
      expect(n.identity_id).not.toBe(o.identity_id);
    }
  }, 120_000);

  it('a revisão aprovada original e seu contrato continuam idênticos (status apenas "substituída")', async () => {
    const v1 = await call('GET', `/v1/documents/${documentId}/revisions/1`);
    expect(v1.status).toBe('superseded');
    expect(v1.contentSha256).toBe(v1Sha);
    const ids = (await pglite.query<{ revision: number; source_document_revision: number }>(`select revision, source_document_revision from visual_identities order by revision`)).rows;
    expect(ids).toEqual([{ revision: 1, source_document_revision: 1 }, { revision: 2, source_document_revision: 2 }]);
    await expect(pglite.query(`update layout_versions set content = content || '{"name":"x"}' where revision = 1`)).rejects.toThrow(/imutável/);
    await expect(pglite.query(`update visual_identities set contract = '{}' where revision = 1`)).rejects.toThrow(/somente-inserção/);
  });

  it('os materiais da v1 são reproduzíveis byte a byte a partir do que ficou preservado', async () => {
    const v1 = await call('GET', `/v1/documents/${documentId}/revisions/1`);
    const identity = (await pglite.query<{ id: string; contract: unknown }>(`select id, contract from visual_identities where revision = 1`)).rows[0]!;
    const contract = VisualIdentityContractSchema.parse(identity.contract);
    const master = GraphicDocumentSchema.parse({ ...v1.document, approval: { status: 'approved', identityContractId: identity.id } });
    const assets = {
      async get(id: string) {
        const r = (await pglite.query<{ storage_path: string; mime_type: string; sha256: string; width: number; height: number }>(`select storage_path, mime_type, sha256, width, height from assets where id = $1`, [id])).rows[0];
        if (!r) return null;
        return { id, bytes: (await storage.get(r.storage_path))!, mimeType: r.mime_type, sha256: r.sha256, width: r.width, height: r.height };
      },
    };
    for (const old of firstMaterials) {
      const again = await produceAdaptation(master, contract, getFormat(old.format_id)!, assets, { id: 'repro', now: new Date() });
      expect(again.render!.sha256).toBe(old.sha256);
    }
  }, 120_000);
});
