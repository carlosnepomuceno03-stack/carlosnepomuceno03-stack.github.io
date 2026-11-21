import { imageSize, sha256 } from '@studio-ai/graphics-core';
import { MAX_UPLOAD_BYTES } from '@studio-ai/shared';

/**
 * Validação de upload pelo CONTEÚDO (assinatura binária), não pela extensão ou pelo content-type declarado.
 */
export type DetectedFile = { mimeType: string; family: 'image' | 'font'; width: number | null; height: number | null; sha256: string; size: number };

export class UploadError extends Error {
  constructor(message: string, public readonly status = 422) {
    super(message);
  }
}

function sniff(b: Uint8Array): string | null {
  const at = (i: number, ...bytes: number[]) => bytes.every((x, k) => b[i + k] === x);
  if (at(0, 0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a)) return 'image/png';
  if (at(0, 0xff, 0xd8, 0xff)) return 'image/jpeg';
  if (at(0, 0x52, 0x49, 0x46, 0x46) && at(8, 0x57, 0x45, 0x42, 0x50)) return 'image/webp';
  if (at(0, 0x00, 0x01, 0x00, 0x00) || at(0, 0x74, 0x72, 0x75, 0x65)) return 'font/ttf';
  if (at(0, 0x4f, 0x54, 0x54, 0x4f)) return 'font/otf';
  return null;
}

const KIND_FAMILY: Record<string, 'image' | 'font'> = {
  photo: 'image', logo: 'image', graphic: 'image', background: 'image', reference_image: 'image', font: 'font',
};

export function inspectUpload(bytes: Uint8Array, kind: string): DetectedFile {
  if (!bytes.length) throw new UploadError('Arquivo vazio');
  if (bytes.length > MAX_UPLOAD_BYTES) throw new UploadError('Arquivo maior que 40 MB', 413);
  const family = KIND_FAMILY[kind];
  if (!family) throw new UploadError(`Tipo de recurso inválido: ${kind}`);
  const mimeType = sniff(bytes);
  if (!mimeType) throw new UploadError('Formato não suportado. Envie PNG, JPEG, WebP, TTF ou OTF.');
  if (!mimeType.startsWith(family === 'image' ? 'image/' : 'font/')) throw new UploadError(`Arquivo não corresponde ao tipo "${kind}"`);
  let width: number | null = null;
  let height: number | null = null;
  if (mimeType === 'image/png' || mimeType === 'image/jpeg') {
    try {
      ({ width, height } = imageSize(bytes, mimeType));
    } catch {
      throw new UploadError('Imagem corrompida');
    }
    if (width < 1 || height < 1 || width > 12000 || height > 12000) throw new UploadError('Dimensões de imagem fora do limite (até 12000 px)');
  }
  if (mimeType === 'image/webp') throw new UploadError('WebP será suportado na próxima versão do renderizador; envie PNG ou JPEG');
  return { mimeType, family, width, height, sha256: sha256(bytes), size: bytes.length };
}

export function extensionFor(mime: string): string {
  return { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp', 'font/ttf': 'ttf', 'font/otf': 'otf' }[mime] ?? 'bin';
}
