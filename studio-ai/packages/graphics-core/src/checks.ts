import { walkLayers, type FormatPreset, type GraphicDocument, type Layer, type VisualIdentityContract } from '@studio-ai/shared';
import { sha256, type AssetSource } from './assets';
import { readPngInfo } from './png';
import type { RenderContext } from './render';

/**
 * Verificações determinísticas do Agente de Qualidade (seção 12 e 21).
 * Não comparam pixels de logos redimensionadas: conferem origem (id + SHA-256 dos bytes armazenados),
 * transformações aplicadas e geometria.
 */
export type CheckSeverity = 'critical' | 'error' | 'warning';
export type CheckResult = { code: string; severity: CheckSeverity; message: string; layerId?: string };
export type QualityReport = { passed: boolean; results: CheckResult[]; checkedAt: string; checks: string[] };

type Box = { x: number; y: number; width: number; height: number };
const boxOf = (l: Layer): Box => ({ x: l.x, y: l.y, width: l.width * l.scale, height: l.height * l.scale });
const intersects = (a: Box, b: Box) => a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;
const inside = (a: Box, b: Box, tol = 0.5) => a.x >= b.x - tol && a.y >= b.y - tol && a.x + a.width <= b.x + b.width + tol && a.y + a.height <= b.y + b.height + tol;

export async function runQualityChecks(input: {
  document: GraphicDocument;
  contract: VisualIdentityContract;
  format: FormatPreset;
  png: Uint8Array;
  render: RenderContext;
  assets: AssetSource;
  now?: Date;
}): Promise<QualityReport> {
  const { document: doc, contract, format, png, render } = input;
  const results: CheckResult[] = [];
  const checks: string[] = [];
  const add = (r: CheckResult) => results.push(r);
  const all = [...walkLayers(doc.layers)];
  const byId = new Map(all.map((l) => [l.id, l]));
  const canvas: Box = { x: 0, y: 0, width: doc.width, height: doc.height };
  const m = format.safeMargin;
  const safe: Box = { x: m, y: m, width: doc.width - 2 * m, height: doc.height - 2 * m };

  checks.push('dimensões exatas');
  const info = readPngInfo(png);
  if (info.width !== format.width || info.height !== format.height) {
    add({ code: 'dimensions', severity: 'critical', message: `Exportado ${info.width}×${info.height}, esperado ${format.width}×${format.height}` });
  }

  checks.push('integridade e origem dos recursos protegidos');
  for (const p of contract.protectedAssets) {
    const stored = await input.assets.get(p.assetId);
    if (!stored) {
      add({ code: 'asset_missing', severity: 'critical', message: `Recurso protegido ${p.assetId} não encontrado no armazenamento` });
      continue;
    }
    if (sha256(stored.bytes) !== p.sha256) {
      add({ code: 'asset_tampered', severity: 'critical', message: `Arquivo original ${p.assetId} foi alterado (hash diferente do aprovado)` });
    }
    if (p.kind === 'font') continue;
    const uses = all.filter((l) => l.type === 'image' && l.assetId === p.assetId);
    for (const l of uses) {
      if (l.type === 'image' && l.assetSha256 !== p.sha256) {
        add({ code: 'asset_substituted', severity: 'critical', layerId: l.id, message: `"${l.name}" aponta para outra versão do recurso protegido` });
      }
    }
    if (p.required && !uses.some((l) => l.visible)) {
      add({ code: 'required_logo_missing', severity: 'critical', message: `Logo obrigatória ${p.assetId} ausente ou oculta` });
    }
  }
  // camada de imagem protegida trocada por outro arquivo
  for (const el of contract.elements) {
    const l = byId.get(el.layerId);
    if (!l) {
      if (el.role === 'logo' || el.approvedText) add({ code: 'element_missing', severity: 'critical', layerId: el.layerId, message: `Elemento aprovado ${el.layerId} não existe na adaptação` });
      continue;
    }
    if (l.type === 'image' && (el.role === 'logo' || el.role === 'photo')) {
      const prot = contract.protectedAssets.find((p) => p.assetId === l.assetId);
      if (!prot) add({ code: 'asset_replaced', severity: 'critical', layerId: l.id, message: `"${l.name}" usa um arquivo que não está no contrato aprovado` });
    }
  }

  checks.push('distorção de proporção');
  for (const l of all) {
    if (l.type !== 'image') continue;
    if (l.fit === 'stretch') {
      const a = render.assets.get(l.assetId);
      const srcRatio = a && a.width && a.height ? a.width / a.height : null;
      const boxRatio = (l.width * l.scale) / (l.height * l.scale);
      if (srcRatio && Math.abs(srcRatio - boxRatio) / srcRatio > 0.005) {
        add({ code: 'distortion', severity: l.protected ? 'critical' : 'error', layerId: l.id, message: `"${l.name}" está distorcida (${srcRatio.toFixed(3)} → ${boxRatio.toFixed(3)})` });
      }
    }
    const el = contract.elements.find((e) => e.layerId === l.id);
    if (el && !el.allowCrop && l.crop) {
      add({ code: 'unauthorized_crop', severity: 'critical', layerId: l.id, message: `"${l.name}" recebeu recorte não autorizado` });
    }
  }

  checks.push('textos obrigatórios');
  for (const el of contract.elements) {
    if (el.approvedText === undefined) continue;
    const l = byId.get(el.layerId);
    if (l?.type === 'text') {
      if (l.text !== el.approvedText) add({ code: 'text_changed', severity: 'critical', layerId: l.id, message: `Texto obrigatório alterado: "${l.text}" ≠ "${el.approvedText}"` });
      if (!l.visible) add({ code: 'text_hidden', severity: 'critical', layerId: l.id, message: `Texto obrigatório oculto: "${el.approvedText}"` });
    }
  }

  checks.push('fontes conforme o contrato');
  for (const f of doc.fonts) {
    if (!contract.fonts.some((cf) => cf.family === f.family && cf.weight === f.weight && cf.sha256 === f.assetSha256)) {
      add({ code: 'font_not_approved', severity: 'critical', message: `Fonte ${f.family} ${f.weight} não corresponde ao arquivo aprovado` });
    }
  }

  checks.push('cortes e margens');
  const textBoxes = new Map<string, Box>();
  for (const l of all) {
    if (!l.visible || l.role === 'background' || l.type === 'background' || l.type === 'group' || l.type === 'mask') continue;
    const box = l.type === 'text' && render.textLayouts.get(l.id) ? render.textLayouts.get(l.id)!.bounds : boxOf(l);
    if (l.type === 'text') textBoxes.set(l.id, box);
    const lay = l.type === 'text' ? render.textLayouts.get(l.id) : undefined;
    if (lay?.overflowX || lay?.overflowY) add({ code: 'text_overflow', severity: 'error', layerId: l.id, message: `Texto "${l.name}" excede a caixa da camada` });
    if (!l.constraints.allowCrop && !inside(box, canvas)) {
      add({ code: 'cut_off', severity: l.role === 'logo' || l.type === 'text' ? 'critical' : 'error', layerId: l.id, message: `"${l.name}" está cortado fora do quadro` });
    } else if ((l.type === 'text' || l.role === 'logo') && !inside(box, safe)) {
      add({ code: 'outside_safe_area', severity: 'warning', layerId: l.id, message: `"${l.name}" invade a margem de segurança de ${m}px` });
    }
  }

  checks.push('sobreposições');
  const important = all.filter((l) => l.visible && (l.type === 'text' || l.role === 'logo') && l.priority <= 4);
  for (let i = 0; i < important.length; i++) {
    for (let j = i + 1; j < important.length; j++) {
      const a = important[i]!, b = important[j]!;
      const ba = textBoxes.get(a.id) ?? boxOf(a), bb = textBoxes.get(b.id) ?? boxOf(b);
      if (intersects(ba, bb)) add({ code: 'overlap', severity: 'critical', layerId: a.id, message: `"${a.name}" sobrepõe "${b.name}"` });
    }
  }

  checks.push('elementos bloqueados');
  for (const el of contract.elements) {
    const l = byId.get(el.layerId);
    if (el.locked && l && !l.locked) add({ code: 'unlocked', severity: 'error', layerId: l.id, message: `"${l.name}" foi desbloqueado sem autorização` });
  }

  return {
    passed: !results.some((r) => r.severity === 'critical' || r.severity === 'error'),
    results,
    checkedAt: (input.now ?? new Date()).toISOString(),
    checks,
  };
}
