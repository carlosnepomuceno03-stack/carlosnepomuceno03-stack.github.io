import { z } from 'zod';

/**
 * Configuração do servidor. Segredos vêm SOMENTE de variáveis de ambiente do backend
 * (ou do cofre de segredos da hospedagem) — nunca do app, do repositório ou de logs.
 */
const EnvSchema = z.object({
  PORT: z.coerce.number().int().default(8787),
  HOST: z.string().default('0.0.0.0'),
  /** postgres: conexão direta (local/VM). supabase-rest: HTTPS via PostgREST (qualquer hospedagem, inclusive serverless). */
  DATA_DRIVER: z.enum(['postgres', 'supabase-rest']).default('postgres'),
  DATABASE_URL: z.string().min(1).optional(),
  /** Chave pública (anon/publishable) — usada junto com o JWT do usuário nas chamadas REST. */
  SUPABASE_ANON_KEY: z.string().min(20).optional(),
  SUPABASE_URL: z.string().url().optional(),
  /** Chave service role: só no servidor. */
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(20).optional(),
  /** Projetos com segredo JWT legado (HS256). Projetos novos usam JWKS em SUPABASE_URL. */
  SUPABASE_JWT_SECRET: z.string().min(16).optional(),
  STORAGE_DRIVER: z.enum(['supabase', 'local']).default('supabase'),
  STORAGE_BUCKET: z.string().default('studio-private'),
  LOCAL_STORAGE_DIR: z.string().default('.local-storage'),
  /** Segredo para assinar URLs do armazenamento local (desenvolvimento). */
  LOCAL_URL_SECRET: z.string().min(16).optional(),
  PUBLIC_BASE_URL: z.string().url().default('http://localhost:8787'),
  CORS_ORIGINS: z.string().default(''),
  /** Login de desenvolvimento (somente com STORAGE_DRIVER=local). */
  DEV_AUTH: z.enum(['true', 'false']).default('false'),
});
export type Config = z.infer<typeof EnvSchema>;

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const parsed = EnvSchema.safeParse(env);
  if (!parsed.success) {
    // Mensagem lista apenas NOMES de variáveis, nunca valores.
    const names = parsed.error.issues.map((i) => i.path.join('.')).join(', ');
    throw new Error(`Configuração inválida ou ausente: ${names}`);
  }
  const c = parsed.data;
  if (c.STORAGE_DRIVER === 'supabase' && (!c.SUPABASE_URL || !c.SUPABASE_SERVICE_ROLE_KEY)) {
    throw new Error('STORAGE_DRIVER=supabase exige SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY');
  }
  if (c.DATA_DRIVER === 'postgres' && !c.DATABASE_URL) throw new Error('DATA_DRIVER=postgres exige DATABASE_URL');
  if (c.DATA_DRIVER === 'supabase-rest' && (!c.SUPABASE_URL || !c.SUPABASE_ANON_KEY || !c.SUPABASE_SERVICE_ROLE_KEY)) {
    throw new Error('DATA_DRIVER=supabase-rest exige SUPABASE_URL, SUPABASE_ANON_KEY e SUPABASE_SERVICE_ROLE_KEY');
  }
  if (c.DEV_AUTH === 'true' && (c.STORAGE_DRIVER !== 'local' || c.DATA_DRIVER !== 'postgres' || !c.SUPABASE_JWT_SECRET)) {
    throw new Error('DEV_AUTH só é permitido em desenvolvimento local (STORAGE_DRIVER=local com segredo JWT local)');
  }
  if (!c.SUPABASE_JWT_SECRET && !c.SUPABASE_URL) throw new Error('Defina SUPABASE_URL (JWKS) ou SUPABASE_JWT_SECRET');
  return c;
}

/** Remove valores sensíveis de qualquer objeto antes de registrar em log. */
export function redact<T extends Record<string, unknown>>(obj: T): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, /KEY|SECRET|PASSWORD|TOKEN|DATABASE_URL/i.test(k) ? '[redigido]' : v]),
  );
}
