import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { z } from 'zod';
import { readJson, writeJson } from './storage';

const SettingsSchema = z.object({
  mode: z.enum(['simple', 'pro']),
  theme: z.enum(['dark', 'light', 'system']),
  studioView: z.enum(['room', 'list']),
});
export type Settings = z.infer<typeof SettingsSchema>;

/** Dark mode é o padrão do produto, independentemente do tema do sistema. */
const DEFAULTS: Settings = { mode: 'simple', theme: 'dark', studioView: 'room' };

type Ctx = { settings: Settings; loaded: boolean; update: (patch: Partial<Settings>) => void };
const SettingsContext = createContext<Ctx | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    readJson('settings', SettingsSchema, DEFAULTS).then(({ value }) => {
      setSettings(value);
      setLoaded(true);
    });
  }, []);

  const update = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      writeJson('settings', next).catch(() => {});
      return next;
    });
  }, []);

  const value = useMemo(() => ({ settings, loaded, update }), [settings, loaded, update]);
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): Ctx {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings fora do SettingsProvider');
  return ctx;
}
