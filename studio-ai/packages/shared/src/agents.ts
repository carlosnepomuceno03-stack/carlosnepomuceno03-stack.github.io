import { z } from 'zod';
import { StepStatusSchema } from './status';

/** Agentes nativos (seção 15). As permissões são verificadas pelo orquestrador no backend. */
export const AgentIdSchema = z.enum(['director', 'research', 'art_direction', 'production', 'quality']);
export type AgentId = z.infer<typeof AgentIdSchema>;

export type AgentPermission =
  | 'read_project'
  | 'create_tasks'
  | 'write_references_analysis'
  | 'write_direction_proposal'
  | 'write_draft_document'
  | 'request_render'
  | 'write_quality_report'
  | 'request_approval';

export type AgentActivity = 'idle' | 'researching' | 'directing' | 'producing' | 'reviewing' | 'coordinating';

export type NativeAgent = {
  id: AgentId;
  name: string;
  specialty: string;
  workstation: string;
  activity: AgentActivity;
  permissions: readonly AgentPermission[];
  /** O que o agente explicitamente NÃO pode fazer (exibido em "Minha Equipe de IA"). */
  restrictions: readonly string[];
  usesLlm: boolean;
};

export const NATIVE_AGENTS: readonly NativeAgent[] = [
  {
    id: 'director',
    name: 'Diretor de Produção',
    specialty: 'Orquestra tarefas, dependências, versões e aprovações',
    workstation: 'Mesa central',
    activity: 'coordinating',
    permissions: ['read_project', 'create_tasks', 'request_approval'],
    restrictions: ['Não edita layouts', 'Não aprova em nome do usuário'],
    usesLlm: false,
  },
  {
    id: 'research',
    name: 'Agente de Pesquisa',
    specialty: 'Analisa e organiza referências acessíveis',
    workstation: 'Mural de referências',
    activity: 'researching',
    permissions: ['read_project', 'write_references_analysis'],
    restrictions: ['Não modifica layouts aprovados', 'Não faz scraping de sites'],
    usesLlm: true,
  },
  {
    id: 'art_direction',
    name: 'Agente de Direção de Arte',
    specialty: 'Interpreta o briefing e sugere composições e regras visuais',
    workstation: 'Prancheta',
    activity: 'directing',
    permissions: ['read_project', 'write_direction_proposal'],
    restrictions: ['Não altera versões congeladas'],
    usesLlm: true,
  },
  {
    id: 'production',
    name: 'Agente de Produção',
    specialty: 'Prepara solicitações estruturadas para o motor gráfico',
    workstation: 'Bancada de produção',
    activity: 'producing',
    permissions: ['read_project', 'write_draft_document', 'request_render'],
    restrictions: ['Não recria arquivos protegidos', 'Não gera imagens inteiras por IA'],
    usesLlm: false,
  },
  {
    id: 'quality',
    name: 'Agente de Qualidade',
    specialty: 'Executa verificações e relata problemas',
    workstation: 'Estação de revisão',
    activity: 'reviewing',
    permissions: ['read_project', 'write_quality_report'],
    restrictions: ['Não altera a versão aprovada sem autorização'],
    usesLlm: false,
  },
] as const;

export function getAgent(id: AgentId): NativeAgent {
  const agent = NATIVE_AGENTS.find((a) => a.id === id);
  if (!agent) throw new Error(`Agente desconhecido: ${id}`);
  return agent;
}

export const AgentTaskSchema = z.object({
  id: z.string().min(1),
  jobId: z.string().min(1),
  projectId: z.string().min(1),
  agentId: AgentIdSchema,
  kind: z.string().min(1),
  status: StepStatusSchema,
  dependsOn: z.array(z.string()),
  /** Revisão do projeto em que a tarefa se baseia (controle de concorrência otimista). */
  baseRevision: z.number().int().min(0),
  idempotencyKey: z.string().min(8),
  attempts: z.number().int().nonnegative(),
  maxAttempts: z.number().int().positive(),
  timeoutMs: z.number().int().positive(),
  /** Descrição curta e real do que está acontecendo — exibida na Sala de Produção. */
  statusMessage: z.string().nullable(),
  /** Progresso só existe quando é mensurável (ex.: 2 de 4 formatos renderizados). */
  progress: z.object({ done: z.number().int(), total: z.number().int().positive() }).nullable(),
  error: z.object({ code: z.string(), message: z.string(), retryable: z.boolean() }).nullable(),
  costCents: z.number().nonnegative().nullable(),
  createdAt: z.string().datetime(),
  startedAt: z.string().datetime().nullable(),
  finishedAt: z.string().datetime().nullable(),
});
export type AgentTask = z.infer<typeof AgentTaskSchema>;
