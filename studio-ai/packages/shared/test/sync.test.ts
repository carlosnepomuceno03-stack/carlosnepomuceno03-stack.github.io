import { describe, expect, it } from 'vitest';
import { newProject, projectSyncStatus, reconcile, unsyncedLocalProjects, type Briefing, type LocalState, type Reference } from '../src';

const at = (s: string) => new Date(`2026-11-2${s}T10:00:00Z`);
const P = (id: string, day: string, name = `Projeto ${id}`) => newProject({ name, kind: 'event' }, { id, organizationId: 'org', now: at(day) });
const B = (id: string, projectId: string, revision = 1): Briefing => ({ id, projectId, revision, objective: 'o', audience: '', tone: '', mandatoryTexts: [], notes: '', createdAt: at('1').toISOString() });
const R = (id: string, projectId: string): Reference => ({ id, projectId, source: 'other_link', url: 'https://x.y', assetId: null, title: null, wantedAspects: [], createdAt: at('1').toISOString() });
const empty: LocalState = { projects: [], briefings: [], references: [], outbox: [], knownServerProjectIds: [] };

describe('sincronização aparelho ↔ servidor', () => {
  it('projetos antigos só do aparelho (versão 0.1) são detectados para envio', () => {
    const state = { ...empty, projects: [P('a', '1'), P('b', '2')], knownServerProjectIds: ['b'] };
    expect(unsyncedLocalProjects(state, new Set()).map((p) => p.id)).toEqual(['a']);
    expect(unsyncedLocalProjects({ ...state, outbox: [{ seq: 1, type: 'project.upsert', project: P('a', '1') }] }, new Set()).map((p) => p.id)).toEqual([]);
  });

  it('servidor é a fonte da verdade e a lista final é única (sem duplicados)', () => {
    const local = P('a', '1', 'Nome antigo');
    const server = { ...P('a', '1', 'Nome no servidor'), updatedAt: at('3').toISOString() };
    const r = reconcile({ ...empty, projects: [local], knownServerProjectIds: ['a'] }, { projects: [server, P('c', '2')], briefings: [], references: [] });
    expect(r.projects.map((p) => [p.id, p.name])).toEqual([['a', 'Nome no servidor'], ['c', 'Projeto c']]);
    expect(r.knownServerProjectIds.sort()).toEqual(['a', 'c']);
  });

  it('mantém o que ainda está pendente de envio', () => {
    const offline = P('x', '4');
    const r = reconcile({ ...empty, projects: [offline], outbox: [{ seq: 1, type: 'project.upsert', project: offline }] }, { projects: [], briefings: [], references: [] });
    expect(r.projects.map((p) => p.id)).toEqual(['x']);
  });

  it('remove localmente o que foi excluído em outro aparelho', () => {
    const r = reconcile({ ...empty, projects: [P('a', '1')], briefings: [B('b1', 'a')], references: [R('r1', 'a')], knownServerProjectIds: ['a'] }, { projects: [], briefings: [], references: [] });
    expect(r.projects).toEqual([]);
    expect(r.briefings).toEqual([]);
    expect(r.references).toEqual([]);
  });

  it('exclusão pendente esconde o projeto mesmo que o servidor ainda o tenha', () => {
    const r = reconcile({ ...empty, projects: [P('a', '1')], outbox: [{ seq: 1, type: 'project.delete', projectId: 'a' }], knownServerProjectIds: ['a'] }, { projects: [P('a', '1')], briefings: [], references: [] });
    expect(r.projects).toEqual([]);
  });

  it('briefings e referências: servidor + pendentes, sem duplicar, preservando a biblioteca geral', () => {
    const r = reconcile(
      {
        ...empty,
        projects: [P('a', '1')],
        outbox: [{ seq: 1, type: 'briefing.save', briefing: B('b2', 'a', 2) }, { seq: 2, type: 'reference.delete', referenceId: 'r1' }],
        references: [R('lib', 'library')],
        knownServerProjectIds: ['a'],
      },
      { projects: [P('a', '1')], briefings: [B('b1', 'a'), B('b2', 'a', 2)], references: [R('r1', 'a'), R('r2', 'a')] },
    );
    expect(r.briefings.map((b) => b.id)).toEqual(['b1', 'b2']);
    expect(r.references.map((x) => x.id).sort()).toEqual(['lib', 'r2']);
  });

  it('estado de sincronização por projeto', () => {
    const s: LocalState = { ...empty, projects: [P('a', '1'), P('b', '1'), P('c', '1')], knownServerProjectIds: ['a', 'b'], outbox: [{ seq: 1, type: 'briefing.save', briefing: B('x', 'b') }] };
    expect(projectSyncStatus(s, 'a')).toBe('synced');
    expect(projectSyncStatus(s, 'b')).toBe('pending');
    expect(projectSyncStatus(s, 'c')).toBe('local');
  });
});
