/** Leitura do cabeçalho PNG (IHDR) para verificar dimensões e canal alfa sem decodificar a imagem. */
export type PngInfo = { width: number; height: number; bitDepth: number; colorType: number; hasAlpha: boolean };

const SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

export function readPngInfo(bytes: Uint8Array): PngInfo {
  if (bytes.length < 33 || SIGNATURE.some((b, i) => bytes[i] !== b)) throw new Error('Arquivo não é PNG válido');
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const type = String.fromCharCode(bytes[12]!, bytes[13]!, bytes[14]!, bytes[15]!);
  if (type !== 'IHDR') throw new Error('PNG sem IHDR');
  const colorType = bytes[25]!;
  return {
    width: view.getUint32(16),
    height: view.getUint32(20),
    bitDepth: bytes[24]!,
    colorType,
    hasAlpha: colorType === 4 || colorType === 6,
  };
}

/** Dimensões de JPEG (marcadores SOF) — usado para validar uploads de fotos. */
export function readJpegSize(bytes: Uint8Array): { width: number; height: number } {
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) throw new Error('Arquivo não é JPEG válido');
  let i = 2;
  while (i < bytes.length) {
    if (bytes[i] !== 0xff) throw new Error('JPEG corrompido');
    const marker = bytes[i + 1]!;
    const len = (bytes[i + 2]! << 8) | bytes[i + 3]!;
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: (bytes[i + 5]! << 8) | bytes[i + 6]!, width: (bytes[i + 7]! << 8) | bytes[i + 8]! };
    }
    i += 2 + len;
  }
  throw new Error('JPEG sem dimensões');
}

export function imageSize(bytes: Uint8Array, mimeType: string): { width: number; height: number } {
  if (mimeType === 'image/png') {
    const { width, height } = readPngInfo(bytes);
    return { width, height };
  }
  if (mimeType === 'image/jpeg') return readJpegSize(bytes);
  throw new Error(`Tipo de imagem não suportado: ${mimeType}`);
}
