import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Card, DemoBanner, EmptyState, Row, Screen, Text } from '@/components/ui';
import { API_URL, ApiError, useApi } from '@/data/api';
import { useProjects } from '@/data/projects';
import { useThemeColors } from '@/theme/theme';

/** Produção no servidor: projetos com arquivos reais, documento por camadas, aprovação e exportação. */
export default function CloudHome() {
  const api = useApi();
  const { colors } = useThemeColors();
  const { syncNow, projects } = useProjects();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    try {
      await fn();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : 'Algo deu errado');
    } finally {
      setBusy(false);
    }
  };

  if (!api.configured) {
    return (
      <Screen edges={[]}>
        <EmptyState icon="cloud-offline-outline" title="Servidor não configurado" message="Defina EXPO_PUBLIC_API_URL ao iniciar o app (veja o README) para usar o motor gráfico." />
      </Screen>
    );
  }
  if (!api.ready) return <Screen edges={[]}><ActivityIndicator color={colors.accent} /></Screen>;

  return (
    <Screen edges={[]}>
      <View style={{ gap: 4 }}>
        <Text variant="title" accessibilityRole="header">Conta e nuvem</Text>
        <Text variant="caption">Servidor: {API_URL}</Text>
      </View>

      {!api.session ? (
        <Card>
          <Text variant="heading">Entrar</Text>
          {api.authMode === 'dev' ? (
            <>
              <DemoBanner title="Login de desenvolvimento" message="Este servidor está em modo local de desenvolvimento. A sessão é criada pelo próprio servidor, sem senha." />
              <Button label="Entrar (desenvolvimento)" icon="log-in-outline" loading={busy} onPress={() => run(api.signInDev)} />
            </>
          ) : (
            <Text variant="caption">Login com conta Lumpli (Supabase Auth) será habilitado assim que o projeto Supabase estiver conectado.</Text>
          )}
        </Card>
      ) : (
        <>
          <Card>
            <Row>
              <Ionicons name="person-circle-outline" size={22} color={colors.text} />
              <Text variant="caption" style={{ flex: 1 }}>Sessão {api.session.mode === 'dev' ? 'de desenvolvimento' : ''} · {api.session.userId.slice(0, 8)}…</Text>
              <Button label="Sair" variant="ghost" onPress={api.signOut} />
            </Row>
          </Card>
          <Button
            label="Criar evento fictício de demonstração"
            icon="sparkles-outline"
            variant="secondary"
            loading={busy}
            onPress={() => run(async () => {
              const r = await api.request<{ projectId: string }>('/v1/demo/seed', { body: { organizationId: api.session!.organizationId } });
              await syncNow();
              router.push({ pathname: '/cloud/[projectId]', params: { projectId: r.projectId } });
            })}
          />
          <Card onPress={() => router.replace('/')} accessibilityLabel="Ver meus projetos">
            <Row>
              <Ionicons name="folder-open-outline" size={20} color={colors.text} />
              <Text variant="body" style={{ flex: 1 }}>Meus projetos ({projects.length}) — uma única lista, sincronizada</Text>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </Row>
          </Card>
        </>
      )}
      {error && <Text variant="caption" color="danger">{error}</Text>}
    </Screen>
  );
}
