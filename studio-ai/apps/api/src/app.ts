import {
  createIdentityContract,
  loadDemoAssetFiles,
  buildDemoMaster,
  produceAdaptation,
  renderDocument,
  renderPreview,
  RenderError,
  sha256,
  type AssetSource,
} from '@studio-ai/graphics-core';
import {
  BUILT_IN_FORMATS,
  CreateProjectInputSchema,
  GraphicDocumentSchema,
  VisualIdentityContractSchema,
  getFormat,
  newProject,
  validateDocument,
  walkLayers,
  type GraphicDocument,
} from '@studio-ai/shared';
import { randomUUID } from 'node:crypto';
import Fastify, { type FastifyReply, type FastifyRequest } from 'fastify';
import { z } from 'zod';
import type { Verifier } from './auth';
import { asUser, sqlErrorToHttp, type Db, type Queryable } from './db';
import type { ObjectStorage } from './storage';
import { UploadError, extensionFor, inspectUpload } from './uploads';

export type AppDeps = {
  db: Db;
  storage: ObjectStorage & { verify?: (path: string, exp: string, sig: string) => boolean };
  verify: Verifier;
  now?: () => Date;
  /** Fixtures do evento fictício (rota /v1/demo/seed). */
  demoDir?: string;
  logger?: boolean;
  corsOrigins?: string[];
  /**
   * SOMENTE DESENVOLVIMENTO LOCAL: emite sessões para testar o app sem Supabase Auth.
   * O servidor se recusa a iniciar com isso ativo quando o Storage é o Supabase.
   */
  devAuth?: { jwtSecret: string };
};

class HttpError extends Error {
  constructor(public status: number, public code: string, message: string, public details?: unknown) {
    super(message);
  }
}

const SIGNED_URL_TTL = 15 * 60;
const UUID = z.string().uuid();

type DocRow = { id: string; project_id: string; organization_id: string; name: string; kind: string; format_id: string | null; head_revision: number };
type VersionRow = { revision: number; parent_revision: number | null; status: string; content: GraphicDocument; content_sha256: string; created_at: string; created_by_agent: string | null };

export function buildApp(deps: AppDeps) {
  const now = deps.now ?? (() => new Date());
  const app = Fastify({
    logger: deps.logger ? { redact: ['req.headers.authorization', 'req.headers.cookie', 'req.headers.apikey'] } : false,
    bodyLimit: 41 * 1024 * 1024,
  });

  app.addContentTypeParser(['application/octet-stream', 'image/png', 'image/jpeg', 'image/webp', 'font/ttf', 'font/otf'], { parseAs: 'buffer' }, (_req, body, done) => done(null, body));

  app.addHook('onRequest', async (req, reply) => {
    const origin = req.headers.origin;
    if (origin && deps.corsOrigins?.includes(origin)) {
      reply.header('access-control-allow-origin', origin);
      reply.header('access-control-allow-headers', 'authorization, content-type, x-asset-kind, x-usage-rights-confirmed, idempotency-key');
      reply.header('access-control-allow-methods', 'GET, POST, OPTIONS');
    }
    if (req.method === 'OPTIONS') return reply.code(204).send();
  });

  app.setErrorHandler((err, _req, reply) => {
    if (err instanceof HttpError) return reply.code(err.status).send({ error: { code: err.code, message: err.message, details: err.details } });
    if (err instanceof UploadError) return reply.code(err.status).send({ error: { code: 'validation', message: err.message } });
    if (err instanceof z.ZodError) return reply.code(422).send({ error: { code: 'validation', message: 'Dados inválidos', details: err.issues } });
    const sql = sqlErrorToHttp(err);
    if (sql) return reply.code(sql.status).send({ error: { code: sql.code, message: sql.message } });
    const status = (err as { statusCode?: number }).statusCode;
    if (status && status < 500) return reply.code(status).send({ error: { code: 'validation', message: (err as Error).message } });
    app.log.error({ err: { message: (err as Error).message } }, 'erro interno');
    return reply.code(500).send({ error: { code: 'internal', message: 'Erro interno' } });
  });

  async function auth(req: FastifyRequest): Promise<string> {
    const h = req.headers.authorization;
    if (!h?.startsWith('Bearer ')) throw new HttpError(401, 'unauthorized', 'Faça login para continuar');
    try {
      return (await deps.verify(h.slice(7))).userId;
    } catch {
      throw new HttpError(401, 'unauthorized', 'Sessão inválida ou expirada');
    }
  }

  /** Busca o documento com as permissões do usuário (RLS). */
  async function loadDoc(tx: Queryable, id: string): Promise<DocRow> {
    if (!UUID.safeParse(id).success) throw new HttpError(404, 'not_found', 'Documento não encontrado');
    const r = await tx.query<DocRow>(
      `select d.id, d.project_id, p.organization_id, d.name, d.kind, d.format_id, d.head_revision
       from graphic_documents d join projects p on p.id = d.project_id where d.id = $1`, [id]);
    if (!r.rows[0]) throw new HttpError(404, 'not_found', 'Documento não encontrado');
    return r.rows[0];
  }

  /** Recursos do projeto: metadados do banco + bytes do Storage. O hash é reconferido pelo motor. */
  function projectAssetSource(projectId: string): AssetSource {
    return {
      async get(assetId) {
        if (!UUID.safeParse(assetId).success) return null;
        const r = await deps.db.query<{ id: string; storage_path: string; mime_type: string; sha256: string; width: number | null; height: number | null }>(
          `select id, storage_path, mime_type, sha256, width, height from assets where id = $1 and project_id = $2`, [assetId, projectId]);
        const row = r.rows[0];
        if (!row) return null;
        const bytes = await deps.storage.get(row.storage_path);
        if (!bytes) return null;
        return { id: row.id, bytes, mimeType: row.mime_type, sha256: row.sha256, width: row.width, height: row.height };
      },
    };
  }

  function layerIndex(doc: GraphicDocument) {
    return [...walkLayers(doc.layers)].map((l, i) => ({
      layer_id: l.id, type: l.type, role: l.role, z_index: i, locked: l.locked,
      asset_id: l.type === 'image' ? l.assetId : l.type === 'background' ? l.assetId ?? null : null,
      asset_sha256: l.type === 'image' ? l.assetSha256 : l.type === 'background' ? l.assetSha256 ?? null : null,
    })).concat(doc.fonts.filter((f) => f.assetId).map((f, i) => ({
      layer_id: `font:${f.id}`, type: 'vector', role: 'other', z_index: -1 - i, locked: true, asset_id: f.assetId!, asset_sha256: f.assetSha256 ?? null,
    })));
  }

  async function saveRevision(userId: string, docId: string, baseRevision: number, input: unknown, agent?: string) {
    const validated = validateDocument({ ...(input as object), id: docId, revision: baseRevision + 1, approval: { status: 'draft' } });
    if (!validated.ok) throw new HttpError(422, 'validation', 'Documento inválido', validated.issues);
    const doc = validated.document;
    const rev = await deps.db.query<{ r: number }>(`select public.save_document_revision($1, $2, $3, $4, $5, $6) as r`,
      [userId, docId, baseRevision, JSON.stringify(doc), JSON.stringify(layerIndex(doc)), agent ?? null]);
    return { revision: rev.rows[0]!.r, warnings: validated.issues };
  }

  async function signed(path: string) {
    return deps.storage.signedUrl(path, SIGNED_URL_TTL);
  }

  // ------------------------------------------------------------------ rotas
  app.get('/health', async () => ({ ok: true, service: 'lumpli-api', version: '0.2.0' }));

  /** Garante perfil e organização pessoal do usuário (primeiro acesso). */
  app.post('/v1/me', async (req) => {
    const userId = await auth(req);
    return deps.db.transaction(async (tx) => {
      await tx.query(`insert into profiles (id) values ($1) on conflict (id) do nothing`, [userId]);
      let org = (await tx.query<{ organization_id: string; role: string }>(`select organization_id, role from organization_members where user_id = $1 order by created_at limit 1`, [userId])).rows[0];
      if (!org) {
        const o = (await tx.query<{ id: string }>(`insert into organizations (name, created_by) values ('Meu estúdio', $1) returning id`, [userId])).rows[0]!;
        await tx.query(`insert into organization_members values ($1, $2, 'owner')`, [o.id, userId]);
        await tx.query(`insert into agents (id, organization_id, enabled) select a, $1, true from unnest(array['director','research','art_direction','production','quality']) a`, [o.id]);
        org = { organization_id: o.id, role: 'owner' };
      }
      return { userId, organizationId: org.organization_id, role: org.role };
    });
  });

  app.get('/v1/projects', async (req) => {
    const userId = await auth(req);
    const rows = await asUser(deps.db, userId, (tx) => tx.query(
      `select id, organization_id, name, kind, event_date, venue, current_step, steps, created_at, updated_at
       from projects order by updated_at desc limit 100`));
    return { items: rows.rows, nextCursor: null };
  });

  app.post('/v1/projects', async (req) => {
    const userId = await auth(req);
    const input = CreateProjectInputSchema.parse(req.body);
    const orgId = z.object({ organizationId: UUID }).parse(req.body).organizationId;
    const p = newProject(input, { id: randomUUID(), organizationId: orgId, now: now() });
    const r = await asUser(deps.db, userId, (tx) => tx.query(
      `insert into projects (id, organization_id, name, kind, event_date, venue, current_step, steps, created_by)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning id, organization_id, name, kind, current_step, steps, created_at`,
      [p.id, orgId, p.name, p.kind, p.eventDate, p.venue, p.currentStep, JSON.stringify(p.steps), userId]));
    return r.rows[0];
  });

  /** Upload direto para a API: o servidor lê os bytes, identifica o formato pelo conteúdo e calcula o SHA-256. */
  app.post('/v1/projects/:projectId/assets', async (req) => {
    const userId = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const kind = String(req.headers['x-asset-kind'] ?? '');
    const rights = req.headers['x-usage-rights-confirmed'] === 'true';
    if (!Buffer.isBuffer(req.body)) throw new HttpError(415, 'validation', 'Envie o arquivo como corpo binário');
    const bytes = new Uint8Array(req.body);
    const info = inspectUpload(bytes, kind);
    const project = (await asUser(deps.db, userId, (tx) => tx.query<{ organization_id: string }>(`select organization_id from projects where id = $1`, [projectId]))).rows[0];
    if (!project) throw new HttpError(404, 'not_found', 'Projeto não encontrado');
    const path = `${project.organization_id}/${projectId}/${randomUUID()}.${extensionFor(info.mimeType)}`;
    // Confere permissão ANTES de gravar no Storage (a função repete a checagem na transação do registro).
    await deps.db.query(`select public.assert_can_edit_project($1, $2)`, [userId, projectId]);
    await deps.storage.put(path, bytes, info.mimeType);
    const id = (await deps.db.query<{ id: string }>(
      `select public.register_asset($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) as id`,
      [userId, projectId, kind, path, info.mimeType, info.size, info.sha256, info.width, info.height, rights])).rows[0]!.id;
    return { id, kind, mimeType: info.mimeType, sizeBytes: info.size, sha256: info.sha256, width: info.width, height: info.height, url: await signed(path) };
  });

  app.get('/v1/projects/:projectId/assets', async (req) => {
    const userId = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const rows = (await asUser(deps.db, userId, (tx) => tx.query<{ id: string; kind: string; mime_type: string; sha256: string; width: number; height: number; storage_path: string; created_at: string }>(
      `select id, kind, mime_type, sha256, width, height, storage_path, created_at from assets where project_id = $1 and kind <> 'export' order by created_at`, [projectId]))).rows;
    return { items: await Promise.all(rows.map(async ({ storage_path, ...a }) => ({ ...a, url: await signed(storage_path) }))) };
  });

  app.post('/v1/projects/:projectId/documents', async (req) => {
    const userId = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const body = z.object({ name: z.string().min(1).max(200), document: z.unknown() }).parse(req.body);
    const docId = (await deps.db.query<{ id: string }>(`select public.create_document($1, $2, $3, 'master') as id`, [userId, projectId, body.name])).rows[0]!.id;
    const saved = await saveRevision(userId, docId, 0, { ...(body.document as object), projectId, kind: 'master' });
    return { id: docId, ...saved };
  });

  app.get('/v1/projects/:projectId/documents', async (req) => {
    const userId = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const rows = (await asUser(deps.db, userId, (tx) => tx.query(
      `select d.id, d.name, d.kind, d.head_revision as "headRevision",
              (select max(revision) from layout_versions v where v.document_id = d.id and v.status = 'approved') as "approvedRevision",
              d.created_at as "createdAt"
       from graphic_documents d where d.project_id = $1 order by d.created_at`, [projectId]))).rows;
    return { items: rows };
  });

  /** Pré-visualização fiel (mesmo renderizador da exportação) de um documento ainda não salvo. */
  app.post('/v1/documents/:documentId/preview', async (req) => {
    const userId = await auth(req);
    const { documentId } = z.object({ documentId: z.string() }).parse(req.params);
    const body = z.object({ document: z.unknown(), width: z.number().int().min(64).max(2048).default(720) }).parse(req.body);
    const d = await asUser(deps.db, userId, (tx) => loadDoc(tx, documentId));
    const parsed = GraphicDocumentSchema.safeParse({ ...(body.document as object), id: d.id, projectId: d.project_id });
    if (!parsed.success) throw new HttpError(422, 'validation', 'Documento inválido', parsed.error.issues);
    try {
      const r = await renderPreview(parsed.data, projectAssetSource(d.project_id), body.width);
      return { image: `data:image/png;base64,${Buffer.from(r.png).toString('base64')}`, warnings: r.warnings, textBounds: r.textBounds };
    } catch (e) {
      if (e instanceof RenderError) throw new HttpError(422, 'validation', e.message, e.issues);
      throw e;
    }
  });

  app.get('/v1/documents/:documentId', async (req) => {
    const userId = await auth(req);
    const { documentId } = z.object({ documentId: z.string() }).parse(req.params);
    return asUser(deps.db, userId, async (tx) => {
      const d = await loadDoc(tx, documentId);
      const versions = (await tx.query<VersionRow>(
        `select revision, parent_revision, status, content, content_sha256, created_at, created_by_agent from layout_versions where document_id = $1 order by revision`, [d.id])).rows;
      const head = versions.find((v) => v.revision === d.head_revision);
      const approved = versions.filter((v) => v.status === 'approved').at(-1);
      return {
        id: d.id, projectId: d.project_id, name: d.name, kind: d.kind, headRevision: d.head_revision,
        approvedRevision: approved?.revision ?? null,
        document: head ? { ...head.content, approval: { status: head.status } } : null,
        revisions: versions.map((v) => ({ revision: v.revision, parentRevision: v.parent_revision, status: v.status, contentSha256: v.content_sha256, createdAt: v.created_at })),
      };
    });
  });

  app.get('/v1/documents/:documentId/revisions/:revision', async (req) => {
    const userId = await auth(req);
    const p = z.object({ documentId: z.string(), revision: z.coerce.number().int().min(1) }).parse(req.params);
    return asUser(deps.db, userId, async (tx) => {
      const d = await loadDoc(tx, p.documentId);
      const v = (await tx.query<VersionRow>(`select revision, status, content from layout_versions where document_id = $1 and revision = $2`, [d.id, p.revision])).rows[0];
      if (!v) throw new HttpError(404, 'not_found', 'Revisão não encontrada');
      return { revision: v.revision, status: v.status, document: { ...v.content, approval: { status: v.status } } };
    });
  });

  app.post('/v1/documents/:documentId/revisions', async (req) => {
    const userId = await auth(req);
    const { documentId } = z.object({ documentId: z.string() }).parse(req.params);
    const body = z.object({ baseRevision: z.number().int().min(0), document: z.unknown() }).parse(req.body);
    const d = await asUser(deps.db, userId, (tx) => loadDoc(tx, documentId));
    return saveRevision(userId, d.id, body.baseRevision, { ...(body.document as object), projectId: d.project_id, kind: d.kind });
  });

  app.post('/v1/documents/:documentId/revisions/:revision/approve', async (req) => {
    const userId = await auth(req);
    const p = z.object({ documentId: z.string(), revision: z.coerce.number().int().min(1) }).parse(req.params);
    const body = z.object({ note: z.string().max(1000).optional() }).parse(req.body ?? {});
    const { d, v } = await asUser(deps.db, userId, async (tx) => {
      const d = await loadDoc(tx, p.documentId);
      const v = (await tx.query<VersionRow>(`select revision, status, content from layout_versions where document_id = $1 and revision = $2`, [d.id, p.revision])).rows[0];
      if (!v) throw new HttpError(404, 'not_found', 'Revisão não encontrada');
      return { d, v };
    });
    const doc = GraphicDocumentSchema.parse(v.content);
    // Antes de congelar: o layout precisa renderizar com recursos íntegros (hash conferido).
    await renderDocument(doc, projectAssetSource(d.project_id)).catch((e: Error) => {
      throw new HttpError(422, 'validation', `Layout não pode ser aprovado: ${e.message}`);
    });
    const contract = createIdentityContract(doc, { id: randomUUID(), approvedBy: userId, now: now(), note: body.note });
    const identityId = (await deps.db.query<{ id: string }>(`select public.approve_document_revision($1, $2, $3, $4, $5) as id`,
      [userId, d.id, p.revision, JSON.stringify(contract), body.note ?? null])).rows[0]!.id;
    return { identityId, revision: p.revision, contract };
  });

  app.post('/v1/documents/:documentId/revisions/:revision/restore', async (req) => {
    const userId = await auth(req);
    const p = z.object({ documentId: z.string(), revision: z.coerce.number().int().min(1) }).parse(req.params);
    const d = await asUser(deps.db, userId, (tx) => loadDoc(tx, p.documentId));
    const r = await deps.db.query<{ r: number }>(`select public.restore_document_revision($1, $2, $3) as r`, [userId, d.id, p.revision]);
    return { revision: r.rows[0]!.r, restoredFrom: p.revision };
  });

  /** Exporta PNGs a partir da revisão APROVADA e do contrato congelado. Adaptações vão para revisão humana. */
  app.post('/v1/documents/:documentId/exports', async (req) => {
    const userId = await auth(req);
    const { documentId } = z.object({ documentId: z.string() }).parse(req.params);
    const body = z.object({ formatIds: z.array(z.string()).min(1).max(8), includeMaster: z.boolean().default(false) }).parse(req.body);
    const { d, v, identity } = await asUser(deps.db, userId, async (tx) => {
      const d = await loadDoc(tx, documentId);
      const v = (await tx.query<VersionRow>(`select revision, content from layout_versions where document_id = $1 and status = 'approved'`, [d.id])).rows[0];
      if (!v) throw new HttpError(409, 'conflict', 'Aprove o layout principal antes de exportar');
      const identity = (await tx.query<{ id: string; contract: unknown }>(
        `select id, contract from visual_identities where source_document_id = $1 and source_document_revision = $2`, [d.id, v.revision])).rows[0];
      if (!identity) throw new HttpError(409, 'conflict', 'Identidade visual não encontrada para a revisão aprovada');
      return { d, v, identity };
    });
    const formats = body.formatIds.map((id) => {
      const f = getFormat(id);
      if (!f) throw new HttpError(422, 'validation', `Formato desconhecido: ${id}`);
      return f;
    });
    const contract = VisualIdentityContractSchema.parse(identity.contract);
    const master = GraphicDocumentSchema.parse({ ...v.content, approval: { status: 'approved', identityContractId: identity.id } });
    const assets = projectAssetSource(d.project_id);
    await deps.db.query(`select public.assert_can_edit_project($1, $2)`, [userId, d.project_id]);

    const store = async (png: Uint8Array, formatId: string, width: number, height: number, renderer: string, report: unknown) => {
      const path = `${d.organization_id}/${d.project_id}/export-${formatId}-${randomUUID()}.png`;
      await deps.storage.put(path, png, 'image/png');
      const assetId = (await deps.db.query<{ id: string }>(`select public.register_asset($1,$2,'export',$3,'image/png',$4,$5,$6,$7,true) as id`,
        [userId, d.project_id, path, png.length, sha256(png), width, height])).rows[0]!.id;
      const materialId = (await deps.db.query<{ id: string }>(`select public.register_generated_material($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) as id`,
        [userId, d.project_id, d.id, v.revision, identity.id, formatId, assetId, width, height, renderer, JSON.stringify(report)])).rows[0]!.id;
      return { materialId, assetId, url: await signed(path), sha256: sha256(png) };
    };

    const materials: unknown[] = [];
    if (body.includeMaster) {
      const r = await renderDocument(master, assets);
      materials.push({ formatId: 'master', status: 'approved_master', width: r.width, height: r.height, ...(await store(r.png, 'master', r.width, r.height, r.rendererVersion, { warnings: r.warnings })) });
    }
    for (const format of formats) {
      const r = await produceAdaptation(master, contract, format, assets, { id: randomUUID(), now: now() });
      const report = { status: r.status, adaptationIssues: r.adaptationIssues, changes: r.changes, quality: r.quality, document: r.document };
      const base = { formatId: format.id, formatName: format.name, status: r.status, width: format.width, height: format.height, issues: r.adaptationIssues, quality: r.quality };
      materials.push(r.render ? { ...base, ...(await store(r.render.png, format.id, r.render.width, r.render.height, r.render.rendererVersion, report)) } : base);
    }
    return { documentId: d.id, revision: v.revision, identityId: identity.id, materials };
  });

  app.get('/v1/projects/:projectId/materials', async (req) => {
    const userId = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const rows = (await asUser(deps.db, userId, (tx) => tx.query<{ id: string; format_id: string; width: number; height: number; review_status: string; document_revision: number; storage_path: string; sha256: string; created_at: string; status: string | null }>(
      `select m.id, m.format_id, m.width, m.height, m.review_status, m.document_revision, a.storage_path, a.sha256, m.created_at,
              m.quality_report->>'status' as status
       from generated_materials m join assets a on a.id = m.asset_id where m.project_id = $1 order by m.created_at desc`, [projectId]))).rows;
    return { items: await Promise.all(rows.map(async ({ storage_path, ...m }) => ({ ...m, url: await signed(storage_path) }))) };
  });

  /** Download de arquivos do armazenamento LOCAL (dev) com URL assinada e expirável. */
  app.get('/v1/files/*', async (req: FastifyRequest, reply: FastifyReply) => {
    const path = (req.params as { '*': string })['*'];
    const q = req.query as { exp?: string; sig?: string };
    if (!deps.storage.verify || !q.exp || !q.sig || !deps.storage.verify(path, q.exp, q.sig)) throw new HttpError(403, 'forbidden', 'Link inválido ou expirado');
    const bytes = await deps.storage.get(path);
    if (!bytes) throw new HttpError(404, 'not_found', 'Arquivo não encontrado');
    const ext = path.split('.').pop();
    reply.header('content-type', ext === 'png' ? 'image/png' : ext === 'jpg' ? 'image/jpeg' : 'application/octet-stream');
    reply.header('cache-control', 'private, max-age=300');
    return reply.send(Buffer.from(bytes));
  });

  /** Cria o EVENTO FICTÍCIO "Noite Neon" para o usuário: projeto, arquivos (com hash) e layout principal (rascunho). */
  app.post('/v1/demo/seed', async (req) => {
    const userId = await auth(req);
    if (!deps.demoDir) throw new HttpError(404, 'not_found', 'Demonstração indisponível neste servidor');
    const { organizationId } = z.object({ organizationId: UUID }).parse(req.body);
    const p = newProject({ name: 'Noite Neon (evento fictício)', kind: 'event', eventDate: '2026-12-20', venue: 'Arena Demo — São Paulo' }, { id: randomUUID(), organizationId, now: now() });
    await asUser(deps.db, userId, (tx) => tx.query(
      `insert into projects (id, organization_id, name, kind, event_date, venue, current_step, steps, created_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [p.id, organizationId, p.name, p.kind, p.eventDate, p.venue, 'edit_layout', JSON.stringify({ ...p.steps, briefing: 'completed', add_references: 'completed', select_originals: 'completed' }), userId]));
    const files = loadDemoAssetFiles(deps.demoDir);
    const ids: Record<string, string> = {};
    for (const f of files) {
      const path = `${organizationId}/${p.id}/${randomUUID()}.${extensionFor(f.mimeType)}`;
      await deps.storage.put(path, f.bytes, f.mimeType);
      ids[f.key] = (await deps.db.query<{ id: string }>(`select public.register_asset($1,$2,$3,$4,$5,$6,$7,$8,$9,true) as id`,
        [userId, p.id, f.kind, path, f.mimeType, f.bytes.length, f.sha256, f.width, f.height])).rows[0]!.id;
    }
    const remapped = files.map((f) => ({ ...f, id: ids[f.key]! }));
    const master = buildDemoMaster(remapped, { projectId: p.id });
    const docId = (await deps.db.query<{ id: string }>(`select public.create_document($1, $2, $3, 'master') as id`, [userId, p.id, master.name])).rows[0]!.id;
    const saved = await saveRevision(userId, docId, 0, { ...master, id: docId });
    return { projectId: p.id, documentId: docId, revision: saved.revision, assets: ids };
  });

  app.get('/v1/auth/mode', async () => ({ mode: deps.devAuth ? 'dev' : 'supabase' }));

  if (deps.devAuth) {
    const key = new TextEncoder().encode(deps.devAuth.jwtSecret);
    app.post('/v1/dev/session', async (req) => {
      const { userId } = z.object({ userId: UUID.optional() }).parse(req.body ?? {});
      const id = userId ?? randomUUID();
      await deps.db.query(`insert into auth.users (id) values ($1) on conflict (id) do nothing`, [id]);
      const { SignJWT } = await import('jose');
      const accessToken = await new SignJWT({ role: 'authenticated', dev: true }).setProtectedHeader({ alg: 'HS256' })
        .setSubject(id).setAudience('authenticated').setIssuedAt().setExpirationTime('12h').sign(key);
      return { userId: id, accessToken, mode: 'dev' };
    });
  }

  app.get('/v1/formats', async () => ({ items: BUILT_IN_FORMATS }));

  return app;
}
