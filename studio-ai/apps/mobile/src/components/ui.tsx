import Ionicons from '@expo/vector-icons/Ionicons';
import { STEP_STATUS_LABELS, type StepStatus } from '@studio-ai/shared';
import type { ComponentProps, ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text as RNText,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';
import { useThemeColors } from '@/theme/theme';
import { MIN_TOUCH, radius, spacing, typography, type ThemeColors, type TypographyVariant } from '@/theme/tokens';

export type IconName = ComponentProps<typeof Ionicons>['name'];

export function Text({
  variant = 'body',
  color,
  style,
  children,
  numberOfLines,
  accessibilityRole,
}: {
  variant?: TypographyVariant;
  color?: keyof ThemeColors;
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  numberOfLines?: number;
  accessibilityRole?: 'header' | 'text';
}) {
  const { colors } = useThemeColors();
  return (
    <RNText
      numberOfLines={numberOfLines}
      accessibilityRole={accessibilityRole}
      style={[typography[variant], { color: colors[color ?? (variant === 'caption' || variant === 'label' ? 'textSecondary' : 'text')] }, style]}>
      {children}
    </RNText>
  );
}

/** Tela padrão: respeita safe areas, rola, e mantém largura legível em tablets/web. */
export function Screen({
  children,
  scroll = true,
  edges = ['top'],
  contentStyle,
}: {
  children: ReactNode;
  scroll?: boolean;
  edges?: Edge[];
  contentStyle?: StyleProp<ViewStyle>;
}) {
  const { colors } = useThemeColors();
  const inner = <View style={[styles.screenInner, contentStyle]}>{children}</View>;
  return (
    <SafeAreaView edges={edges} style={{ flex: 1, backgroundColor: colors.background }}>
      {scroll ? (
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          {inner}
        </ScrollView>
      ) : (
        inner
      )}
    </SafeAreaView>
  );
}

export function Card({ children, style, onPress, accessibilityLabel }: { children: ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void; accessibilityLabel?: string }) {
  const { colors } = useThemeColors();
  const base = [styles.card, { backgroundColor: colors.surface, borderColor: colors.border }, style];
  if (!onPress) return <View style={base}>{children}</View>;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [base, pressed && { opacity: 0.85, transform: [{ scale: 0.99 }] }]}>
      {children}
    </Pressable>
  );
}

export function Button({
  label,
  onPress,
  variant = 'primary',
  icon,
  disabled,
  loading,
  style,
  accessibilityHint,
}: {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  icon?: IconName;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityHint?: string;
}) {
  const { colors } = useThemeColors();
  const bg = { primary: colors.accent, secondary: colors.surfaceElevated, ghost: 'transparent', danger: 'transparent' }[variant];
  const fg = { primary: colors.accentText, secondary: colors.text, ghost: colors.accent, danger: colors.danger }[variant];
  const border = variant === 'secondary' ? colors.border : variant === 'danger' ? colors.danger : 'transparent';
  const isDisabled = disabled || loading;
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: !!isDisabled, busy: !!loading }}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: bg, borderColor: border, opacity: isDisabled ? 0.45 : pressed ? 0.8 : 1 },
        style,
      ]}>
      {loading ? <ActivityIndicator color={fg} /> : icon ? <Ionicons name={icon} size={18} color={fg} /> : null}
      <RNText style={[typography.bodyStrong, { color: fg }]}>{label}</RNText>
    </Pressable>
  );
}

export function IconButton({ icon, onPress, label }: { icon: IconName; onPress: () => void; label: string }) {
  const { colors } = useThemeColors();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={({ pressed }) => [styles.iconButton, { backgroundColor: colors.surfaceElevated, opacity: pressed ? 0.7 : 1 }]}>
      <Ionicons name={icon} size={20} color={colors.text} />
    </Pressable>
  );
}

const STATUS_STYLE: Record<StepStatus, { color: keyof ThemeColors; icon: IconName }> = {
  not_started: { color: 'textMuted', icon: 'ellipse-outline' },
  in_progress: { color: 'info', icon: 'sync' },
  awaiting_user: { color: 'warning', icon: 'hand-left-outline' },
  completed: { color: 'success', icon: 'checkmark-circle' },
  error: { color: 'danger', icon: 'alert-circle' },
  cancelled: { color: 'textMuted', icon: 'close-circle-outline' },
};

export function StatusPill({ status, compact }: { status: StepStatus; compact?: boolean }) {
  const { colors } = useThemeColors();
  const s = STATUS_STYLE[status];
  return (
    <View
      accessible
      accessibilityLabel={`Estado: ${STEP_STATUS_LABELS[status]}`}
      style={[styles.pill, { backgroundColor: colors[s.color] + '22' }]}>
      <Ionicons name={s.icon} size={13} color={colors[s.color]} />
      {!compact && <RNText style={[typography.label, { color: colors[s.color] }]}>{STEP_STATUS_LABELS[status]}</RNText>}
    </View>
  );
}

/** Marca explícita de conteúdo de demonstração (regra: nada simulado apresentado como real). */
export function DemoBanner({ title, message }: { title?: string; message: string }) {
  const { colors } = useThemeColors();
  return (
    <View
      accessible
      accessibilityRole="alert"
      style={[styles.demo, { backgroundColor: colors.demoSoft, borderColor: colors.demo }]}>
      <Ionicons name="flask-outline" size={18} color={colors.demo} />
      <View style={{ flex: 1, gap: 2 }}>
        <RNText style={[typography.label, { color: colors.demo }]}>{(title ?? 'Modo demonstração').toUpperCase()}</RNText>
        <RNText style={[typography.caption, { color: colors.text }]}>{message}</RNText>
      </View>
    </View>
  );
}

export function SectionHeader({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <View style={styles.sectionHeader}>
      <Text variant="heading" accessibilityRole="header">{title}</Text>
      {action}
    </View>
  );
}

export function EmptyState({ icon, title, message, action }: { icon: IconName; title: string; message: string; action?: ReactNode }) {
  const { colors } = useThemeColors();
  return (
    <View style={[styles.empty, { borderColor: colors.border }]}>
      <Ionicons name={icon} size={28} color={colors.textMuted} />
      <Text variant="bodyStrong" style={{ textAlign: 'center' }}>{title}</Text>
      <Text variant="caption" style={{ textAlign: 'center' }}>{message}</Text>
      {action}
    </View>
  );
}

export function TextField({ label, error, hint, ...props }: TextInputProps & { label: string; error?: string; hint?: string }) {
  const { colors } = useThemeColors();
  return (
    <View style={{ gap: spacing.xs }}>
      <Text variant="label">{label.toUpperCase()}</Text>
      <TextInput
        placeholderTextColor={colors.textMuted}
        accessibilityLabel={label}
        {...props}
        style={[
          styles.input,
          typography.body,
          { color: colors.text, backgroundColor: colors.surfaceElevated, borderColor: error ? colors.danger : colors.border },
          props.multiline && { minHeight: 96, textAlignVertical: 'top' },
          props.style,
        ]}
      />
      {error ? <Text variant="caption" color="danger">{error}</Text> : hint ? <Text variant="caption" color="textMuted">{hint}</Text> : null}
    </View>
  );
}

export function Segmented<T extends string>({ options, value, onChange, label }: { options: { value: T; label: string; icon?: IconName }[]; value: T; onChange: (v: T) => void; label: string }) {
  const { colors } = useThemeColors();
  return (
    <View accessibilityRole="radiogroup" accessibilityLabel={label} style={[styles.segmented, { backgroundColor: colors.surfaceElevated, borderColor: colors.border }]}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <Pressable
            key={o.value}
            onPress={() => onChange(o.value)}
            accessibilityRole="radio"
            accessibilityState={{ selected: active }}
            accessibilityLabel={o.label}
            style={[styles.segment, active && { backgroundColor: colors.accentSoft }]}>
            {o.icon && <Ionicons name={o.icon} size={16} color={active ? colors.accent : colors.textSecondary} />}
            <RNText style={[typography.caption, { fontWeight: '600', color: active ? colors.accent : colors.textSecondary }]}>{o.label}</RNText>
          </Pressable>
        );
      })}
    </View>
  );
}

export function Row({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  scrollContent: { flexGrow: 1, alignItems: 'center' },
  screenInner: { width: '100%', maxWidth: 720, padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl },
  card: { borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth, padding: spacing.lg, gap: spacing.sm },
  button: {
    minHeight: MIN_TOUCH,
    borderRadius: radius.md,
    borderWidth: 1,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  iconButton: { width: 40, height: 40, borderRadius: radius.pill, alignItems: 'center', justifyContent: 'center' },
  pill: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 4, borderRadius: radius.pill, alignSelf: 'flex-start' },
  demo: { flexDirection: 'row', gap: spacing.md, padding: spacing.md, borderRadius: radius.md, borderWidth: 1, alignItems: 'flex-start' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing.sm },
  empty: { alignItems: 'center', gap: spacing.sm, padding: spacing.xl, borderRadius: radius.lg, borderWidth: 1, borderStyle: 'dashed' },
  input: { minHeight: MIN_TOUCH, borderRadius: radius.md, borderWidth: 1, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  segmented: { flexDirection: 'row', borderRadius: radius.md, borderWidth: 1, padding: 4, gap: 4 },
  segment: { flex: 1, minHeight: 40, borderRadius: radius.sm, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
});
