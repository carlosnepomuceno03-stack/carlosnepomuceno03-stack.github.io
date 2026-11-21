import Ionicons from '@expo/vector-icons/Ionicons';
import { NATIVE_AGENTS } from '@studio-ai/shared';
import { View } from 'react-native';
import { AgentAvatar } from '@/features/production-room/agent-avatar';
import { Card, DemoBanner, Row, Screen, Text } from '@/components/ui';
import { useThemeColors } from '@/theme/theme';

const PERMISSION_LABELS: Record<string, string> = {
  read_project: 'Ler o projeto',
  create_tasks: 'Criar tarefas',
  write_references_analysis: 'Registrar análise de referências',
  write_direction_proposal: 'Propor direção de arte',
  write_draft_document: 'Criar rascunhos de documento',
  request_render: 'Solicitar renderização',
  write_quality_report: 'Registrar relatório de qualidade',
  request_approval: 'Solicitar sua aprovação',
};

export default function TeamScreen() {
  const { colors } = useThemeColors();
  return (
    <Screen edges={[]}>
      <DemoBanner
        title="Configuração pendente"
        message="Os agentes ainda não estão conectados a um provedor de IA. Ativação, escolha de modelo, limites e consumo chegam na versão 0.3."
      />
      {NATIVE_AGENTS.map((a) => (
        <Card key={a.id}>
          <Row>
            <AgentAvatar agentId={a.id} size={52} />
            <View style={{ flex: 1 }}>
              <Text variant="heading">{a.name}</Text>
              <Text variant="caption">{a.specialty}</Text>
            </View>
          </Row>
          <Text variant="caption" color="textMuted">
            {a.usesLlm ? 'Usa modelo de IA (com limite de custo por tarefa)' : 'Determinístico — não consome créditos de IA'}
          </Text>
          <View style={{ gap: 4 }}>
            {a.permissions.map((p) => (
              <Row key={p}>
                <Ionicons name="checkmark" size={14} color={colors.success} />
                <Text variant="caption" color="text">{PERMISSION_LABELS[p] ?? p}</Text>
              </Row>
            ))}
            {a.restrictions.map((r) => (
              <Row key={r}>
                <Ionicons name="close" size={14} color={colors.danger} />
                <Text variant="caption" color="text">{r}</Text>
              </Row>
            ))}
          </View>
        </Card>
      ))}
    </Screen>
  );
}
