import { FLOW_STEPS, PROJECT_KIND_LABELS, completedSteps, type FlowStepId } from '@studio-ai/shared';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { Alert, Platform, View } from 'react-native';
import { Button, Card, EmptyState, Row, Screen, SectionHeader, StatusPill, Text } from '@/components/ui';
import { useApi } from '@/data/api';
import { latestBriefing, useProjects } from '@/data/projects';
import { useThemeColors } from '@/theme/theme';
import { formatDate } from '@/utils/format';

/** Em qual versão cada etapa do fluxo passa a funcionar de verdade. */
const AVAILABILITY: Partial<Record<FlowStepId, string>> = {
  select_originals: '0.2',
  analyze_references: '0.3',
  review_direction: '0.3',
  layout_proposal: '0.3',
  edit_layout: '0.2',
  approve_master: '0.2',
  freeze_identity: '0.2',
  select_formats: '0.2',
  generate_adaptations: '0.4',
  run_checks: '0.4',
  review_materials: '0.4',
  export: '0.2',
};

function confirm(title: string, message: string): Promise<boolean> {
  if (Platform.OS === 'web') return Promise.resolve(globalThis.confirm?.(`${title}\n\n${message}`) ?? false);
  return new Promise((resolve) =>
    Alert.alert(title, message, [
      { text: 'Cancelar', style: 'cancel', onPress: () => resolve(false) },
      { text: 'Excluir', style: 'destructive', onPress: () => resolve(true) },
    ]),
  );
}

export default function ProjectScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { projects, briefings, references, deleteProject, loaded, syncStatus } = useProjects();
  const api = useApi();
  const { colors } = useThemeColors();
  const project = projects.find((p) => p.id === id);

  if (!loaded) return <Screen edges={[]}><Text>Carregando…</Text></Screen>;
  if (!project) {
    return (
      <Screen edges={[]}>
        <EmptyState icon="alert-circle-outline" title="Projeto não encontrado" message="Ele pode ter sido excluído." action={<Button label="Voltar ao início" onPress={() => router.replace('/')} />} />
      </Screen>
    );
  }

  const briefing = latestBriefing(briefings, project.id);
  const refs = references.filter((r) => r.projectId === project.id);
  const { done, total } = completedSteps(project);

  const onDelete = async () => {
    if (await confirm('Excluir projeto?', `“${project.name}” e seus dados locais serão removidos deste aparelho.`)) {
      await deleteProject(project.id);
      router.replace('/');
    }
  };

  return (
    <Screen edges={[]}>
      <Stack.Screen options={{ title: project.name }} />
      <View style={{ gap: 4 }}>
        <Text variant="label" color="accent">{PROJECT_KIND_LABELS[project.kind].toUpperCase()}</Text>
        <Text variant="title" accessibilityRole="header">{project.name}</Text>
        <Text variant="caption">
          {[project.eventDate && formatDate(project.eventDate), project.venue].filter(Boolean).join(' · ') || 'Sem data definida'}
        </Text>
        <Text variant="caption" color="textMuted">{done} de {total} etapas concluídas</Text>
      </View>

      <Card>
        <Row style={{ justifyContent: 'space-between' }}>
          <Text variant="heading">Briefing</Text>
          <StatusPill status={project.steps.briefing} />
        </Row>
        {briefing ? (
          <>
            <Text variant="body" numberOfLines={3}>{briefing.objective || '(sem objetivo)'}</Text>
            <Text variant="caption">Revisão {briefing.revision} · {briefing.mandatoryTexts.length} texto(s) obrigatório(s)</Text>
          </>
        ) : (
          <Text variant="caption">Descreva o objetivo, público e textos obrigatórios. Esses dados guiarão os agentes.</Text>
        )}
        <Button
          label={briefing ? 'Editar briefing' : 'Informar briefing'}
          variant={briefing ? 'secondary' : 'primary'}
          onPress={() => router.push({ pathname: '/project/[id]/briefing', params: { id: project.id } })}
        />
      </Card>

      <Card>
        <Row style={{ justifyContent: 'space-between' }}>
          <Text variant="heading">Referências</Text>
          <Text variant="caption">{refs.length} link(s)</Text>
        </Row>
        <Text variant="caption">Links do Pinterest e Behance são guardados como links; o conteúdo não é baixado.</Text>
        <Button label="Adicionar referência" variant="secondary" icon="link" onPress={() => router.push({ pathname: '/library', params: { projectId: project.id } })} />
      </Card>

      <Card>
        <Row style={{ justifyContent: 'space-between' }}>
          <Text variant="heading">Arquivos, layouts e exportação</Text>
          <Text variant="caption" color={syncStatus(project.id) === 'synced' ? 'success' : 'textMuted'}>
            {syncStatus(project.id) === 'synced' ? 'Na nuvem' : syncStatus(project.id) === 'pending' && api.session ? 'Enviando…' : 'Só no aparelho'}
          </Text>
        </Row>
        {syncStatus(project.id) === 'synced' ? (
          <Button label="Abrir produção" icon="layers-outline" onPress={() => router.push({ pathname: '/cloud/[projectId]', params: { projectId: project.id } })} />
        ) : (
          <>
            <Text variant="caption">Arquivos originais, editor, aprovação e exportação usam o servidor. {api.session ? 'O projeto será enviado automaticamente.' : 'Entre para enviar este projeto à nuvem.'}</Text>
            {!api.session && api.configured && <Button label="Entrar" variant="secondary" icon="log-in-outline" onPress={() => router.push('/cloud')} />}
          </>
        )}
      </Card>

      <SectionHeader title="Fluxo de produção" />
      <Card style={{ gap: 0, paddingVertical: 4 }}>
        {FLOW_STEPS.map((s, i) => {
          const status = project.steps[s.id];
          const soon = AVAILABILITY[s.id];
          const current = project.currentStep === s.id;
          return (
            <Row
              key={s.id}
              style={{ paddingVertical: 10, borderTopWidth: i ? 1 : 0, borderTopColor: colors.border }}
              >
              <Text variant="caption" color="textMuted" style={{ width: 22 }}>{String(i + 1).padStart(2, '0')}</Text>
              <View style={{ flex: 1 }}>
                <Text variant={current ? 'bodyStrong' : 'body'} color={soon && status === 'not_started' ? 'textMuted' : 'text'}>{s.label}</Text>
                {soon && status === 'not_started' && <Text variant="caption" color="textMuted">Disponível na versão {soon}</Text>}
              </View>
              <StatusPill status={status} compact={!current && status === 'not_started'} />
            </Row>
          );
        })}
      </Card>

      <Button label="Excluir projeto" variant="danger" icon="trash-outline" onPress={onDelete} />
    </Screen>
  );
}
