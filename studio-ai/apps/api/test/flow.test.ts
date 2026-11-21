import type { PGlite } from '@electric-sql/pglite';
import { DEMO_EVENT_DIR, loadDemoAssetFiles, readPngInfo, sha256 } from '@studio-ai/graphics-core';
import { createTestDatabase } from '@studio-ai/db';
import { SignJWT } from 'jose';
import { mkdtempSync, readFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app';
import { createVerifier } from '../src/auth';
import { sqlDataPort } from '../src/data';
import type { Db } from '../src/db';
import { localStorage } from '../src/storage';

const SECRET = 'segredo-de-teste-local-com-32-caracteres!';
const ALICE = 'aaaaaaaa-0000-4000-8000-000000000001';
const BOB = 'bbbbbbbb-0000-4000-8000-000000000002';

let pglite: PGlite;
let app: ReturnType<typeof buildApp>;
let storageDir: string;

function pgliteDb(db: PGlite): Db {
  return {
    query: (sql, params) => db.query(sql, params) as never,
    transaction: (fn) => db.transaction((tx) => fn({ query: (sql, params) => tx.query(sql, params) as never })),
    close: async () => {},
  };
}
const token = (sub: string, secret = SECRET) =>
  new SignJWT({ role: 'authenticated' }).setProtectedHeader({ alg: 'HS256' }).setSubject(sub).setAudience('authenticated').setExpirationTime('1h').sign(new TextEncoder().encode(secret));

async function call(method: 'GET' | 'POST', url: string, user: string | null, body?: unknown, headers: Record<string, string> = {}) {
  const res = await app.inject({
    method, url,
    headers: { ...(user ? { authorization: `Bearer ${await token(user)}` } : {}), ...headers },
    ...(body instanceof Uint8Array ? { payload: Buffer.from(body) } : body !== undefined ? { payload: body as object } : {}),
  });
  return { status: res.statusCode, json: res.headers['content-type']?.toString().includes('json') ? res.json() : null, raw: res.rawPayload };
}
const fileFromUrl = async (url: string) => {
  const u = new URL(url);
  const r = await app.inject({ method: 'GET', url: u.pathname + u.search });
  return { status: r.statusCode, bytes: new Uint8Array(r.rawPayload) };
};

beforeAll(async () => {
  pglite = await createTestDatabase([ALICE, BOB]);
  storageDir = mkdtempSync(join(tmpdir(), 'lumpli-storage-'));
  app = buildApp({
    data: sqlDataPort(pgliteDb(pglite)),
    storage: localStorage({ dir: storageDir, secret: 'segredo-urls-local-teste', publicBaseUrl: 'http://api.test' }),
    verify: createVerifier({ jwtSecret: SECRET }),
    demoDir: DEMO_EVENT_DIR,
    now: () => new Date('2026-11-21T12:00:00Z'),
  });
});
afterAll(async () => {
  await app.close();
});

describe('autenticação', () => {
  it('informa o modo de autenticação', async () => {
    expect((await call('GET', '/v1/auth/mode', null)).json.mode).toBe('supabase');
  });
  it('rejeita requisição sem token, com token inválido e com assinatura errada', async () => {
    expect((await call('GET', '/v1/projects', null)).status).toBe(401);
    expect((await app.inject({ method: 'GET', url: '/v1/projects', headers: { authorization: 'Bearer abc' } })).statusCode).toBe(401);
    const forged = await token(ALICE, 'outro-segredo-qualquer-com-32-chars!!');
    expect((await app.inject({ method: 'GET', url: '/v1/projects', headers: { authorization: `Bearer ${forged}` } })).statusCode).toBe(401);
  });
});

describe('fluxo completo da Etapa 0.2 com o evento fictício', () => {
  let orgA: string, orgB: string, projectId: string, documentId: string;

  it('cria organização pessoal no primeiro acesso', async () => {
    const a = await call('POST', '/v1/me', ALICE);
    const b = await call('POST', '/v1/me', BOB);
    expect(a.status).toBe(200);
    orgA = a.json.organizationId;
    orgB = b.json.organizationId;
    expect(orgA).not.toBe(orgB);
    expect((await call('POST', '/v1/me', ALICE)).json.organizationId).toBe(orgA); // idempotente
  });

  it('cria o evento fictício com arquivos originais enviados e hash registrado', async () => {
    const r = await call('POST', '/v1/demo/seed', ALICE, { organizationId: orgA });
    expect(r.status).toBe(200);
    ({ projectId, documentId } = r.json);
    const list = await call('GET', `/v1/projects/${projectId}/assets`, ALICE);
    expect(list.json.items).toHaveLength(7);
    const expected = new Set(loadDemoAssetFiles().map((f) => f.sha256));
    for (const a of list.json.items) {
      expect(expected.has(a.sha256)).toBe(true);
      const file = await fileFromUrl(a.url);
      expect(sha256(file.bytes)).toBe(a.sha256); // bytes armazenados == originais
    }
  });

  it('isola usuários: Bob não vê projeto, documento nem arquivos de Alice', async () => {
    expect((await call('GET', '/v1/projects', BOB)).json.items).toEqual([]);
    expect((await call('GET', `/v1/documents/${documentId}`, BOB)).status).toBe(404);
    expect((await call('GET', `/v1/projects/${projectId}/assets`, BOB)).json.items).toEqual([]);
    expect((await call('POST', `/v1/documents/${documentId}/revisions/1/approve`, BOB, {})).status).toBe(404);
    const up = await call('POST', `/v1/projects/${projectId}/assets`, BOB, new Uint8Array(readFileSync(join(DEMO_EVENT_DIR, 'logo-noite-neon.png'))), { 'content-type': 'image/png', 'x-asset-kind': 'logo', 'x-usage-rights-confirmed': 'true' });
    expect(up.status).toBe(404);
  });

  it('valida uploads pelo conteúdo', async () => {
    const h = { 'content-type': 'application/octet-stream', 'x-asset-kind': 'logo', 'x-usage-rights-confirmed': 'true' };
    const fake = await call('POST', `/v1/projects/${projectId}/assets`, ALICE, new TextEncoder().encode('<script>alert(1)</script>'), h);
    expect(fake.status).toBe(422);
    const font = new Uint8Array(readFileSync(join(DEMO_EVENT_DIR, 'Inter-Bold.ttf')));
    expect((await call('POST', `/v1/projects/${projectId}/assets`, ALICE, font, h)).status).toBe(422); // fonte enviada como logo
    const noRights = await call('POST', `/v1/projects/${projectId}/assets`, ALICE, new Uint8Array(readFileSync(join(DEMO_EVENT_DIR, 'logo-noite-neon.png'))), { ...h, 'x-usage-rights-confirmed': 'false' });
    expect(noRights.status).toBe(422);
    const ok = await call('POST', `/v1/projects/${projectId}/assets`, ALICE, new Uint8Array(readFileSync(join(DEMO_EVENT_DIR, 'logo-noite-neon.png'))), h);
    expect(ok.status).toBe(200);
    expect(ok.json).toMatchObject({ mimeType: 'image/png', width: 1200, height: 480 });
  });

  it('edita o layout criando revisões e detecta conflito de versão', async () => {
    const doc = (await call('GET', `/v1/documents/${documentId}`, ALICE)).json;
    expect(doc.headRevision).toBe(1);
    const edited = structuredClone(doc.document);
    const title = edited.layers.find((l: { id: string }) => l.id === 'title');
    title.y += 4;
    const r2 = await call('POST', `/v1/documents/${documentId}/revisions`, ALICE, { baseRevision: 1, document: edited });
    expect(r2.json.revision).toBe(2);
    const stale = await call('POST', `/v1/documents/${documentId}/revisions`, ALICE, { baseRevision: 1, document: edited });
    expect(stale.status).toBe(409);
    expect(stale.json.error.code).toBe('version_conflict');
  });

  it('recusa documento que referencia arquivo com hash adulterado', async () => {
    const doc = (await call('GET', `/v1/documents/${documentId}`, ALICE)).json;
    const bad = structuredClone(doc.document);
    bad.layers.find((l: { id: string }) => l.id === 'logo').assetSha256 = 'f'.repeat(64);
    const r = await call('POST', `/v1/documents/${documentId}/revisions`, ALICE, { baseRevision: doc.headRevision, document: bad });
    expect(r.status).toBe(422);
  });

  it('recusa documento inválido (texto com fonte não declarada)', async () => {
    const doc = (await call('GET', `/v1/documents/${documentId}`, ALICE)).json;
    const bad = structuredClone(doc.document);
    bad.layers.find((l: { id: string }) => l.id === 'title').fontId = 'nao-existe';
    const r = await call('POST', `/v1/documents/${documentId}/revisions`, ALICE, { baseRevision: doc.headRevision, document: bad });
    expect(r.status).toBe(422);
    expect(JSON.stringify(r.json.error.details)).toContain('missing_font');
  });

  it('lista documentos e gera pré-visualização fiel sem gravar nada', async () => {
    const docs = (await call('GET', `/v1/projects/${projectId}/documents`, ALICE)).json.items;
    expect(docs).toHaveLength(1);
    const doc = (await call('GET', `/v1/documents/${documentId}`, ALICE)).json;
    const before = readdirSync(storageDir, { recursive: true }).length;
    const prev = await call('POST', `/v1/documents/${documentId}/preview`, ALICE, { document: doc.document, width: 360 });
    expect(prev.status).toBe(200);
    const png = Buffer.from(prev.json.image.split(',')[1], 'base64');
    expect(readPngInfo(new Uint8Array(png))).toMatchObject({ width: 360, height: 450 });
    expect(prev.json.textBounds.title.width).toBeGreaterThan(100);
    expect(readdirSync(storageDir, { recursive: true }).length).toBe(before);
    expect((await call('POST', `/v1/documents/${documentId}/preview`, BOB, { document: doc.document })).status).toBe(404);
  });

  it('não exporta antes da aprovação', async () => {
    const r = await call('POST', `/v1/documents/${documentId}/exports`, ALICE, { formatIds: ['story'] });
    expect(r.status).toBe(409);
  });

  it('aprova a revisão 2 e congela o contrato de identidade', async () => {
    const r = await call('POST', `/v1/documents/${documentId}/revisions/2/approve`, ALICE, { note: 'Aprovado para produção' });
    expect(r.status).toBe(200);
    expect(r.json.contract.sourceDocumentRevision).toBe(2);
    expect(r.json.contract.protectedAssets.filter((p: { required: boolean }) => p.required)).toHaveLength(2);
    expect((await call('POST', `/v1/documents/${documentId}/revisions/2/approve`, ALICE, {})).status).toBe(409);
  });

  it('exporta Story, Feed e Sympla com dimensões exatas, verificações aprovadas e originais preservados', async () => {
    const before = readdirSync(storageDir, { recursive: true }).length;
    const r = await call('POST', `/v1/documents/${documentId}/exports`, ALICE, { formatIds: ['story', 'feed', 'sympla'], includeMaster: true });
    expect(r.status).toBe(200);
    const byFormat = Object.fromEntries(r.json.materials.map((m: { formatId: string }) => [m.formatId, m]));
    for (const [id, w, h] of [['master', 1080, 1350], ['story', 1080, 1920], ['feed', 1080, 1440], ['sympla', 1600, 838]] as const) {
      const m = byFormat[id];
      if (id !== 'master') expect(m.status).toBe('ready_for_review');
      const file = await fileFromUrl(m.url);
      expect(file.status).toBe(200);
      expect(readPngInfo(file.bytes)).toMatchObject({ width: w, height: h });
      expect(sha256(file.bytes)).toBe(m.sha256);
    }
    expect(readdirSync(storageDir, { recursive: true }).length).toBeGreaterThan(before);
    // originais continuam byte a byte idênticos
    const assets = (await call('GET', `/v1/projects/${projectId}/assets`, ALICE)).json.items;
    for (const a of assets) expect(sha256((await fileFromUrl(a.url)).bytes)).toBe(a.sha256);
    const mats = (await call('GET', `/v1/projects/${projectId}/materials`, ALICE)).json.items;
    expect(mats).toHaveLength(4);
    expect(mats.every((m: { review_status: string }) => m.review_status === 'pending')).toBe(true); // nada aprovado automaticamente
  }, 60_000);

  it('restaura a revisão 1 como nova revisão sem perder a aprovada', async () => {
    const r = await call('POST', `/v1/documents/${documentId}/revisions/1/restore`, ALICE);
    expect(r.json.revision).toBe(3);
    const doc = (await call('GET', `/v1/documents/${documentId}`, ALICE)).json;
    expect(doc.headRevision).toBe(3);
    expect(doc.approvedRevision).toBe(2);
    expect(doc.revisions.map((v: { status: string }) => v.status)).toEqual(['draft', 'approved', 'draft']);
    const title = doc.document.layers.find((l: { id: string }) => l.id === 'title');
    const v1 = (await call('GET', `/v1/documents/${documentId}/revisions/1`, ALICE)).json.document.layers.find((l: { id: string }) => l.id === 'title');
    expect(title.y).toBe(v1.y);
  });

  it('registra auditoria de cada operação', async () => {
    const rows = (await pglite.query<{ action: string }>(`select action from audit_logs where project_id = $1 order by id`, [projectId])).rows.map((r) => r.action);
    expect(rows).toEqual(expect.arrayContaining(['asset.registered', 'document.created', 'document.revision_saved', 'document.approved', 'material.generated', 'document.restored']));
  });

  it('links de arquivo expiram e não aceitam assinatura adulterada', async () => {
    const assets = (await call('GET', `/v1/projects/${projectId}/assets`, ALICE)).json.items;
    const u = new URL(assets[0].url);
    u.searchParams.set('sig', '0'.repeat(64));
    expect((await app.inject({ method: 'GET', url: u.pathname + u.search })).statusCode).toBe(403);
    u.searchParams.set('exp', '1');
    expect((await app.inject({ method: 'GET', url: u.pathname + u.search })).statusCode).toBe(403);
  });
});
