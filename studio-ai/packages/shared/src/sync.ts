import { z } from 'zod';
import { BriefingSchema, ProjectSchema, ReferenceSchema, type Briefing, type Project, type Reference } from './domain';

/**
 * Sincronização aparelho ↔ servidor (uma única lista de projetos).
 *
 * Modelo:
 * - Toda alteração feita no app é aplicada no cache local e registrada numa FILA (outbox) com o ID do registro,
 *   gerado no aparelho. O envio é idempotente: reenviar o mesmo ID não duplica nada no servidor.
 * - Com sessão ativa, a fila é enviada em ordem; depois o app baixa o estado do servidor, que é a fonte da verdade.
 * - Registros que o aparelho já viu no servidor e que sumiram de lá foram excluídos em outro lugar → saem do cache.
 * - Registros locais que o servidor nunca viu (ex.: criados offline ou na versão 0.1) são enviados.
 */
export const OutboxOpSchema = z.discriminatedUnion('type', [
  z.object({ seq: z.number().int(), type: z.literal('project.upsert'), project: ProjectSchema }),
  z.object({ seq: z.number().int(), type: z.literal('project.delete'), projectId: z.string() }),
  z.object({ seq: z.number().int(), type: z.literal('briefing.save'), briefing: BriefingSchema }),
  z.object({ seq: z.number().int(), type: z.literal('reference.add'), reference: ReferenceSchema }),
  z.object({ seq: z.number().int(), type: z.literal('reference.delete'), referenceId: z.string() }),
]);
export type OutboxOp = z.infer<typeof OutboxOpSchema>;

export type ServerSnapshot = {
  projects: Project[];
  briefings: Briefing[];
  references: Reference[];
};

export type LocalState = {
  projects: Project[];
  briefings: Briefing[];
  references: Reference[];
  outbox: OutboxOp[];
  /** IDs de projetos que já foram vistos no servidor por este aparelho. */
  knownServerProjectIds: string[];
};

/** Projetos locais que precisam ser enviados (nunca vistos no servidor e sem operação pendente). */
export function unsyncedLocalProjects(state: LocalState, serverIds: Set<string>): Project[] {
  const queued = new Set(state.outbox.flatMap((o) => (o.type === 'project.upsert' ? [o.project.id] : [])));
  const known = new Set(state.knownServerProjectIds);
  return state.projects.filter((p) => !serverIds.has(p.id) && !known.has(p.id) && !queued.has(p.id));
}

/**
 * Funde o estado do servidor (após o envio da fila) com o que ainda está pendente no aparelho.
 * Pura e determinística.
 */
export function reconcile(state: LocalState, server: ServerSnapshot): Omit<LocalState, 'outbox'> {
  const serverIds = new Set(server.projects.map((p) => p.id));
  const pendingDeletes = new Set(state.outbox.flatMap((o) => (o.type === 'project.delete' ? [o.projectId] : [])));
  const pendingProjects = state.outbox.flatMap((o) => (o.type === 'project.upsert' ? [o.project] : []));
  const known = new Set(state.knownServerProjectIds);

  // servidor é a verdade; mantêm-se locais apenas os pendentes ou nunca sincronizados
  const localOnly = state.projects.filter(
    (p) => !serverIds.has(p.id) && !pendingDeletes.has(p.id) && (pendingProjects.some((q) => q.id === p.id) || !known.has(p.id)),
  );
  const projects = [...server.projects.filter((p) => !pendingDeletes.has(p.id)), ...localOnly].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  const alive = new Set(projects.map((p) => p.id));

  const pendingBriefings = state.outbox.flatMap((o) => (o.type === 'briefing.save' ? [o.briefing] : []));
  const briefings = dedupe([...server.briefings, ...pendingBriefings.filter((b) => !server.briefings.some((s) => s.id === b.id))])
    .concat(state.briefings.filter((b) => !serverIds.has(b.projectId) && alive.has(b.projectId)))
    .filter((b, i, arr) => arr.findIndex((x) => x.id === b.id) === i && alive.has(b.projectId));

  const pendingRefDeletes = new Set(state.outbox.flatMap((o) => (o.type === 'reference.delete' ? [o.referenceId] : [])));
  const pendingRefs = state.outbox.flatMap((o) => (o.type === 'reference.add' ? [o.reference] : []));
  const references = [
    ...server.references,
    ...pendingRefs,
    // biblioteca geral e projetos ainda não enviados ficam como estão
    ...state.references.filter((r) => r.projectId === 'library' || (!serverIds.has(r.projectId) && alive.has(r.projectId))),
  ].filter((r, i, arr) => arr.findIndex((x) => x.id === r.id) === i && !pendingRefDeletes.has(r.id) && (r.projectId === 'library' || alive.has(r.projectId)));

  return {
    projects,
    briefings,
    references,
    knownServerProjectIds: [...new Set([...state.knownServerProjectIds.filter((id) => serverIds.has(id) || pendingDeletes.has(id)), ...serverIds])],
  };

  function dedupe<T extends { id: string }>(xs: T[]): T[] {
    return xs.filter((x, i) => xs.findIndex((y) => y.id === x.id) === i);
  }
}

export type SyncStatus = 'local' | 'pending' | 'synced';
export function projectSyncStatus(state: LocalState, projectId: string): SyncStatus {
  if (state.outbox.some((o) => (o.type === 'project.upsert' && o.project.id === projectId) || (o.type === 'briefing.save' && o.briefing.projectId === projectId) || (o.type === 'reference.add' && o.reference.projectId === projectId))) {
    return 'pending';
  }
  return state.knownServerProjectIds.includes(projectId) ? 'synced' : 'local';
}
