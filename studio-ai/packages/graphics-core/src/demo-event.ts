import { GraphicDocumentSchema, type AspectRule, type GraphicDocument } from '@studio-ai/shared';
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { MemoryAssetSource, sha256 } from './assets';
import { imageSize } from './png';

/**
 * EVENTO FICTÍCIO "Noite Neon" — dados de demonstração e de teste.
 * Arquivos em studio-ai/fixtures/demo-event/files (gerados por generate.mjs; fontes OFL).
 */
export const DEMO_EVENT_DIR = resolve(__dirname, '../../../fixtures/demo-event/files');

const FILES = {
  photo: { file: 'artista-ficticio.jpg', mime: 'image/jpeg', kind: 'photo' },
  logo: { file: 'logo-noite-neon.png', mime: 'image/png', kind: 'logo' },
  sponsor: { file: 'logo-patrocinador-ficticio.png', mime: 'image/png', kind: 'logo' },
  texture: { file: 'textura-fundo.jpg', mime: 'image/jpeg', kind: 'background' },
  anton: { file: 'Anton-Regular.ttf', mime: 'font/ttf', kind: 'font' },
  inter: { file: 'Inter-Regular.ttf', mime: 'font/ttf', kind: 'font' },
  interBold: { file: 'Inter-Bold.ttf', mime: 'font/ttf', kind: 'font' },
} as const;
export type DemoAssetKey = keyof typeof FILES;

export type DemoAssetFile = { key: DemoAssetKey; id: string; file: string; mimeType: string; kind: string; bytes: Uint8Array; sha256: string; width: number | null; height: number | null };

export function loadDemoAssetFiles(dir = DEMO_EVENT_DIR, ids?: Partial<Record<DemoAssetKey, string>>): DemoAssetFile[] {
  return (Object.keys(FILES) as DemoAssetKey[]).map((key) => {
    const f = FILES[key];
    const bytes = new Uint8Array(readFileSync(join(dir, f.file)));
    const size = f.mime.startsWith('image/') ? imageSize(bytes, f.mime) : null;
    return { key, id: ids?.[key] ?? `demo-${key}`, file: f.file, mimeType: f.mime, kind: f.kind, bytes, sha256: sha256(bytes), width: size?.width ?? null, height: size?.height ?? null };
  });
}

export function demoAssetSource(files = loadDemoAssetFiles()): MemoryAssetSource {
  const src = new MemoryAssetSource();
  for (const f of files) src.add({ id: f.id, bytes: f.bytes, mimeType: f.mimeType, width: f.width, height: f.height });
  return src;
}

/** Layout principal 1080×1350 do evento fictício, montado só com arquivos originais (Caso A). */
export function buildDemoMaster(files: DemoAssetFile[], opts: { id?: string; projectId?: string } = {}): GraphicDocument {
  const a = Object.fromEntries(files.map((f) => [f.key, f])) as Record<DemoAssetKey, DemoAssetFile>;
  const text = (o: Record<string, unknown>) => ({ type: 'text', role: 'info', anchor: { horizontal: 'center', vertical: 'top' }, align: 'center', lineHeight: 1.1, constraints: { keepAspectRatio: true, minScale: 0.4, maxScale: 2.5, allowCrop: false }, ...o });
  return GraphicDocumentSchema.parse({
    schemaVersion: 1,
    id: opts.id ?? 'demo-master',
    projectId: opts.projectId ?? 'demo-project',
    revision: 1,
    name: 'Noite Neon — Flyer principal',
    kind: 'master',
    width: 1080,
    height: 1350,
    backgroundColor: '#0B0A14',
    fonts: [
      { id: 'f_display', family: 'Anton', weight: 400, assetId: a.anton.id, assetSha256: a.anton.sha256 },
      { id: 'f_body', family: 'Inter', weight: 400, assetId: a.inter.id, assetSha256: a.inter.sha256 },
      { id: 'f_body_bold', family: 'Inter', weight: 700, assetId: a.interBold.id, assetSha256: a.interBold.sha256 },
    ],
    colors: [
      { id: 'c_bg', name: 'Noite', hex: '#0B0A14' },
      { id: 'c_cyan', name: 'Neon ciano', hex: '#36E0FF' },
      { id: 'c_pink', name: 'Neon rosa', hex: '#FF3FA4' },
    ],
    zones: [
      { id: 'hero', name: 'Foto', x: 0, y: 0, width: 1, height: 0.64, layerIds: ['photo'] },
      { id: 'brand', name: 'Marca', x: 0.31, y: 0.04, width: 0.38, height: 0.12, layerIds: ['logo'] },
      { id: 'info', name: 'Informações', x: 0.05, y: 0.62, width: 0.9, height: 0.34, layerIds: ['divider', 'title', 'subtitle', 'date', 'venue', 'cta_bg', 'cta_text'] },
      { id: 'sponsors', name: 'Patrocínio', x: 0.38, y: 0.955, width: 0.24, height: 0.04, layerIds: ['sponsor'] },
    ],
    aspectRules: DEMO_ASPECT_RULES,
    layers: [
      { id: 'bg', name: 'Fundo', type: 'background', role: 'background', x: 0, y: 0, width: 1080, height: 1350, color: '#0B0A14', assetId: a.texture.id, assetSha256: a.texture.sha256, priority: 9, locked: true, constraints: { keepAspectRatio: true, minScale: 0.1, maxScale: 10, allowCrop: true } },
      { id: 'photo', name: 'Artista (fictício)', type: 'image', role: 'photo', x: 0, y: 0, width: 1080, height: 864, assetId: a.photo.id, assetSha256: a.photo.sha256, fit: 'cover', protected: true, priority: 2, constraints: { keepAspectRatio: true, minScale: 0.3, maxScale: 3, allowCrop: true } },
      { id: 'logo', name: 'Logo Noite Neon', type: 'image', role: 'logo', x: 340, y: 54, width: 400, height: 160, assetId: a.logo.id, assetSha256: a.logo.sha256, fit: 'contain', protected: true, priority: 1, locked: true, anchor: { horizontal: 'center', vertical: 'top' }, constraints: { keepAspectRatio: true, minScale: 0.5, maxScale: 2, allowCrop: false } },
      { id: 'divider', name: 'Linha neon', type: 'shape', role: 'decoration', shape: 'rect', x: 440, y: 830, width: 200, height: 6, cornerRadius: 3, fill: '#36E0FF', priority: 8, constraints: { keepAspectRatio: true, minScale: 0.3, maxScale: 3, allowCrop: false } },
      text({ id: 'title', name: 'Título', role: 'headline', x: 60, y: 866, width: 960, height: 170, text: 'NOITE NEON', fontId: 'f_display', fontSize: 150, color: '#FFFFFF', required: true, priority: 1, locked: true }),
      text({ id: 'subtitle', name: 'Edição', role: 'subheadline', x: 60, y: 1040, width: 960, height: 44, text: 'Festival Fictício · Edição 01', uppercase: true, fontId: 'f_body_bold', fontSize: 32, letterSpacing: 4, color: '#36E0FF', priority: 3 }),
      text({ id: 'date', name: 'Data', x: 60, y: 1094, width: 960, height: 70, text: 'SÁB 20.12 · 22H', fontId: 'f_body_bold', fontSize: 58, color: '#FFFFFF', required: true, priority: 1 }),
      text({ id: 'venue', name: 'Local', x: 60, y: 1170, width: 960, height: 42, text: 'ARENA DEMO — SÃO PAULO', fontId: 'f_body', fontSize: 32, color: '#C9C6D8', required: true, priority: 2 }),
      { id: 'cta_bg', name: 'Botão', type: 'shape', role: 'cta', shape: 'rect', x: 300, y: 1228, width: 480, height: 64, cornerRadius: 32, fill: '#FF3FA4', priority: 6, constraints: { keepAspectRatio: true, minScale: 0.4, maxScale: 2.5, allowCrop: false } },
      text({ id: 'cta_text', name: 'Chamada', role: 'cta', x: 300, y: 1242, width: 480, height: 40, text: 'INGRESSOS NA SYMPLA', fontId: 'f_body_bold', fontSize: 28, letterSpacing: 1, color: '#0B0A14', required: true, priority: 5 }),
      { id: 'sponsor', name: 'Patrocinador (fictício)', type: 'image', role: 'logo', x: 465, y: 1300, width: 150, height: 50, assetId: a.sponsor.id, assetSha256: a.sponsor.sha256, fit: 'contain', protected: true, priority: 4, constraints: { keepAspectRatio: true, minScale: 0.5, maxScale: 2.5, allowCrop: false } },
    ],
  });
}

const t = (x: number, y: number, width: number, height: number, extra: Partial<AspectRule['zoneTargets'][string]> = {}) => ({
  x, y, width, height, bleed: false, fit: 'contain' as const, align: { horizontal: 'center' as const, vertical: 'middle' as const }, ...extra,
});

/** Regras aprovadas por proporção (presets do evento). Coordenadas relativas à área segura. */
export const DEMO_ASPECT_RULES: AspectRule[] = [
  {
    aspect: 'tall', arrangement: 'stack', optionalLayerIds: [],
    zoneTargets: {
      hero: t(0, 0, 1, 0.6, { bleed: true, fit: 'cover' }),
      brand: t(0.2, 0, 0.6, 0.11, { align: { horizontal: 'center', vertical: 'top' } }),
      info: t(0, 0.56, 1, 0.36),
      sponsors: t(0.35, 0.94, 0.3, 0.06),
    },
  },
  {
    aspect: 'portrait', arrangement: 'stack', optionalLayerIds: [],
    zoneTargets: {
      hero: t(0, 0, 1, 0.62, { bleed: true, fit: 'cover' }),
      brand: t(0.28, 0, 0.44, 0.12, { align: { horizontal: 'center', vertical: 'top' } }),
      info: t(0, 0.55, 1, 0.37),
      sponsors: t(0.38, 0.94, 0.24, 0.06),
    },
  },
  {
    aspect: 'wide', arrangement: 'side_by_side', optionalLayerIds: [],
    zoneTargets: {
      hero: t(0.52, 0, 0.48, 1, { bleed: true, fit: 'cover' }),
      brand: t(0, 0, 0.4, 0.2, { align: { horizontal: 'left', vertical: 'top' } }),
      info: t(0, 0.24, 0.46, 0.62, { align: { horizontal: 'left', vertical: 'middle' } }),
      sponsors: t(0, 0.9, 0.16, 0.1, { align: { horizontal: 'left', vertical: 'bottom' } }),
    },
  },
  {
    aspect: 'landscape', arrangement: 'side_by_side', optionalLayerIds: [],
    zoneTargets: {
      hero: t(0.5, 0, 0.5, 1, { bleed: true, fit: 'cover' }),
      brand: t(0, 0, 0.42, 0.2, { align: { horizontal: 'left', vertical: 'top' } }),
      info: t(0, 0.25, 0.46, 0.6, { align: { horizontal: 'left', vertical: 'middle' } }),
      sponsors: t(0, 0.9, 0.16, 0.1, { align: { horizontal: 'left', vertical: 'bottom' } }),
    },
  },
];

/** Aprova a revisão (cópia) — no backend isso é feito pela API e registrado em `approvals`. */
export function markApproved(doc: GraphicDocument, by: string, at: Date, contractId: string): GraphicDocument {
  return { ...doc, approval: { status: 'approved', approvedBy: by, approvedAt: at.toISOString(), identityContractId: contractId } };
}
