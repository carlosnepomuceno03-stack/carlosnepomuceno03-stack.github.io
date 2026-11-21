import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, type ReactNode } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import type { IconName } from '@/components/ui';
import { useThemeColors } from '@/theme/theme';
import type { AgentLiveState } from './feed';

/** Valor 0→1→0 em loop enquanto `active`; parado (0) quando inativo ou com movimento reduzido. */
function useLoop(active: boolean, duration: number, delay = 0) {
  const reduced = useReducedMotion();
  const v = useSharedValue(0);
  useEffect(() => {
    if (active && !reduced) {
      v.value = withDelay(delay, withRepeat(withTiming(1, { duration, easing: Easing.inOut(Easing.quad) }), -1, true));
    } else {
      cancelAnimation(v);
      v.value = withTiming(0, { duration: 200 });
    }
    return () => cancelAnimation(v);
  }, [active, reduced, duration, delay, v]);
  return v;
}

/** Leve balanço do personagem enquanto trabalha. */
export function WorkingBob({ active, children }: { active: boolean; children: ReactNode }) {
  const v = useLoop(active, 700);
  const style = useAnimatedStyle(() => ({ transform: [{ translateY: -3 * v.value }] }));
  return <Animated.View style={style}>{children}</Animated.View>;
}

/** Objeto de cena ao lado do personagem — cada atividade real tem sua animação. */
export function ActivityProp({ state }: { state: AgentLiveState }) {
  const { colors } = useThemeColors();
  const working = state.status === 'in_progress';
  const waiting = state.status === 'awaiting_user';
  const v = useLoop(working || waiting, state.activity === 'reviewing' ? 900 : 650);

  const kind: { icon: IconName; color: string } | null = waiting
    ? { icon: 'hand-left', color: colors.warning }
    : state.status === 'completed'
      ? { icon: 'checkmark-circle', color: colors.success }
      : state.status === 'error'
        ? { icon: 'alert-circle', color: colors.danger }
        : working
          ? {
              researching: { icon: 'search' as IconName, color: colors.info },
              directing: { icon: 'brush' as IconName, color: '#FF7DA8' },
              producing: { icon: 'layers' as IconName, color: colors.warning },
              reviewing: { icon: 'document-text' as IconName, color: colors.success },
              coordinating: { icon: 'clipboard' as IconName, color: colors.accent },
              idle: { icon: 'ellipse' as IconName, color: colors.textMuted },
            }[state.activity]
          : null;

  const activity = waiting ? 'waiting' : working ? state.activity : 'static';
  const style = useAnimatedStyle(() => {
    switch (activity) {
      case 'researching': // lupa varrendo o mural
        return { transform: [{ translateX: -6 + 12 * v.value }, { rotate: `${-12 + 24 * v.value}deg` }] };
      case 'directing': // pincel desenhando
        return { transform: [{ rotate: `${-18 + 36 * v.value}deg` }, { translateY: -2 * v.value }] };
      case 'producing': // camadas sendo empilhadas
        return { transform: [{ translateY: -4 * v.value }, { scale: 1 + 0.12 * v.value }] };
      case 'coordinating':
        return { transform: [{ rotate: `${-6 + 12 * v.value}deg` }] };
      case 'waiting':
        return { opacity: 0.55 + 0.45 * v.value, transform: [{ scale: 1 + 0.08 * v.value }] };
      default:
        return { opacity: 1, transform: [] };
    }
  });
  const scan = useAnimatedStyle(() => ({ transform: [{ translateY: -9 + 18 * v.value }], opacity: activity === 'reviewing' ? 1 : 0 }));

  if (!kind) return <View style={{ width: 28, height: 28 }} />;
  return (
    <View style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={style}>
        <Ionicons name={kind.icon} size={22} color={kind.color} />
      </Animated.View>
      {activity === 'reviewing' && (
        <Animated.View style={[{ position: 'absolute', left: 2, right: 2, height: 2, borderRadius: 1, backgroundColor: colors.success }, scan]} />
      )}
    </View>
  );
}

/** Indicador indeterminado (sem porcentagem): três pontos pulsando. */
export function WorkingDots({ color }: { color: string }) {
  const a = useLoop(true, 450, 0);
  const b = useLoop(true, 450, 150);
  const c = useLoop(true, 450, 300);
  const s1 = useAnimatedStyle(() => ({ opacity: 0.3 + 0.7 * a.value }));
  const s2 = useAnimatedStyle(() => ({ opacity: 0.3 + 0.7 * b.value }));
  const s3 = useAnimatedStyle(() => ({ opacity: 0.3 + 0.7 * c.value }));
  const dot = { width: 5, height: 5, borderRadius: 3, backgroundColor: color };
  return (
    <View accessibilityLabel="Em andamento" style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
      <Animated.View style={[dot, s1]} />
      <Animated.View style={[dot, s2]} />
      <Animated.View style={[dot, s3]} />
    </View>
  );
}

