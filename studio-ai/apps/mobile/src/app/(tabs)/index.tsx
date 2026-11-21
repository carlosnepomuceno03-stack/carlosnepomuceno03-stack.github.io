import { FLOW_STEPS } from '@studio-ai/shared';
import { router } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { ProjectCard } from '@/components/project-card';
import { Button, Card, DemoBanner, EmptyState, Row, SectionHeader, StatusPill, Text, Screen } from '@/components/ui';
import { useApi } from '@/data/api';
import { useProjects } from '@/data/projects';
import { relativeTime } from '@/utils/format';
import { useThemeColors } from '@/theme/theme';

export default function HomeScreen() {
  const { projects, loaded, corrupted, syncing, syncError, pendingCount, lastSyncAt, syncNow } = useProjects();
  const api = useApi();
  const { colors } = useThemeColors();

  // Tarefas pendentes reais: a próxima etapa de cada projeto que depende do usuário.
  const pending = projects
    .map((p) => ({ project: p, step: FLOW_STEPS.find((s) => s.id === p.currentStep)! }))
    .filter(({ project }) => project.steps[project.currentStep] !== 'completed')
    .slice(0, 5);

  return (
    <Screen>
      <View style={{ gap: 4 }}>
        <Text variant="label" color="accent">LUMPLI</Text>
        <Text variant="display" accessibilityRole="header">Seu estúdio criativo</Text>
        <Text variant="body" color="textSecondary">Crie, aprove e adapte materiais mantendo a direção de arte sob controle.</Text>
      </View>

      <Button label="Novo projeto" icon="add" onPress={() => router.push('/create')} />
      {api.configured && (
        <Card>
          {api.session ? (
            <Row>
              <Text variant="caption" style={{ flex: 1 }} color={syncError ? 'danger' : 'textSecondary'}>
                {syncing ? 'Sincronizando com a nuvem…'
                  : syncError ? syncError
                  : pendingCount ? `${pendingCount} alteração(ões) aguardando envio`
                  : lastSyncAt ? `Tudo sincronizado · ${relativeTime(lastSyncAt)}` : 'Conectado à nuvem'}
              </Text>
              <Button label="Sincronizar" variant="ghost" icon="sync" onPress={syncNow} loading={syncing} />
            </Row>
          ) : (
            <Row>
              <Text variant="caption" style={{ flex: 1 }}>Seus projetos estão só neste aparelho. Entre para salvá-los na nuvem.</Text>
              <Button label="Entrar" variant="ghost" icon="log-in-outline" onPress={() => router.push('/cloud')} />
            </Row>
          )}
        </Card>
      )}

      {corrupted && (
        <DemoBanner title="Atenção" message="Alguns dados salvos neste aparelho estavam inválidos e foram ignorados." />
      )}

      <SectionHeader title="Projetos recentes" />
      {!loaded ? (
        <ActivityIndicator color={colors.accent} accessibilityLabel="Carregando projetos" />
      ) : projects.length === 0 ? (
        <EmptyState
          icon="folder-open-outline"
          title="Nenhum projeto ainda"
          message="Comece um evento, marca ou campanha. O assistente guia você em poucos passos."
          action={<Button label="Criar primeiro projeto" variant="secondary" onPress={() => router.push('/create')} />}
        />
      ) : (
        <View style={{ gap: 12 }}>
          {projects.slice(0, 5).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </View>
      )}

      <SectionHeader title="Tarefas pendentes" />
      {pending.length === 0 ? (
        <Text variant="caption">Nenhuma tarefa aguardando você.</Text>
      ) : (
        <Card>
          {pending.map(({ project, step }, i) => (
            <Row key={project.id} style={{ paddingVertical: 6, borderTopWidth: i ? 1 : 0, borderTopColor: colors.border }}>
              <StatusPill status={project.steps[project.currentStep]} compact />
              <View style={{ flex: 1 }}>
                <Text variant="bodyStrong" numberOfLines={1}>{step.label}</Text>
                <Text variant="caption" numberOfLines={1}>{project.name}</Text>
              </View>
            </Row>
          ))}
        </Card>
      )}

      <SectionHeader title="Materiais aprovados" />
      <EmptyState
        icon="ribbon-outline"
        title="Nenhum material aprovado"
        message="Os materiais exportados ficam em Produção, dentro de cada projeto do servidor."
      />
    </Screen>
  );
}
