import { useColorScheme } from 'react-native';
import { useSettings } from '@/data/settings';
import { darkColors, lightColors, type ThemeColors } from './tokens';

export function useThemeColors(): { colors: ThemeColors; scheme: 'dark' | 'light' } {
  const system = useColorScheme();
  const { settings } = useSettings();
  const scheme = settings.theme === 'system' ? (system === 'light' ? 'light' : 'dark') : settings.theme;
  return { colors: scheme === 'light' ? lightColors : darkColors, scheme };
}
