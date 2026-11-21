import { describe, expect, it } from 'vitest';
import { loadConfig, redact } from '../src/config';

const base = { DATABASE_URL: 'postgres://x', SUPABASE_URL: 'https://abc.supabase.co', SUPABASE_SERVICE_ROLE_KEY: 'service-role-key-de-exemplo-123' };

describe('configuração', () => {
  it('não lista valores de segredos em erros', () => {
    try {
      loadConfig({ SUPABASE_SERVICE_ROLE_KEY: 'super-secreto-nao-vazar' });
    } catch (e) {
      expect((e as Error).message).not.toContain('super-secreto');
      expect((e as Error).message).toContain('DATABASE_URL');
    }
  });
  it('recusa login de desenvolvimento com Storage do Supabase', () => {
    expect(() => loadConfig({ ...base, DEV_AUTH: 'true', SUPABASE_JWT_SECRET: 'x'.repeat(32) })).toThrow(/DEV_AUTH/);
  });
  it('exige credenciais do Supabase quando o Storage é o Supabase', () => {
    expect(() => loadConfig({ DATABASE_URL: 'postgres://x', SUPABASE_URL: 'https://abc.supabase.co' })).toThrow(/SERVICE_ROLE/);
    expect(loadConfig(base).STORAGE_BUCKET).toBe('studio-private');
  });
  it('redige segredos antes de registrar', () => {
    expect(redact({ SUPABASE_SERVICE_ROLE_KEY: 'k', DATABASE_URL: 'postgres://u:p@h', PORT: 1 })).toEqual({ SUPABASE_SERVICE_ROLE_KEY: '[redigido]', DATABASE_URL: '[redigido]', PORT: 1 });
  });
});
