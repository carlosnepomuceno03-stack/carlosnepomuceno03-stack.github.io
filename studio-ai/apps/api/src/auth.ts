import { createRemoteJWKSet, jwtVerify, type JWTVerifyGetKey } from 'jose';

/**
 * Verificação do JWT emitido pelo Supabase Auth.
 * - Projetos com chaves assimétricas: JWKS em {SUPABASE_URL}/auth/v1/.well-known/jwks.json
 * - Projetos com segredo legado: HS256 com SUPABASE_JWT_SECRET (somente no servidor)
 */
export type Verifier = (token: string) => Promise<{ userId: string; email?: string }>;

export function createVerifier(opts: { supabaseUrl?: string; jwtSecret?: string }): Verifier {
  let jwks: JWTVerifyGetKey | null = null;
  const secret = opts.jwtSecret ? new TextEncoder().encode(opts.jwtSecret) : null;
  return async (token) => {
    const options = { audience: 'authenticated' };
    const { payload } = secret
      ? await jwtVerify(token, secret, { ...options, algorithms: ['HS256'] })
      : await jwtVerify(token, (jwks ??= createRemoteJWKSet(new URL(`${opts.supabaseUrl}/auth/v1/.well-known/jwks.json`))), options);
    if (!payload.sub) throw new Error('token sem sub');
    return { userId: payload.sub, email: typeof payload.email === 'string' ? payload.email : undefined };
  };
}
