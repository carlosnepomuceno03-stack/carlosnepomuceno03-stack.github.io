import { asUser, type Db } from './db';

/**
 * Porta de dados da API: TODA operação no banco é uma função SQL (ver migrações) chamada por nome.
 * - `user`: executa com as permissões do usuário (RLS). Via SQL: papel authenticated + claim sub.
 *   Via Supabase REST: JWT do próprio usuário.
 * - `service`: funções de backend (validação já feita pela API). Via REST: chave service role (só no servidor).
 */
export type Caller = { kind: 'user'; userId: string; token: string } | { kind: 'service' };

export interface DataPort {
  rpc<T>(fn: string, args: Record<string, unknown>, caller: Caller): Promise<T>;
  ping(): Promise<void>;
  /** Somente desenvolvimento local com Postgres próprio (cria o usuário no substituto de auth.users). */
  devCreateUser?(id: string): Promise<void>;
}

export class DataError extends Error {
  constructor(public code: string, message: string) {
    super(message);
  }
}

const FN_NAME = /^[a-z_][a-z0-9_]*$/;
const ARG_NAME = /^p_[a-z0-9_]+$/;

/** Arrays de primitivos viram arrays SQL; objetos e arrays de objetos viram jsonb. */
function toSqlParam(v: unknown): unknown {
  if (v === undefined) return null;
  if (Array.isArray(v)) return v.every((x) => x === null || typeof x !== 'object') ? v : JSON.stringify(v);
  if (v && typeof v === 'object' && !(v instanceof Date)) return JSON.stringify(v);
  return v;
}

export function sqlDataPort(db: Db): DataPort {
  const call = async <T>(q: { query: Db['query'] }, fn: string, args: Record<string, unknown>) => {
    if (!FN_NAME.test(fn)) throw new Error('nome de função inválido');
    const names = Object.keys(args);
    for (const n of names) if (!ARG_NAME.test(n)) throw new Error(`argumento inválido: ${n}`);
    const sql = `select public.${fn}(${names.map((n, i) => `${n} => $${i + 1}`).join(', ')}) as r`;
    const res = await q.query<{ r: T }>(sql, names.map((n) => toSqlParam(args[n])));
    return res.rows[0]?.r as T;
  };
  return {
    rpc: (fn, args, caller) => (caller.kind === 'user' ? asUser(db, caller.userId, (tx) => call(tx, fn, args)) : call(db, fn, args)),
    ping: async () => {
      await db.query('select 1');
    },
    devCreateUser: async (id) => {
      await db.query(`insert into auth.users (id) values ($1) on conflict (id) do nothing`, [id]);
    },
  };
}

/**
 * Supabase via HTTPS (PostgREST). Não precisa de conexão TCP com o banco: funciona em qualquer hospedagem,
 * inclusive serverless, e atrás de proxies que só permitem HTTPS.
 */
export function supabaseRestDataPort(opts: { url: string; anonKey: string; serviceKey: string; fetchImpl?: typeof fetch }): DataPort {
  const base = opts.url.replace(/\/$/, '');
  const f = opts.fetchImpl ?? fetch;
  return {
    async rpc<T>(fn: string, args: Record<string, unknown>, caller: Caller): Promise<T> {
      if (!FN_NAME.test(fn)) throw new Error('nome de função inválido');
      const headers =
        caller.kind === 'user'
          ? { apikey: opts.anonKey, authorization: `Bearer ${caller.token}` }
          : serviceHeaders(opts.serviceKey);
      const res = await f(`${base}/rest/v1/rpc/${fn}`, {
        method: 'POST',
        headers: { ...headers, 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(Object.entries(args).map(([k, v]) => [k, v === undefined ? null : v]))),
      });
      const text = await res.text();
      const body = text ? JSON.parse(text) : null;
      if (!res.ok) {
        // PostgREST devolve o SQLSTATE em `code` (ex.: LP409, 42501)
        throw new DataError(body?.code ?? `HTTP${res.status}`, body?.message ?? `Erro ${res.status}`);
      }
      return body as T;
    },
    async ping() {
      const res = await f(`${base}/auth/v1/health`, { headers: { apikey: opts.anonKey } });
      if (!res.ok) throw new Error(`Supabase indisponível (${res.status})`);
    },
  };
}

/**
 * Chaves novas do Supabase (`sb_secret_…`) vão só no cabeçalho `apikey`; chaves JWT legadas também no Authorization.
 */
export function serviceHeaders(key: string): Record<string, string> {
  return key.startsWith('sb_secret_') ? { apikey: key } : { apikey: key, authorization: `Bearer ${key}` };
}
