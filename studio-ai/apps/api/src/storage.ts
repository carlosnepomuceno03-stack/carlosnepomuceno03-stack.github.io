import { createHmac, timingSafeEqual } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

/**
 * Armazenamento de objetos. Originais são gravados uma única vez (sem sobrescrita: `upsert: false`).
 */
export interface ObjectStorage {
  put(path: string, bytes: Uint8Array, mimeType: string): Promise<void>;
  get(path: string): Promise<Uint8Array | null>;
  /** URL temporária para o app baixar/exibir o arquivo. */
  signedUrl(path: string, expiresInSeconds: number): Promise<string>;
}

const SAFE_PATH = /^[0-9a-f-]{36}\/[0-9a-f-]{36}\/[A-Za-z0-9._-]+$/;
function assertSafe(path: string) {
  if (!SAFE_PATH.test(path)) throw new Error('Caminho de armazenamento inválido');
}

/** Supabase Storage via REST com a service role key (somente no servidor). */
export function supabaseStorage(opts: { url: string; serviceKey: string; bucket: string }): ObjectStorage {
  const base = `${opts.url.replace(/\/$/, '')}/storage/v1`;
  const headers = { authorization: `Bearer ${opts.serviceKey}`, apikey: opts.serviceKey };
  return {
    async put(path, bytes, mimeType) {
      assertSafe(path);
      const res = await fetch(`${base}/object/${opts.bucket}/${path}`, {
        method: 'POST',
        headers: { ...headers, 'content-type': mimeType, 'x-upsert': 'false', 'cache-control': 'private, max-age=0' },
        body: Buffer.from(bytes),
      });
      if (!res.ok) throw new Error(`Falha ao gravar no Storage (${res.status})`);
    },
    async get(path) {
      assertSafe(path);
      const res = await fetch(`${base}/object/${opts.bucket}/${path}`, { headers });
      if (res.status === 404 || res.status === 400) return null;
      if (!res.ok) throw new Error(`Falha ao ler do Storage (${res.status})`);
      return new Uint8Array(await res.arrayBuffer());
    },
    async signedUrl(path, expiresIn) {
      assertSafe(path);
      const res = await fetch(`${base}/object/sign/${opts.bucket}/${path}`, {
        method: 'POST',
        headers: { ...headers, 'content-type': 'application/json' },
        body: JSON.stringify({ expiresIn }),
      });
      if (!res.ok) throw new Error(`Falha ao assinar URL (${res.status})`);
      const { signedURL } = (await res.json()) as { signedURL: string };
      return `${opts.url.replace(/\/$/, '')}/storage/v1${signedURL}`;
    },
  };
}

/** Armazenamento em disco para desenvolvimento e testes, com URLs assinadas por HMAC servidas pela API. */
export function localStorage(opts: { dir: string; secret: string; publicBaseUrl: string }): ObjectStorage & {
  verify(path: string, exp: string, sig: string): boolean;
} {
  const root = resolve(opts.dir);
  const sign = (path: string, exp: number) => createHmac('sha256', opts.secret).update(`${path}:${exp}`).digest('hex');
  return {
    async put(path, bytes) {
      assertSafe(path);
      const file = join(root, path);
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, bytes, { flag: 'wx' }); // falha se já existir: original nunca é sobrescrito
    },
    async get(path) {
      assertSafe(path);
      try {
        return new Uint8Array(await readFile(join(root, path)));
      } catch {
        return null;
      }
    },
    async signedUrl(path, expiresIn) {
      assertSafe(path);
      const exp = Math.floor(Date.now() / 1000) + expiresIn;
      return `${opts.publicBaseUrl}/v1/files/${path}?exp=${exp}&sig=${sign(path, exp)}`;
    },
    verify(path, exp, sig) {
      const e = Number(exp);
      if (!Number.isFinite(e) || e < Date.now() / 1000 || !/^[0-9a-f]{64}$/.test(sig)) return false;
      return timingSafeEqual(Buffer.from(sign(path, e), 'hex'), Buffer.from(sig, 'hex'));
    },
  };
}
