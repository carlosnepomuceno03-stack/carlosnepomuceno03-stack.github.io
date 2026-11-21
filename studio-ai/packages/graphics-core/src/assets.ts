import { createHash } from 'node:crypto';

export function sha256(bytes: Uint8Array): string {
  return createHash('sha256').update(bytes).digest('hex');
}

export type StoredAsset = {
  id: string;
  bytes: Uint8Array;
  mimeType: string;
  sha256: string;
  /** Dimensões em px para imagens; null para fontes. */
  width: number | null;
  height: number | null;
};

/**
 * Acesso somente-leitura aos arquivos originais. Implementações: disco (testes/CLI),
 * Supabase Storage (worker). O motor nunca escreve sobre um original.
 */
export interface AssetSource {
  get(assetId: string): Promise<StoredAsset | null>;
}

export class AssetIntegrityError extends Error {
  constructor(
    public readonly assetId: string,
    public readonly expected: string,
    public readonly actual: string,
  ) {
    super(`Integridade violada no recurso ${assetId}: esperado ${expected.slice(0, 12)}…, obtido ${actual.slice(0, 12)}…`);
  }
}

export class MissingAssetError extends Error {
  constructor(public readonly assetId: string) {
    super(`Recurso ausente: ${assetId}`);
  }
}

/** Busca o recurso e confere o SHA-256 dos bytes com o hash registrado no documento. */
export async function loadVerified(source: AssetSource, assetId: string, expectedSha: string): Promise<StoredAsset> {
  const asset = await source.get(assetId);
  if (!asset) throw new MissingAssetError(assetId);
  const actual = sha256(asset.bytes);
  if (actual !== expectedSha || asset.sha256 !== expectedSha) throw new AssetIntegrityError(assetId, expectedSha, actual);
  return asset;
}

/** Fonte em memória — usada em testes e pelo CLI com arquivos lidos do disco. */
export class MemoryAssetSource implements AssetSource {
  private readonly map = new Map<string, StoredAsset>();
  add(asset: Omit<StoredAsset, 'sha256'> & { sha256?: string }): StoredAsset {
    const stored = { ...asset, sha256: asset.sha256 ?? sha256(asset.bytes) };
    this.map.set(asset.id, stored);
    return stored;
  }
  async get(assetId: string) {
    return this.map.get(assetId) ?? null;
  }
}
