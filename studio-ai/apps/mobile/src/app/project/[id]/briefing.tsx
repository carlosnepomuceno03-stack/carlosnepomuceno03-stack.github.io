import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Screen, Text, TextField, Button } from '@/components/ui';
import { latestBriefing, useProjects } from '@/data/projects';

export default function BriefingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { briefings, saveBriefing, projects } = useProjects();
  const project = projects.find((p) => p.id === id);
  const current = id ? latestBriefing(briefings, id) : undefined;

  const [objective, setObjective] = useState(current?.objective ?? '');
  const [audience, setAudience] = useState(current?.audience ?? '');
  const [tone, setTone] = useState(current?.tone ?? '');
  const [mandatory, setMandatory] = useState((current?.mandatoryTexts ?? []).join('\n'));
  const [notes, setNotes] = useState(current?.notes ?? '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!project) return <Screen edges={[]}><Text>Projeto não encontrado.</Text></Screen>;

  const onSave = async () => {
    if (!objective.trim()) {
      setError('Descreva ao menos o objetivo.');
      return;
    }
    setSaving(true);
    try {
      await saveBriefing(project.id, {
        objective: objective.trim(),
        audience: audience.trim(),
        tone: tone.trim(),
        mandatoryTexts: mandatory.split('\n').map((t) => t.trim()).filter(Boolean),
        notes: notes.trim(),
      });
      router.back();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Falha ao salvar.');
      setSaving(false);
    }
  };

  return (
    <Screen edges={['bottom']}>
      <Text variant="caption">
        {current ? `Editando cria a revisão ${current.revision + 1}; a revisão ${current.revision} fica no histórico.` : 'Primeira revisão do briefing.'}
      </Text>
      <TextField label="Objetivo" value={objective} onChangeText={setObjective} multiline placeholder="O que este material precisa comunicar?" error={error ?? undefined} maxLength={2000} />
      <TextField label="Público" value={audience} onChangeText={setAudience} placeholder="Ex.: 18–30 anos, cena eletrônica" maxLength={1000} />
      <TextField label="Tom" value={tone} onChangeText={setTone} placeholder="Ex.: noturno, sofisticado, energia alta" maxLength={500} />
      <TextField
        label="Textos obrigatórios"
        value={mandatory}
        onChangeText={setMandatory}
        multiline
        placeholder={'Um por linha. Ex.:\nSÁBADO 20.12\nARENA CENTRO\nINGRESSOS NA SYMPLA'}
        hint="Esses textos serão protegidos e verificados em todas as adaptações."
      />
      <TextField label="Observações" value={notes} onChangeText={setNotes} multiline maxLength={4000} />
      <Button label="Salvar briefing" icon="save-outline" onPress={onSave} loading={saving} />
    </Screen>
  );
}
