import { z } from 'zod';

export const FormatPresetSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  /** Margem de segurança em px, aplicada às bordas no formato de destino. */
  safeMargin: z.number().int().nonnegative(),
  description: z.string().optional(),
  /** Presets de sistema não podem ser editados; presets de organização são versionados. */
  builtIn: z.boolean(),
});
export type FormatPreset = z.infer<typeof FormatPresetSchema>;

/** Formatos iniciais (seção 13). Dimensões em pixels. */
export const BUILT_IN_FORMATS: readonly FormatPreset[] = [
  { id: 'story', name: 'Story', width: 1080, height: 1920, safeMargin: 120, builtIn: true,
    description: 'Instagram/WhatsApp Stories (9:16). Margem maior por causa da interface do app.' },
  { id: 'feed', name: 'Feed', width: 1080, height: 1440, safeMargin: 64, builtIn: true,
    description: 'Feed vertical 3:4.' },
  { id: 'sympla', name: 'Sympla', width: 1600, height: 838, safeMargin: 48, builtIn: true,
    description: 'Banner de evento na Sympla.' },
  { id: 'telao', name: 'Telão', width: 1920, height: 1080, safeMargin: 64, builtIn: true,
    description: 'Telão / painel de LED 16:9.' },
] as const;

export function getFormat(id: string): FormatPreset | undefined {
  return BUILT_IN_FORMATS.find((f) => f.id === id);
}

export type AspectClass = 'tall' | 'portrait' | 'square' | 'landscape' | 'wide';

/** Classifica a proporção — usada pelas regras de composição por proporção de tela. */
export function aspectClass(width: number, height: number): AspectClass {
  const r = width / height;
  if (r < 0.65) return 'tall';
  if (r < 0.9) return 'portrait';
  if (r <= 1.1) return 'square';
  if (r <= 1.85) return 'landscape';
  return 'wide';
}
