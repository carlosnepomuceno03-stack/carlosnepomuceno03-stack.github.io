# 01 — Modelo de dados

Fonte: `supabase/migrations/20261121000000_initial_schema.sql` (validada por `packages/db/test/schema.test.ts`
em Postgres embutido). Tipos espelhados em `packages/shared/src/domain.ts` (camelCase no app, snake_case no banco).

## Entidades

| Especificação | Tabela | Observações |
|---|---|---|
| Users | `auth.users` (Supabase) + `profiles` | Perfil público mínimo |
| Organizations | `organizations`, `organization_members` | Papéis: owner, editor, viewer. Base para equipes/assinaturas futuras |
| Projects | `projects` | `steps` (jsonb) guarda o estado de cada etapa do fluxo; `state_revision` p/ concorrência; exclusão lógica `deleted_at` |
| Briefings | `briefings` | Versionado (`revision`); nunca sobrescrito |
| Assets | `assets` | Imutável; `sha256`; derivados via `derived_from_asset_id` + `derivation`; `usage_rights_confirmed` |
| References | `project_references` | `references` é palavra reservada no SQL. Link ou upload; `analysis` (observações com confiança) |
| VisualIdentities | `visual_identities` | Contrato congelado (jsonb), somente-inserção, revisão + revisão pai |
| GraphicDocuments | `graphic_documents` | master / adaptation / reconstruction_proposal; `head_revision` |
| LayoutVersions | `layout_versions` | Cada salvamento = revisão; `content` = GraphicDocument v1; `content_sha256`; aprovada = imutável |
| Layers | `layers` | Índice das camadas por revisão (asset, hash, papel, z-index) para auditoria e consultas; o JSON é a fonte da verdade |
| Approvals | `approvals` | Decisões do usuário (master, adaptação, direção, custo); somente-inserção |
| FormatPresets | `format_presets` | Sistema (org nula) + presets por organização, versionados. Semeado com Story/Feed/Sympla/Telão |
| Agents | `agents` | Configuração por organização: ativo, provedor, modelo, limites |
| ProductionJobs | `production_jobs` | Pedido do usuário; teto de custo; chave de idempotência única por projeto |
| AgentTasks | `agent_tasks` | Estado, dependências, `base_revision`, tentativas, timeout, lease, progresso mensurável, custo |
| GeneratedMaterials | `generated_materials` | PNG exportado + revisão de origem + identidade + versão do renderizador + relatório de QA |
| AuditLogs | `audit_logs` | Somente-inserção; ator humano ou agente |
| (extra) | `ai_calls` | Registro de cada chamada de IA para custo e auditoria |

## Reprodutibilidade de uma geração
`generated_materials` aponta para (`document_id`, `document_revision`) → `layout_versions.content` (documento exato),
cujas camadas referenciam `assets` por id **e** hash; mais `identity_id`, `format_id` e `renderer_version`.
Com isso é possível renderizar novamente e comparar.

## Regras de isolamento (RLS)
- Leitura: membro da organização dona do projeto.
- Escrita: owner/editor. Viewer só lê.
- App só cria revisões `draft`; aprovação passa pela API (que registra `approvals` e cria o contrato).
- Agentes/worker escrevem com service role no backend.

Testes que comprovam (PGlite): usuário B não vê nem altera projeto de A; não se adiciona à organização de A;
não cria projeto nela; asset não troca de hash; revisão aprovada não é alterada nem apagada; app não insere revisão
aprovada; auditoria não é apagada; job duplicado com a mesma chave é rejeitado.
