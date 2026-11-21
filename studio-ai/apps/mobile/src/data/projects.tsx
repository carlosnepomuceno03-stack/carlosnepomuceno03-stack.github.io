import {
  BriefingSchema,
  OutboxOpSchema,
  ProjectSchema,
  ReferenceSchema,
  detectReferenceSource,
  newProject,
  projectSyncStatus,
  reconcile,
  unsyncedLocalProjects,
  type Briefing,
  type CreateProjectInput,
  type LocalState,
  type OutboxOp,
  type Project,
  type Reference,
  type SyncStatus,
} from '@studio-ai/shared';
import * as Crypto from 'expo-crypto';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { z } from 'zod';
import { ApiError, useApi } from './api';
import { readJson, writeJson } from './storage';

/**
 * Repositório ÚNICO de projetos. Cache local (funciona offline) + fila de alterações enviada ao servidor
 * quando há sessão. O servidor é a fonte da verdade; a reconciliação está em @studio-ai/shared (sync.ts, testada).
 */
export const LOCAL_ORG_ID = 'local-device';

const StateSchema = z.object({
  projects: z.array(ProjectSchema),
  briefings: z.array(BriefingSchema),
  references: z.array(ReferenceSchema),
  outbox: z.array(OutboxOpSchema),
  knownServerProjectIds: z.array(z.string()),
});
const EMPTY: LocalState = { projects: [], briefings: [], references: [], outbox: [], knownServerProjectIds: [] };

/** Datas do Postgres vêm com fuso (+00:00); normaliza para o formato ISO aceito pelos esquemas. */
const iso = (v: unknown) => (typeof v === 'string' ? new Date(v).toISOString() : v);
const fromServerProject = (p: Record<string, unknown>) => ProjectSchema.parse({ ...p, createdAt: iso(p.createdAt), updatedAt: iso(p.updatedAt) });
const fromServerBriefing = (b: Record<string, unknown>) => BriefingSchema.parse({ ...b, createdAt: iso(b.createdAt) });
const fromServerReference = (r: Record<string, unknown>) => ReferenceSchema.parse({ ...r, createdAt: iso(r.createdAt), wantedAspects: [] });

type Ctx = {
  loaded: boolean;
  corrupted: boolean;
  projects: Project[];
  briefings: Briefing[];
  references: Reference[];
  syncing: boolean;
  syncError: string | null;
  lastSyncAt: string | null;
  pendingCount: number;
  syncStatus: (projectId: string) => SyncStatus;
  syncNow: () => Promise<void>;
  createProject: (input: CreateProjectInput) => Promise<Project>;
  deleteProject: (id: string) => Promise<void>;
  saveBriefing: (projectId: string, data: Pick<Briefing, 'objective' | 'audience' | 'tone' | 'mandatoryTexts' | 'notes'>) => Promise<Briefing>;
  addLinkReference: (url: string, projectId: string | null, title?: string) => Promise<Reference>;
  removeReference: (id: string) => Promise<void>;
  reload: () => Promise<void>;
};

const ProjectsContext = createContext<Ctx | null>(null);

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const api = useApi();
  const [state, setState] = useState<LocalState>(EMPTY);
  const stateRef = useRef<LocalState>(EMPTY);
  const [loaded, setLoaded] = useState(false);
  const [corrupted, setCorrupted] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [lastSyncAt, setLastSyncAt] = useState<string | null>(null);
  const syncingRef = useRef(false);
  const seq = () => (stateRef.current.outbox.at(-1)?.seq ?? 0) + 1;

  const commit = useCallback(async (next: LocalState) => {
    stateRef.current = next;
    setState(next);
    await writeJson('sync-state', next);
  }, []);

  const reload = useCallback(async () => {
    const saved = await readJson('sync-state', StateSchema, null as unknown as LocalState);
    let next = saved.value;
    if (!next) {
      // Migração da versão 0.1 (chaves separadas, só no aparelho)
      const [p, b, r] = await Promise.all([
        readJson('projects', z.array(ProjectSchema), []),
        readJson('briefings', z.array(BriefingSchema), []),
        readJson('references', z.array(ReferenceSchema), []),
      ]);
      next = { ...EMPTY, projects: p.value, briefings: b.value, references: r.value };
      setCorrupted(p.corrupted || b.corrupted || r.corrupted);
    } else {
      setCorrupted(saved.corrupted);
    }
    stateRef.current = next;
    setState(next);
    setLoaded(true);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  /** Envia a fila e baixa o estado do servidor. Seguro para chamar várias vezes. */
  const syncNow = useCallback(async () => {
    const session = api.session;
    if (!session || syncingRef.current || !loaded) return;
    syncingRef.current = true;
    setSyncing(true);
    setSyncError(null);
    try {
      // 1) projetos antigos/offline nunca enviados entram na fila (com briefings e referências)
      const serverNow = await api.request<{ items: Record<string, unknown>[] }>('/v1/projects');
      const serverIds = new Set(serverNow.items.map((p) => String(p.id)));
      const legacy = unsyncedLocalProjects(stateRef.current, serverIds);
      if (legacy.length) {
        let s = seq();
        const ops: OutboxOp[] = [];
        for (const p of legacy) {
          ops.push({ seq: s++, type: 'project.upsert', project: p });
          for (const b of stateRef.current.briefings.filter((x) => x.projectId === p.id).sort((a, c) => a.revision - c.revision)) ops.push({ seq: s++, type: 'briefing.save', briefing: b });
          for (const r of stateRef.current.references.filter((x) => x.projectId === p.id)) ops.push({ seq: s++, type: 'reference.add', reference: r });
        }
        await commit({ ...stateRef.current, outbox: [...stateRef.current.outbox, ...ops] });
      }

      // 2) envio da fila, em ordem; para no primeiro erro de rede/sessão
      for (const op of [...stateRef.current.outbox]) {
        try {
          if (op.type === 'project.upsert') {
            const p = op.project;
            await api.request('/v1/projects', { body: { id: p.id, organizationId: session.organizationId, name: p.name, kind: p.kind, eventDate: p.eventDate, venue: p.venue, createdAt: p.createdAt } });
          } else if (op.type === 'project.delete') {
            await api.request(`/v1/projects/${op.projectId}`, { method: 'DELETE' }).catch((e: ApiError) => {
              if (e.status !== 404) throw e; // já excluído
            });
          } else if (op.type === 'briefing.save') {
            const b = op.briefing;
            await api.request(`/v1/projects/${b.projectId}/briefings`, { body: { id: b.id, objective: b.objective, audience: b.audience, tone: b.tone, mandatoryTexts: b.mandatoryTexts, notes: b.notes } });
          } else if (op.type === 'reference.add') {
            const r = op.reference;
            await api.request(`/v1/projects/${r.projectId}/references`, { body: { id: r.id, url: r.url, title: r.title } });
          } else if (op.type === 'reference.delete') {
            await api.request(`/v1/references/${op.referenceId}`, { method: 'DELETE' });
          }
        } catch (e) {
          const err = e as ApiError;
          if (err.status === 0 || err.status === 401 || err.status === 429 || err.status >= 500) throw err;
          setSyncError(`Uma alteração foi recusada pelo servidor e descartada: ${err.message}`);
        }
        await commit({ ...stateRef.current, outbox: stateRef.current.outbox.filter((o) => o.seq !== op.seq) });
      }

      // 3) estado do servidor (fonte da verdade) + reconciliação
      const projects = (await api.request<{ items: Record<string, unknown>[] }>('/v1/projects')).items.map(fromServerProject);
      const details = await Promise.all(projects.map(async (p) => {
        const [b, r] = await Promise.all([
          api.request<{ items: Record<string, unknown>[] }>(`/v1/projects/${p.id}/briefings`),
          api.request<{ items: Record<string, unknown>[] }>(`/v1/projects/${p.id}/references`),
        ]);
        return { briefings: b.items.map(fromServerBriefing), references: r.items.map(fromServerReference) };
      }));
      const merged = reconcile(stateRef.current, {
        projects,
        briefings: details.flatMap((d) => d.briefings),
        references: details.flatMap((d) => d.references),
      });
      await commit({ ...merged, outbox: stateRef.current.outbox });
      setLastSyncAt(new Date().toISOString());
    } catch (e) {
      setSyncError(e instanceof ApiError ? e.message : 'Falha na sincronização');
    } finally {
      syncingRef.current = false;
      setSyncing(false);
    }
  }, [api, commit, loaded]);

  // sincroniza ao entrar e logo após cada alteração local
  useEffect(() => {
    if (api.session && loaded) syncNow();
  }, [api.session, loaded, syncNow]);
  const scheduleSync = useCallback(() => {
    setTimeout(() => syncNow(), 300);
  }, [syncNow]);

  const createProject = useCallback(async (input: CreateProjectInput) => {
    const project = newProject(input, { id: Crypto.randomUUID(), organizationId: api.session?.organizationId ?? LOCAL_ORG_ID, now: new Date() });
    const s = stateRef.current;
    await commit({ ...s, projects: [project, ...s.projects], outbox: [...s.outbox, { seq: seq(), type: 'project.upsert', project }] });
    scheduleSync();
    return project;
  }, [api.session, commit, scheduleSync]);

  const deleteProject = useCallback(async (id: string) => {
    const s = stateRef.current;
    const wasOnServer = s.knownServerProjectIds.includes(id);
    const outbox = s.outbox.filter((o) => !(
      (o.type === 'project.upsert' && o.project.id === id) ||
      (o.type === 'briefing.save' && o.briefing.projectId === id) ||
      (o.type === 'reference.add' && o.reference.projectId === id)
    ));
    await commit({
      ...s,
      projects: s.projects.filter((p) => p.id !== id),
      briefings: s.briefings.filter((b) => b.projectId !== id),
      references: s.references.filter((r) => r.projectId !== id),
      outbox: wasOnServer ? [...outbox, { seq: seq(), type: 'project.delete', projectId: id }] : outbox,
    });
    scheduleSync();
  }, [commit, scheduleSync]);

  const saveBriefing: Ctx['saveBriefing'] = useCallback(async (projectId, data) => {
    const s = stateRef.current;
    const revision = s.briefings.filter((b) => b.projectId === projectId).reduce((m, b) => Math.max(m, b.revision), 0) + 1;
    // Cada salvamento é uma nova revisão; o servidor confirma a numeração definitiva.
    const briefing = BriefingSchema.parse({ id: Crypto.randomUUID(), projectId, revision, ...data, createdAt: new Date().toISOString() });
    const now = new Date().toISOString();
    await commit({
      ...s,
      briefings: [...s.briefings, briefing],
      projects: s.projects.map((p) => (p.id !== projectId ? p : {
        ...p,
        steps: { ...p.steps, briefing: 'completed' },
        currentStep: p.currentStep === 'briefing' ? 'add_references' : p.currentStep,
        updatedAt: now,
      })),
      outbox: [...s.outbox, { seq: seq(), type: 'briefing.save', briefing }],
    });
    scheduleSync();
    return briefing;
  }, [commit, scheduleSync]);

  const addLinkReference: Ctx['addLinkReference'] = useCallback(async (url, projectId, title) => {
    const ref = ReferenceSchema.parse({
      id: Crypto.randomUUID(),
      projectId: projectId ?? 'library',
      source: detectReferenceSource(url),
      url,
      assetId: null,
      title: title?.trim() ? title.trim() : null,
      wantedAspects: [],
      createdAt: new Date().toISOString(),
    });
    const s = stateRef.current;
    const now = new Date().toISOString();
    await commit({
      ...s,
      references: [ref, ...s.references],
      projects: projectId
        ? s.projects.map((p) => (p.id === projectId && p.steps.add_references === 'not_started' ? { ...p, steps: { ...p.steps, add_references: 'in_progress' }, updatedAt: now } : p))
        : s.projects,
      // a biblioteca geral (sem projeto) fica no aparelho
      outbox: projectId ? [...s.outbox, { seq: seq(), type: 'reference.add', reference: ref }] : s.outbox,
    });
    if (projectId) scheduleSync();
    return ref;
  }, [commit, scheduleSync]);

  const removeReference = useCallback(async (id: string) => {
    const s = stateRef.current;
    const ref = s.references.find((r) => r.id === id);
    const queuedAdd = s.outbox.some((o) => o.type === 'reference.add' && o.reference.id === id);
    const outbox = s.outbox.filter((o) => !(o.type === 'reference.add' && o.reference.id === id));
    await commit({
      ...s,
      references: s.references.filter((r) => r.id !== id),
      outbox: ref && ref.projectId !== 'library' && !queuedAdd ? [...outbox, { seq: seq(), type: 'reference.delete', referenceId: id }] : outbox,
    });
    scheduleSync();
  }, [commit, scheduleSync]);

  const value = useMemo<Ctx>(() => ({
    loaded, corrupted,
    projects: state.projects, briefings: state.briefings, references: state.references,
    syncing, syncError, lastSyncAt, pendingCount: state.outbox.length,
    syncStatus: (id) => projectSyncStatus(state, id),
    syncNow, createProject, deleteProject, saveBriefing, addLinkReference, removeReference, reload,
  }), [loaded, corrupted, state, syncing, syncError, lastSyncAt, syncNow, createProject, deleteProject, saveBriefing, addLinkReference, removeReference, reload]);
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
