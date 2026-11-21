import { CreateProjectInputSchema, type CreateProjectInput, type Project } from './domain';
import { FLOW_STEPS, type FlowStepId, type StepStatus } from './status';

export const DEFAULT_AI_BUDGET_CENTS = 200; // US$ 2,00 por projeto até o usuário aprovar mais

/** Cria um projeto novo válido. `id` e `now` são injetados para testes determinísticos. */
export function newProject(
  input: CreateProjectInput,
  opts: { id: string; organizationId: string; now: Date },
): Project {
  const data = CreateProjectInputSchema.parse(input);
  const steps = Object.fromEntries(FLOW_STEPS.map((s) => [s.id, 'not_started'])) as Record<FlowStepId, StepStatus>;
  steps.create_project = 'completed';
  const ts = opts.now.toISOString();
  return {
    id: opts.id,
    organizationId: opts.organizationId,
    name: data.name,
    kind: data.kind,
    eventDate: data.eventDate ?? null,
    venue: data.venue ?? null,
    currentStep: 'briefing',
    steps,
    aiBudgetCents: DEFAULT_AI_BUDGET_CENTS,
    aiSpentCents: 0,
    createdAt: ts,
    updatedAt: ts,
  };
}

/** Quantas etapas do fluxo foram concluídas — contagem real, não porcentagem inventada. */
export function completedSteps(project: Project): { done: number; total: number } {
  const done = FLOW_STEPS.filter((s) => project.steps[s.id] === 'completed').length;
  return { done, total: FLOW_STEPS.length };
}
