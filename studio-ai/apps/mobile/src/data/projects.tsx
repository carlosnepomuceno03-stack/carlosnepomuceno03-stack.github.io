import {
  BriefingSchema,
  ProjectSchema,
  ReferenceSchema,
  detectReferenceSource,
  newProject,
  type Briefing,
  type CreateProjectInput,
  type Project,
  type Reference,
} from '@studio-ai/shared';
import * as Crypto from 'expo-crypto';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { z } from 'zod';
import { readJson, writeJson } from './storage';

/**
 * Repositório local de projetos, briefings e referências (Etapa 1).
 * Todos os dados são validados com os mesmos esquemas usados pela API futura.
 * Organização local fixa até a autenticação Supabase (Etapa 2).
 */
export const LOCAL_ORG_ID = 'local-device';

const ProjectsFile = z.array(ProjectSchema);
const BriefingsFile = z.array(BriefingSchema);
const ReferencesFile = z.array(ReferenceSchema);

type Ctx = {
  loaded: boolean;
  /** Dados locais inválidos foram encontrados e ignorados (exibido ao usuário). */
  corrupted: boolean;
  projects: Project[];
  briefings: Briefing[];
  references: Reference[];
  createProject: (input: CreateProjectInput) => Promise<Project>;
  deleteProject: (id: string) => Promise<void>;
  saveBriefing: (projectId: string, data: Pick<Briefing, 'objective' | 'audience' | 'tone' | 'mandatoryTexts' | 'notes'>) => Promise<Briefing>;
  addLinkReference: (url: string, projectId: string | null, title?: string) => Promise<Reference>;
  removeReference: (id: string) => Promise<void>;
  reload: () => Promise<void>;
};

const ProjectsContext = createContext<Ctx | null>(null);

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [briefings, setBriefings] = useState<Briefing[]>([]);
  const [references, setReferences] = useState<Reference[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [corrupted, setCorrupted] = useState(false);

  // refs garantem que escritas consecutivas partam do estado mais recente
  const projectsRef = useRef(projects);
  const briefingsRef = useRef(briefings);
  const referencesRef = useRef(references);

  const reload = useCallback(async () => {
    const [p, b, r] = await Promise.all([
      readJson('projects', ProjectsFile, []),
      readJson('briefings', BriefingsFile, []),
      readJson('references', ReferencesFile, []),
    ]);
    projectsRef.current = p.value;
    briefingsRef.current = b.value;
    referencesRef.current = r.value;
    setProjects(p.value);
    setBriefings(b.value);
    setReferences(r.value);
    setCorrupted(p.corrupted || b.corrupted || r.corrupted);
    setLoaded(true);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const commitProjects = useCallback(async (next: Project[]) => {
    projectsRef.current = next;
    setProjects(next);
    await writeJson('projects', next);
  }, []);

  const createProject = useCallback(async (input: CreateProjectInput) => {
    const project = newProject(input, { id: Crypto.randomUUID(), organizationId: LOCAL_ORG_ID, now: new Date() });
    await commitProjects([project, ...projectsRef.current]);
    return project;
  }, [commitProjects]);

  const deleteProject = useCallback(async (id: string) => {
    await commitProjects(projectsRef.current.filter((p) => p.id !== id));
    briefingsRef.current = briefingsRef.current.filter((b) => b.projectId !== id);
    setBriefings(briefingsRef.current);
    await writeJson('briefings', briefingsRef.current);
    referencesRef.current = referencesRef.current.filter((r) => r.projectId !== id);
    setReferences(referencesRef.current);
    await writeJson('references', referencesRef.current);
  }, [commitProjects]);

  const saveBriefing: Ctx['saveBriefing'] = useCallback(async (projectId, data) => {
    const previous = briefingsRef.current.filter((b) => b.projectId === projectId);
    const revision = previous.reduce((max, b) => Math.max(max, b.revision), 0) + 1;
    // Cada salvamento é uma nova revisão; revisões anteriores são mantidas.
    const briefing = BriefingSchema.parse({
      id: Crypto.randomUUID(),
      projectId,
      revision,
      ...data,
      createdAt: new Date().toISOString(),
    });
    briefingsRef.current = [...briefingsRef.current, briefing];
    setBriefings(briefingsRef.current);
    await writeJson('briefings', briefingsRef.current);

    const now = new Date().toISOString();
    await commitProjects(
      projectsRef.current.map((p) =>
        p.id !== projectId
          ? p
          : {
              ...p,
              steps: { ...p.steps, briefing: 'completed' },
              currentStep: p.currentStep === 'briefing' ? 'add_references' : p.currentStep,
              updatedAt: now,
            },
      ),
    );
    return briefing;
  }, [commitProjects]);

  const addLinkReference: Ctx['addLinkReference'] = useCallback(async (url, projectId, title) => {
    const ref = ReferenceSchema.parse({
      id: Crypto.randomUUID(),
      // referências sem projeto ficam na biblioteca geral
      projectId: projectId ?? 'library',
      source: detectReferenceSource(url),
      url,
      assetId: null,
      title: title?.trim() ? title.trim() : null,
      wantedAspects: [],
      createdAt: new Date().toISOString(),
    });
    referencesRef.current = [ref, ...referencesRef.current];
    setReferences(referencesRef.current);
    await writeJson('references', referencesRef.current);
    if (projectId) {
      // primeira referência: etapa passa a "em andamento" (o usuário decide quando concluir)
      const now = new Date().toISOString();
      await commitProjects(
        projectsRef.current.map((p) =>
          p.id === projectId && p.steps.add_references === 'not_started'
            ? { ...p, steps: { ...p.steps, add_references: 'in_progress' }, updatedAt: now }
            : p,
        ),
      );
    }
    return ref;
  }, [commitProjects]);

  const removeReference = useCallback(async (id: string) => {
    referencesRef.current = referencesRef.current.filter((r) => r.id !== id);
    setReferences(referencesRef.current);
    await writeJson('references', referencesRef.current);
  }, []);

  const value = useMemo<Ctx>(
    () => ({ loaded, corrupted, projects, briefings, references, createProject, deleteProject, saveBriefing, addLinkReference, removeReference, reload }),
    [loaded, corrupted, projects, briefings, references, createProject, deleteProject, saveBriefing, addLinkReference, removeReference, reload],
  );
  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}

export function useProjects(): Ctx {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error('useProjects fora do ProjectsProvider');
  return ctx;
}

export function latestBriefing(briefings: Briefing[], projectId: string): Briefing | undefined {
  return briefings.filter((b) => b.projectId === projectId).sort((a, b) => b.revision - a.revision)[0];
}
