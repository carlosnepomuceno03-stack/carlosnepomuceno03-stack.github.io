import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

/**
 * Supabase Auth no app. Só usa valores PÚBLICOS (URL do projeto e chave anon/publishable), protegidos por RLS.
 * A sessão fica no Keychain/Keystore; como o SecureStore limita ~2 KB por item, o valor é dividido em partes.
 * Status: implementado, aguardando o projeto Supabase para validação real.
 */
const URL_ = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const ANON = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';
export const SUPABASE_CONFIGURED = !!URL_ && !!ANON;

const CHUNK = 1800;
const memory = new Map<string, string>();
const chunkedSecureStore = {
  async getItem(key: string) {
    if (Platform.OS === 'web') return memory.get(key) ?? null;
    const count = Number((await SecureStore.getItemAsync(`${key}.n`)) ?? '0');
    if (!count) return null;
    const parts = await Promise.all(Array.from({ length: count }, (_, i) => SecureStore.getItemAsync(`${key}.${i}`)));
    return parts.some((p) => p == null) ? null : parts.join('');
  },
  async setItem(key: string, value: string) {
    if (Platform.OS === 'web') return void memory.set(key, value);
    await this.removeItem(key);
    const parts = value.match(new RegExp(`.{1,${CHUNK}}`, 'gs')) ?? [];
    await Promise.all(parts.map((p, i) => SecureStore.setItemAsync(`${key}.${i}`, p)));
    await SecureStore.setItemAsync(`${key}.n`, String(parts.length));
  },
  async removeItem(key: string) {
    if (Platform.OS === 'web') return void memory.delete(key);
    const count = Number((await SecureStore.getItemAsync(`${key}.n`)) ?? '0');
    await Promise.all(Array.from({ length: count }, (_, i) => SecureStore.deleteItemAsync(`${key}.${i}`)));
    await SecureStore.deleteItemAsync(`${key}.n`);
  },
};

let client: SupabaseClient | null = null;
export function supabase(): SupabaseClient {
  if (!SUPABASE_CONFIGURED) throw new Error('Supabase não configurado');
  client ??= createClient(URL_, ANON, {
    auth: { storage: chunkedSecureStore, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false },
  });
  return client;
}
