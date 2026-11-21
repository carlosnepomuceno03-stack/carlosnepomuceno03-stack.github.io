import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import type { IconName } from '@/components/ui';
import { useThemeColors } from '@/theme/theme';

const TABS: { name: string; title: string; icon: IconName; iconActive: IconName }[] = [
  { name: 'index', title: 'Início', icon: 'home-outline', iconActive: 'home' },
  { name: 'create', title: 'Criar', icon: 'add-circle-outline', iconActive: 'add-circle' },
  { name: 'studio', title: 'Estúdio', icon: 'people-outline', iconActive: 'people' },
  { name: 'library', title: 'Biblioteca', icon: 'images-outline', iconActive: 'images' },
  { name: 'profile', title: 'Perfil', icon: 'person-circle-outline', iconActive: 'person-circle' },
];

/** Barra inferior: alcançável com o polegar (uso com uma mão). */
export default function TabsLayout() {
  const { colors } = useThemeColors();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          // no web não há inset inferior; damos altura extra para o rótulo não ser cortado
          ...(Platform.OS === 'web' ? { height: 64, paddingBottom: 8 } : null),
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}>
      {TABS.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{
            title: t.title,
            tabBarAccessibilityLabel: t.title,
            tabBarIcon: ({ color, focused, size }) => <Ionicons name={focused ? t.iconActive : t.icon} size={size} color={String(color)} />,
          }}
        />
      ))}
    </Tabs>
  );
}
