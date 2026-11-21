import Ionicons from '@expo/vector-icons/Ionicons';
import Constants from 'expo-constants';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { Button, Card, Row, Screen, SectionHeader, Segmented, Text } from '@/components/ui';
import { useProjects } from '@/data/projects';
import { useSettings } from '@/data/settings';
import { clearAllLocalData } from '@/data/storage';
import { useThemeColors } from '@/theme/theme';

const INTEGRATIONS = [
  { name: 'Conta Studio AI (Supabase Auth)', stage: '0.2' },
  { name: 'Armazenamento em nuvem', stage: '0.2' },
  { name: 'Provedor de IA para análise', stage: '0.3' },
  { name: 'Pinterest / Behance (APIs oficiais)', stage: 'futuro, após autorização' },
];

export default function ProfileScreen() {
  const { settings, update } = useSettings();
  const { reload, projects } = useProjects();
  const { colors } = useThemeColors();
  const [cleared, setCleared] = useState(false);

  const doClear = async () => {
    await clearAllLocalData();
    await reload();
    update({ mode: 'simple', theme: 'dark', studioView: 'room' });
    setCleared(true);
  };

  const onClear = () => {
    const msg = 'Todos os projetos, briefings, referências e preferências salvos neste aparelho serão apagados. Isso não pode ser desfeito.';
    if (Platform.OS === 'web') {
      if (globalThis.confirm?.(msg)) doClear();
      return;
    }
    Alert.alert('Apagar dados locais?', msg, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Apagar', style: 'destructive', onPress: doClear },
    ]);
  };

  return (
    <Screen>
      <Text variant="title" accessibilityRole="header">Perfil</Text>

      <Card>
        <Row>
          <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: colors.accentSoft, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="person" size={22} color={colors.accent} />
          </View>
          <View style={{ flex: 1 }}>
            <Text variant="bodyStrong">Uso local (sem conta)</Text>
            <Text variant="caption">Dados salvos apenas neste aparelho · {projects.length} projeto(s)</Text>
          </View>
        </Row>
      </Card>

      <SectionHeader title="Modo de uso" />
      <Segmented
        label="Modo de uso"
        value={settings.mode}
        onChange={(mode) => update({ mode })}
        options={[
          { value: 'simple', label: 'Simples', icon: 'sparkles-outline' },
          { value: 'pro', label: 'Profissional', icon: 'layers-outline' },
        ]}
      />
      <Text variant="caption">
        {settings.mode === 'simple'
          ? 'Assistente guiado, poucas opções, linguagem direta.'
          : 'Mais controles por tela. O editor por camadas chega na versão 0.2. Os dois modos usam o mesmo projeto.'}
      </Text>

      <SectionHeader title="Aparência" />
      <Segmented
        label="Tema"
        value={settings.theme}
        onChange={(theme) => update({ theme })}
        options={[
          { value: 'dark', label: 'Escuro', icon: 'moon-outline' },
          { value: 'light', label: 'Claro', icon: 'sunny-outline' },
          { value: 'system', label: 'Sistema', icon: 'phone-portrait-outline' },
        ]}
      />

      <SectionHeader title="Equipe de IA" />
      <Card onPress={() => router.push('/team')} accessibilityLabel="Abrir Minha Equipe de IA">
        <Row>
          <Ionicons name="people-outline" size={20} color={colors.text} />
          <View style={{ flex: 1 }}>
            <Text variant="bodyStrong">Minha Equipe de IA</Text>
            <Text variant="caption">5 agentes nativos · especialidades e permissões</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
        </Row>
      </Card>

      <SectionHeader title="Integrações" />
      <Card style={{ gap: 0, paddingVertical: 4 }}>
        {INTEGRATIONS.map((i, idx) => (
          <Row key={i.name} style={{ paddingVertical: 10, borderTopWidth: idx ? 1 : 0, borderTopColor: colors.border }}>
            <Text variant="body" style={{ flex: 1 }}>{i.name}</Text>
            <Text variant="caption" color="textMuted">Não configurado · {i.stage}</Text>
          </Row>
        ))}
      </Card>

      <SectionHeader title="Privacidade e dados" />
      <Card>
        <Text variant="caption">
          Nesta versão nada sai do aparelho: não há envio para servidores nem para provedores de IA.
          Você pode apagar tudo a qualquer momento.
        </Text>
        <Button label="Apagar dados locais" variant="danger" icon="trash-outline" onPress={onClear} />
        {cleared && <Text variant="caption" color="success" >Dados locais apagados.</Text>}
      </Card>

      <Text variant="caption" color="textMuted" style={{ textAlign: 'center' }}>
        Studio AI {Constants.expoConfig?.version ?? ''} · Etapa 1 (base mobile)
      </Text>
    </Screen>
  );
}
