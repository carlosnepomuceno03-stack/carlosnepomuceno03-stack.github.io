import * as SecureStore from 'expo-secure-store';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Platform } from 'react-native';

/**
 * Cliente da API do Lumpli. O app só conhece a URL pública da API e o token de sessão do usuário —
 * nenhuma chave secreta fica no aplicativo. O token é guardado no armazenamento seguro do sistema
 * (Keychain/Keystore); na web, apenas em memória.
 */
export const API_URL = (process.env.EXPO_PUBLIC_API_URL ?? '').replace(/\/$/, '');
const TOKEN_KEY = 'lumpli.session.v1';

type Session = { accessToken: string; userId: string; organizationId: string; mode: 'dev' | 'supabase' };

export class ApiError extends Error {
  constructor(public status: number, public code: string, message: string, public details?: unknown) {
    super(message);
  }
}

let memoryToken: string | null = null;
const tokenStore = {
  async get() {
    if (Platform.OS === 'web') return memoryToken;
    return SecureStore.getItemAsync(TOKEN_KEY);
  },
  async set(v: string | null) {
    if (Platform.OS === 'web') {
      memoryToken = v;
      return;
    }
    if (v) await SecureStore.setItemAsync(TOKEN_KEY, v);
    else await SecureStore.deleteItemAsync(TOKEN_KEY);
  },
};

async function rawRequest<T>(path: string, init: { method?: string; token?: string | null; body?: unknown; binary?: { bytes: ArrayBuffer; headers: Record<string, string> } } = {}): Promise<T> {
  if (!API_URL) throw new ApiError(0, 'not_configured', 'Servidor não configurado (EXPO_PUBLIC_API_URL)');
  const headers: Record<string, string> = {};
  if (init.token) headers.authorization = `Bearer ${init.token}`;
  let body: BodyInit | undefined;
  if (init.binary) {
    Object.assign(headers, init.binary.headers);
    body = init.binary.bytes;
  } else if (init.body !== undefined) {
    headers['content-type'] = 'application/json';
    body = JSON.stringify(init.body);
  }
  let res: Response;
  try {
    res = await fetch(API_URL + path, { method: init.method ?? (body ? 'POST' : 'GET'), headers, body });
  } catch {
    throw new ApiError(0, 'network', 'Sem conexão com o servidor');
  }
  const json = await res.json().catch(() => null);
  if (!res.ok) throw new ApiError(res.status, json?.error?.code ?? 'error', json?.error?.message ?? `Erro ${res.status}`, json?.error?.details);
  return json as T;
}

type Ctx = {
  configured: boolean;
  session: Session | null;
  ready: boolean;
  authMode: 'dev' | 'supabase' | null;
  signInDev: () => Promise<void>;
  signOut: () => Promise<void>;
  request: <T>(path: string, init?: { method?: string; body?: unknown }) => Promise<T>;
  upload: <T>(path: string, bytes: ArrayBuffer, headers: Record<string, string>) => Promise<T>;
};

const ApiContext = createContext<Ctx | null>(null);

export function ApiProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [authMode, setAuthMode] = useState<'dev' | 'supabase' | null>(null);

  useEffect(() => {
    (async () => {
      if (!API_URL) return setReady(true);
      try {
        setAuthMode((await rawRequest<{ mode: 'dev' | 'supabase' }>('/v1/auth/mode')).mode);
        const saved = await tokenStore.get();
        if (saved) {
          const parsed = JSON.parse(saved) as Session;
          const me = await rawRequest<{ organizationId: string }>('/v1/me', { method: 'POST', token: parsed.accessToken });
          setSession({ ...parsed, organizationId: me.organizationId });
        }
      } catch {
        await tokenStore.set(null);
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const signInDev = useCallback(async () => {
    const s = await rawRequest<{ userId: string; accessToken: string }>('/v1/dev/session', { method: 'POST', body: {} });
    const me = await rawRequest<{ organizationId: string }>('/v1/me', { method: 'POST', token: s.accessToken });
    const next: Session = { accessToken: s.accessToken, userId: s.userId, organizationId: me.organizationId, mode: 'dev' };
    await tokenStore.set(JSON.stringify(next));
    setSession(next);
  }, []);

  const signOut = useCallback(async () => {
    await tokenStore.set(null);
    setSession(null);
  }, []);

  const request = useCallback(<T,>(path: string, init?: { method?: string; body?: unknown }) =>
    rawRequest<T>(path, { ...init, token: session?.accessToken }), [session]);

  const upload = useCallback(<T,>(path: string, bytes: ArrayBuffer, headers: Record<string, string>) =>
    rawRequest<T>(path, { method: 'POST', token: session?.accessToken, binary: { bytes, headers } }), [session]);

  const value = useMemo<Ctx>(() => ({ configured: !!API_URL, session, ready, authMode, signInDev, signOut, request, upload }),
    [session, ready, authMode, signInDev, signOut, request, upload]);
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApi(): Ctx {
  const ctx = useContext(ApiContext);
  if (!ctx) throw new Error('useApi fora do ApiProvider');
  return ctx;
}

// Tipos das respostas usadas pelas telas
export type ServerProject = { id: string; name: string; kind: string; event_date: string | null; venue: string | null; updated_at: string };
export type ServerAsset = { id: string; kind: string; mime_type: string; sha256: string; width: number | null; height: number | null; url: string };
export type ServerDocumentSummary = { id: string; name: string; kind: string; headRevision: number; approvedRevision: number | null };
export type ServerMaterial = { id: string; format_id: string; width: number; height: number; review_status: string; status: string | null; document_revision: number; url: string; sha256: string };
