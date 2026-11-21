import { z } from 'zod';

/**
 * Esquema do Documento Gráfico — versão 1.
 *
 * É o contrato único entre editor mobile, renderizador (worker) e verificações de qualidade.
 * Coordenadas em pixels do documento, origem no canto superior esquerdo, rotação em graus.
 * A lista `layers` é ordenada de baixo (índice 0) para cima.
 *
 * Ver docs/02-documento-grafico.md para a especificação completa.
 */
export const DOCUMENT_SCHEMA_VERSION = 1 as const;

export const HexColorSchema = z
  .string()
  .regex(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, 'Cor deve ser #RRGGBB ou #RRGGBBAA');

export const AnchorSchema = z.object({
  horizontal: z.enum(['left', 'center', 'right']),
  vertical: z.enum(['top', 'middle', 'bottom']),
});
export type Anchor = z.infer<typeof AnchorSchema>;

/** Papel semântico do elemento — usado pela hierarquia e pelo motor de adaptação. */
export const LayerRoleSchema = z.enum([
  'background',
  'photo',
  'logo',
  'headline',
  'subheadline',
  'info',
  'cta',
  'decoration',
  'other',
]);
export type LayerRole = z.infer<typeof LayerRoleSchema>;

export const ResizeConstraintsSchema = z.object({
  keepAspectRatio: z.boolean().default(true),
  minScale: z.number().positive().default(0.25),
  maxScale: z.number().positive().default(4),
  /** Se o elemento pode ser cortado pelas bordas do formato de destino. */
  allowCrop: z.boolean().default(false),
});
export type ResizeConstraints = z.infer<typeof ResizeConstraintsSchema>;

/** Efeitos que o renderizador v1 implementa. Qualquer outro tipo vai para `unsupportedEffects`. */
export const SUPPORTED_EFFECTS = ['drop_shadow', 'blur'] as const;

export const EffectSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('drop_shadow'),
    color: HexColorSchema,
    offsetX: z.number(),
    offsetY: z.number(),
    blur: z.number().nonnegative(),
  }),
  z.object({ type: z.literal('blur'), radius: z.number().nonnegative() }),
]);
export type Effect = z.infer<typeof EffectSchema>;

/**
 * Efeito vindo de importação/IA que o renderizador ainda não suporta.
 * É preservado no documento e reportado — nunca descartado silenciosamente.
 */
export const UnsupportedEffectSchema = z.object({
  type: z.string().min(1),
  raw: z.record(z.string(), z.unknown()).default({}),
});
export type UnsupportedEffect = z.infer<typeof UnsupportedEffectSchema>;

const LayerBaseShape = {
  id: z.string().min(1),
  name: z.string().min(1),
  role: LayerRoleSchema.default('other'),
  x: z.number(),
  y: z.number(),
  width: z.number().positive(),
  height: z.number().positive(),
  rotation: z.number().default(0),
  scale: z.number().positive().default(1),
  opacity: z.number().min(0).max(1).default(1),
  visible: z.boolean().default(true),
  /** Bloqueio de edição no editor. */
  locked: z.boolean().default(false),
  anchor: AnchorSchema.default({ horizontal: 'left', vertical: 'top' }),
  constraints: ResizeConstraintsSchema.default({
    keepAspectRatio: true,
    minScale: 0.25,
    maxScale: 4,
    allowCrop: false,
  }),
  /** Prioridade na hierarquia (1 = mais importante). */
  priority: z.number().int().min(1).default(5),
  effects: z.array(EffectSchema).default([]),
  unsupportedEffects: z.array(UnsupportedEffectSchema).default([]),
};

/** Recorte normalizado (0–1) sobre o recurso original. */
export const CropSchema = z
  .object({
    x: z.number().min(0).max(1),
    y: z.number().min(0).max(1),
    width: z.number().gt(0).max(1),
    height: z.number().gt(0).max(1),
  })
  .refine((c) => c.x + c.width <= 1.000001 && c.y + c.height <= 1.000001, {
    message: 'Recorte excede os limites do recurso',
  });

export const ImageLayerSchema = z.object({
  ...LayerBaseShape,
  type: z.literal('image'),
  assetId: z.string().min(1),
  /** SHA-256 do arquivo original no momento em que foi colocado no documento. */
  assetSha256: z.string().regex(/^[0-9a-f]{64}$/),
  /** `stretch` deforma a imagem e é proibido para recursos protegidos. */
  fit: z.enum(['cover', 'contain', 'stretch']).default('cover'),
  crop: CropSchema.optional(),
  /** Fotos de pessoas e logos: nunca regeneradas por IA, só transformações autorizadas. */
  protected: z.boolean().default(false),
});

export const TextLayerSchema = z.object({
  ...LayerBaseShape,
  type: z.literal('text'),
  text: z.string(),
  fontId: z.string().min(1),
  fontSize: z.number().positive(),
  color: HexColorSchema,
  align: z.enum(['left', 'center', 'right']).default('left'),
  lineHeight: z.number().positive().default(1.2),
  letterSpacing: z.number().default(0),
  uppercase: z.boolean().default(false),
  /** Texto obrigatório: verificações garantem que não muda nem some nas adaptações. */
  required: z.boolean().default(false),
});

export const ShapeLayerSchema = z.object({
  ...LayerBaseShape,
  type: z.literal('shape'),
  shape: z.enum(['rect', 'ellipse']),
  fill: HexColorSchema.optional(),
  stroke: z.object({ color: HexColorSchema, width: z.number().positive() }).optional(),
  cornerRadius: z.number().nonnegative().default(0),
});

export const VectorLayerSchema = z.object({
  ...LayerBaseShape,
  type: z.literal('vector'),
  /** Path SVG no sistema de coordenadas (0,0)-(viewBoxWidth,viewBoxHeight). */
  path: z.string().min(1),
  viewBoxWidth: z.number().positive(),
  viewBoxHeight: z.number().positive(),
  fill: HexColorSchema.optional(),
  stroke: z.object({ color: HexColorSchema, width: z.number().positive() }).optional(),
});

export const BackgroundLayerSchema = z.object({
  ...LayerBaseShape,
  type: z.literal('background'),
  color: HexColorSchema.optional(),
  assetId: z.string().optional(),
  assetSha256: z.string().regex(/^[0-9a-f]{64}$/).optional(),
});

type LayerBase = {
  id: string;
  name: string;
  role: LayerRole;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  scale: number;
  opacity: number;
  visible: boolean;
  locked: boolean;
  anchor: Anchor;
  constraints: ResizeConstraints;
  priority: number;
  effects: Effect[];
  unsupportedEffects: UnsupportedEffect[];
};

export type ImageLayer = z.infer<typeof ImageLayerSchema>;
export type TextLayer = z.infer<typeof TextLayerSchema>;
export type ShapeLayer = z.infer<typeof ShapeLayerSchema>;
export type VectorLayer = z.infer<typeof VectorLayerSchema>;
export type BackgroundLayer = z.infer<typeof BackgroundLayerSchema>;
export type GroupLayer = LayerBase & { type: 'group'; children: Layer[] };
/** Máscara: recorta os filhos pela forma indicada (suporte previsto no renderizador v1). */
export type MaskLayer = LayerBase & { type: 'mask'; shape: 'rect' | 'ellipse'; children: Layer[] };

export type Layer =
  | ImageLayer
  | TextLayer
  | ShapeLayer
  | VectorLayer
  | BackgroundLayer
  | GroupLayer
  | MaskLayer;

export const LayerSchema: z.ZodType<Layer, unknown> = z.lazy(() =>
  z.discriminatedUnion('type', [
    ImageLayerSchema,
    TextLayerSchema,
    ShapeLayerSchema,
    VectorLayerSchema,
    BackgroundLayerSchema,
    z.object({ ...LayerBaseShape, type: z.literal('group'), children: z.array(LayerSchema) }),
    z.object({
      ...LayerBaseShape,
      type: z.literal('mask'),
      shape: z.enum(['rect', 'ellipse']),
      children: z.array(LayerSchema),
    }),
  ]),
) as z.ZodType<Layer, unknown>;

export type LayerType = Layer['type'];

export const FontRefSchema = z.object({
  id: z.string().min(1),
  family: z.string().min(1),
  weight: z.number().int().min(100).max(900).default(400),
  style: z.enum(['normal', 'italic']).default('normal'),
  /** Arquivo de fonte enviado pelo usuário (licenciado). Sem ele, a fonte é do sistema. */
  assetId: z.string().optional(),
  assetSha256: z.string().regex(/^[0-9a-f]{64}$/).optional(),
});
export type FontRef = z.infer<typeof FontRefSchema>;

export const ColorTokenSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  hex: HexColorSchema,
});

export const ContentZoneSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  /** Coordenadas normalizadas (0–1) em relação ao documento. */
  x: z.number().min(0).max(1),
  y: z.number().min(0).max(1),
  width: z.number().gt(0).max(1),
  height: z.number().gt(0).max(1),
  layerIds: z.array(z.string()),
});

export const DocumentApprovalSchema = z.object({
  status: z.enum(['draft', 'approved', 'superseded']),
  approvedAt: z.string().datetime().optional(),
  approvedBy: z.string().optional(),
  identityContractId: z.string().optional(),
});

export const GraphicDocumentSchema = z.object({
  schemaVersion: z.literal(DOCUMENT_SCHEMA_VERSION),
  id: z.string().min(1),
  projectId: z.string().min(1),
  /** Revisão monotônica. Revisões aprovadas são imutáveis. */
  revision: z.number().int().min(1),
  parentRevision: z.number().int().min(1).nullable().default(null),
  name: z.string().min(1),
  /** `master` = layout principal; `adaptation` = gerado para um formato a partir do master. */
  kind: z.enum(['master', 'adaptation', 'reconstruction_proposal']).default('master'),
  formatId: z.string().nullable().default(null),
  width: z.number().int().positive().max(8192),
  height: z.number().int().positive().max(8192),
  backgroundColor: HexColorSchema,
  fonts: z.array(FontRefSchema).default([]),
  colors: z.array(ColorTokenSchema).default([]),
  zones: z.array(ContentZoneSchema).default([]),
  layers: z.array(LayerSchema),
  approval: DocumentApprovalSchema.default({ status: 'draft' }),
});
export type GraphicDocument = z.infer<typeof GraphicDocumentSchema>;

export type DocumentIssue = {
  severity: 'error' | 'warning';
  code: string;
  message: string;
  layerId?: string;
};

/** Percorre camadas em profundidade, na ordem de pintura (de baixo para cima). */
export function* walkLayers(layers: readonly Layer[]): Generator<Layer> {
  for (const layer of layers) {
    yield layer;
    if (layer.type === 'group' || layer.type === 'mask') {
      yield* walkLayers(layer.children);
    }
  }
}

/**
 * Validação estrutural (zod) + semântica. Erros impedem salvar/renderizar;
 * avisos são exibidos ao usuário e registrados na exportação.
 */
export function validateDocument(input: unknown):
  | { ok: true; document: GraphicDocument; issues: DocumentIssue[] }
  | { ok: false; issues: DocumentIssue[] } {
  const parsed = GraphicDocumentSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      issues: parsed.error.issues.map((i) => ({
        severity: 'error' as const,
        code: 'schema',
        message: `${i.path.join('.')}: ${i.message}`,
      })),
    };
  }
  const doc = parsed.data;
  const issues: DocumentIssue[] = [];
  const ids = new Set<string>();
  const fontIds = new Set(doc.fonts.map((f) => f.id));

  for (const layer of walkLayers(doc.layers)) {
    if (ids.has(layer.id)) {
      issues.push({ severity: 'error', code: 'duplicate_layer_id', message: `ID de camada duplicado: ${layer.id}`, layerId: layer.id });
    }
    ids.add(layer.id);

    if (layer.type === 'text' && !fontIds.has(layer.fontId)) {
      issues.push({ severity: 'error', code: 'missing_font', message: `Fonte "${layer.fontId}" não declarada no documento`, layerId: layer.id });
    }
    if (layer.type === 'image' && layer.protected && layer.fit === 'stretch') {
      issues.push({ severity: 'error', code: 'protected_distortion', message: `Recurso protegido "${layer.name}" não pode ser esticado`, layerId: layer.id });
    }
    if (layer.type === 'image' && layer.protected && !layer.constraints.keepAspectRatio) {
      issues.push({ severity: 'error', code: 'protected_aspect', message: `Recurso protegido "${layer.name}" deve manter a proporção`, layerId: layer.id });
    }
    for (const fx of layer.unsupportedEffects) {
      issues.push({ severity: 'warning', code: 'unsupported_effect', message: `Efeito "${fx.type}" em "${layer.name}" não é suportado pelo renderizador e não aparecerá na exportação`, layerId: layer.id });
    }
  }
  for (const zone of doc.zones) {
    for (const id of zone.layerIds) {
      if (!ids.has(id)) {
        issues.push({ severity: 'error', code: 'zone_unknown_layer', message: `Zona "${zone.name}" referencia camada inexistente ${id}` });
      }
    }
  }
  const hasError = issues.some((i) => i.severity === 'error');
  return hasError ? { ok: false, issues } : { ok: true, document: doc, issues };
}

/** Dimensão efetiva (após escala) de uma camada. */
export function layerBounds(layer: Layer): { x: number; y: number; width: number; height: number } {
  return { x: layer.x, y: layer.y, width: layer.width * layer.scale, height: layer.height * layer.scale };
}
