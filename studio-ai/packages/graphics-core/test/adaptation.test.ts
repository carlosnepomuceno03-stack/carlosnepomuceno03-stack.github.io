import { BUILT_IN_FORMATS, getFormat, walkLayers, type GraphicDocument, type Layer } from '@studio-ai/shared';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';
import {
  DEMO_ASPECT_RULES,
  DEMO_EVENT_DIR,
  adaptDocument,
  buildDemoMaster,
  createIdentityContract,
  demoAssetSource,
  loadDemoAssetFiles,
  markApproved,
  produceAdaptation,
  renderDocument,
  runQualityChecks,
  sha256,
} from '../src';

const now = new Date('2026-11-21T12:00:00Z');
const files = loadDemoAssetFiles();
const draft = buildDemoMaster(files);
const contract = createIdentityContract(draft, { id: 'c1', approvedBy: 'u1', now, aspectRules: DEMO_ASPECT_RULES });
const master = markApproved(draft, 'u1', now, contract.id);
const flat = (d: GraphicDocument) => new Map([...walkLayers(d.layers)].map((l) => [l.id, l]));

describe('contrato de identidade', () => {
  it('congela recursos protegidos, fontes e textos obrigatórios', () => {
    expect(contract.protectedAssets.map((p) => p.kind).sort()).toEqual(['font', 'font', 'font', 'logo', 'logo', 'photo']);
    expect(contract.protectedAssets.filter((p) => p.required)).toHaveLength(2);
    const texts = contract.elements.filter((e) => e.approvedText).map((e) => e.approvedText);
    expect(texts).toEqual(['NOITE NEON', 'SÁB 20.12 · 22H', 'ARENA DEMO — SÃO PAULO', 'INGRESSOS NA SYMPLA']);
    expect(contract.sourceDocumentRevision).toBe(1);
  });
  it('só nasce de layout principal', () => {
    expect(() => createIdentityContract({ ...draft, kind: 'adaptation' }, { id: 'x', approvedBy: 'u', now, aspectRules: [] })).toThrow();
  });
});

describe('motor de adaptação', () => {
  it('exige layout aprovado e contrato da mesma revisão', () => {
    expect(() => adaptDocument(draft, contract, getFormat('story')!, { id: 'a' })).toThrow(/aprovado/);
    expect(() => adaptDocument({ ...master, revision: 2 }, contract, getFormat('story')!, { id: 'a' })).toThrow(/não corresponde/);
  });

  it.each(BUILT_IN_FORMATS.map((f) => [f.id, f] as const))('%s: preserva recursos, textos e proporções', (_id, format) => {
    const { document, needsReview, issues } = adaptDocument(master, contract, format, { id: `a-${format.id}` });
    expect(issues).toEqual([]);
    expect(needsReview).toBe(false);
    expect([document.width, document.height]).toEqual([format.width, format.height]);
    const before = flat(master);
    for (const l of walkLayers(document.layers)) {
      const o = before.get(l.id)!;
      expect(l.type).toBe(o.type);
      if (l.type === 'image' && o.type === 'image') {
        expect(l.assetId).toBe(o.assetId);
        expect(l.assetSha256).toBe(o.assetSha256);
        expect(l.fit).toBe(o.fit);
        expect(l.crop).toEqual(o.crop);
        if (l.role === 'logo') {
          // escala uniforme: a caixa mantém exatamente a proporção original
          expect((l.width * l.scale) / (l.height * l.scale)).toBeCloseTo(o.width / o.height, 6);
        }
      }
      if (l.type === 'text' && o.type === 'text') {
        expect(l.text).toBe(o.text);
        expect(l.fontId).toBe(o.fontId);
      }
    }
    expect(master.layers.find((l) => l.id === 'title')).toMatchObject({ x: 60, y: 866, scale: 1 }); // original intacto
  });

  it('solicita revisão quando falta regra para a proporção, em vez de improvisar', () => {
    const square = { id: 'sq', name: 'Quadrado', width: 1080, height: 1080, safeMargin: 48, builtIn: false };
    const r = adaptDocument(master, contract, square, { id: 'a' });
    expect(r.needsReview).toBe(true);
    expect(r.issues.map((i) => i.code)).toContain('no_aspect_rule');
  });

  it('solicita revisão quando a escala sairia dos limites aprovados', () => {
    const tiny = { id: 'tiny', name: 'Mini', width: 300, height: 400, safeMargin: 10, builtIn: false };
    const r = adaptDocument(master, contract, tiny, { id: 'a' });
    expect(r.needsReview).toBe(true);
    expect(r.issues.map((i) => i.code)).toContain('scale_out_of_bounds');
  });

  it('oculta camadas opcionais da proporção e registra a mudança', () => {
    const rules = DEMO_ASPECT_RULES.map((r) => (r.aspect === 'wide' ? { ...r, optionalLayerIds: ['divider'] } : r));
    const c2 = createIdentityContract(draft, { id: 'c2', approvedBy: 'u1', now, aspectRules: rules });
    const r = adaptDocument(markApproved(draft, 'u1', now, 'c2'), c2, getFormat('sympla')!, { id: 'a' });
    expect(flat(r.document).get('divider')?.visible).toBe(false);
    expect(r.changes.join(' ')).toMatch(/Linha neon: oculta/);
  });
});

describe('produção completa do evento fictício', () => {
  it('gera Story, Feed, Sympla e Telão prontos para revisão humana, com dimensões exatas', async () => {
    const assets = demoAssetSource(files);
    const diskBefore = readdirSync(DEMO_EVENT_DIR).map((f) => sha256(readFileSync(join(DEMO_EVENT_DIR, f))));
    for (const format of BUILT_IN_FORMATS) {
      const r = await produceAdaptation(master, contract, format, assets, { id: `m-${format.id}`, now });
      expect(r.quality?.results).toEqual([]);
      expect(r.status).toBe('ready_for_review');
      const meta = await sharp(r.render!.png).metadata(); // abre em software de imagem compatível
      expect([meta.format, meta.width, meta.height]).toEqual(['png', format.width, format.height]);
      expect(r.render!.rendererVersion).toMatch(/graphics-core/);
    }
    // arquivos originais no disco continuam idênticos
    expect(readdirSync(DEMO_EVENT_DIR).map((f) => sha256(readFileSync(join(DEMO_EVENT_DIR, f))))).toEqual(diskBefore);
  }, 60_000);
});

describe('verificações de qualidade', () => {
  const format = getFormat('feed')!;
  const assets = demoAssetSource(files);
  const base = adaptDocument(master, contract, format, { id: 'q' }).document;

  async function check(mutate: (layers: Layer[]) => Layer[]) {
    const document = { ...base, layers: mutate(structuredClone(base.layers)) };
    const r = await renderDocument(document, assets);
    return runQualityChecks({ document, contract, format, png: r.png, render: r.context, assets, now });
  }
  const set = (id: string, patch: Record<string, unknown>) => (ls: Layer[]) => ls.map((l) => (l.id === id ? ({ ...l, ...patch } as Layer) : l));
  const codes = (r: { results: { code: string }[] }) => r.results.map((x) => x.code);

  it('aprova a adaptação íntegra', async () => {
    expect((await check((l) => l)).passed).toBe(true);
  });
  it('detecta texto obrigatório alterado', async () => {
    const r = await check(set('date', { text: 'DOM 21.12 · 22H' }));
    expect(r.passed).toBe(false);
    expect(codes(r)).toContain('text_changed');
  });
  it('detecta logo obrigatória ausente', async () => {
    const r = await check((ls) => ls.filter((l) => l.id !== 'sponsor'));
    expect(codes(r)).toEqual(expect.arrayContaining(['required_logo_missing', 'element_missing']));
  });
  it('detecta logo substituída por outro arquivo', async () => {
    const photo = files.find((f) => f.key === 'photo')!;
    const tex = files.find((f) => f.key === 'texture')!;
    const r = await check(set('logo', { assetId: tex.id, assetSha256: tex.sha256 }));
    expect(codes(r)).toContain('asset_replaced');
    expect(photo).toBeTruthy();
  });
  it('detecta elemento cortado fora do quadro', async () => {
    const r = await check(set('logo', { x: -150 }));
    expect(codes(r)).toContain('cut_off');
  });
  it('detecta sobreposição de textos importantes', async () => {
    const title = base.layers.find((l) => l.id === 'title')!;
    const r = await check(set('date', { y: title.y + 5 }));
    expect(codes(r)).toContain('overlap');
  });
  it('detecta distorção de imagem esticada', async () => {
    const r = await check(set('photo', { fit: 'stretch', protected: false }));
    expect(codes(r)).toContain('distortion');
  });
  it('detecta recorte não autorizado na logo', async () => {
    const r = await check(set('logo', { crop: { x: 0, y: 0, width: 0.5, height: 1 } }));
    expect(codes(r)).toContain('unauthorized_crop');
  });
  it('detecta desbloqueio não autorizado', async () => {
    const r = await check(set('title', { locked: false }));
    expect(codes(r)).toContain('unlocked');
  });
  it('avisa (sem reprovar) quando texto invade a margem de segurança', async () => {
    const r = await check(set('subtitle', { x: 20, align: 'left' }));
    expect(r.results.find((x) => x.code === 'outside_safe_area')?.severity).toBe('warning');
  });
});
