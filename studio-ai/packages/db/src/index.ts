import { PGlite } from '@electric-sql/pglite';
import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

/**
 * Postgres embutido (PGlite) com as migrações reais e um substituto mínimo dos schemas que o Supabase fornece
 * (auth.users, auth.uid(), storage.buckets/objects, papéis authenticated/service_role).
 * Usado em testes do banco e da API. NÃO é usado em produção.
 */
export const MIGRATIONS_DIR = resolve(__dirname, '../../../supabase/migrations');
const LOCAL_DIR = resolve(__dirname, '../../../supabase/local');

export async function createTestDatabase(users: string[] = []): Promise<PGlite> {
  const db = new PGlite();
  await db.exec(readFileSync(join(LOCAL_DIR, 'supabase-stubs.sql'), 'utf8'));
  for (const f of readdirSync(MIGRATIONS_DIR).filter((n) => n.endsWith('.sql')).sort()) {
    await db.exec(readFileSync(join(MIGRATIONS_DIR, f), 'utf8'));
  }
  await db.exec(readFileSync(join(LOCAL_DIR, 'grants.sql'), 'utf8'));
  for (const u of users) await db.query('insert into auth.users (id) values ($1)', [u]);
  return db;
}
