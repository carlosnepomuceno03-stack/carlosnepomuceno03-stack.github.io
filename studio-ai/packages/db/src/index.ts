import { PGlite } from '@electric-sql/pglite';
import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

/**
 * Postgres embutido (PGlite) com as migrações reais e um substituto mínimo dos schemas que o Supabase fornece
 * (auth.users, auth.uid(), storage.buckets/objects, papéis authenticated/service_role).
 * Usado em testes do banco e da API. NÃO é usado em produção.
 */
export const MIGRATIONS_DIR = resolve(__dirname, '../../../supabase/migrations');

export async function createTestDatabase(users: string[] = []): Promise<PGlite> {
  const db = new PGlite();
  await db.exec(`
    create schema auth;
    create table auth.users (id uuid primary key, email text);
    create function auth.uid() returns uuid language sql stable as
      $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
    create role authenticated;
    create role service_role;
    create schema storage;
    create table storage.buckets (id text primary key, name text, public boolean, file_size_limit bigint, allowed_mime_types text[]);
    create table storage.objects (id uuid primary key default gen_random_uuid(), bucket_id text, name text, owner uuid);
    alter table storage.objects enable row level security;
    create function storage.foldername(name text) returns text[] language sql immutable as
      $$ select (string_to_array(name, '/'))[1:array_length(string_to_array(name, '/'), 1) - 1] $$;
  `);
  for (const f of readdirSync(MIGRATIONS_DIR).filter((n) => n.endsWith('.sql')).sort()) {
    await db.exec(readFileSync(join(MIGRATIONS_DIR, f), 'utf8'));
  }
  await db.exec(`
    grant usage on schema public, auth, storage to authenticated;
    grant select, insert, update, delete on all tables in schema public to authenticated;
    grant select on storage.objects to authenticated;
    grant execute on function auth.uid() to authenticated;
    grant execute on function public.is_org_member(uuid), public.can_edit_org(uuid), public.project_org(uuid) to authenticated;
  `);
  for (const u of users) await db.query('insert into auth.users (id) values ($1)', [u]);
  return db;
}
