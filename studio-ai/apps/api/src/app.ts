import {
  RenderError,
  buildDemoMaster,
  createIdentityContract,
  loadDemoAssetFiles,
  produceAdaptation,
  renderDocument,
  renderPreview,
  sha256,
  type AssetSource,
} from '@studio-ai/graphics-core';
import {
  BUILT_IN_FORMATS,
  CreateProjectInputSchema,
  GraphicDocumentSchema,
  VisualIdentityContractSchema,
  detectReferenceSource,
  getFormat,
  newProject,
  validateDocument,
  walkLayers,
  type GraphicDocument,
} from '@studio-ai/shared';
import Fastify, { type FastifyReply, type FastifyRequest } from 'fastify';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import type { Verifier } from './auth';
import type { Caller, DataPort } from './data';
import { sqlErrorToHttp } from './db';
import { DEFAULT_LIMITS, RateLimiter, type Limits } from './limits';
import type { ObjectStorage } from './storage';
import { UploadError, extensionFor, inspectUpload } from './uploads';

export const API_VERSION = '0.2.1';

export type AppDeps = {
  data: DataPort;
  storage: ObjectStorage & { verify?: (path: string, exp: string, sig: string) => boolean };
  verify: Verifier;
  now?: () => Date;
  demoDir?: string;
  logger?: boolean;
  corsOrigins?: string[];
  /** SOMENTE DESENVOLVIMENTO LOCAL. O servidor se recusa a iniciar com isso ativo quando o Storage é o Supabase. */
  devAuth?: { jwtSecret: string };
  limits?: Limits;
};

class HttpError extends Error {
  constructor(public status: number, public code: string, message: string, public details?: unknown) {
    super(message);
  }
}

const SIGNED_URL_TTL = 15 * 60;
const UUID = z.string().uuid();

type Version = { revision: number; parent_revision: number | null; status: string; content: GraphicDocument; content_sha256: string; created_at: string };
type Identity = { id: string; revision: number; source_document_revision: number; contract: unknown };
type DocBundle = { id: string; project_id: string; organization_id: string; name: string; kind: string; format_id: string | null; head_revision: number; versions: Version[]; identities: Identity[] };
type User = { userId: string; caller: Caller };

export function buildApp(deps: AppDeps) {
  const now = deps.now ?? (() => new Date());
  const limiter = new RateLimiter(deps.limits ?? DEFAULT_LIMITS);
  const service: Caller = { kind: 'service' };
  const { data } = deps;
  const app = Fastify({
    logger: deps.logger ? { redact: ['req.headers.authorization', 'req.headers.cookie', 'req.headers.apikey'] } : false,
    bodyLimit: 41 * 1024 * 1024,
    genReqId: () => randomUUID(),
    requestTimeout: 120_000,
  });

  app.addContentTypeParser(['application/octet-stream', 'image/png', 'image/jpeg', 'image/webp', 'font/ttf', 'font/otf'], { parseAs: 'buffer' }, (_req, body, done) => done(null, body));

  app.addHook('onRequest', async (req, reply) => {
    reply.header('x-request-id', req.id);
    const origin = req.headers.origin;
    if (origin && deps.corsOrigins?.includes(origin)) {
      reply.header('access-control-allow-origin', origin);
      reply.header('access-control-allow-headers', 'authorization, content-type, x-asset-kind, x-usage-rights-confirmed, idempotency-key');
      reply.header('access-control-allow-methods', 'GET, POST, DELETE, OPTIONS');
      reply.header('access-control-expose-headers', 'x-request-id, retry-after');
    }
    if (req.method === 'OPTIONS') return reply.code(204).send();
  });

  app.setErrorHandler((err, req, reply) => {
    if (err instanceof HttpError) return reply.code(err.status).send({ error: { code: err.code, message: err.message, details: err.details } });
    if (err instanceof UploadError) return reply.code(err.status).send({ error: { code: 'validation', message: err.message } });
    if (err instanceof z.ZodError) return reply.code(422).send({ error: { code: 'validation', message: 'Dados inválidos', details: err.issues } });
    const sql = sqlErrorToHttp(err);
    if (sql) return reply.code(sql.status).send({ error: { code: sql.code, message: sql.message } });
    const status = (err as { statusCode?: number }).statusCode;
    if (status && status < 500) return reply.code(status).send({ error: { code: 'validation', message: (err as Error).message } });
    req.log.error({ err: { message: (err as Error).message } }, 'erro interno');
    return reply.code(500).send({ error: { code: 'internal', message: 'Erro interno', requestId: req.id } });
  });

  async function auth(req: FastifyRequest): Promise<User> {
    const h = req.headers.authorization;
    if (!h?.startsWith('Bearer ')) throw new HttpError(401, 'unauthorized', 'Faça login para continuar');
    const token = h.slice(7);
    try {
      const { userId } = await deps.verify(token);
      return { userId, caller: { kind: 'user', userId, token } };
    } catch {
      throw new HttpError(401, 'unauthorized', 'Sessão inválida ou expirada');
    }
  }

  function limit(kind: keyof Limits, user: User, reply: FastifyReply) {
    const wait = limiter.take(kind, user.userId);
    if (wait > 0) {
      reply.header('retry-after', String(wait));
      throw new HttpError(429, 'rate_limited', `Limite de uso atingido. Tente novamente em ${wait}s.`);
    }
  }

  async function loadDoc(user: User, id: string): Promise<DocBundle> {
    if (!UUID.safeParse(id).success) throw new HttpError(404, 'not_found', 'Documento não encontrado');
    const d = await data.rpc<DocBundle | null>('api_get_document', { p_document: id }, user.caller);
    if (!d) throw new HttpError(404, 'not_found', 'Documento não encontrado');
    return d;
  }

  function projectAssetSource(projectId: string): AssetSource {
    return {
      async get(assetId) {
        if (!UUID.safeParse(assetId).success) return null;
        const row = await data.rpc<{ id: string; storage_path: string; mime_type: string; sha256: string; width: number | null; height: number | null } | null>(
          'api_asset_for_render', { p_project: projectId, p_asset: assetId }, service);
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

  async function saveRevision(userId: string, docId: string, baseRevision: number, input: unknown) {
    const validated = validateDocument({ ...(input as object), id: docId, revision: baseRevision + 1, approval: { status: 'draft' } });
    if (!validated.ok) throw new HttpError(422, 'validation', 'Documento inválido', validated.issues);
    const doc = validated.document;
    const revision = await data.rpc<number>('save_document_revision',
      { p_user: userId, p_document: docId, p_base_revision: baseRevision, p_content: doc, p_layers: layerIndex(doc), p_agent: null }, service);
    return { revision, warnings: validated.issues };
  }

  const signed = (path: string) => deps.storage.signedUrl(path, SIGNED_URL_TTL);
  const withUrls = async <T extends { storage_path: string }>(rows: T[]) =>
    Promise.all(rows.map(async ({ storage_path, ...r }) => ({ ...r, url: await signed(storage_path) })));

  async function upsertProject(user: User, body: unknown) {
    const input = CreateProjectInputSchema.parse(body);
    const extra = z.object({ organizationId: UUID, id: UUID.optional(), createdAt: z.string().datetime().optional() }).parse(body);
    const p = newProject(input, { id: extra.id ?? randomUUID(), organizationId: extra.organizationId, now: now() });
    return data.rpc<Record<string, unknown>>('api_upsert_project', {
      p_id: p.id, p_org: p.organizationId, p_name: p.name, p_kind: p.kind, p_event_date: p.eventDate, p_venue: p.venue,
      p_current_step: p.currentStep, p_steps: p.steps, p_created_at: extra.createdAt ?? p.createdAt,
    }, user.caller);
  }

  // ------------------------------------------------------------------ saúde
  app.get('/health', async () => ({ ok: true, service: 'lumpli-api', version: API_VERSION }));
  app.get('/ready', async (_req, reply) => {
    try {
      await data.ping();
      return { ready: true };
    } catch {
      return reply.code(503).send({ ready: false });
    }
  });
  app.get('/v1/auth/mode', async () => ({ mode: deps.devAuth ? 'dev' : 'supabase' }));
  app.get('/v1/formats', async () => ({ items: BUILT_IN_FORMATS }));

  // ------------------------------------------------------------------ usuário e projetos
  app.post('/v1/me', async (req) => {
    const user = await auth(req);
    return data.rpc('api_bootstrap_user', { p_user: user.userId }, service);
  });

  app.get('/v1/projects', async (req) => {
    const user = await auth(req);
    return { items: await data.rpc<unknown[]>('api_list_projects', {}, user.caller), nextCursor: null };
  });

  /** Cria (ou confirma, se o ID já existe) — o app envia o UUID gerado offline: reenvio não duplica. */
  app.post('/v1/projects', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    return upsertProject(user, req.body);
  });

  app.delete('/v1/projects/:projectId', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    return data.rpc('api_delete_project', { p_id: projectId }, user.caller);
  });

  app.get('/v1/projects/:projectId/briefings', async (req) => {
    const user = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    return { items: await data.rpc<unknown[]>('api_list_briefings', { p_project: projectId }, user.caller) };
  });

  app.post('/v1/projects/:projectId/briefings', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const b = z.object({
      id: UUID.optional(), objective: z.string().max(2000), audience: z.string().max(1000).default(''), tone: z.string().max(500).default(''),
      mandatoryTexts: z.array(z.string().max(500)).max(50).default([]), notes: z.string().max(4000).default(''),
    }).parse(req.body);
    return data.rpc('api_save_briefing', {
      p_project: projectId, p_id: b.id ?? randomUUID(), p_objective: b.objective, p_audience: b.audience, p_tone: b.tone,
      p_mandatory: b.mandatoryTexts, p_notes: b.notes,
    }, user.caller);
  });

  app.get('/v1/projects/:projectId/references', async (req) => {
    const user = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    return { items: await data.rpc<unknown[]>('api_list_references', { p_project: projectId }, user.caller) };
  });

  /** Somente o link é guardado — nenhum conteúdo de Pinterest/Behance é baixado. */
  app.post('/v1/projects/:projectId/references', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const b = z.object({ id: UUID.optional(), url: z.string().url().max(2000).refine((u) => /^https?:/i.test(u), 'Use http(s)'), title: z.string().max(200).nullish() }).parse(req.body);
    return data.rpc('api_add_reference', {
      p_id: b.id ?? randomUUID(), p_project: projectId, p_source: detectReferenceSource(b.url), p_url: b.url, p_title: b.title ?? null, p_aspects: [],
    }, user.caller);
  });

  app.delete('/v1/references/:referenceId', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    const { referenceId } = z.object({ referenceId: UUID }).parse(req.params);
    return data.rpc('api_delete_reference', { p_id: referenceId }, user.caller);
  });

  // ------------------------------------------------------------------ arquivos
  /** Upload direto para a API: o servidor identifica o formato pelo conteúdo e calcula o SHA-256. */
  app.post('/v1/projects/:projectId/assets', async (req, reply) => {
    const user = await auth(req);
    limit('upload', user, reply);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const kind = String(req.headers['x-asset-kind'] ?? '');
    const rights = req.headers['x-usage-rights-confirmed'] === 'true';
    if (!Buffer.isBuffer(req.body)) throw new HttpError(415, 'validation', 'Envie o arquivo como corpo binário');
    const bytes = new Uint8Array(req.body);
    const info = inspectUpload(bytes, kind);
    const project = await data.rpc<{ organizationId: string } | null>('api_project_org', { p_project: projectId }, user.caller);
    if (!project) throw new HttpError(404, 'not_found', 'Projeto não encontrado');
    await data.rpc('assert_can_edit_project', { p_user: user.userId, p_project: projectId }, service);
    const path = `${project.organizationId}/${projectId}/${randomUUID()}.${extensionFor(info.mimeType)}`;
    await deps.storage.put(path, bytes, info.mimeType);
    const id = await data.rpc<string>('register_asset', {
      p_user: user.userId, p_project: projectId, p_kind: kind, p_storage_path: path, p_mime: info.mimeType, p_size: info.size,
      p_sha256: info.sha256, p_width: info.width, p_height: info.height, p_rights: rights,
    }, service);
    return { id, kind, mimeType: info.mimeType, sizeBytes: info.size, sha256: info.sha256, width: info.width, height: info.height, url: await signed(path) };
  });

  app.get('/v1/projects/:projectId/assets', async (req) => {
    const user = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    return { items: await withUrls(await data.rpc<{ storage_path: string }[]>('api_list_assets', { p_project: projectId }, user.caller)) };
  });

  // ------------------------------------------------------------------ documentos
  app.get('/v1/projects/:projectId/documents', async (req) => {
    const user = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    return { items: await data.rpc<unknown[]>('api_list_documents', { p_project: projectId }, user.caller) };
  });

  app.post('/v1/projects/:projectId/documents', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    const body = z.object({ name: z.string().min(1).max(200), document: z.unknown() }).parse(req.body);
    const docId = await data.rpc<string>('create_document', { p_user: user.userId, p_project: projectId, p_name: body.name, p_kind: 'master', p_format_id: null, p_source: null }, service);
    const saved = await saveRevision(user.userId, docId, 0, { ...(body.document as object), projectId, kind: 'master' });
    return { id: docId, ...saved };
  });

  app.get('/v1/documents/:documentId', async (req) => {
    const user = await auth(req);
    const { documentId } = z.object({ documentId: z.string() }).parse(req.params);
    const d = await loadDoc(user, documentId);
    const head = d.versions.find((v) => v.revision === d.head_revision);
    const approved = d.versions.filter((v) => v.status === 'approved').at(-1);
    return {
      id: d.id, projectId: d.project_id, name: d.name, kind: d.kind, headRevision: d.head_revision,
      approvedRevision: approved?.revision ?? null,
      document: head ? { ...head.content, approval: { status: head.status } } : null,
      revisions: d.versions.map((v) => ({ revision: v.revision, parentRevision: v.parent_revision, status: v.status, contentSha256: v.content_sha256, createdAt: v.created_at })),
    };
  });

  app.get('/v1/documents/:documentId/revisions/:revision', async (req) => {
    const user = await auth(req);
    const p = z.object({ documentId: z.string(), revision: z.coerce.number().int().min(1) }).parse(req.params);
    const d = await loadDoc(user, p.documentId);
    const v = d.versions.find((x) => x.revision === p.revision);
    if (!v) throw new HttpError(404, 'not_found', 'Revisão não encontrada');
    return { revision: v.revision, status: v.status, contentSha256: v.content_sha256, document: { ...v.content, approval: { status: v.status } } };
  });

  app.post('/v1/documents/:documentId/preview', async (req, reply) => {
    const user = await auth(req);
    limit('preview', user, reply);
    const { documentId } = z.object({ documentId: z.string() }).parse(req.params);
    const body = z.object({ document: z.unknown(), width: z.number().int().min(64).max(2048).default(720) }).parse(req.body);
    const d = await loadDoc(user, documentId);
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

  app.post('/v1/documents/:documentId/revisions', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    const { documentId } = z.object({ documentId: z.string() }).parse(req.params);
    const body = z.object({ baseRevision: z.number().int().min(0), document: z.unknown() }).parse(req.body);
    const d = await loadDoc(user, documentId);
    return saveRevision(user.userId, d.id, body.baseRevision, { ...(body.document as object), projectId: d.project_id, kind: d.kind });
  });

  app.post('/v1/documents/:documentId/revisions/:revision/approve', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    const p = z.object({ documentId: z.string(), revision: z.coerce.number().int().min(1) }).parse(req.params);
    const body = z.object({ note: z.string().max(1000).optional() }).parse(req.body ?? {});
    const d = await loadDoc(user, p.documentId);
    const v = d.versions.find((x) => x.revision === p.revision);
    if (!v) throw new HttpError(404, 'not_found', 'Revisão não encontrada');
    const doc = GraphicDocumentSchema.parse(v.content);
    // Antes de congelar: o layout precisa renderizar com os arquivos íntegros (hash conferido).
    await renderDocument(doc, projectAssetSource(d.project_id)).catch((e: Error) => {
      throw new HttpError(422, 'validation', `Layout não pode ser aprovado: ${e.message}`);
    });
    const contract = createIdentityContract(doc, { id: randomUUID(), approvedBy: user.userId, now: now(), note: body.note });
    const identityId = await data.rpc<string>('approve_document_revision',
      { p_user: user.userId, p_document: d.id, p_revision: p.revision, p_contract: contract, p_note: body.note ?? null }, service);
    return { identityId, revision: p.revision, contract };
  });

  app.post('/v1/documents/:documentId/revisions/:revision/restore', async (req, reply) => {
    const user = await auth(req);
    limit('write', user, reply);
    const p = z.object({ documentId: z.string(), revision: z.coerce.number().int().min(1) }).parse(req.params);
    const d = await loadDoc(user, p.documentId);
    const revision = await data.rpc<number>('restore_document_revision', { p_user: user.userId, p_document: d.id, p_from_revision: p.revision }, service);
    return { revision, restoredFrom: p.revision };
  });

  /** Exporta PNGs a partir da revisão APROVADA e do contrato congelado. Adaptações vão para revisão humana. */
  app.post('/v1/documents/:documentId/exports', async (req, reply) => {
    const user = await auth(req);
    limit('export', user, reply);
    const { documentId } = z.object({ documentId: z.string() }).parse(req.params);
    const body = z.object({ formatIds: z.array(z.string()).min(1).max(8), includeMaster: z.boolean().default(false) }).parse(req.body);
    const d = await loadDoc(user, documentId);
    const v = d.versions.find((x) => x.status === 'approved');
    if (!v) throw new HttpError(409, 'conflict', 'Aprove o layout principal antes de exportar');
    const identity = d.identities.find((i) => i.source_document_revision === v.revision);
    if (!identity) throw new HttpError(409, 'conflict', 'Identidade visual não encontrada para a revisão aprovada');
    const formats = body.formatIds.map((id) => {
      const f = getFormat(id);
      if (!f) throw new HttpError(422, 'validation', `Formato desconhecido: ${id}`);
      return f;
    });
    const contract = VisualIdentityContractSchema.parse(identity.contract);
    const master = GraphicDocumentSchema.parse({ ...v.content, approval: { status: 'approved', identityContractId: identity.id } });
    const assets = projectAssetSource(d.project_id);
    await data.rpc('assert_can_edit_project', { p_user: user.userId, p_project: d.project_id }, service);

    const store = async (png: Uint8Array, formatId: string, width: number, height: number, renderer: string, report: unknown) => {
      const path = `${d.organization_id}/${d.project_id}/export-${formatId}-${randomUUID()}.png`;
      await deps.storage.put(path, png, 'image/png');
      const digest = sha256(png);
      const assetId = await data.rpc<string>('register_asset', {
        p_user: user.userId, p_project: d.project_id, p_kind: 'export', p_storage_path: path, p_mime: 'image/png', p_size: png.length,
        p_sha256: digest, p_width: width, p_height: height, p_rights: true,
      }, service);
      const materialId = await data.rpc<string>('register_generated_material', {
        p_user: user.userId, p_project: d.project_id, p_document: d.id, p_revision: v.revision, p_identity: identity.id, p_format: formatId,
        p_asset: assetId, p_width: width, p_height: height, p_renderer: renderer, p_report: report, p_task: null,
      }, service);
      return { materialId, assetId, url: await signed(path), sha256: digest };
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
    const user = await auth(req);
    const { projectId } = z.object({ projectId: UUID }).parse(req.params);
    return { items: await withUrls(await data.rpc<{ storage_path: string }[]>('api_list_materials', { p_project: projectId }, user.caller)) };
  });

  /** Download do armazenamento LOCAL (dev) com URL assinada e expirável. */
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

  /** Cria o EVENTO FICTÍCIO "Noite Neon": projeto, arquivos (com hash) e layout principal (rascunho). */
  app.post('/v1/demo/seed', async (req, reply) => {
    const user = await auth(req);
    limit('upload', user, reply);
    if (!deps.demoDir) throw new HttpError(404, 'not_found', 'Demonstração indisponível neste servidor');
    const { organizationId } = z.object({ organizationId: UUID }).parse(req.body);
    const project = (await upsertProject(user, { organizationId, name: 'Noite Neon (evento fictício)', kind: 'event', eventDate: '2026-12-20', venue: 'Arena Demo — São Paulo' })) as { id: string };
    const files = loadDemoAssetFiles(deps.demoDir);
    const ids: Record<string, string> = {};
    for (const f of files) {
      const path = `${organizationId}/${project.id}/${randomUUID()}.${extensionFor(f.mimeType)}`;
      await deps.storage.put(path, f.bytes, f.mimeType);
      ids[f.key] = await data.rpc<string>('register_asset', {
        p_user: user.userId, p_project: project.id, p_kind: f.kind, p_storage_path: path, p_mime: f.mimeType, p_size: f.bytes.length,
        p_sha256: f.sha256, p_width: f.width, p_height: f.height, p_rights: true,
      }, service);
    }
    const master = buildDemoMaster(files.map((f) => ({ ...f, id: ids[f.key]! })), { projectId: project.id });
    const docId = await data.rpc<string>('create_document', { p_user: user.userId, p_project: project.id, p_name: master.name, p_kind: 'master', p_format_id: null, p_source: null }, service);
    const saved = await saveRevision(user.userId, docId, 0, { ...master, id: docId });
    return { projectId: project.id, documentId: docId, revision: saved.revision, assets: ids };
  });

  if (deps.devAuth) {
    if (!data.devCreateUser) throw new Error('Login de desenvolvimento exige banco local');
    const key = new TextEncoder().encode(deps.devAuth.jwtSecret);
    app.post('/v1/dev/session', async (req) => {
      const { userId } = z.object({ userId: UUID.optional() }).parse(req.body ?? {});
      const id = userId ?? randomUUID();
      await data.devCreateUser!(id);
      const { SignJWT } = await import('jose');
      const accessToken = await new SignJWT({ role: 'authenticated', dev: true }).setProtectedHeader({ alg: 'HS256' })
        .setSubject(id).setAudience('authenticated').setIssuedAt().setExpirationTime('12h').sign(key);
      return { userId: id, accessToken, mode: 'dev' };
    });
  }

  return app;
}
