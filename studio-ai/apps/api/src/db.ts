import pg from 'pg';

/**
 * Acesso ao Postgres. Leituras de dados do usuário rodam com `asUser`, que aplica as políticas RLS
 * exatamente como o PostgREST do Supabase (role authenticated + claim sub). Mutações privilegiadas
 * usam as funções security definer da migração, que conferem a permissão do usuário informado.
 */
export type Row = Record<string, unknown>;
export interface Queryable {
  query<T extends Row = Row>(sql: string, params?: unknown[]): Promise<{ rows: T[] }>;
}
export interface Db extends Queryable {
  transaction<T>(fn: (tx: Queryable) => Promise<T>): Promise<T>;
  close(): Promise<void>;
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function asUser<T>(db: Db, userId: string, fn: (tx: Queryable) => Promise<T>): Promise<T> {
  if (!UUID.test(userId)) throw new Error('ID de usuário inválido');
  return db.transaction(async (tx) => {
    await tx.query(`select set_config('request.jwt.claim.sub', $1, true)`, [userId]);
    await tx.query('set local role authenticated');
    return fn(tx);
  });
}

export function pgDb(connectionString: string): Db {
  const pool = new pg.Pool({ connectionString, max: 10, ssl: /localhost|127\.0\.0\.1/.test(connectionString) ? undefined : { rejectUnauthorized: false } });
  return {
    query: (sql, params) => pool.query(sql, params as unknown[]) as never,
    async transaction(fn) {
      const client = await pool.connect();
      try {
        await client.query('begin');
        const result = await fn({ query: (sql, params) => client.query(sql, params as unknown[]) as never });
        await client.query('commit');
        return result;
      } catch (e) {
        await client.query('rollback').catch(() => {});
        throw e;
      } finally {
        client.release();
      }
    },
    close: () => pool.end(),
  };
}

/** Erros SQLSTATE definidos nas funções da migração → HTTP. */
export function sqlErrorToHttp(e: unknown): { status: number; code: string; message: string } | null {
  const err = e as { code?: string; message?: string };
  const map: Record<string, [number, string]> = {
    LP403: [403, 'forbidden'],
    LP404: [404, 'not_found'],
    LP409: [409, 'version_conflict'],
    LP422: [422, 'validation'],
    '42501': [403, 'forbidden'],
    '23505': [409, 'conflict'],
  };
  const hit = err?.code ? map[err.code] : undefined;
  return hit ? { status: hit[0], code: hit[1], message: err.message ?? hit[1] } : null;
}
