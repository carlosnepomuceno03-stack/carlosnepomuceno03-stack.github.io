import { describe, expect, it } from 'vitest';
import { loadConfig, redact } from '../src/config';

const base: Record<string, string> = { DATABASE_URL: 'postgres://x', SUPABASE_URL: 'https://abc.supabase.co', SUPABASE_SERVICE_ROLE_KEY: 'service-role-key-de-exemplo-123' };

describe('configuração', () => {
  it('não lista valores de segredos em erros', () => {
    let message = '';
    try {
      loadConfig({ SUPABASE_SERVICE_ROLE_KEY: 'super-secreto-nao-vazar', SUPABASE_URL: 'nao-e-url' });
    } catch (e) {
      message = (e as Error).message;
    }
    expect(message).toMatch(/SUPABASE_URL/);
    expect(message).not.toContain('super-secreto');
  });
  it('recusa login de desenvolvimento com Storage do Supabase', () => {
    expect(() => loadConfig({ ...base, DEV_AUTH: 'true', SUPABASE_JWT_SECRET: 'x'.repeat(32) })).toThrow(/DEV_AUTH/);
  });
  it('exige credenciais do Supabase quando o Storage é o Supabase', () => {
    expect(() => loadConfig({ DATABASE_URL: 'postgres://x', SUPABASE_URL: 'https://abc.supabase.co' })).toThrow(/SERVICE_ROLE/);
    expect(loadConfig(base).STORAGE_BUCKET).toBe('studio-private');
  });
  it('driver REST exige as três configurações do Supabase', () => {
    expect(() => loadConfig({ ...base, DATA_DRIVER: 'supabase-rest' })).toThrow(/SUPABASE_ANON_KEY/);
    expect(loadConfig({ ...base, DATA_DRIVER: 'supabase-rest', SUPABASE_ANON_KEY: 'anon-key-publica-de-exemplo' }).DATA_DRIVER).toBe('supabase-rest');
    expect(() => loadConfig({ DATA_DRIVER: 'postgres', SUPABASE_URL: base.SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY: base.SUPABASE_SERVICE_ROLE_KEY })).toThrow(/DATABASE_URL/);
  });
  it('redige segredos antes de registrar', () => {
    expect(redact({ SUPABASE_SERVICE_ROLE_KEY: 'k', DATABASE_URL: 'postgres://u:p@h', PORT: 1 })).toEqual({ SUPABASE_SERVICE_ROLE_KEY: '[redigido]', DATABASE_URL: '[redigido]', PORT: 1 });
  });
});
