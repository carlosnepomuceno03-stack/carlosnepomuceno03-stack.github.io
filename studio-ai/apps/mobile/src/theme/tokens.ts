/**
 * Tokens visuais do Studio AI. Dark mode é o padrão; o tema claro é opcional (Perfil → Aparência).
 * Paleta sóbria: um único acento, cores de estado semânticas, sem gradientes decorativos.
 */
export type ThemeColors = {
  background: string;
  surface: string;
  surfaceElevated: string;
  border: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentText: string;
  accentSoft: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  demo: string;
  demoSoft: string;
  studioFloor: string;
  studioWall: string;
};

export const darkColors: ThemeColors = {
  background: '#0E0F13',
  surface: '#16181E',
  surfaceElevated: '#1E2129',
  border: '#2A2E39',
  text: '#F4F5F7',
  textSecondary: '#A6ACBA',
  textMuted: '#6E7484',
  accent: '#8F80FF',
  accentText: '#0E0F13',
  accentSoft: '#8F80FF26',
  success: '#3DD68C',
  warning: '#F5B544',
  danger: '#FF6B6B',
  info: '#55B8FF',
  demo: '#F5B544',
  demoSoft: '#F5B5441F',
  studioFloor: '#1A1C24',
  studioWall: '#13151B',
};

export const lightColors: ThemeColors = {
  background: '#F6F6F8',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  border: '#E2E4EA',
  text: '#14161C',
  textSecondary: '#555B69',
  textMuted: '#8A90A0',
  accent: '#5B4BE0',
  accentText: '#FFFFFF',
  accentSoft: '#5B4BE01A',
  success: '#1E9E62',
  warning: '#B97A0B',
  danger: '#D93D3D',
  info: '#1F7FD1',
  demo: '#9A6400',
  demoSoft: '#F5B54433',
  studioFloor: '#ECEDF2',
  studioWall: '#E3E5EC',
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
export const radius = { sm: 8, md: 12, lg: 16, xl: 24, pill: 999 } as const;

/** Área mínima de toque recomendada (44pt iOS / 48dp Android). */
export const MIN_TOUCH = 48;

export const typography = {
  display: { fontSize: 30, lineHeight: 36, fontWeight: '700' as const, letterSpacing: -0.5 },
  title: { fontSize: 22, lineHeight: 28, fontWeight: '700' as const, letterSpacing: -0.3 },
  heading: { fontSize: 17, lineHeight: 22, fontWeight: '600' as const },
  body: { fontSize: 15, lineHeight: 21, fontWeight: '400' as const },
  bodyStrong: { fontSize: 15, lineHeight: 21, fontWeight: '600' as const },
  caption: { fontSize: 13, lineHeight: 18, fontWeight: '400' as const },
  label: { fontSize: 12, lineHeight: 16, fontWeight: '600' as const, letterSpacing: 0.4 },
};
export type TypographyVariant = keyof typeof typography;
