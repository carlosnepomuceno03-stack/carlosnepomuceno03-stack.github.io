import type { AgentActivity, AgentId, StepStatus } from '@studio-ai/shared';

/**
 * Estado de cada agente exibido na Sala de Produção.
 * Na Etapa 3, `useProductionFeed` passa a ler `agent_tasks` do backend (Supabase Realtime);
 * a tela não muda, apenas a fonte. `source` é sempre exibido para o usuário.
 */
export type AgentLiveState = {
  agentId: AgentId;
  /** `idle` = sem tarefa atribuída. */
  status: StepStatus | 'idle';
  activity: AgentActivity;
  message: string;
  /** Somente quando há contagem real (ex.: formatos renderizados). Nunca porcentagem inventada. */
  progress: { done: number; total: number } | null;
  result: string | null;
  error: string | null;
};

export type Delivery = { id: string; title: string; detail: string; status: 'pending_review' };

export type FeedSnapshot = {
  source: 'demo' | 'backend';
  agents: AgentLiveState[];
  deliveries: Delivery[];
  history: { at: number; agentId: AgentId; text: string }[];
};

const idle = (agentId: AgentId): AgentLiveState => ({
  agentId, status: 'idle', activity: 'idle', message: 'Disponível', progress: null, result: null, error: null,
});

const FORMATS = ['Story 1080×1920', 'Feed 1080×1440', 'Sympla 1600×838', 'Telão 1920×1080'];

/** Duração de um ciclo do roteiro de demonstração (ms). */
export const DEMO_CYCLE_MS = 60_000;

/**
 * Roteiro de DEMONSTRAÇÃO. Função pura do tempo decorrido — sem chamadas de IA, sem backend.
 * Serve para validar a experiência visual antes da Etapa 3 e é identificado como demo na UI.
 */
export function demoSnapshot(elapsedMs: number): FeedSnapshot {
  const t = (elapsedMs % DEMO_CYCLE_MS) / 1000;
  const agents: Record<AgentId, AgentLiveState> = {
    director: idle('director'),
    research: idle('research'),
    art_direction: idle('art_direction'),
    production: idle('production'),
    quality: idle('quality'),
  };
  const history: FeedSnapshot['history'] = [];
  const log = (at: number, agentId: AgentId, text: string) => { if (t >= at) history.push({ at, agentId, text }); };

  // Diretor coordena o tempo todo, com mensagem conforme a fase
  agents.director = { ...agents.director, status: 'in_progress', activity: 'coordinating', message: 'Montando plano de tarefas' };
  log(0, 'director', 'Plano criado: pesquisa → direção → produção → qualidade');

  if (t >= 5) {
    agents.director.message = 'Acompanhando a pesquisa';
    agents.research = { ...agents.research, status: 'in_progress', activity: 'researching', message: 'Analisando 3 referências' };
    log(5, 'research', 'Iniciou análise de 3 referências');
  }
  if (t >= 15) {
    agents.research = { ...agents.research, status: 'completed', activity: 'idle', message: 'Análise concluída', result: 'Paleta escura com acento neon; título condensado; foto central em destaque' };
    log(15, 'research', 'Análise concluída (2 observações confiáveis, 1 incerta)');
    agents.director.message = 'Acompanhando a direção de arte';
    agents.art_direction = { ...agents.art_direction, status: 'in_progress', activity: 'directing', message: 'Propondo direções de arte' };
    log(15, 'art_direction', 'Iniciou proposta de direção');
  }
  if (t >= 22) {
    agents.art_direction = { ...agents.art_direction, status: 'awaiting_user', activity: 'idle', message: 'Aguardando sua escolha entre 2 direções' };
    agents.director.message = 'Aguardando sua aprovação';
    log(22, 'art_direction', 'Duas direções prontas para revisão');
  }
  if (t >= 28) {
    agents.art_direction = { ...agents.art_direction, status: 'completed', message: 'Direção aprovada', result: 'Direção A — “Neon noturno”' };
    log(28, 'art_direction', 'Direção A aprovada');
    const done = Math.min(4, Math.floor((t - 28) / 2.5));
    agents.director.message = 'Acompanhando a produção';
    agents.production = done < 4
      ? { ...agents.production, status: 'in_progress', activity: 'producing', message: `Adaptando: ${FORMATS[done]}`, progress: { done, total: 4 } }
      : { ...agents.production, status: 'completed', activity: 'idle', message: '4 adaptações geradas', progress: { done: 4, total: 4 }, result: '4 arquivos na bancada' };
    log(28, 'production', 'Iniciou adaptações para 4 formatos');
  }
  if (t >= 38) {
    agents.quality = { ...agents.quality, status: 'in_progress', activity: 'reviewing', message: 'Verificando dimensões, fontes e recursos protegidos' };
    agents.director.message = 'Acompanhando as verificações';
    log(38, 'production', '4 adaptações concluídas');
    log(38, 'quality', 'Iniciou verificações');
  }
  if (t >= 47) {
    agents.quality = { ...agents.quality, status: 'completed', activity: 'idle', message: 'Verificações concluídas', result: '4 aprovados nas regras · 1 aviso: texto próximo da margem no Sympla' };
    agents.director = { ...agents.director, status: 'awaiting_user', activity: 'idle', message: 'Materiais prontos para sua revisão' };
    log(47, 'quality', '1 aviso registrado (Sympla)');
  }

  const delivered = t >= 28 ? Math.min(4, Math.floor((t - 28) / 2.5)) : 0;
  const deliveries: Delivery[] = FORMATS.slice(0, delivered).map((f, i) => ({
    id: `demo-${i}`, title: f, detail: 'Exemplo de demonstração — nenhum arquivo real', status: 'pending_review',
  }));

  return {
    source: 'demo',
    agents: Object.values(agents),
    deliveries,
    history: history.sort((a, b) => b.at - a.at),
  };
}
