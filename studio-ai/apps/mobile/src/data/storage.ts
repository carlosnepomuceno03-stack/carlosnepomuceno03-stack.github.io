import AsyncStorage from '@react-native-async-storage/async-storage';
import type { z } from 'zod';

/**
 * Persistência local (Etapa 1). Na Etapa 2 os repositórios ganham implementação Supabase
 * com a mesma interface; o armazenamento local passa a ser cache offline.
 */
export const STORAGE_PREFIX = 'studio-ai:v1:';

export async function readJson<T>(key: string, schema: z.ZodType<T>, fallback: T): Promise<{ value: T; corrupted: boolean }> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_PREFIX + key);
    if (raw == null) return { value: fallback, corrupted: false };
    const parsed = schema.safeParse(JSON.parse(raw));
    if (!parsed.success) return { value: fallback, corrupted: true };
    return { value: parsed.data, corrupted: false };
  } catch {
    return { value: fallback, corrupted: true };
  }
}

export async function writeJson(key: string, value: unknown): Promise<void> {
  await AsyncStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
}

/** Exclusão de todos os dados locais do app (procedimento de exclusão — LGPD). */
export async function clearAllLocalData(): Promise<void> {
  const keys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiRemove(keys.filter((k) => k.startsWith(STORAGE_PREFIX)));
}
