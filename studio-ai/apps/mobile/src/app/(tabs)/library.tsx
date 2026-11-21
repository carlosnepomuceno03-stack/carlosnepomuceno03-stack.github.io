import Ionicons from '@expo/vector-icons/Ionicons';
import { detectReferenceSource } from '@studio-ai/shared';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Linking, Pressable, View } from 'react-native';
import { Button, Card, EmptyState, IconButton, Row, Screen, SectionHeader, Text, TextField, type IconName } from '@/components/ui';
import { useProjects } from '@/data/projects';
import { useThemeColors } from '@/theme/theme';
import { relativeTime } from '@/utils/format';

const SOURCE_META: Record<string, { label: string; icon: IconName }> = {
  pinterest_link: { label: 'Pinterest', icon: 'logo-pinterest' },
  behance_link: { label: 'Behance', icon: 'logo-behance' },
  other_link: { label: 'Link', icon: 'link-outline' },
  upload: { label: 'Upload', icon: 'image-outline' },
};

const CATEGORIES: { title: string; icon: IconName; note: string }[] = [
  { title: 'Fotos', icon: 'camera-outline', note: 'Upload real na versão 0.2' },
  { title: 'Logos', icon: 'shapes-outline', note: 'Upload real na versão 0.2' },
  { title: 'Fontes', icon: 'text-outline', note: 'Somente fontes licenciadas — 0.2' },
  { title: 'Templates', icon: 'grid-outline', note: 'Presets aprovados — 0.4' },
  { title: 'Identidades', icon: 'color-palette-outline', note: 'Contratos congelados — 0.2' },
];

function isHttpUrl(value: string): boolean {
  try {
    const u = new URL(value.trim());
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
}

export default function LibraryScreen() {
  const params = useLocalSearchParams<{ projectId?: string }>();
  const { references, projects, addLinkReference, removeReference } = useProjects();
  const { colors } = useThemeColors();
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<string | null>(params.projectId ?? null);
  const [saved, setSaved] = useState(false);

  const targetProject = projects.find((p) => p.id === projectId);
  const detected = isHttpUrl(url) ? SOURCE_META[detectReferenceSource(url.trim())] : null;

  const onAdd = async () => {
    if (!isHttpUrl(url)) {
      setError('Cole um link válido começando com https://');
      return;
    }
    setError(null);
    await addLinkReference(url.trim(), projectId, title);
    setUrl('');
    setTitle('');
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Screen>
      <View style={{ gap: 4 }}>
        <Text variant="title" accessibilityRole="header">Biblioteca</Text>
        <Text variant="body" color="textSecondary">Referências, arquivos originais e identidades visuais.</Text>
      </View>

      <Card>
        <Text variant="heading">Adicionar referência por link</Text>
        <Text variant="caption">
          Guardamos apenas o link. O Lumpli não copia conteúdo do Pinterest ou Behance sem autorização da plataforma.
          Referências não significam permissão de uso comercial.
        </Text>
        <TextField label="Link" value={url} onChangeText={(t) => { setUrl(t); setError(null); }} placeholder="https://br.pinterest.com/pin/…" autoCapitalize="none" autoCorrect={false} keyboardType="url" error={error ?? undefined} />
        {detected && (
          <Row>
            <Ionicons name={detected.icon} size={16} color={colors.textSecondary} />
            <Text variant="caption">Origem detectada: {detected.label}</Text>
          </Row>
        )}
        <TextField label="Título (opcional)" value={title} onChangeText={setTitle} maxLength={200} />
        {projects.length > 0 && (
          <View style={{ gap: 6 }}>
            <Text variant="label">VINCULAR AO PROJETO</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {[{ id: null as string | null, name: 'Biblioteca geral' }, ...projects.map((p) => ({ id: p.id as string | null, name: p.name }))].map((p) => {
                const active = projectId === p.id;
                return (
                  <Pressable
                    key={p.id ?? 'none'}
                    onPress={() => setProjectId(p.id)}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: active }}
                    style={{ paddingHorizontal: 12, minHeight: 36, justifyContent: 'center', borderRadius: 999, borderWidth: 1, borderColor: active ? colors.accent : colors.border, backgroundColor: active ? colors.accentSoft : 'transparent' }}>
                    <Text variant="caption" color={active ? 'accent' : 'textSecondary'} numberOfLines={1}>{p.name}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        )}
        <Button label={targetProject ? `Salvar em “${targetProject.name}”` : 'Salvar na biblioteca'} icon="add" onPress={onAdd} disabled={!url.trim()} />
        {saved && (
          <View accessibilityLiveRegion="polite">
            <Row>
              <Ionicons name="checkmark-circle" size={16} color={colors.success} />
              <Text variant="caption" color="success">Referência salva.</Text>
            </Row>
          </View>
        )}
      </Card>

      <SectionHeader title={`Referências (${references.length})`} />
      {references.length === 0 ? (
        <EmptyState icon="bookmark-outline" title="Nenhuma referência" message="Links salvos aparecem aqui, organizados por projeto." />
      ) : (
        <View style={{ gap: 8 }}>
          {references.map((r) => {
            const meta = SOURCE_META[r.source] ?? SOURCE_META.other_link!;
            const proj = projects.find((p) => p.id === r.projectId);
            return (
              <Card key={r.id} style={{ paddingVertical: 12 }}>
                <Row>
                  <Ionicons name={meta.icon} size={20} color={colors.textSecondary} />
                  <Pressable style={{ flex: 1 }} onPress={() => r.url && Linking.openURL(r.url)} accessibilityRole="link" accessibilityLabel={`Abrir ${r.title ?? r.url}`}>
                    <Text variant="bodyStrong" numberOfLines={1}>{r.title ?? r.url}</Text>
                    <Text variant="caption" numberOfLines={1}>{meta.label} · {proj ? proj.name : 'Biblioteca geral'} · {relativeTime(r.createdAt)}</Text>
                  </Pressable>
                  <IconButton icon="trash-outline" label="Remover referência" onPress={() => removeReference(r.id)} />
                </Row>
              </Card>
            );
          })}
        </View>
      )}

      <SectionHeader title="Arquivos e identidades" />
      <View style={{ gap: 8 }}>
        {CATEGORIES.map((c) => (
          <Card key={c.title} style={{ paddingVertical: 12 }}>
            <Row>
              <Ionicons name={c.icon} size={20} color={colors.textMuted} />
              <Text variant="bodyStrong" style={{ flex: 1 }}>{c.title}</Text>
              <Text variant="caption" color="textMuted">{c.note}</Text>
            </Row>
          </Card>
        ))}
      </View>
    </Screen>
  );
}
