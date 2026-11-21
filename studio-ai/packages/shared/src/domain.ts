import { z } from 'zod';
import { FlowStepIdSchema, StepStatusSchema } from './status';

/** Entidades de domínio. Espelham as tabelas em supabase/migrations (snake_case no banco). */

export const IdSchema = z.string().min(1);
export const IsoDateSchema = z.string().datetime();

export const ProjectKindSchema = z.enum(['event', 'brand', 'campaign', 'other']);
export type ProjectKind = z.infer<typeof ProjectKindSchema>;

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
  event: 'Evento',
  brand: 'Marca',
  campaign: 'Campanha',
  other: 'Outro',
};

export const ProjectSchema = z.object({
  id: IdSchema,
  organizationId: IdSchema,
  name: z.string().trim().min(2, 'Nome muito curto').max(120),
  kind: ProjectKindSchema,
  /** Data do evento (YYYY-MM-DD), quando aplicável. */
  eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable(),
  venue: z.string().max(200).nullable(),
  currentStep: FlowStepIdSchema,
  steps: z.record(FlowStepIdSchema, StepStatusSchema),
  /** Limite de gasto com IA (centavos de USD) aprovado para este projeto. */
  aiBudgetCents: z.number().int().nonnegative(),
  aiSpentCents: z.number().int().nonnegative(),
  createdAt: IsoDateSchema,
  updatedAt: IsoDateSchema,
});
export type Project = z.infer<typeof ProjectSchema>;

export const CreateProjectInputSchema = z.object({
  name: ProjectSchema.shape.name,
  kind: ProjectKindSchema,
  eventDate: ProjectSchema.shape.eventDate.optional(),
  venue: ProjectSchema.shape.venue.optional(),
});
export type CreateProjectInput = z.infer<typeof CreateProjectInputSchema>;

export const BriefingSchema = z.object({
  id: IdSchema,
  projectId: IdSchema,
  revision: z.number().int().min(1),
  objective: z.string().max(2000),
  audience: z.string().max(1000),
  tone: z.string().max(500),
  mandatoryTexts: z.array(z.string().max(500)),
  notes: z.string().max(4000),
  createdAt: IsoDateSchema,
});
export type Briefing = z.infer<typeof BriefingSchema>;

export const AssetKindSchema = z.enum(['photo', 'logo', 'font', 'graphic', 'background', 'reference_image', 'export']);

/** Tipos MIME aceitos no upload (validação de uploads — seção 20). */
export const ALLOWED_UPLOAD_MIME = {
  image: ['image/png', 'image/jpeg', 'image/webp'],
  vector: ['image/svg+xml'],
  font: ['font/ttf', 'font/otf', 'font/woff2', 'application/font-sfnt'],
} as const;
export const MAX_UPLOAD_BYTES = 40 * 1024 * 1024;

export const AssetSchema = z.object({
  id: IdSchema,
  projectId: IdSchema,
  kind: AssetKindSchema,
  storagePath: z.string().min(1),
  mimeType: z.string().min(1),
  sizeBytes: z.number().int().positive().max(MAX_UPLOAD_BYTES),
  sha256: z.string().regex(/^[0-9a-f]{64}$/),
  width: z.number().int().positive().nullable(),
  height: z.number().int().positive().nullable(),
  /** Recurso original enviado pelo usuário é imutável. Derivados apontam para a origem. */
  derivedFromAssetId: IdSchema.nullable(),
  derivation: z.string().nullable(),
  /** Declaração do usuário de que tem direito de uso comercial. */
  usageRightsConfirmed: z.boolean(),
  createdAt: IsoDateSchema,
});
export type Asset = z.infer<typeof AssetSchema>;

export const ReferenceSourceSchema = z.enum(['upload', 'pinterest_link', 'behance_link', 'other_link']);
export const ReferenceSchema = z.object({
  id: IdSchema,
  projectId: IdSchema,
  source: ReferenceSourceSchema,
  url: z.string().url().nullable(),
  assetId: IdSchema.nullable(),
  title: z.string().max(200).nullable(),
  /** Elementos que o usuário quer aproveitar. */
  wantedAspects: z.array(z.enum(['colors', 'typography', 'composition', 'texture', 'lighting', 'hierarchy', 'style', 'elements'])),
  createdAt: IsoDateSchema,
});
export type Reference = z.infer<typeof ReferenceSchema>;

/** Uma observação da análise de referência — sempre com nível de confiança explícito. */
export const ReferenceObservationSchema = z.object({
  category: z.enum(['colors', 'typography', 'composition', 'texture', 'lighting', 'hierarchy', 'style', 'elements']),
  statement: z.string(),
  confidence: z.enum(['observed', 'likely', 'uncertain']),
  evidence: z.string().optional(),
});
export type ReferenceObservation = z.infer<typeof ReferenceObservationSchema>;

export function detectReferenceSource(url: string): z.infer<typeof ReferenceSourceSchema> {
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (host === 'pin.it' || /(^|\.)pinterest\.[a-z.]+$/.test(host)) return 'pinterest_link';
    if (/(^|\.)behance\.net$/.test(host)) return 'behance_link';
    return 'other_link';
  } catch {
    return 'other_link';
  }
}
