import Ionicons from '@expo/vector-icons/Ionicons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Image, Linking, Pressable, View } from 'react-native';
import { Button, Card, EmptyState, Row, Screen, SectionHeader, Segmented, Text } from '@/components/ui';
import { ApiError, useApi, type ServerAsset, type ServerDocumentSummary, type ServerMaterial } from '@/data/api';
import { useThemeColors } from '@/theme/theme';

const KIND_LABEL: Record<string, string> = { photo: 'Foto', logo: 'Logo', font: 'Fonte', background: 'Fundo', graphic: 'Elemento' };

export default function CloudProject() {
  const { projectId } = useLocalSearchParams<{ projectId: string }>();
  const api = useApi();
  const { colors } = useThemeColors();
  const [assets, setAssets] = useState<ServerAsset[]>([]);
  const [docs, setDocs] = useState<ServerDocumentSummary[]>([]);
  const [materials, setMaterials] = useState<ServerMaterial[]>([]);
  const [kind, setKind] = useState<'photo' | 'logo' | 'font'>('photo');
  const [rights, setRights] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const load = useCallback(async () => {
    const [a, d, m] = await Promise.all([
      api.request<{ items: ServerAsset[] }>(`/v1/projects/${projectId}/assets`),
      api.request<{ items: ServerDocumentSummary[] }>(`/v1/projects/${projectId}/documents`),
      api.request<{ items: ServerMaterial[] }>(`/v1/projects/${projectId}/materials`),
    ]);
    setAssets(a.items);
    setDocs(d.items);
    setMaterials(m.items);
  }, [api, projectId]);

  useFocusEffect(useCallback(() => {
    load().catch((e) => setMsg({ ok: false, text: (e as Error).message }));
  }, [load]));

  const pickAndUpload = async () => {
    if (!rights) {
      setMsg({ ok: false, text: 'Confirme que você tem direito de uso do arquivo.' });
      return;
    }
    let uri: string | null = null;
    if (kind === 'font') {
      const r = await DocumentPicker.getDocumentAsync({ type: ['font/ttf', 'font/otf', 'application/octet-stream', '*/*'], copyToCacheDirectory: true });
      uri = r.canceled ? null : r.assets[0]!.uri;
    } else {
      const r = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 1, allowsEditing: false, exif: false });
      uri = r.canceled ? null : r.assets[0]!.uri;
    }
    if (!uri) return;
    setBusy(true);
    setMsg(null);
    try {
      const bytes = await (await fetch(uri)).arrayBuffer();
      const res = await api.upload<{ sha256: string; width: number | null; height: number | null }>(`/v1/projects/${projectId}/assets`, bytes, {
        'content-type': 'application/octet-stream',
        'x-asset-kind': kind,
        'x-usage-rights-confirmed': 'true',
      });
      setMsg({ ok: true, text: `Arquivo original guardado sem alterações · SHA-256 ${res.sha256.slice(0, 12)}…` });
      await load();
    } catch (e) {
      setMsg({ ok: false, text: e instanceof ApiError ? e.message : 'Falha no envio' });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen edges={[]}>
      <SectionHeader title="Layouts" />
      {docs.length === 0 ? (
        <Text variant="caption">Nenhum documento ainda.</Text>
      ) : (
        docs.map((d) => (
          <Card key={d.id} onPress={() => router.push({ pathname: '/editor/[documentId]', params: { documentId: d.id } })} accessibilityLabel={`Editar ${d.name}`}>
            <Row>
              <Ionicons name="layers-outline" size={22} color={colors.accent} />
              <View style={{ flex: 1 }}>
                <Text variant="bodyStrong">{d.name}</Text>
                <Text variant="caption">Revisão {d.headRevision}{d.approvedRevision ? ` · aprovada: ${d.approvedRevision}` : ' · não aprovado'}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </Row>
          </Card>
        ))
      )}

      <SectionHeader title={`Materiais exportados (${materials.length})`} />
      {materials.length === 0 ? (
        <Text variant="caption">Aprove o layout no editor e exporte os formatos.</Text>
      ) : (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {materials.map((m) => (
            <Pressable key={m.id} onPress={() => Linking.openURL(m.url)} accessibilityRole="link" accessibilityLabel={`Abrir ${m.format_id} ${m.width} por ${m.height}`} style={{ width: '47%', gap: 4 }}>
              <Image source={{ uri: m.url }} style={{ width: '100%', aspectRatio: m.width / m.height, borderRadius: 8, backgroundColor: colors.surfaceElevated }} resizeMode="contain" />
              <Text variant="caption" color="text">{m.format_id} · {m.width}×{m.height}</Text>
              <Text variant="caption" color={m.status === 'ready_for_review' || m.format_id === 'master' ? 'success' : 'warning'}>
                {m.format_id === 'master' ? 'Layout aprovado' : m.status === 'ready_for_review' ? 'Pronto para revisão' : 'Precisa de revisão'}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      <SectionHeader title={`Arquivos originais (${assets.length})`} />
      <Card>
        <Segmented label="Tipo de arquivo" value={kind} onChange={setKind} options={[{ value: 'photo', label: 'Foto' }, { value: 'logo', label: 'Logo' }, { value: 'font', label: 'Fonte' }]} />
        <Pressable onPress={() => setRights((r) => !r)} accessibilityRole="checkbox" accessibilityState={{ checked: rights }} style={{ flexDirection: 'row', gap: 8, alignItems: 'center', minHeight: 44 }}>
          <Ionicons name={rights ? 'checkbox' : 'square-outline'} size={22} color={rights ? colors.accent : colors.textMuted} />
          <Text variant="caption" color="text" style={{ flex: 1 }}>Tenho direito de uso deste arquivo (fotos, logos e fontes licenciadas).</Text>
        </Pressable>
        <Button label="Enviar arquivo" icon="cloud-upload-outline" onPress={pickAndUpload} loading={busy} />
        {msg && <Text variant="caption" color={msg.ok ? 'success' : 'danger'}>{msg.text}</Text>}
      </Card>
      {assets.length === 0 ? (
        <EmptyState icon="images-outline" title="Sem arquivos" message="Envie fotos, logos e fontes originais. Eles nunca são modificados." />
      ) : (
        assets.map((a) => (
          <Card key={a.id} style={{ paddingVertical: 10 }}>
            <Row>
              {a.mime_type.startsWith('image/') ? (
                <Image source={{ uri: a.url }} style={{ width: 44, height: 44, borderRadius: 6, backgroundColor: colors.surfaceElevated }} resizeMode="contain" />
              ) : (
                <View style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}><Ionicons name="text" size={22} color={colors.textSecondary} /></View>
              )}
              <View style={{ flex: 1 }}>
                <Text variant="bodyStrong">{KIND_LABEL[a.kind] ?? a.kind}{a.width ? ` · ${a.width}×${a.height}` : ''}</Text>
                <Text variant="caption" numberOfLines={1}>SHA-256 {a.sha256.slice(0, 16)}… · original protegido</Text>
              </View>
            </Row>
          </Card>
        ))
      )}
    </Screen>
  );
}
