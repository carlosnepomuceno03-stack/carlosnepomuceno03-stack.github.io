import Ionicons from '@expo/vector-icons/Ionicons';
import { BUILT_IN_FORMATS, walkLayers, type GraphicDocument, type Layer } from '@studio-ai/shared';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Image, Linking, PanResponder, PixelRatio, Pressable, TextInput, View, useWindowDimensions } from 'react-native';
import { Button, Card, DemoBanner, IconButton, Row, Screen, SectionHeader, StatusPill, Text, type IconName } from '@/components/ui';
import { ApiError, useApi, type ServerAsset } from '@/data/api';
import { alignTo, findLayer, hitTest, layerBox, moveBy, pushHistory, scaleBy, updateLayer, type Box, type History } from '@/features/editor/doc-ops';
import { useThemeColors } from '@/theme/theme';
import { radius, typography } from '@/theme/tokens';

type DocResponse = {
  id: string; projectId: string; name: string; headRevision: number; approvedRevision: number | null;
  document: GraphicDocument & { approval: { status: string } };
  revisions: { revision: number; status: string; createdAt: string }[];
};
type ExportResult = { formatId: string; formatName?: string; status: string; width: number; height: number; url?: string; issues: { message: string }[]; quality: { results: { severity: string; message: string }[] } | null };

const TYPE_ICON: Record<string, IconName> = { image: 'image-outline', text: 'text-outline', shape: 'square-outline', background: 'color-fill-outline', vector: 'git-commit-outline', group: 'folder-outline', mask: 'cut-outline' };

export default function EditorScreen() {
  const { documentId } = useLocalSearchParams<{ documentId: string }>();
  const api = useApi();
  const { colors } = useThemeColors();
  const { width: screenW } = useWindowDimensions();

  const [meta, setMeta] = useState<DocResponse | null>(null);
  const [doc, setDoc] = useState<GraphicDocument | null>(null);
  const [history, setHistory] = useState<History>({ past: [], future: [] });
  const [dirty, setDirty] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ image: string; textBounds: Record<string, Box> } | null>(null);
  const [previewing, setPreviewing] = useState(false);
  const [drag, setDrag] = useState<{ dx: number; dy: number } | null>(null);
  const [guides, setGuides] = useState(true);
  const [assets, setAssets] = useState<ServerAsset[]>([]);
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [formats, setFormats] = useState<string[]>(['story', 'feed', 'sympla']);
  const [exports, setExports] = useState<ExportResult[] | null>(null);

  const load = useCallback(async () => {
    const r = await api.request<DocResponse>(`/v1/documents/${documentId}`);
    setMeta(r);
    setDoc(r.document);
    setHistory({ past: [], future: [] });
    setDirty(false);
    setAssets((await api.request<{ items: ServerAsset[] }>(`/v1/projects/${r.projectId}/assets`)).items);
  }, [api, documentId]);

  useEffect(() => {
    load().catch((e) => setMsg({ ok: false, text: (e as Error).message }));
  }, [load]);

  // Pré-visualização fiel gerada pelo renderizador do servidor (debounce)
  const canvasW = Math.min(screenW - 32, 520);
  const k = doc ? canvasW / doc.width : 1;
  const canvasH = doc ? doc.height * k : 0;
  useEffect(() => {
    if (!doc) return;
    const t = setTimeout(async () => {
      setPreviewing(true);
      try {
        const r = await api.request<{ image: string; textBounds: Record<string, Box> }>(`/v1/documents/${documentId}/preview`, {
          body: { document: doc, width: Math.min(1080, Math.round(canvasW * PixelRatio.get())) },
        });
        setPreview(r);
      } catch (e) {
        setMsg({ ok: false, text: e instanceof ApiError ? e.message : 'Falha na pré-visualização' });
      } finally {
        setPreviewing(false);
      }
    }, 250);
    return () => clearTimeout(t);
  }, [doc, api, documentId, canvasW]);

  const commit = useCallback((next: GraphicDocument) => {
    setHistory((h) => pushHistory(h, doc!));
    setDoc(next);
    setDirty(true);
  }, [doc]);
  const edit = (fn: (l: Layer) => Layer) => {
    if (!doc || !selected) return;
    commit(updateLayer(doc, selected, fn));
  };
  const undo = () => {
    if (!history.past.length || !doc) return;
    setHistory({ past: history.past.slice(0, -1), future: [doc, ...history.future] });
    setDoc(history.past.at(-1)!);
    setDirty(true);
  };
  const redo = () => {
    if (!history.future.length || !doc) return;
    setHistory({ past: [...history.past, doc], future: history.future.slice(1) });
    setDoc(history.future[0]!);
    setDirty(true);
  };

  // Gestos: tocar seleciona; arrastar move a camada selecionada (se não bloqueada)
  const stateRef = useRef({ doc, selected, k, preview });
  stateRef.current = { doc, selected, k, preview };
  const pan = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e) => {
      const { doc: d, k: kk, preview: p } = stateRef.current;
      if (!d) return;
      const hit = hitTest(d, e.nativeEvent.locationX / kk, e.nativeEvent.locationY / kk, p?.textBounds);
      setSelected(hit?.id ?? null);
      stateRef.current.selected = hit?.id ?? null;
      setDrag(null);
    },
    onPanResponderMove: (_e, g) => {
      const { doc: d, selected: s } = stateRef.current;
      const l = d && s ? findLayer(d, s) : undefined;
      if (l && !l.locked) setDrag({ dx: g.dx, dy: g.dy });
    },
    onPanResponderRelease: (_e, g) => {
      const { doc: d, selected: s, k: kk } = stateRef.current;
      setDrag(null);
      const l = d && s ? findLayer(d, s) : undefined;
      if (!d || !l || l.locked || Math.hypot(g.dx, g.dy) < 3) return;
      commitRef.current(updateLayer(d, l.id, (x) => moveBy(x, g.dx / kk, g.dy / kk)));
    },
  }), []);
  const commitRef = useRef(commit);
  commitRef.current = commit;

  const run = async (label: string, fn: () => Promise<void>) => {
    setBusy(label);
    setMsg(null);
    try {
      await fn();
    } catch (e) {
      const err = e as ApiError;
      setMsg({ ok: false, text: err.code === 'version_conflict' ? 'Outra revisão foi salva antes. Recarregue para continuar.' : err.message });
    } finally {
      setBusy(null);
    }
  };

  if (!doc || !meta) return <Screen edges={[]}>{msg ? <Text color="danger">{msg.text}</Text> : <ActivityIndicator color={colors.accent} />}</Screen>;

  const sel = findLayer(doc, selected);
  const selBox = sel ? layerBox(sel, preview?.textBounds) : null;
  const headStatus = meta.revisions.find((r) => r.revision === meta.headRevision)?.status ?? 'draft';
  const margin = Math.round(Math.min(doc.width, doc.height) * 0.05);
  const swapOptions = sel?.type === 'image' ? assets.filter((a) => a.kind === (sel.role === 'logo' ? 'logo' : 'photo')) : [];

  return (
    <Screen edges={[]}>
      <Stack.Screen options={{ title: meta.name }} />
      <Row style={{ justifyContent: 'space-between' }}>
        <Text variant="caption">Revisão {meta.headRevision}{dirty ? ' · alterações não salvas' : ''}</Text>
        <StatusPill status={headStatus === 'approved' ? 'completed' : dirty ? 'in_progress' : 'awaiting_user'} />
      </Row>
      {headStatus === 'approved' && !dirty && (
        <DemoBanner title="Versão aprovada" message="Esta revisão está congelada. Qualquer alteração será salva como uma NOVA revisão; a aprovada continua intacta." />
      )}

      <Row style={{ justifyContent: 'space-between' }}>
        <Row>
          <IconButton icon="arrow-undo" label="Desfazer" onPress={undo} />
          <IconButton icon="arrow-redo" label="Refazer" onPress={redo} />
          <IconButton icon={guides ? 'grid' : 'grid-outline'} label={guides ? 'Ocultar guias' : 'Mostrar guias'} onPress={() => setGuides((g) => !g)} />
        </Row>
        <Button
          label="Salvar revisão"
          icon="save-outline"
          disabled={!dirty}
          loading={busy === 'save'}
          onPress={() => run('save', async () => {
            const r = await api.request<{ revision: number; warnings: { message: string }[] }>(`/v1/documents/${documentId}/revisions`, { body: { baseRevision: meta.headRevision, document: doc } });
            await load();
            setMsg({ ok: true, text: `Revisão ${r.revision} salva.${r.warnings.length ? ` Avisos: ${r.warnings.map((w) => w.message).join('; ')}` : ''}` });
          })}
        />
      </Row>

      {/* Tela de edição */}
      <View
        {...pan.panHandlers}
        accessibilityLabel="Área do layout. Toque para selecionar uma camada e arraste para mover."
        style={{ width: canvasW, height: canvasH, alignSelf: 'center', borderRadius: 4, overflow: 'hidden', backgroundColor: '#000' }}>
        {preview && <Image source={{ uri: preview.image }} style={{ width: canvasW, height: canvasH }} resizeMode="stretch" />}
        {guides && (
          <View pointerEvents="none" style={{ position: 'absolute', left: margin * k, top: margin * k, right: margin * k, bottom: margin * k, borderWidth: 1, borderColor: '#36E0FF88', borderStyle: 'dashed' }} />
        )}
        {guides && <View pointerEvents="none" style={{ position: 'absolute', left: canvasW / 2, top: 0, bottom: 0, width: 1, backgroundColor: '#FF3FA455' }} />}
        {guides && <View pointerEvents="none" style={{ position: 'absolute', top: canvasH / 2, left: 0, right: 0, height: 1, backgroundColor: '#FF3FA455' }} />}
        {sel && selBox && (
          <View
            pointerEvents="none"
            style={{
              position: 'absolute',
              left: (selBox.x + (drag?.dx ?? 0) / k) * k - 2,
              top: (selBox.y + (drag?.dy ?? 0) / k) * k - 2,
              width: selBox.width * k + 4,
              height: selBox.height * k + 4,
              borderWidth: 2,
              borderColor: sel.locked ? colors.warning : colors.accent,
              borderRadius: 2,
            }}
          />
        )}
        {previewing && <ActivityIndicator style={{ position: 'absolute', right: 8, top: 8 }} color="#fff" />}
      </View>
      <Text variant="caption" color="textMuted" style={{ textAlign: 'center' }}>Pré-visualização gerada pelo mesmo motor da exportação.</Text>

      {/* Propriedades da camada */}
      {sel ? (
        <Card>
          <Row>
            <Ionicons name={TYPE_ICON[sel.type] ?? 'ellipse-outline'} size={18} color={colors.text} />
            <Text variant="heading" style={{ flex: 1 }}>{sel.name}</Text>
            <IconButton icon={sel.locked ? 'lock-closed' : 'lock-open-outline'} label={sel.locked ? 'Desbloquear camada' : 'Bloquear camada'} onPress={() => edit((l) => ({ ...l, locked: !l.locked }))} />
          </Row>
          <Text variant="caption">x {Math.round(sel.x)} · y {Math.round(sel.y)} · escala {sel.scale.toFixed(2)}{sel.type === 'image' && sel.protected ? ' · recurso protegido (sem distorção)' : ''}</Text>
          {sel.locked ? (
            <Text variant="caption" color="warning">Camada bloqueada: desbloqueie para editar.</Text>
          ) : (
            <>
              <Row style={{ flexWrap: 'wrap' }}>
                <IconButton icon="arrow-back" label="Mover para a esquerda" onPress={() => edit((l) => moveBy(l, -10, 0))} />
                <IconButton icon="arrow-up" label="Mover para cima" onPress={() => edit((l) => moveBy(l, 0, -10))} />
                <IconButton icon="arrow-down" label="Mover para baixo" onPress={() => edit((l) => moveBy(l, 0, 10))} />
                <IconButton icon="arrow-forward" label="Mover para a direita" onPress={() => edit((l) => moveBy(l, 10, 0))} />
                <IconButton icon="remove" label="Diminuir" onPress={() => edit((l) => scaleBy(l, 0.95))} />
                <IconButton icon="add" label="Aumentar" onPress={() => edit((l) => scaleBy(l, 1.05))} />
              </Row>
              <Row style={{ flexWrap: 'wrap' }}>
                <IconButton icon="arrow-back-circle-outline" label="Alinhar à esquerda" onPress={() => edit((l) => alignTo(l, doc, 'left', null, margin))} />
                <IconButton icon="ellipse-outline" label="Centralizar na horizontal" onPress={() => edit((l) => alignTo(l, doc, 'center', null, margin))} />
                <IconButton icon="arrow-forward-circle-outline" label="Alinhar à direita" onPress={() => edit((l) => alignTo(l, doc, 'right', null, margin))} />
                <IconButton icon="remove-outline" label="Centralizar na vertical" onPress={() => edit((l) => alignTo(l, doc, null, 'middle', margin))} />
              </Row>
              {sel.type === 'text' && (
                <TextInput
                  accessibilityLabel="Texto da camada"
                  value={sel.text}
                  onFocus={() => setHistory((h) => pushHistory(h, doc))}
                  onChangeText={(t) => { setDoc(updateLayer(doc, sel.id, (l) => ({ ...l, text: t }) as Layer)); setDirty(true); }}
                  multiline
                  style={[typography.body, { color: colors.text, backgroundColor: colors.surfaceElevated, borderColor: colors.border, borderWidth: 1, borderRadius: radius.md, padding: 10, minHeight: 48 }]}
                />
              )}
              {swapOptions.length > 1 && (
                <View style={{ gap: 6 }}>
                  <Text variant="label">TROCAR IMAGEM (ARQUIVOS ORIGINAIS)</Text>
                  <Row style={{ flexWrap: 'wrap' }}>
                    {swapOptions.map((a) => (
                      <Pressable
                        key={a.id}
                        accessibilityRole="button"
                        accessibilityLabel={`Usar arquivo ${a.sha256.slice(0, 8)}`}
                        onPress={() => edit((l) => ({ ...l, assetId: a.id, assetSha256: a.sha256 }) as Layer)}
                        style={{ borderWidth: 2, borderColor: sel.type === 'image' && sel.assetId === a.id ? colors.accent : colors.border, borderRadius: 6 }}>
                        <Image source={{ uri: a.url }} style={{ width: 52, height: 52 }} resizeMode="contain" />
                      </Pressable>
                    ))}
                  </Row>
                </View>
              )}
            </>
          )}
        </Card>
      ) : (
        <Text variant="caption" style={{ textAlign: 'center' }}>Toque em um elemento do layout para editá-lo.</Text>
      )}

      <SectionHeader title="Camadas" />
      <Card style={{ gap: 0, paddingVertical: 4 }}>
        {[...walkLayers(doc.layers)].reverse().map((l, i) => (
          <Pressable key={l.id} onPress={() => setSelected(l.id)} accessibilityRole="button" accessibilityLabel={`Camada ${l.name}${l.locked ? ', bloqueada' : ''}`}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 8, minHeight: 44, borderTopWidth: i ? 1 : 0, borderTopColor: colors.border, backgroundColor: l.id === selected ? colors.accentSoft : 'transparent', paddingHorizontal: 4 }}>
            <Ionicons name={TYPE_ICON[l.type] ?? 'ellipse-outline'} size={16} color={colors.textSecondary} />
            <Text variant="body" style={{ flex: 1 }} numberOfLines={1}>{l.name}</Text>
            {l.type === 'image' && l.protected && <Ionicons name="shield-checkmark-outline" size={15} color={colors.success} accessibilityLabel="protegido" />}
            {l.locked && <Ionicons name="lock-closed" size={15} color={colors.warning} />}
          </Pressable>
        ))}
      </Card>

      <SectionHeader title="Aprovação" />
      <Card>
        <Text variant="caption">
          {meta.approvedRevision
            ? `Revisão aprovada: ${meta.approvedRevision}. Aprovar outra revisão cria uma nova versão da identidade visual.`
            : 'Ao aprovar, a identidade visual (arquivos protegidos, fontes, textos obrigatórios e regras por formato) fica congelada.'}
        </Text>
        <Button
          label={`Aprovar revisão ${meta.headRevision}`}
          icon="ribbon-outline"
          disabled={dirty || headStatus !== 'draft'}
          loading={busy === 'approve'}
          onPress={() => run('approve', async () => {
            await api.request(`/v1/documents/${documentId}/revisions/${meta.headRevision}/approve`, { body: { note: 'Aprovado no app' } });
            await load();
            setMsg({ ok: true, text: `Revisão ${meta.headRevision} aprovada e identidade congelada.` });
          })}
        />
        {dirty && <Text variant="caption" color="warning">Salve as alterações antes de aprovar.</Text>}
      </Card>

      <SectionHeader title="Exportar formatos" />
      <Card>
        <Row style={{ flexWrap: 'wrap' }}>
          {BUILT_IN_FORMATS.map((f) => {
            const on = formats.includes(f.id);
            return (
              <Pressable key={f.id} accessibilityRole="checkbox" accessibilityState={{ checked: on }} accessibilityLabel={`${f.name} ${f.width} por ${f.height}`}
                onPress={() => setFormats((s) => (on ? s.filter((x) => x !== f.id) : [...s, f.id]))}
                style={{ paddingHorizontal: 12, minHeight: 40, justifyContent: 'center', borderRadius: 999, borderWidth: 1, borderColor: on ? colors.accent : colors.border, backgroundColor: on ? colors.accentSoft : 'transparent' }}>
                <Text variant="caption" color={on ? 'accent' : 'textSecondary'}>{f.name} {f.width}×{f.height}</Text>
              </Pressable>
            );
          })}
        </Row>
        <Button
          label="Gerar e exportar PNG"
          icon="download-outline"
          disabled={!meta.approvedRevision || !formats.length}
          loading={busy === 'export'}
          onPress={() => run('export', async () => {
            const r = await api.request<{ materials: ExportResult[] }>(`/v1/documents/${documentId}/exports`, { body: { formatIds: formats } });
            setExports(r.materials);
          })}
        />
        {!meta.approvedRevision && <Text variant="caption">Exportação disponível depois da aprovação do layout.</Text>}
        {exports?.map((m) => (
          <View key={m.formatId} style={{ gap: 4, paddingTop: 8, borderTopWidth: 1, borderTopColor: colors.border }}>
            <Row>
              <Ionicons name={m.status === 'ready_for_review' ? 'checkmark-circle' : 'alert-circle'} size={18} color={m.status === 'ready_for_review' ? colors.success : colors.warning} />
              <Text variant="bodyStrong" style={{ flex: 1 }}>{m.formatName ?? m.formatId} · {m.width}×{m.height}</Text>
              {m.url && <Button label="Abrir" variant="ghost" onPress={() => Linking.openURL(m.url!)} />}
            </Row>
            <Text variant="caption">{m.status === 'ready_for_review' ? 'Verificações aprovadas · aguardando sua revisão' : 'Precisa de revisão'}</Text>
            {[...m.issues.map((i) => i.message), ...(m.quality?.results ?? []).map((q) => `${q.severity}: ${q.message}`)].map((t) => (
              <Text key={t} variant="caption" color="warning">• {t}</Text>
            ))}
          </View>
        ))}
      </Card>

      <SectionHeader title="Histórico de versões" />
      <Card style={{ gap: 0, paddingVertical: 4 }}>
        {[...meta.revisions].reverse().map((r, i) => (
          <Row key={r.revision} style={{ minHeight: 48, borderTopWidth: i ? 1 : 0, borderTopColor: colors.border }}>
            <Text variant="bodyStrong" style={{ width: 36 }}>v{r.revision}</Text>
            <Text variant="caption" style={{ flex: 1 }}>{r.status === 'approved' ? 'Aprovada' : r.status === 'superseded' ? 'Substituída' : 'Rascunho'}</Text>
            {r.revision !== meta.headRevision && (
              <Button label="Restaurar" variant="ghost" loading={busy === `restore-${r.revision}`}
                onPress={() => run(`restore-${r.revision}`, async () => {
                  const res = await api.request<{ revision: number }>(`/v1/documents/${documentId}/revisions/${r.revision}/restore`, { body: {} });
                  await load();
                  setMsg({ ok: true, text: `v${r.revision} restaurada como nova revisão v${res.revision}.` });
                })} />
            )}
          </Row>
        ))}
      </Card>
      {msg && (
        <View accessibilityLiveRegion="polite">
          <Text variant="caption" color={msg.ok ? 'success' : 'danger'}>{msg.text}</Text>
        </View>
      )}
    </Screen>
  );
}
