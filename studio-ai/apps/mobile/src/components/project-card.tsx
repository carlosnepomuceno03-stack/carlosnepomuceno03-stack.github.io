import Ionicons from '@expo/vector-icons/Ionicons';
import { FLOW_STEPS, PROJECT_KIND_LABELS, completedSteps, type Project } from '@studio-ai/shared';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Card, Row, StatusPill, Text } from '@/components/ui';
import { useApi } from '@/data/api';
import { useProjects } from '@/data/projects';
import { useThemeColors } from '@/theme/theme';
import { formatDate } from '@/utils/format';

export function ProjectCard({ project }: { project: Project }) {
  const { colors } = useThemeColors();
  const { syncStatus } = useProjects();
  const { session } = useApi();
  const raw = syncStatus(project.id);
  const sync = raw === 'pending' && !session ? 'local' : raw;
  const { done, total } = completedSteps(project);
  const step = FLOW_STEPS.find((s) => s.id === project.currentStep);
  return (
    <Card
      onPress={() => router.push({ pathname: '/project/[id]', params: { id: project.id } })}
      accessibilityLabel={`Abrir projeto ${project.name}`}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Text variant="label" color="accent">{PROJECT_KIND_LABELS[project.kind].toUpperCase()}</Text>
        <Row>
          {project.eventDate && <Text variant="caption">{formatDate(project.eventDate)}</Text>}
          <Ionicons
            name={sync === 'synced' ? 'cloud-done-outline' : sync === 'pending' ? 'cloud-upload-outline' : 'phone-portrait-outline'}
            size={15}
            color={sync === 'synced' ? colors.success : sync === 'pending' ? colors.info : colors.textMuted}
            accessibilityLabel={sync === 'synced' ? 'Sincronizado na nuvem' : sync === 'pending' ? 'Envio pendente' : 'Somente neste aparelho'}
          />
        </Row>
      </Row>
      <Text variant="heading" numberOfLines={2}>{project.name}</Text>
      <Row style={{ justifyContent: 'space-between' }}>
        <Row style={{ flex: 1 }}>
          <StatusPill status={project.steps[project.currentStep]} compact />
          <Text variant="caption" numberOfLines={1} style={{ flex: 1 }}>Próximo: {step?.label}</Text>
        </Row>
        <Text variant="caption" color="textMuted">{done}/{total} etapas</Text>
        <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
      </Row>
      <View
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: total, now: done }}
        style={{ height: 4, borderRadius: 2, backgroundColor: colors.border, overflow: 'hidden' }}>
        <View style={{ width: `${(done / total) * 100}%`, height: '100%', backgroundColor: colors.accent }} />
      </View>
    </Card>
  );
}
