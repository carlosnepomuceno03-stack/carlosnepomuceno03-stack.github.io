/**
 * Teste de fumaça por HTTP contra uma API em execução (local ou hospedada).
 * Local: API_URL=http://127.0.0.1:8787 SMOKE_JWT_SECRET=<segredo local> SMOKE_USER_ID=<uuid> npx tsx scripts/smoke-http.ts
 * Supabase real: forneça SMOKE_ACCESS_TOKEN (sessão de um usuário de teste) em vez do segredo.
 * Nunca imprime tokens ou segredos.
 */
import { SignJWT } from 'jose';

const API = process.env.API_URL ?? 'http://127.0.0.1:8787';
async function token() {
  if (process.env.SMOKE_ACCESS_TOKEN) return process.env.SMOKE_ACCESS_TOKEN;
  const secret = process.env.SMOKE_JWT_SECRET;
  if (!secret || !process.env.SMOKE_USER_ID) throw new Error('Defina SMOKE_ACCESS_TOKEN ou SMOKE_JWT_SECRET + SMOKE_USER_ID');
  return new SignJWT({ role: 'authenticated' }).setProtectedHeader({ alg: 'HS256' }).setSubject(process.env.SMOKE_USER_ID)
    .setAudience('authenticated').setExpirationTime('10m').sign(new TextEncoder().encode(secret));
}

async function main() {
  const auth = { authorization: `Bearer ${await token()}` };
  const j = async (method: string, path: string, body?: unknown) => {
    const res = await fetch(API + path, { method, headers: { ...auth, ...(body ? { 'content-type': 'application/json' } : {}) }, body: body ? JSON.stringify(body) : undefined });
    const json = await res.json();
    if (!res.ok) throw new Error(`${method} ${path} → ${res.status} ${JSON.stringify(json.error)}`);
    return json;
  };
  const step = (s: string) => console.log(`✓ ${s}`);

  const health = await (await fetch(`${API}/health`)).json();
  step(`health: ${health.service} ${health.version}`);
  const me = await j('POST', '/v1/me');
  step(`organização ${me.organizationId.slice(0, 8)}…`);
  const seed = await j('POST', '/v1/demo/seed', { organizationId: me.organizationId });
  step(`evento fictício criado (documento ${seed.documentId.slice(0, 8)}…, revisão ${seed.revision})`);
  const approve = await j('POST', `/v1/documents/${seed.documentId}/revisions/${seed.revision}/approve`, { note: 'smoke' });
  step(`aprovado; contrato com ${approve.contract.protectedAssets.length} recursos protegidos`);
  const exp = await j('POST', `/v1/documents/${seed.documentId}/exports`, { formatIds: ['story', 'feed', 'sympla', 'telao'] });
  for (const m of exp.materials) {
    const res = await fetch(m.url);
    const bytes = new Uint8Array(await res.arrayBuffer());
    const view = new DataView(bytes.buffer);
    const w = view.getUint32(16), h = view.getUint32(20);
    if (w !== m.width || h !== m.height) throw new Error(`${m.formatId}: ${w}×${h} ≠ ${m.width}×${m.height}`);
    step(`${m.formatId}: ${m.status}, PNG ${w}×${h}, ${(bytes.length / 1024).toFixed(0)} KB`);
  }
  const restore = await j('POST', `/v1/documents/${seed.documentId}/revisions/1/restore`);
  step(`restauração criou a revisão ${restore.revision}`);
}

main().catch((e) => {
  console.error('✗', (e as Error).message);
  process.exit(1);
});
