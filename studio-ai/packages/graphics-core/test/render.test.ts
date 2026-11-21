import { GraphicDocumentSchema, type GraphicDocument } from '@studio-ai/shared';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';
import {
  AssetIntegrityError,
  MemoryAssetSource,
  RenderError,
  demoAssetSource,
  loadDemoAssetFiles,
  readPngInfo,
  renderDocument,
  sha256,
} from '../src';

const files = loadDemoAssetFiles();
const byKey = Object.fromEntries(files.map((f) => [f.key, f]));
const anton = byKey.anton!;

function doc(layers: unknown[], extra: Record<string, unknown> = {}): GraphicDocument {
  return GraphicDocumentSchema.parse({
    schemaVersion: 1, id: 'd', projectId: 'p', revision: 1, name: 'teste', width: 400, height: 300,
    backgroundColor: '#00000000',
    fonts: [{ id: 'f', family: 'Anton', weight: 400, assetId: anton.id, assetSha256: anton.sha256 }],
    layers, ...extra,
  });
}

async function pixel(png: Uint8Array, x: number, y: number) {
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const i = (y * info.width + x) * 4;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]];
}

describe('renderizador', () => {
  it('exporta exatamente as dimensões do documento', async () => {
    for (const [w, h] of [[1080, 1920], [1080, 1440], [1600, 838], [1920, 1080], [37, 991]]) {
      const r = await renderDocument(doc([], { width: w, height: h }), demoAssetSource(files));
      expect(readPngInfo(r.png)).toMatchObject({ width: w, height: h });
    }
  });

  it('é determinístico: mesma entrada, mesmos bytes', async () => {
    const d = doc([{ id: 't', name: 'T', type: 'text', x: 10, y: 10, width: 380, height: 120, text: 'SÁB 20.12', fontId: 'f', fontSize: 80, color: '#FF3FA4' }]);
    const a = await renderDocument(d, demoAssetSource(files));
    const b = await renderDocument(d, demoAssetSource(files));
    expect(a.sha256).toBe(b.sha256);
  });

  it('preserva transparência (PNG RGBA, fundo transparente)', async () => {
    const r = await renderDocument(doc([{ id: 's', name: 'S', type: 'shape', shape: 'rect', x: 100, y: 100, width: 50, height: 50, fill: '#FF0000' }]), demoAssetSource(files));
    expect(readPngInfo(r.png).hasAlpha).toBe(true);
    expect((await pixel(r.png, 5, 5))[3]).toBe(0);
    expect(await pixel(r.png, 125, 125)).toEqual([255, 0, 0, 255]);
  });

  it('respeita a ordem de sobreposição (última camada por cima)', async () => {
    const layers = [
      { id: 'a', name: 'A', type: 'shape', shape: 'rect', x: 0, y: 0, width: 200, height: 200, fill: '#FF0000' },
      { id: 'b', name: 'B', type: 'shape', shape: 'rect', x: 100, y: 100, width: 200, height: 200, fill: '#0000FF' },
    ];
    const r1 = await renderDocument(doc(layers), demoAssetSource(files));
    expect(await pixel(r1.png, 150, 150)).toEqual([0, 0, 255, 255]);
    const r2 = await renderDocument(doc([...layers].reverse()), demoAssetSource(files));
    expect(await pixel(r2.png, 150, 150)).toEqual([255, 0, 0, 255]);
  });

  it('aplica opacidade', async () => {
    const r = await renderDocument(doc([{ id: 's', name: 'S', type: 'shape', shape: 'rect', x: 0, y: 0, width: 400, height: 300, fill: '#FFFFFF', opacity: 0.5 }]), demoAssetSource(files));
    const [, , , a] = await pixel(r.png, 200, 150);
    expect(a).toBeGreaterThan(120);
    expect(a).toBeLessThan(135);
  });

  it('desenha o texto com a fonte do projeto (tinta dentro da caixa)', async () => {
    const r = await renderDocument(doc([{ id: 't', name: 'T', type: 'text', x: 20, y: 20, width: 360, height: 200, text: 'I', fontId: 'f', fontSize: 200, color: '#FFFFFF', align: 'center' }]), demoAssetSource(files));
    const lay = r.context.textLayouts.get('t')!;
    const cx = Math.round(lay.bounds.x + lay.bounds.width / 2);
    const cy = Math.round(lay.bounds.y + lay.bounds.height / 2);
    expect(await pixel(r.png, cx, cy)).toEqual([255, 255, 255, 255]);
    expect(lay.bounds.y).toBeGreaterThanOrEqual(19);
  });

  it('bloqueia fonte sem arquivo — nunca usa fonte do sistema', async () => {
    const d = doc([{ id: 't', name: 'T', type: 'text', x: 0, y: 0, width: 300, height: 100, text: 'Oi', fontId: 'f', fontSize: 40, color: '#FFFFFF' }], {
      fonts: [{ id: 'f', family: 'Helvetica', weight: 400 }],
    });
    await expect(renderDocument(d, demoAssetSource(files))).rejects.toThrow(RenderError);
  });

  it('bloqueia caractere sem glifo na fonte em vez de substituir', async () => {
    const d = doc([{ id: 't', name: 'T', type: 'text', x: 0, y: 0, width: 300, height: 100, text: 'NEON 漢', fontId: 'f', fontSize: 40, color: '#FFFFFF' }]);
    await expect(renderDocument(d, demoAssetSource(files))).rejects.toThrow(/caracteres: 漢/);
  });

  it('bloqueia recurso ausente', async () => {
    const d = doc([{ id: 'i', name: 'I', type: 'image', x: 0, y: 0, width: 100, height: 100, assetId: 'nao-existe', assetSha256: 'a'.repeat(64) }]);
    await expect(renderDocument(d, demoAssetSource(files))).rejects.toThrow(/Recurso ausente/);
  });

  it('recusa arquivo original adulterado (hash diferente do registrado)', async () => {
    const logo = byKey.logo!;
    const tampered = new MemoryAssetSource();
    for (const f of files) {
      const bytes = f.key === 'logo' ? Uint8Array.from([...f.bytes.slice(0, -1), 0]) : f.bytes;
      tampered.add({ id: f.id, bytes, mimeType: f.mimeType, width: f.width, height: f.height, sha256: f.sha256 });
    }
    const d = doc([{ id: 'l', name: 'Logo', type: 'image', x: 0, y: 0, width: 200, height: 80, assetId: logo.id, assetSha256: logo.sha256, fit: 'contain' }]);
    await expect(renderDocument(d, tampered)).rejects.toThrow(RenderError);
    await expect(renderDocument(d, tampered)).rejects.toThrow(/Integridade violada/);
    expect(new AssetIntegrityError('x', 'a', 'b')).toBeInstanceOf(Error);
  });

  it('não altera os bytes dos originais ao renderizar', async () => {
    const before = files.map((f) => sha256(f.bytes));
    const logo = byKey.logo!, photo = byKey.photo!;
    await renderDocument(doc([
      { id: 'p', name: 'Foto', type: 'image', x: 0, y: 0, width: 400, height: 300, assetId: photo.id, assetSha256: photo.sha256, fit: 'cover', crop: { x: 0.1, y: 0.1, width: 0.8, height: 0.6 } },
      { id: 'l', name: 'Logo', type: 'image', x: 0, y: 0, width: 200, height: 80, assetId: logo.id, assetSha256: logo.sha256, fit: 'contain' },
    ]), demoAssetSource(files));
    expect(files.map((f) => sha256(f.bytes))).toEqual(before);
  });

  it('imagem em contain mantém proporção (sem distorção) e deixa transparência nas sobras', async () => {
    const logo = byKey.logo!; // 1200×480 → em caixa 400×300 ocupa 400×160 centralizado
    const r = await renderDocument(doc([{ id: 'l', name: 'Logo', type: 'image', x: 0, y: 0, width: 400, height: 300, assetId: logo.id, assetSha256: logo.sha256, fit: 'contain' }]), demoAssetSource(files));
    expect((await pixel(r.png, 200, 20))[3]).toBe(0); // faixa superior vazia
    expect((await pixel(r.png, 200, 280))[3]).toBe(0); // faixa inferior vazia
  });
});
