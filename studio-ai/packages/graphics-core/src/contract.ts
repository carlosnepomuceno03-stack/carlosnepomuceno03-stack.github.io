import {
  VisualIdentityContractSchema,
  walkLayers,
  type AspectRule,
  type GraphicDocument,
  type VisualIdentityContract,
} from '@studio-ai/shared';

/**
 * Congela a identidade visual a partir do layout principal aprovado (seção 11).
 * Puro e determinístico: `id`, `now` e regras de proporção são injetados.
 */
export function createIdentityContract(
  doc: GraphicDocument,
  opts: {
    id: string;
    approvedBy: string;
    now: Date;
    note?: string;
    /** Padrão: regras propostas no próprio documento; na falta delas, `defaultAspectRules`. */
    aspectRules?: AspectRule[];
    revision?: number;
    parentRevision?: number | null;
    safeMarginRatio?: number;
  },
): VisualIdentityContract {
  if (doc.kind !== 'master') throw new Error('Somente o layout principal gera contrato de identidade');

  const protectedAssets: VisualIdentityContract['protectedAssets'] = [];
  const elements: VisualIdentityContract['elements'] = [];
  for (const l of walkLayers(doc.layers)) {
    if (l.type === 'image' && l.protected) {
      protectedAssets.push({
        assetId: l.assetId,
        sha256: l.assetSha256,
        kind: l.role === 'logo' ? 'logo' : l.role === 'photo' ? 'photo' : 'graphic',
        required: l.role === 'logo',
        allowedTransforms: ['position', 'uniform_scale', ...(l.constraints.allowCrop ? (['crop'] as const) : []), 'opacity'],
      });
    }
    elements.push({
      layerId: l.id,
      role: l.role,
      priority: l.priority,
      anchor: l.anchor,
      locked: l.locked,
      minScale: l.constraints.minScale,
      maxScale: l.constraints.maxScale,
      allowCrop: l.constraints.allowCrop,
      ...(l.type === 'text' && l.required ? { approvedText: l.text } : {}),
    });
  }
  for (const f of doc.fonts) {
    if (f.assetId && f.assetSha256) {
      protectedAssets.push({ assetId: f.assetId, sha256: f.assetSha256, kind: 'font', required: false, allowedTransforms: [] });
    }
  }

  const ts = opts.now.toISOString();
  return VisualIdentityContractSchema.parse({
    id: opts.id,
    projectId: doc.projectId,
    revision: opts.revision ?? 1,
    parentRevision: opts.parentRevision ?? null,
    sourceDocumentId: doc.id,
    sourceDocumentRevision: doc.revision,
    protectedAssets,
    fonts: doc.fonts.map((f) => ({ family: f.family, weight: f.weight, style: f.style, sha256: f.assetSha256 })),
    colors: doc.colors.map((c) => ({ name: c.name, hex: c.hex })),
    spacingUnit: 8 / Math.min(doc.width, doc.height),
    safeMarginRatio: opts.safeMarginRatio ?? 0.05,
    elements,
    aspectRules: opts.aspectRules ?? (doc.aspectRules.length ? doc.aspectRules : defaultAspectRules(doc)),
    approvals: [{ approvedBy: opts.approvedBy, approvedAt: ts, ...(opts.note ? { note: opts.note } : {}) }],
    createdAt: ts,
  });
}

/**
 * Regras padrão quando o layout não define nenhuma: cada zona mantém sua posição relativa dentro da área segura,
 * com escala uniforme (contain). Conservador por design — formatos muito diferentes tendem a pedir revisão.
 */
export function defaultAspectRules(doc: GraphicDocument): AspectRule[] {
  const aspects = ['tall', 'portrait', 'square', 'landscape', 'wide'] as const;
  return aspects.map((aspect) => ({
    aspect,
    arrangement: 'keep' as const,
    optionalLayerIds: [],
    zoneTargets: Object.fromEntries(
      doc.zones.map((z) => [z.id, { x: z.x, y: z.y, width: z.width, height: z.height, bleed: false, fit: 'contain' as const, align: { horizontal: 'center' as const, vertical: 'middle' as const } }]),
    ),
  }));
}
