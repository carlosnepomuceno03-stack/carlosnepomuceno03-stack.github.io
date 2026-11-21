import { z } from 'zod';
import { AgentTaskSchema } from './agents';
import {
  AssetSchema,
  BriefingSchema,
  CreateProjectInputSchema,
  ProjectSchema,
  ReferenceSchema,
} from './domain';
import { GraphicDocumentSchema } from './document';
import { VisualIdentityContractSchema } from './identity';

/**
 * Contratos tipados da API REST (apps/api — Etapa 2+).
 * Cada rota declara método, caminho e esquemas zod de entrada e saída. O mesmo objeto é usado
 * para validar no servidor e para tipar o cliente no app. Ver docs/03-contratos-api.md.
 */
export type RouteContract = {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  path: string;
  body?: z.ZodType;
  response: z.ZodType;
  /** Requer header Idempotency-Key (operações com custo ou efeito colateral). */
  idempotent?: boolean;
};

const Page = <T extends z.ZodType>(item: T) =>
  z.object({ items: z.array(item), nextCursor: z.string().nullable() });

export const ApiErrorSchema = z.object({
  error: z.object({
    code: z.enum([
      'unauthorized',
      'forbidden',
      'not_found',
      'validation',
      'conflict',
      'version_conflict',
      'budget_exceeded',
      'rate_limited',
      'internal',
    ]),
    message: z.string(),
    details: z.unknown().optional(),
  }),
});
export type ApiError = z.infer<typeof ApiErrorSchema>;

export const API = {
  listProjects: { method: 'GET', path: '/v1/projects', response: Page(ProjectSchema) },
  createProject: { method: 'POST', path: '/v1/projects', body: CreateProjectInputSchema, response: ProjectSchema, idempotent: true },
  getProject: { method: 'GET', path: '/v1/projects/:projectId', response: ProjectSchema },

  saveBriefing: {
    method: 'POST',
    path: '/v1/projects/:projectId/briefings',
    body: BriefingSchema.pick({ objective: true, audience: true, tone: true, mandatoryTexts: true, notes: true }),
    response: BriefingSchema,
  },

  /** Upload em duas fases: a API devolve URL assinada; o app envia direto ao Storage; depois confirma. */
  createUpload: {
    method: 'POST',
    path: '/v1/projects/:projectId/uploads',
    body: z.object({ kind: AssetSchema.shape.kind, mimeType: z.string(), sizeBytes: z.number().int().positive(), sha256: AssetSchema.shape.sha256, usageRightsConfirmed: z.boolean() }),
    response: z.object({ uploadId: z.string(), signedUrl: z.string().url(), expiresAt: z.string().datetime() }),
    idempotent: true,
  },
  confirmUpload: { method: 'POST', path: '/v1/uploads/:uploadId/confirm', response: AssetSchema },

  addReference: {
    method: 'POST',
    path: '/v1/projects/:projectId/references',
    body: ReferenceSchema.pick({ source: true, url: true, assetId: true, title: true, wantedAspects: true }),
    response: ReferenceSchema,
  },

  getDocument: { method: 'GET', path: '/v1/documents/:documentId', response: GraphicDocumentSchema },
  /** Salvar exige `baseRevision`; se outra revisão foi salva antes, responde 409 version_conflict. */
  saveDocument: {
    method: 'POST',
    path: '/v1/documents/:documentId/revisions',
    body: z.object({ baseRevision: z.number().int().min(1), document: GraphicDocumentSchema }),
    response: GraphicDocumentSchema,
  },
  approveDocument: {
    method: 'POST',
    path: '/v1/documents/:documentId/revisions/:revision/approve',
    body: z.object({ note: z.string().max(1000).optional() }),
    response: VisualIdentityContractSchema,
    idempotent: true,
  },
  restoreRevision: {
    method: 'POST',
    path: '/v1/documents/:documentId/revisions/:revision/restore',
    response: GraphicDocumentSchema,
  },

  startProductionJob: {
    method: 'POST',
    path: '/v1/projects/:projectId/jobs',
    body: z.object({
      kind: z.enum(['analyze_references', 'propose_direction', 'generate_adaptations', 'run_checks', 'export']),
      formatIds: z.array(z.string()).optional(),
      /** Teto de custo aprovado pelo usuário para este job. */
      maxCostCents: z.number().int().nonnegative(),
    }),
    response: z.object({ jobId: z.string(), tasks: z.array(AgentTaskSchema) }),
    idempotent: true,
  },
  cancelJob: { method: 'POST', path: '/v1/jobs/:jobId/cancel', response: z.object({ cancelled: z.boolean() }) },
  listTasks: { method: 'GET', path: '/v1/projects/:projectId/tasks', response: Page(AgentTaskSchema) },
} as const satisfies Record<string, RouteContract>;

export type ApiRoutes = typeof API;
