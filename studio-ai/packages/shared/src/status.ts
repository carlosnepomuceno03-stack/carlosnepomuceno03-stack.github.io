import { z } from 'zod';

/**
 * Estados de qualquer etapa, tarefa de agente ou job de produção.
 * São os mesmos seis estados exigidos pela especificação (seção 7).
 */
export const STEP_STATUSES = [
  'not_started',
  'in_progress',
  'awaiting_user',
  'completed',
  'error',
  'cancelled',
] as const;

export const StepStatusSchema = z.enum(STEP_STATUSES);
export type StepStatus = z.infer<typeof StepStatusSchema>;

export const STEP_STATUS_LABELS: Record<StepStatus, string> = {
  not_started: 'Não iniciado',
  in_progress: 'Em andamento',
  awaiting_user: 'Aguardando você',
  completed: 'Concluído',
  error: 'Erro',
  cancelled: 'Cancelado',
};

/** Transições permitidas. Estados terminais (completed, cancelled) não saem sem nova revisão. */
const TRANSITIONS: Record<StepStatus, readonly StepStatus[]> = {
  not_started: ['in_progress', 'cancelled'],
  in_progress: ['awaiting_user', 'completed', 'error', 'cancelled'],
  awaiting_user: ['in_progress', 'completed', 'cancelled'],
  error: ['in_progress', 'cancelled'],
  completed: [],
  cancelled: [],
};

export function canTransition(from: StepStatus, to: StepStatus): boolean {
  return TRANSITIONS[from].includes(to);
}

export function assertTransition(from: StepStatus, to: StepStatus): void {
  if (!canTransition(from, to)) {
    throw new Error(`Transição de estado inválida: ${from} → ${to}`);
  }
}

export function isTerminal(status: StepStatus): boolean {
  return TRANSITIONS[status].length === 0;
}

/** As 16 etapas do fluxo principal (seção 7). */
export const FLOW_STEPS = [
  { id: 'create_project', label: 'Criar projeto' },
  { id: 'briefing', label: 'Informar briefing' },
  { id: 'add_references', label: 'Adicionar referências' },
  { id: 'select_originals', label: 'Selecionar arquivos originais' },
  { id: 'analyze_references', label: 'Analisar referências' },
  { id: 'review_direction', label: 'Revisar direção criativa' },
  { id: 'layout_proposal', label: 'Criar proposta de layout' },
  { id: 'edit_layout', label: 'Editar o layout' },
  { id: 'approve_master', label: 'Aprovar versão principal' },
  { id: 'freeze_identity', label: 'Congelar identidade visual' },
  { id: 'select_formats', label: 'Selecionar formatos' },
  { id: 'generate_adaptations', label: 'Gerar adaptações' },
  { id: 'run_checks', label: 'Executar verificações' },
  { id: 'review_materials', label: 'Revisar materiais' },
  { id: 'export', label: 'Exportar arquivos' },
] as const;

export type FlowStepId = (typeof FLOW_STEPS)[number]['id'];
export const FlowStepIdSchema = z.enum(FLOW_STEPS.map((s) => s.id) as [FlowStepId, ...FlowStepId[]]);
