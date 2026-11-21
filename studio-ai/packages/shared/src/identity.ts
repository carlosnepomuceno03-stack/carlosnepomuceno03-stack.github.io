import { z } from 'zod';
import { AnchorSchema, AspectRuleSchema, HexColorSchema, LayerRoleSchema } from './document';
import { aspectClass, type AspectClass } from './formats';

/**
 * Contrato de Identidade Visual (seção 11).
 * Criado no momento da aprovação do layout principal. É imutável: qualquer mudança
 * gera uma nova revisão (revision + 1, parentRevision apontando para a anterior).
 */
export const ProtectedAssetSchema = z.object({
  assetId: z.string().min(1),
  sha256: z.string().regex(/^[0-9a-f]{64}$/),
  kind: z.enum(['logo', 'photo', 'font', 'graphic']),
  /** Logo obrigatória: sua ausência numa adaptação é falha crítica. */
  required: z.boolean(),
  allowedTransforms: z.array(z.enum(['position', 'uniform_scale', 'crop', 'opacity', 'mask'])),
});

export const ElementRuleSchema = z.object({
  layerId: z.string().min(1),
  role: LayerRoleSchema,
  priority: z.number().int().min(1),
  anchor: AnchorSchema,
  locked: z.boolean(),
  minScale: z.number().positive(),
  maxScale: z.number().positive(),
  allowCrop: z.boolean(),
  /** Texto exato aprovado (apenas camadas de texto obrigatórias). */
  approvedText: z.string().optional(),
});

export { AspectRuleSchema, ZoneTargetSchema, type AspectRule, type ZoneTarget } from './document';

export const VisualIdentityContractSchema = z.object({
  id: z.string().min(1),
  projectId: z.string().min(1),
  revision: z.number().int().min(1),
  parentRevision: z.number().int().min(1).nullable(),
  sourceDocumentId: z.string().min(1),
  sourceDocumentRevision: z.number().int().min(1),
  protectedAssets: z.array(ProtectedAssetSchema),
  fonts: z.array(z.object({ family: z.string(), weight: z.number().int(), style: z.enum(['normal', 'italic']), sha256: z.string().optional() })),
  colors: z.array(z.object({ name: z.string(), hex: HexColorSchema })),
  /** Espaçamento base em fração da menor dimensão do formato. */
  spacingUnit: z.number().positive(),
  /** Margem de segurança mínima em fração da menor dimensão. */
  safeMarginRatio: z.number().min(0).max(0.25),
  elements: z.array(ElementRuleSchema),
  aspectRules: z.array(AspectRuleSchema).default([]),
  approvals: z.array(
    z.object({
      approvedBy: z.string(),
      approvedAt: z.string().datetime(),
      note: z.string().optional(),
    }),
  ).min(1),
  createdAt: z.string().datetime(),
});
export type VisualIdentityContract = z.infer<typeof VisualIdentityContractSchema>;

export function aspectRuleFor(contract: VisualIdentityContract, width: number, height: number) {
  const aspect: AspectClass = aspectClass(width, height);
  return contract.aspectRules.find((r) => r.aspect === aspect);
}
