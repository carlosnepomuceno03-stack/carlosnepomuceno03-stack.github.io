import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateProjectInputSchema, PROJECT_KIND_LABELS, type ProjectKind } from '@studio-ai/shared';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { Button, Row, Screen, Text, TextField, type IconName } from '@/components/ui';
import { useProjects } from '@/data/projects';
import { useSettings } from '@/data/settings';
import { useThemeColors } from '@/theme/theme';
import { MIN_TOUCH, radius, spacing } from '@/theme/tokens';
import { maskBrDate, parseBrDate } from '@/utils/format';

const KINDS: { kind: ProjectKind; icon: IconName; hint: string }[] = [
  { kind: 'event', icon: 'musical-notes-outline', hint: 'Festas, shows, line-ups' },
  { kind: 'brand', icon: 'diamond-outline', hint: 'Identidade de marca ou loja' },
  { kind: 'campaign', icon: 'megaphone-outline', hint: 'Promoções e lançamentos' },
  { kind: 'other', icon: 'sparkles-outline', hint: 'Qualquer outro material' },
];

/** Assistente de criação. Modo Simples: 2 passos. Modo Profissional: mesmos dados em uma tela. */
export default function CreateScreen() {
  const { colors } = useThemeColors();
  const { settings } = useSettings();
  const { createProject } = useProjects();
  const pro = settings.mode === 'pro';

  const [step, setStep] = useState<1 | 2>(1);
  const [kind, setKind] = useState<ProjectKind | null>(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [errors, setErrors] = useState<{ name?: string; date?: string; general?: string }>({});
  const [saving, setSaving] = useState(false);

  const reset = () => {
    setStep(1); setKind(null); setName(''); setDate(''); setVenue(''); setErrors({});
  };

  const submit = async () => {
    if (!kind) return;
    const next: typeof errors = {};
    let eventDate: string | undefined;
    if (date.trim()) {
      const parsed = parseBrDate(date);
      if (!parsed) next.date = 'Use o formato DD/MM/AAAA';
      else eventDate = parsed;
    }
    const input = { name, kind, eventDate, venue: venue.trim() || undefined };
    const result = CreateProjectInputSchema.safeParse(input);
    if (!result.success) {
      for (const issue of result.error.issues) if (issue.path[0] === 'name') next.name = issue.message;
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    setSaving(true);
    try {
      const project = await createProject(input);
      if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      reset();
      router.push({ pathname: '/project/[id]', params: { id: project.id } });
    } catch (e) {
      setErrors({ general: e instanceof Error ? e.message : 'Não foi possível salvar o projeto.' });
    } finally {
      setSaving(false);
    }
  };

  const kindPicker = (
    <View style={styles.grid} accessibilityRole="radiogroup" accessibilityLabel="Tipo de projeto">
      {KINDS.map((k) => {
        const active = kind === k.kind;
        return (
          <Pressable
            key={k.kind}
            onPress={() => { setKind(k.kind); if (!pro) setStep(2); }}
            accessibilityRole="radio"
            accessibilityState={{ selected: active }}
            accessibilityLabel={`${PROJECT_KIND_LABELS[k.kind]}: ${k.hint}`}
            style={({ pressed }) => [
              styles.kind,
              { backgroundColor: active ? colors.accentSoft : colors.surface, borderColor: active ? colors.accent : colors.border, opacity: pressed ? 0.8 : 1 },
            ]}>
            <Ionicons name={k.icon} size={26} color={active ? colors.accent : colors.text} />
            <Text variant="bodyStrong">{PROJECT_KIND_LABELS[k.kind]}</Text>
            <Text variant="caption">{k.hint}</Text>
          </Pressable>
        );
      })}
    </View>
  );

  const details = (
    <View style={{ gap: spacing.lg }}>
      <TextField
        label={kind === 'event' ? 'Nome do evento' : 'Nome do projeto'}
        value={name}
        onChangeText={setName}
        placeholder={kind === 'event' ? 'Ex.: Noite Eletrônica — Edição Verão' : 'Ex.: Lançamento coleção'}
        error={errors.name}
        autoFocus={!pro}
        returnKeyType="next"
        maxLength={120}
      />
      {kind === 'event' && (
        <>
          <TextField
            label="Data (opcional)"
            value={date}
            onChangeText={(t) => setDate(maskBrDate(t))}
            placeholder="DD/MM/AAAA"
            keyboardType="number-pad"
            error={errors.date}
            maxLength={10}
          />
          <TextField label="Local (opcional)" value={venue} onChangeText={setVenue} placeholder="Ex.: Arena Centro" maxLength={200} />
        </>
      )}
      {errors.general && <Text variant="caption" color="danger">{errors.general}</Text>}
      <Button label="Criar projeto" icon="checkmark" onPress={submit} loading={saving} disabled={!kind} />
    </View>
  );

  return (
    <Screen>
      <View style={{ gap: 4 }}>
        <Text variant="label" color="accent">{pro ? 'NOVO PROJETO · MODO PROFISSIONAL' : `NOVO PROJETO · PASSO ${step} DE 2`}</Text>
        <Text variant="title" accessibilityRole="header">
          {pro || step === 1 ? 'O que vamos criar?' : 'Conte o básico'}
        </Text>
        <Text variant="body" color="textSecondary">
          {pro || step === 1
            ? 'Escolha o tipo. Briefing, referências e arquivos vêm em seguida, dentro do projeto.'
            : 'Você pode mudar tudo depois. Nada é enviado para IA nesta etapa.'}
        </Text>
      </View>

      {pro ? (
        <>
          {kindPicker}
          {kind && details}
        </>
      ) : step === 1 ? (
        kindPicker
      ) : (
        <>
          <Row>
            <Button label="Voltar" variant="ghost" icon="chevron-back" onPress={() => setStep(1)} style={{ paddingHorizontal: 0 }} />
            <Text variant="caption">Tipo: {kind ? PROJECT_KIND_LABELS[kind] : ''}</Text>
          </Row>
          {details}
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  kind: {
    flexBasis: '47%',
    flexGrow: 1,
    minHeight: MIN_TOUCH * 2.6,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.lg,
    gap: 6,
    justifyContent: 'flex-end',
  },
});
