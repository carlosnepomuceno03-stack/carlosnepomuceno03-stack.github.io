import { describe, expect, it } from 'vitest';
import { DataError, serviceHeaders, supabaseRestDataPort } from '../src/data';
import { sqlErrorToHttp } from '../src/db';

type Call = { url: string; init: RequestInit };
function fakeFetch(responses: { status: number; body: unknown }[]) {
  const calls: Call[] = [];
  const impl = (async (url: string, init: RequestInit) => {
    calls.push({ url, init });
    const r = responses.shift()!;
    return new Response(JSON.stringify(r.body), { status: r.status });
  }) as unknown as typeof fetch;
  return { calls, impl };
}
const URL_ = 'https://exemplo.supabase.co';

describe('acesso ao Supabase por HTTPS (PostgREST)', () => {
  it('chamada do usuário usa o JWT dele e a chave pública — nunca a chave de serviço', async () => {
    const f = fakeFetch([{ status: 200, body: [{ id: 'p1' }] }]);
    const port = supabaseRestDataPort({ url: URL_, anonKey: 'anon-publica', serviceKey: 'segredo-servico', fetchImpl: f.impl });
    const r = await port.rpc('api_list_projects', {}, { kind: 'user', userId: 'u', token: 'jwt-do-usuario' });
    expect(r).toEqual([{ id: 'p1' }]);
    expect(f.calls[0]!.url).toBe(`${URL_}/rest/v1/rpc/api_list_projects`);
    const h = f.calls[0]!.init.headers as Record<string, string>;
    expect(h.authorization).toBe('Bearer jwt-do-usuario');
    expect(h.apikey).toBe('anon-publica');
    expect(JSON.stringify(h)).not.toContain('segredo-servico');
  });

  it('chamada de backend usa a chave de serviço; chaves novas sb_secret vão só no apikey', async () => {
    expect(serviceHeaders('sb_secret_abc')).toEqual({ apikey: 'sb_secret_abc' });
    expect(serviceHeaders('eyJlegado')).toEqual({ apikey: 'eyJlegado', authorization: 'Bearer eyJlegado' });
    const f = fakeFetch([{ status: 200, body: 'uuid-1' }]);
    const port = supabaseRestDataPort({ url: URL_, anonKey: 'anon', serviceKey: 'sb_secret_x', fetchImpl: f.impl });
    await port.rpc('register_asset', { p_user: 'u', p_layers: [{ a: 1 }], p_x: undefined }, { kind: 'service' });
    expect(JSON.parse(f.calls[0]!.init.body as string)).toEqual({ p_user: 'u', p_layers: [{ a: 1 }], p_x: null });
  });

  it('converte erros do PostgREST nos mesmos códigos HTTP da API', async () => {
    const f = fakeFetch([{ status: 400, body: { code: 'LP409', message: 'conflito de versão' } }, { status: 401, body: { code: '42501', message: 'permission denied' } }]);
    const port = supabaseRestDataPort({ url: URL_, anonKey: 'a', serviceKey: 's', fetchImpl: f.impl });
    const e1 = await port.rpc('x', {}, { kind: 'service' }).catch((e) => e);
    expect(e1).toBeInstanceOf(DataError);
    expect(sqlErrorToHttp(e1)).toMatchObject({ status: 409, code: 'version_conflict' });
    const e2 = await port.rpc('x', {}, { kind: 'service' }).catch((e) => e);
    expect(sqlErrorToHttp(e2)).toMatchObject({ status: 403 });
  });

  it('rejeita nomes de função suspeitos', async () => {
    const port = supabaseRestDataPort({ url: URL_, anonKey: 'a', serviceKey: 's', fetchImpl: fakeFetch([]).impl });
    await expect(port.rpc('x/../admin', {}, { kind: 'service' })).rejects.toThrow(/inválido/);
  });
});
