#!/usr/bin/env bash
# Ambiente LOCAL de desenvolvimento do Lumpli (sem Supabase): Postgres local + API com Storage em disco
# e login de desenvolvimento. Segredos são gerados aleatoriamente a cada execução e nunca gravados no repositório.
# Requisitos: PostgreSQL 15+ rodando localmente e um usuário com permissão de criar banco.
# Uso: DATABASE_URL=postgres://usuario:senha@127.0.0.1:5432/lumpli_dev scripts/dev-local.sh [--reset]
set -euo pipefail
cd "$(dirname "$0")/.."
: "${DATABASE_URL:?Defina DATABASE_URL apontando para um banco local vazio (ex.: lumpli_dev)}"
case "$DATABASE_URL" in *supabase.co*|*pooler.supabase*) echo "Recusado: este script é só para banco LOCAL." >&2; exit 1;; esac

if [ "${1:-}" = "--reset" ] || ! psql "$DATABASE_URL" -tAc "select 1 from pg_tables where tablename='projects'" | grep -q 1; then
  echo "Aplicando migrações no banco local…"
  for f in supabase/local/supabase-stubs.sql supabase/migrations/*.sql supabase/local/grants.sql; do
    psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -q -f "$f"
  done
fi

export STORAGE_DRIVER=local DEV_AUTH=true
export LOCAL_STORAGE_DIR="${LOCAL_STORAGE_DIR:-.local-storage}"
export SUPABASE_JWT_SECRET="$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")"
export LOCAL_URL_SECRET="$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")"
export PUBLIC_BASE_URL="${PUBLIC_BASE_URL:-http://127.0.0.1:8787}"
export CORS_ORIGINS="${CORS_ORIGINS:-http://localhost:8081,http://127.0.0.1:8099}"
echo "API local em $PUBLIC_BASE_URL (login de desenvolvimento ativo)."
echo "No app: EXPO_PUBLIC_API_URL=$PUBLIC_BASE_URL npm run mobile   (no celular use o IP da máquina na rede local)"
exec npm run start --workspace apps/api
