import { Resvg } from '@resvg/resvg-js';
import {
  validateDocument,
  walkLayers,
  type Effect,
  type GraphicDocument,
  type Layer,
  type TextLayer,
} from '@studio-ai/shared';
import type { Font } from 'opentype.js';
import { loadVerified, sha256, type AssetSource, type StoredAsset } from './assets';
import { readPngInfo } from './png';
import { layoutText, parseFont, type TextLayout } from './text';

/** Versão do renderizador — gravada em cada material gerado para reprodutibilidade. */
export const RENDERER_VERSION = 'graphics-core/0.2.0+resvg-2.6.2';

export type RenderIssue = { severity: 'error' | 'warning'; code: string; message: string; layerId?: string };

export class RenderError extends Error {
  constructor(public readonly issues: RenderIssue[]) {
    super(`Renderização bloqueada: ${issues.filter((i) => i.severity === 'error').map((i) => i.message).join('; ')}`);
  }
}

/** Recursos carregados e verificados por hash, prontos para renderizar. */
export type RenderContext = {
  assets: Map<string, StoredAsset>;
  fonts: Map<string, Font>;
  textLayouts: Map<string, TextLayout>;
};

/** Carrega todos os recursos e fontes do documento conferindo o SHA-256 de cada um. */
export async function prepareRender(doc: GraphicDocument, source: AssetSource): Promise<RenderContext> {
  const issues: RenderIssue[] = [];
  const assets = new Map<string, StoredAsset>();
  const fonts = new Map<string, Font>();

  for (const f of doc.fonts) {
    if (!f.assetId || !f.assetSha256) {
      issues.push({ severity: 'error', code: 'font_file_required', message: `Fonte "${f.family}" sem arquivo — o renderizador não usa fontes do sistema` });
      continue;
    }
    try {
      const asset = await loadVerified(source, f.assetId, f.assetSha256);
      fonts.set(f.id, parseFont(asset.bytes));
    } catch (e) {
      issues.push({ severity: 'error', code: 'font_unavailable', message: (e as Error).message });
    }
  }

  for (const layer of walkLayers(doc.layers)) {
    const ref =
      layer.type === 'image' ? { id: layer.assetId, sha: layer.assetSha256 }
      : layer.type === 'background' && layer.assetId && layer.assetSha256 ? { id: layer.assetId, sha: layer.assetSha256 }
      : null;
    if (!ref || assets.has(ref.id)) continue;
    try {
      const asset = await loadVerified(source, ref.id, ref.sha);
      if (!asset.width || !asset.height) throw new Error(`Recurso ${ref.id} sem dimensões`);
      assets.set(ref.id, asset);
    } catch (e) {
      issues.push({ severity: 'error', code: 'asset_unavailable', message: (e as Error).message, layerId: layer.id });
    }
  }

  const textLayouts = new Map<string, TextLayout>();
  for (const layer of walkLayers(doc.layers)) {
    if (layer.type !== 'text') continue;
    const font = fonts.get(layer.fontId);
    if (!font) continue;
    const lay = layoutText(layer, font);
    if (lay.missingGlyphs.length) {
      issues.push({ severity: 'error', code: 'missing_glyph', message: `Fonte de "${layer.name}" não tem os caracteres: ${lay.missingGlyphs.join(' ')}`, layerId: layer.id });
    }
    textLayouts.set(layer.id, lay);
  }

  if (issues.some((i) => i.severity === 'error')) throw new RenderError(issues);
  return { assets, fonts, textLayouts };
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const n = (v: number) => Number(v.toFixed(3)).toString();

function hexToSvg(hex: string): { color: string; opacity: number } {
  if (hex.length === 9) return { color: hex.slice(0, 7), opacity: parseInt(hex.slice(7), 16) / 255 };
  return { color: hex, opacity: 1 };
}
function fillAttr(hex: string | undefined, prefix = 'fill'): string {
  if (!hex) return `${prefix}="none"`;
  const { color, opacity } = hexToSvg(hex);
  return `${prefix}="${color}"${opacity < 1 ? ` ${prefix}-opacity="${n(opacity)}"` : ''}`;
}

function effectFilter(id: string, effects: Effect[]): string {
  const parts = effects.map((fx) => {
    if (fx.type === 'drop_shadow') {
      const { color, opacity } = hexToSvg(fx.color);
      return `<feDropShadow dx="${n(fx.offsetX)}" dy="${n(fx.offsetY)}" stdDeviation="${n(fx.blur / 2)}" flood-color="${color}" flood-opacity="${n(opacity)}"/>`;
    }
    return `<feGaussianBlur stdDeviation="${n(fx.radius / 2)}"/>`;
  });
  return `<filter id="${id}" x="-50%" y="-50%" width="200%" height="200%">${parts.join('')}</filter>`;
}

type Ctx = RenderContext & { defs: string[]; counter: { v: number } };

function imageMarkup(asset: StoredAsset, x: number, y: number, w: number, h: number, fit: 'cover' | 'contain' | 'stretch', crop?: { x: number; y: number; width: number; height: number }) {
  const sw = asset.width!;
  const sh = asset.height!;
  const c = crop ?? { x: 0, y: 0, width: 1, height: 1 };
  const par = fit === 'cover' ? 'xMidYMid slice' : fit === 'contain' ? 'xMidYMid meet' : 'none';
  const href = `data:${asset.mimeType};base64,${Buffer.from(asset.bytes).toString('base64')}`;
  // Recorte autorizado = viewBox sobre o original; a imagem em si nunca é alterada.
  return `<svg x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" viewBox="${n(c.x * sw)} ${n(c.y * sh)} ${n(c.width * sw)} ${n(c.height * sh)}" preserveAspectRatio="${par}" overflow="hidden"><image width="${sw}" height="${sh}" href="${href}" preserveAspectRatio="none"/></svg>`;
}

function layerMarkup(layer: Layer, ctx: Ctx): string {
  if (!layer.visible) return '';
  const w = layer.width * layer.scale;
  const h = layer.height * layer.scale;
  let body = '';

  switch (layer.type) {
    case 'background': {
      if (layer.color) body += `<rect x="${n(layer.x)}" y="${n(layer.y)}" width="${n(w)}" height="${n(h)}" ${fillAttr(layer.color)}/>`;
      if (layer.assetId) body += imageMarkup(ctx.assets.get(layer.assetId)!, layer.x, layer.y, w, h, 'cover');
      break;
    }
    case 'image':
      body = imageMarkup(ctx.assets.get(layer.assetId)!, layer.x, layer.y, w, h, layer.fit, layer.crop);
      break;
    case 'text': {
      const lay = ctx.textLayouts.get(layer.id);
      if (lay) body = `<path d="${lay.pathData}" ${fillAttr((layer as TextLayer).color)}/>`;
      break;
    }
    case 'shape': {
      const stroke = layer.stroke ? ` ${fillAttr(layer.stroke.color, 'stroke')} stroke-width="${n(layer.stroke.width * layer.scale)}"` : '';
      body = layer.shape === 'rect'
        ? `<rect x="${n(layer.x)}" y="${n(layer.y)}" width="${n(w)}" height="${n(h)}" rx="${n(layer.cornerRadius * layer.scale)}" ${fillAttr(layer.fill)}${stroke}/>`
        : `<ellipse cx="${n(layer.x + w / 2)}" cy="${n(layer.y + h / 2)}" rx="${n(w / 2)}" ry="${n(h / 2)}" ${fillAttr(layer.fill)}${stroke}/>`;
      break;
    }
    case 'vector': {
      const stroke = layer.stroke ? ` ${fillAttr(layer.stroke.color, 'stroke')} stroke-width="${n(layer.stroke.width)}"` : '';
      body = `<svg x="${n(layer.x)}" y="${n(layer.y)}" width="${n(w)}" height="${n(h)}" viewBox="0 0 ${n(layer.viewBoxWidth)} ${n(layer.viewBoxHeight)}"><path d="${esc(layer.path)}" ${fillAttr(layer.fill)}${stroke}/></svg>`;
      break;
    }
    case 'group':
      body = layer.children.map((c) => layerMarkup(c, ctx)).join('');
      break;
    case 'mask': {
      const id = `clip${ctx.counter.v++}`;
      const shape = layer.shape === 'rect'
        ? `<rect x="${n(layer.x)}" y="${n(layer.y)}" width="${n(w)}" height="${n(h)}"/>`
        : `<ellipse cx="${n(layer.x + w / 2)}" cy="${n(layer.y + h / 2)}" rx="${n(w / 2)}" ry="${n(h / 2)}"/>`;
      ctx.defs.push(`<clipPath id="${id}">${shape}</clipPath>`);
      body = `<g clip-path="url(#${id})">${layer.children.map((c) => layerMarkup(c, ctx)).join('')}</g>`;
      break;
    }
  }

  const attrs: string[] = [`data-layer="${esc(layer.id)}"`];
  if (layer.opacity < 1) attrs.push(`opacity="${n(layer.opacity)}"`);
  if (layer.rotation) attrs.push(`transform="rotate(${n(layer.rotation)} ${n(layer.x + w / 2)} ${n(layer.y + h / 2)})"`);
  if (layer.effects.length) {
    const id = `fx${ctx.counter.v++}`;
    ctx.defs.push(effectFilter(id, layer.effects));
    attrs.push(`filter="url(#${id})"`);
  }
  return `<g ${attrs.join(' ')}>${body}</g>`;
}

/** Documento → SVG determinístico (mesma entrada, mesmo texto). */
export function documentToSvg(doc: GraphicDocument, ctx: RenderContext): string {
  const c: Ctx = { ...ctx, defs: [], counter: { v: 0 } };
  const body = doc.layers.map((l) => layerMarkup(l, c)).join('');
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${doc.width}" height="${doc.height}" viewBox="0 0 ${doc.width} ${doc.height}">` +
    (c.defs.length ? `<defs>${c.defs.join('')}</defs>` : '') +
    `<rect width="${doc.width}" height="${doc.height}" ${fillAttr(doc.backgroundColor)}/>` +
    body +
    `</svg>`
  );
}

export type RenderResult = {
  png: Uint8Array;
  sha256: string;
  width: number;
  height: number;
  svg: string;
  rendererVersion: string;
  warnings: RenderIssue[];
  /** Recursos verificados e medidas de texto usados nesta renderização (reaproveitados pelas verificações). */
  context: RenderContext;
};

/** Renderiza o documento em PNG com as dimensões exatas do documento. Sem fontes do sistema. */
export async function renderDocument(doc: GraphicDocument, source: AssetSource): Promise<RenderResult> {
  const validated = validateDocument(doc);
  if (!validated.ok) throw new RenderError(validated.issues);
  const warnings: RenderIssue[] = validated.issues;
  const ctx = await prepareRender(validated.document, source);
  const svg = documentToSvg(validated.document, ctx);
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'original' },
    font: { loadSystemFonts: false },
    background: 'rgba(0,0,0,0)',
  });
  const png = new Uint8Array(resvg.render().asPng());
  const info = readPngInfo(png);
  if (info.width !== doc.width || info.height !== doc.height) {
    throw new RenderError([{ severity: 'error', code: 'dimension_mismatch', message: `PNG ${info.width}×${info.height} ≠ documento ${doc.width}×${doc.height}` }]);
  }
  return { png, sha256: sha256(png), width: info.width, height: info.height, svg, rendererVersion: RENDERER_VERSION, warnings, context: ctx };
}
