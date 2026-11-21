import { walkLayers, type GraphicDocument, type Layer } from '@studio-ai/shared';

/** Operações puras sobre o documento usadas pelo editor (sem efeitos colaterais). */
export type Box = { x: number; y: number; width: number; height: number };

export function updateLayer(doc: GraphicDocument, id: string, patch: (l: Layer) => Layer): GraphicDocument {
  const map = (layers: Layer[]): Layer[] =>
    layers.map((l) => {
      if (l.id === id) return patch(l);
      if (l.type === 'group' || l.type === 'mask') return { ...l, children: map(l.children) } as Layer;
      return l;
    });
  return { ...doc, layers: map(doc.layers) };
}

export function findLayer(doc: GraphicDocument, id: string | null): Layer | undefined {
  if (!id) return undefined;
  return [...walkLayers(doc.layers)].find((l) => l.id === id);
}

export function layerBox(l: Layer, textBounds?: Record<string, Box>): Box {
  if (l.type === 'text' && textBounds?.[l.id]) return textBounds[l.id]!;
  return { x: l.x, y: l.y, width: l.width * l.scale, height: l.height * l.scale };
}

/** Camada visível mais acima no ponto (fundo não é selecionável pelo toque). */
export function hitTest(doc: GraphicDocument, x: number, y: number, textBounds?: Record<string, Box>): Layer | undefined {
  const all = [...walkLayers(doc.layers)].filter((l) => l.visible && l.role !== 'background' && l.type !== 'background' && l.type !== 'group' && l.type !== 'mask');
  for (let i = all.length - 1; i >= 0; i--) {
    const l = all[i]!;
    const b = layerBox(l, textBounds);
    const pad = 8;
    if (x >= b.x - pad && x <= b.x + b.width + pad && y >= b.y - pad && y <= b.y + b.height + pad) return l;
  }
  return undefined;
}

export function moveBy(l: Layer, dx: number, dy: number): Layer {
  return { ...l, x: Math.round(l.x + dx), y: Math.round(l.y + dy) };
}

/** Escala proporcional respeitando os limites da camada (nunca distorce). */
export function scaleBy(l: Layer, factor: number): Layer {
  const next = Math.min(l.constraints.maxScale, Math.max(l.constraints.minScale, Number((l.scale * factor).toFixed(4))));
  const w = l.width * l.scale, h = l.height * l.scale;
  const w2 = l.width * next, h2 = l.height * next;
  // mantém o centro no lugar
  return { ...l, scale: next, x: Math.round(l.x + (w - w2) / 2), y: Math.round(l.y + (h - h2) / 2) };
}

export function alignTo(l: Layer, doc: GraphicDocument, h: 'left' | 'center' | 'right' | null, v: 'top' | 'middle' | 'bottom' | null, margin: number): Layer {
  const w = l.width * l.scale, hh = l.height * l.scale;
  let { x, y } = l;
  if (h === 'left') x = margin;
  if (h === 'center') x = (doc.width - w) / 2;
  if (h === 'right') x = doc.width - margin - w;
  if (v === 'top') y = margin;
  if (v === 'middle') y = (doc.height - hh) / 2;
  if (v === 'bottom') y = doc.height - margin - hh;
  return { ...l, x: Math.round(x), y: Math.round(y) };
}

/** Pilha de desfazer/refazer com limite. */
export type History = { past: GraphicDocument[]; future: GraphicDocument[] };
export const HISTORY_LIMIT = 50;
export function pushHistory(h: History, current: GraphicDocument): History {
  return { past: [...h.past, current].slice(-HISTORY_LIMIT), future: [] };
}
