import Ionicons from '@expo/vector-icons/Ionicons';
import { STEP_STATUS_LABELS, getAgent, type AgentId } from '@studio-ai/shared';
import { useIsFocused } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Card, DemoBanner, EmptyState, Row, Screen, SectionHeader, Segmented, StatusPill, Text } from '@/components/ui';
import { useSettings } from '@/data/settings';
import { ActivityProp, WorkingBob, WorkingDots } from '@/features/production-room/activity';
import { AgentAvatar } from '@/features/production-room/agent-avatar';
import type { AgentLiveState } from '@/features/production-room/feed';
import { useProductionFeed } from '@/features/production-room/use-production-feed';
import { useThemeColors } from '@/theme/theme';
import { radius, spacing } from '@/theme/tokens';

function statusLabel(s: AgentLiveState['status']) {
  return s === 'idle' ? 'Livre' : STEP_STATUS_LABELS[s];
}

function ProgressLine({ state }: { state: AgentLiveState }) {
  const { colors } = useThemeColors();
  if (state.status !== 'in_progress') return null;
  // Progresso numérico só quando existe contagem real; senão, indicador indeterminado.
  return state.progress ? (
    <Text variant="caption" color="info">{state.progress.done} de {state.progress.total}</Text>
  ) : (
    <WorkingDots color={colors.info} />
  );
}

function Workstation({ state, onPress }: { state: AgentLiveState; onPress: () => void }) {
  const { colors } = useThemeColors();
  const agent = getAgent(state.agentId);
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${agent.name}. ${statusLabel(state.status)}. ${state.message}`}
      accessibilityHint="Abre os detalhes do agente"
      style={({ pressed }) => [styles.station, { opacity: pressed ? 0.85 : 1 }]}>
      <View style={styles.stationTop}>
        <WorkingBob active={state.status === 'in_progress'}>
          <AgentAvatar agentId={state.agentId} size={58} />
        </WorkingBob>
        <View style={styles.prop}>
          <ActivityProp state={state} />
        </View>
      </View>
      {/* mesa */}
      <View style={[styles.desk, { backgroundColor: colors.surfaceElevated, borderColor: colors.border }]}>
        <Text variant="label" color="text" numberOfLines={1}>{agent.name.replace('Agente de ', '')}</Text>
        <Text variant="caption" numberOfLines={2} style={{ textAlign: 'center', minHeight: 36 }}>{state.message}</Text>
        <Row style={{ justifyContent: 'center', minHeight: 18 }}>
          {state.status === 'idle' ? <Text variant="caption" color="textMuted">Livre</Text> : <StatusPill status={state.status} compact={state.status === 'in_progress'} />}
          <ProgressLine state={state} />
        </Row>
      </View>
    </Pressable>
  );
}

export default function StudioScreen() {
  const { colors } = useThemeColors();
  const { settings, update } = useSettings();
  const focused = useIsFocused();
  const [paused, setPaused] = useState(false);
  const feed = useProductionFeed(focused && !paused);
  const [selected, setSelected] = useState<AgentId | null>(null);
  const insets = useSafeAreaInsets();

  const selectedState = feed.agents.find((a) => a.agentId === selected);
  const director = feed.agents.find((a) => a.agentId === 'director')!;
  const team = feed.agents.filter((a) => a.agentId !== 'director');

  return (
    <Screen>
      <View style={{ gap: 4 }}>
        <Text variant="title" accessibilityRole="header">Sala de Produção</Text>
        <Text variant="body" color="textSecondary">Acompanhe os agentes trabalhando no seu projeto.</Text>
      </View>

      <DemoBanner message="Os agentes ainda não estão conectados (Etapa 3). Esta sala reproduz um roteiro de exemplo para validar a experiência — nenhum arquivo é gerado e nenhuma IA é chamada." />

      <Row>
        <View style={{ flex: 1 }}>
          <Segmented
            label="Visualização"
            value={settings.studioView}
            onChange={(studioView) => update({ studioView })}
            options={[
              { value: 'room', label: 'Sala', icon: 'cube-outline' },
              { value: 'list', label: 'Lista', icon: 'list-outline' },
            ]}
          />
        </View>
        <Pressable
          onPress={() => setPaused((p) => !p)}
          accessibilityRole="button"
          accessibilityLabel={paused ? 'Continuar demonstração' : 'Pausar demonstração'}
          style={[styles.ctrl, { backgroundColor: colors.surfaceElevated, borderColor: colors.border }]}>
          <Ionicons name={paused ? 'play' : 'pause'} size={18} color={colors.text} />
        </Pressable>
        <Pressable
          onPress={feed.restart}
          accessibilityRole="button"
          accessibilityLabel="Reiniciar demonstração"
          style={[styles.ctrl, { backgroundColor: colors.surfaceElevated, borderColor: colors.border }]}>
          <Ionicons name="refresh" size={18} color={colors.text} />
        </Pressable>
      </Row>

      {settings.studioView === 'room' ? (
        <View style={[styles.room, { backgroundColor: colors.studioWall, borderColor: colors.border }]}>
          {/* parede com janela e quadro de referências */}
          <View style={styles.wall}>
            <View style={[styles.board, { borderColor: colors.border }]}>
              {[colors.accent, colors.info, '#FF7DA8', colors.warning].map((c) => (
                <View key={c} style={{ width: 18, height: 24, borderRadius: 3, backgroundColor: c, opacity: 0.55 }} />
              ))}
            </View>
            <Text variant="label" color="textMuted">LUMPLI · SALA 01</Text>
          </View>
          <View style={[styles.floor, { backgroundColor: colors.studioFloor }]}>
            <View style={styles.centerRow}>
              <View style={{ width: '50%' }}>
                <Workstation state={director} onPress={() => setSelected('director')} />
              </View>
            </View>
            <View style={styles.grid}>
              {team.map((a) => (
                <View key={a.agentId} style={styles.cell}>
                  <Workstation state={a} onPress={() => setSelected(a.agentId)} />
                </View>
              ))}
            </View>
          </View>
        </View>
      ) : (
        <View style={{ gap: 8 }}>
          {feed.agents.map((a) => (
            <Card key={a.agentId} onPress={() => setSelected(a.agentId)} accessibilityLabel={`${getAgent(a.agentId).name}: ${a.message}`} style={{ paddingVertical: 12 }}>
              <Row>
                <AgentAvatar agentId={a.agentId} size={36} />
                <View style={{ flex: 1 }}>
                  <Text variant="bodyStrong" numberOfLines={1}>{getAgent(a.agentId).name}</Text>
                  <Text variant="caption" numberOfLines={1}>{a.message}</Text>
                </View>
                {a.status === 'idle' ? <Text variant="caption" color="textMuted">Livre</Text> : <StatusPill status={a.status} compact />}
                <ProgressLine state={a} />
              </Row>
            </Card>
          ))}
        </View>
      )}

      <SectionHeader title="Bancada de entregas" />
      {feed.deliveries.length === 0 ? (
        <EmptyState icon="file-tray-outline" title="Nada na bancada" message="Arquivos produzidos aparecem aqui para revisão." />
      ) : (
        <View style={{ gap: 8 }}>
          {feed.deliveries.map((d) => (
            <Card key={d.id} style={{ paddingVertical: 12, borderColor: colors.demo, borderStyle: 'dashed', borderWidth: 1 }}>
              <Row>
                <Ionicons name="image-outline" size={20} color={colors.demo} />
                <View style={{ flex: 1 }}>
                  <Text variant="bodyStrong">{d.title}</Text>
                  <Text variant="caption">{d.detail}</Text>
                </View>
                <Text variant="label" color="demo">DEMO</Text>
              </Row>
            </Card>
          ))}
        </View>
      )}

      <Modal visible={!!selectedState} transparent animationType="slide" onRequestClose={() => setSelected(null)}>
        <Pressable style={styles.backdrop} onPress={() => setSelected(null)} accessibilityLabel="Fechar detalhes" />
        {selectedState && (
          <View style={[styles.sheet, { backgroundColor: colors.surface, borderColor: colors.border, paddingBottom: insets.bottom + spacing.lg }]}>
            <View style={[styles.handle, { backgroundColor: colors.border }]} />
            <ScrollView contentContainerStyle={{ gap: spacing.md }}>
              <Row>
                <AgentAvatar agentId={selectedState.agentId} size={56} />
                <View style={{ flex: 1 }}>
                  <Text variant="heading">{getAgent(selectedState.agentId).name}</Text>
                  <Text variant="caption">{getAgent(selectedState.agentId).specialty}</Text>
                </View>
              </Row>
              <Row>
                {selectedState.status !== 'idle' && <StatusPill status={selectedState.status} />}
                <Text variant="label" color="demo">DEMONSTRAÇÃO</Text>
              </Row>
              <Card>
                <Text variant="label">ATIVIDADE ATUAL</Text>
                <Text variant="body">{selectedState.message}</Text>
                <ProgressLine state={selectedState} />
              </Card>
              {selectedState.result && (
                <Card>
                  <Text variant="label">RESULTADO</Text>
                  <Text variant="body">{selectedState.result}</Text>
                </Card>
              )}
              <Card>
                <Text variant="label">ERROS</Text>
                <Text variant="caption">{selectedState.error ?? 'Nenhum erro registrado.'}</Text>
              </Card>
              <Card>
                <Text variant="label">HISTÓRICO</Text>
                {feed.history.filter((h) => h.agentId === selectedState.agentId).length === 0 ? (
                  <Text variant="caption">Sem eventos ainda.</Text>
                ) : (
                  feed.history
                    .filter((h) => h.agentId === selectedState.agentId)
                    .map((h) => (
                      <Text key={`${h.at}-${h.text}`} variant="caption" color="text">• {h.text}</Text>
                    ))
                )}
              </Card>
              <Button label="Enviar instrução" icon="chatbubble-ellipses-outline" variant="secondary" disabled onPress={() => {}} accessibilityHint="Disponível na versão 0.3" />
              <Text variant="caption" color="textMuted" style={{ textAlign: 'center' }}>Instruções aos agentes e abertura de materiais: versão 0.3.</Text>
              <Button label="Fechar" variant="ghost" onPress={() => setSelected(null)} />
            </ScrollView>
          </View>
        )}
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ctrl: { width: 48, height: 48, borderRadius: radius.md, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  room: { borderRadius: radius.xl, borderWidth: StyleSheet.hairlineWidth, overflow: 'hidden' },
  wall: { height: 56, paddingHorizontal: spacing.lg, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  board: { flexDirection: 'row', gap: 6, padding: 6, borderRadius: 6, borderWidth: 1 },
  floor: { padding: spacing.md, gap: spacing.md },
  centerRow: { alignItems: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', rowGap: spacing.md },
  cell: { width: '50%', paddingHorizontal: spacing.xs },
  station: { alignItems: 'center' },
  stationTop: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: -6, zIndex: 1 },
  prop: { marginLeft: -4, marginBottom: 6 },
  desk: { alignSelf: 'stretch', alignItems: 'center', gap: 4, paddingTop: 12, paddingBottom: 10, paddingHorizontal: 8, borderRadius: radius.md, borderWidth: 1 },
  backdrop: { flex: 1, backgroundColor: '#00000088' },
  sheet: { maxHeight: '80%', borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl, borderWidth: StyleSheet.hairlineWidth, padding: spacing.lg },
  handle: { width: 40, height: 4, borderRadius: 2, alignSelf: 'center', marginBottom: spacing.md },
});
