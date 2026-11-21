# 03 — Contratos de API

Definidos em `packages/shared/src/api.ts` como objetos `{ method, path, body, response, idempotent }` com esquemas zod.
O servidor (Etapa 2) valida entrada e saída com os mesmos esquemas; o cliente mobile é tipado a partir deles.

Autenticação: `Authorization: Bearer <JWT do Supabase>`. Versão no caminho (`/v1`).
Rotas marcadas como idempotentes exigem `Idempotency-Key` (repetição devolve o mesmo resultado, sem custo duplicado).

| Rota | Método e caminho | Observação |
|---|---|---|
| listProjects | `GET /v1/projects` | Paginação por cursor |
| createProject | `POST /v1/projects` | idempotente |
| getProject | `GET /v1/projects/:projectId` | |
| saveBriefing | `POST /v1/projects/:projectId/briefings` | Cria nova revisão |
| createUpload | `POST /v1/projects/:projectId/uploads` | Valida MIME/tamanho/hash; devolve URL assinada curta; idempotente |
| confirmUpload | `POST /v1/uploads/:uploadId/confirm` | Servidor recalcula o SHA-256 e cria o asset |
| addReference | `POST /v1/projects/:projectId/references` | Link (Pinterest/Behance/outro) ou upload |
| getDocument | `GET /v1/documents/:documentId` | |
| saveDocument | `POST /v1/documents/:documentId/revisions` | Exige `baseRevision`; conflito → 409 `version_conflict` |
| approveDocument | `POST /v1/documents/:documentId/revisions/:revision/approve` | Cria Contrato de Identidade; idempotente |
| restoreRevision | `POST /v1/documents/:documentId/revisions/:revision/restore` | Cria **nova** revisão com o conteúdo antigo |
| startProductionJob | `POST /v1/projects/:projectId/jobs` | `maxCostCents` obrigatório; idempotente |
| cancelJob | `POST /v1/jobs/:jobId/cancel` | |
| listTasks | `GET /v1/projects/:projectId/tasks` | Também disponível via Supabase Realtime |

Erros: `{ "error": { "code", "message", "details?" } }` com `code` em
`unauthorized | forbidden | not_found | validation | conflict | version_conflict | budget_exceeded | rate_limited | internal`.
Mensagens de erro nunca incluem segredos, tokens ou caminhos internos de storage.

## Implementado na 0.2 (`apps/api/src/app.ts`)

| Rota | Função |
|---|---|
| `GET /health`, `GET /v1/auth/mode`, `GET /v1/formats` | Estado do serviço, modo de login, formatos |
| `POST /v1/me` | Cria perfil + organização pessoal no primeiro acesso (idempotente) |
| `GET/POST /v1/projects` | Lista (RLS) e cria projetos |
| `POST /v1/projects/:id/assets` | Upload binário. O servidor identifica o formato **pelo conteúdo**, mede, calcula SHA-256, grava no Storage sem sobrescrita e registra via `register_asset`. Exige confirmação de direito de uso |
| `GET /v1/projects/:id/assets` | Arquivos com URL assinada de 15 min |
| `GET/POST /v1/projects/:id/documents` | Lista / cria layout principal (revisão 1) |
| `GET /v1/documents/:id`, `GET …/revisions/:rev` | Documento na revisão atual + histórico |
| `POST /v1/documents/:id/preview` | Pré-visualização pelo renderizador real (não grava nada) |
| `POST /v1/documents/:id/revisions` | Nova revisão; `baseRevision` desatualizado → 409 `version_conflict`; recurso com hash divergente → 422 |
| `POST …/revisions/:rev/approve` | Renderiza (confere hashes), cria o contrato de identidade e congela |
| `POST …/revisions/:rev/restore` | Restaura criando NOVA revisão |
| `POST /v1/documents/:id/exports` | Adaptar → renderizar → verificar por formato; PNGs no Storage + `generated_materials` (revisão humana pendente) |
| `GET /v1/projects/:id/materials` | Materiais exportados |
| `POST /v1/demo/seed` | Cria o evento fictício para o usuário |
| `POST /v1/dev/session` | **Somente desenvolvimento local** (`DEV_AUTH=true`, recusado com Storage Supabase) |

Diferença em relação ao plano da Etapa 0: o upload em duas fases (URL assinada direto ao Storage) foi substituído
por upload pela API, para que o **servidor** calcule o hash e valide o conteúdo antes de qualquer registro.
