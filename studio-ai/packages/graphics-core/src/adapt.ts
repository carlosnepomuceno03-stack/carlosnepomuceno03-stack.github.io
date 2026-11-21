import {
  aspectClass,
  type FormatPreset,
  type GraphicDocument,
  type Layer,
  type VisualIdentityContract,
  type ZoneTarget,
} from '@studio-ai/shared';

/**
 * Motor de adaptação por regras (seção 13).
 *
 * - Fundo (role/type background): ocupa o quadro inteiro.
 * - Zonas do layout principal: cada zona é reposicionada no retângulo de destino definido no contrato para a
 *   proporção do formato, com ESCALA UNIFORME (sem distorção). `cover` só para camada única com corte autorizado.
 * - Camadas livres: reposicionadas pelas âncoras; escala uniforme min(W'/W, H'/H). Formas não protegidas sem
 *   `keepAspectRatio` podem acompanhar cada eixo.
 * - Camadas opcionais da proporção são ocultadas (registrado).
 * - Escala fora dos limites ou zona sem regra → `needsReview`, nunca improviso silencioso.
 */
export type AdaptationIssue = { severity: 'error' | 'warning'; code: string; message: string; layerId?: string };
export type AdaptationResult = { document: GraphicDocument; issues: AdaptationIssue[]; needsReview: boolean; changes: string[] };

type Rect = { x: number; y: number; width: number; height: number };

const r2 = (v: number) => Math.round(v * 100) / 100;

function mapLayer(layer: Layer, f: (l: Layer) => Layer): Layer {
  const mapped = f(layer);
  if (mapped.type === 'group' || mapped.type === 'mask') {
    return { ...mapped, children: mapped.children.map((c) => mapLayer(c, f)) };
  }
  return mapped;
}

function boundsOf(layers: Layer[]): Rect {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const l of layers) {
    x0 = Math.min(x0, l.x); y0 = Math.min(y0, l.y);
    x1 = Math.max(x1, l.x + l.width * l.scale); y1 = Math.max(y1, l.y + l.height * l.scale);
  }
  return { x: x0, y: y0, width: x1 - x0, height: y1 - y0 };
}

export function adaptDocument(
  master: GraphicDocument,
  contract: VisualIdentityContract,
  format: FormatPreset,
  opts: { id: string },
): AdaptationResult {
  if (master.approval.status !== 'approved') throw new Error('Adaptações só partem de um layout principal aprovado');
  if (contract.sourceDocumentId !== master.id || contract.sourceDocumentRevision !== master.revision) {
    throw new Error('Contrato de identidade não corresponde à revisão aprovada do documento');
  }

  const W = master.width, H = master.height;
  const W2 = format.width, H2 = format.height;
  const issues: AdaptationIssue[] = [];
  const changes: string[] = [];
  const aspect = aspectClass(W2, H2);
  const rule = contract.aspectRules.find((r) => r.aspect === aspect);
  const elementRule = new Map(contract.elements.map((e) => [e.layerId, e]));
  const m = format.safeMargin;
  const safe: Rect = { x: m, y: m, width: W2 - 2 * m, height: H2 - 2 * m };
  const k = Math.min(W2 / W, H2 / H);

  const zoneOf = new Map<string, string>();
  for (const z of master.zones) for (const id of z.layerIds) zoneOf.set(id, z.id);

  const checkScale = (l: Layer, factor: number) => {
    const rule = elementRule.get(l.id);
    const total = l.scale * factor;
    if (rule && (total < rule.minScale - 1e-6 || total > rule.maxScale + 1e-6)) {
      issues.push({ severity: 'error', code: 'scale_out_of_bounds', layerId: l.id, message: `"${l.name}" precisaria de escala ${total.toFixed(2)} (permitido ${rule.minScale}–${rule.maxScale})` });
    }
  };

  const transformed = new Map<string, Layer>();

  // 1) Zonas
  for (const zone of master.zones) {
    const members = master.layers.filter((l) => zoneOf.get(l.id) === zone.id);
    if (!members.length) continue;
    const target: ZoneTarget | undefined = rule?.zoneTargets[zone.id];
    if (!target) {
      issues.push({ severity: 'error', code: 'zone_without_rule', message: `Zona "${zone.name}" não tem regra aprovada para a proporção ${aspect}` });
      continue;
    }
    const area = target.bleed ? { x: 0, y: 0, width: W2, height: H2 } : safe;
    const dest: Rect = { x: area.x + target.x * area.width, y: area.y + target.y * area.height, width: target.width * area.width, height: target.height * area.height };

    if (target.fit === 'cover') {
      const only = members[0]!;
      const coverOk = members.length === 1 && only.type === 'image' && only.constraints.allowCrop && only.fit !== 'stretch';
      if (!coverOk) {
        issues.push({ severity: 'error', code: 'cover_not_allowed', message: `Zona "${zone.name}": preenchimento com corte exige uma única imagem com corte autorizado` });
        continue;
      }
      // A caixa assume o destino; a imagem é recortada proporcionalmente (fit cover), nunca esticada.
      transformed.set(only.id, { ...only, x: r2(dest.x), y: r2(dest.y), width: r2(dest.width), height: r2(dest.height), scale: 1 });
      changes.push(`${only.name}: preenchimento com recorte proporcional em ${Math.round(dest.width)}×${Math.round(dest.height)}`);
      continue;
    }

    const src = boundsOf(members);
    const s = Math.min(dest.width / src.width, dest.height / src.height);
    const contentW = src.width * s, contentH = src.height * s;
    const ox = dest.x + (target.align.horizontal === 'left' ? 0 : target.align.horizontal === 'right' ? dest.width - contentW : (dest.width - contentW) / 2);
    const oy = dest.y + (target.align.vertical === 'top' ? 0 : target.align.vertical === 'bottom' ? dest.height - contentH : (dest.height - contentH) / 2);
    for (const l of members) {
      const moved = mapLayer(l, (c) => {
        checkScale(c, s);
        return { ...c, x: r2(ox + (c.x - src.x) * s), y: r2(oy + (c.y - src.y) * s), scale: Number((c.scale * s).toFixed(4)) };
      });
      transformed.set(l.id, moved);
    }
    changes.push(`Zona ${zone.name}: escala ${s.toFixed(3)}`);
  }

  // 2) Fundo e camadas livres
  const layers: Layer[] = master.layers.map((l) => {
    const z = transformed.get(l.id);
    if (z) return z;
    if (l.role === 'background' || l.type === 'background') {
      return { ...l, x: 0, y: 0, width: W2, height: H2, scale: 1 };
    }
    if (l.type === 'shape' && !l.constraints.keepAspectRatio) {
      const sx = W2 / W, sy = H2 / H;
      return { ...l, x: r2(l.x * sx), y: r2(l.y * sy), width: r2(l.width * sx), height: r2(l.height * sy) };
    }
    return mapLayer(l, (c) => {
      checkScale(c, k);
      const w = c.width * c.scale, h = c.height * c.scale;
      const w2 = w * k, h2 = h * k;
      const x = c.anchor.horizontal === 'left' ? c.x * k
        : c.anchor.horizontal === 'right' ? W2 - (W - (c.x + w)) * k - w2
        : ((c.x + w / 2) / W) * W2 - w2 / 2;
      const y = c.anchor.vertical === 'top' ? c.y * k
        : c.anchor.vertical === 'bottom' ? H2 - (H - (c.y + h)) * k - h2
        : ((c.y + h / 2) / H) * H2 - h2 / 2;
      return { ...c, x: r2(x), y: r2(y), scale: Number((c.scale * k).toFixed(4)) };
    });
  });

  // 3) Camadas opcionais nesta proporção
  for (const id of rule?.optionalLayerIds ?? []) {
    const idx = layers.findIndex((l) => l.id === id);
    if (idx >= 0 && layers[idx]!.visible) {
      layers[idx] = { ...layers[idx]!, visible: false };
      changes.push(`${layers[idx]!.name}: oculta (opcional em ${aspect})`);
    }
  }
  if (!rule) issues.push({ severity: 'error', code: 'no_aspect_rule', message: `Contrato sem regras para proporção ${aspect}` });

  const document: GraphicDocument = {
    ...master,
    id: opts.id,
    name: `${master.name} — ${format.name}`,
    kind: 'adaptation',
    formatId: format.id,
    revision: 1,
    parentRevision: null,
    width: W2,
    height: H2,
    zones: [],
    layers,
    approval: { status: 'draft' },
  };
  return { document, issues, needsReview: issues.some((i) => i.severity === 'error'), changes };
}
