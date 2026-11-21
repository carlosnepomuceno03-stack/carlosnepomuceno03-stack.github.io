# 00 — Arquitetura

Status: **Etapa 0.2 implementada** · Revisão 2 · 21/11/2026 · Produto: **Lumpli** (nome provisório anterior: Studio AI)

## Princípio: modelo híbrido

| Responsabilidade | Quem executa | Garantia |
|---|---|---|
| Interpretar briefing, analisar referências, sugerir direção e composições | Agentes com LLM (Pesquisa, Direção de Arte) | Saída estruturada (JSON validado por zod), com nível de confiança |
| Documento, camadas, posicionamento, adaptação, renderização, exportação | Motor gráfico determinístico (`packages/graphics-core` + worker) | Mesma entrada → mesmo PNG; nunca gera imagem inteira por IA |
| Verificações objetivas (dimensões, hashes, fontes, cortes, sobreposição) | Código determinístico (Agente de Qualidade) | Testes automatizados |
| Aprovação | Usuário | Revisão aprovada é imutável no banco (trigger) |

A IA **propõe**; o motor **executa**; o usuário **aprova**. Um layout aprovado nunca é redesenhado por IA:
adaptações partem do documento aprovado, dos arquivos originais (identificados por SHA-256) e das regras do
Contrato de Identidade Visual.

## Visão geral

```
┌──────────────── apps/mobile (Expo / React Native) ────────────────┐
│ Expo Router · 5 abas · Editor (Skia — 0.2) · Sala de Produção      │
│ Lê/escreve via API tipada (packages/shared/api.ts) + Supabase Auth │
└───────────────┬───────────────────────────────┬────────────────────┘
                │ HTTPS (JWT do Supabase)       │ Realtime (agent_tasks)
┌───────────────▼──────────────┐   ┌────────────▼────────────────────┐
│ apps/api (Node + TypeScript)  │   │ Supabase                         │
│ Valida contratos (zod)        │◄─►│ Auth · Postgres (RLS) · Storage  │
│ Orquestrador: Diretor de Prod.│   │ (bucket privado, URLs assinadas) │
│ Enfileira jobs (idempotentes) │   └────────────▲────────────────────┘
└───────────────┬──────────────┘                │ service role
                │ fila persistente              │
┌───────────────▼────────────────────────────────┴────────────────────┐
│ apps/worker                                                          │
│ • Renderizador (graphics-core → SVG → resvg → PNG)                    │
│ • Agentes: Pesquisa / Direção (LLM), Produção / Qualidade (determ.)   │
│ • Lease + timeout + tentativas limitadas + teto de custo por job      │
└──────────────────────────────────────────────────────────────────────┘
```

## Estrutura do repositório

O monorepo fica em `studio-ai/` porque a raiz deste repositório publica um site no GitHub Pages
(`index.html`, `px/`, `corrida/`…) que não deve ser afetado.

| Pasta | Conteúdo | Etapa |
|---|---|---|
| `apps/mobile` | App Expo SDK 58, React Native 0.88, Expo Router, Reanimated 4 | 1 ✅ |
| `apps/api` | API REST Node/TS (Fastify): auth Supabase, uploads com hash, versões, aprovação, exportação | 0.2 ✅ |
| `apps/worker` | Execução assíncrona de tarefas de agentes (na 0.2 a exportação roda na API, de forma síncrona) | 0.3 |
| `packages/shared` | Esquemas zod: documento gráfico, identidade, domínio, agentes, contratos de API | 0 ✅ |
| `packages/db` | Banco de teste (PGlite) com as migrações reais | 0 ✅ |
| `fixtures/demo-event` | Evento fictício "Noite Neon": arquivos sintéticos + fontes OFL | 0.2 ✅ |
| `packages/graphics-core` | Renderizador, contrato de identidade, adaptação por regras, verificações | 0.2 ✅ |
| `packages/agent-system` | Orquestrador, grafo de dependências, provedores de IA | 3 |
| `packages/ui` | Componentes compartilhados (quando surgir 2º cliente: web/desktop) | futuro |
| `supabase/migrations` | Esquema SQL versionado com RLS | 0 ✅ |
| `docs` | Esta documentação | 0 ✅ |

`packages/ui` foi adiado: com um único cliente, os componentes vivem em `apps/mobile/src/components`.
Extrair antes de existir um segundo consumidor seria abstração prematura.

## Decisões técnicas

### Mobile
- **Expo SDK 58** (estável mais recente em 11/2026), TypeScript estrito, Expo Router (rotas em `src/app`).
- **Reanimated 4 + Gesture Handler** para animações e gestos do editor.
- **react-native-svg** para os personagens da Sala de Produção (funciona no Expo Go).
- **React Native Skia** (Etapa 2) para o canvas do editor. Exige *development build* se a versão do
  Expo Go não incluir o módulo; o projeto já usa Continuous Native Generation (`npx expo prebuild`).
- Dados locais em AsyncStorage na Etapa 1, atrás de uma interface de repositório que ganhará implementação
  Supabase na Etapa 2 (o armazenamento local vira cache offline).

### Renderização — decisão tomada na Etapa 0.2 (validada por testes)
**Documento → SVG → `@resvg/resvg-js` → PNG**, com o **texto convertido em curvas** pelo `opentype.js` a partir do
ARQUIVO de fonte do projeto (verificado por SHA-256). Consequências:
- não existe fonte substituta: fonte sem arquivo ou caractere sem glifo bloqueia a renderização com erro explícito;
- `loadSystemFonts: false` no resvg; nenhuma dependência de fontes instaladas no servidor;
- determinístico: mesma entrada → mesmos bytes (testado);
- imagens entram pelo original (data URI), com recorte autorizado por `viewBox` e `preserveAspectRatio` (sem distorção).
Limitação conhecida: o mapeamento caractere→glifo usa a tabela cmap (sem shaping GSUB completo). Atende escrita
latina com acentos pré-compostos; ligaduras e scripts complexos ficam para depois.
O editor mobile mostra uma **pré-visualização gerada pelo mesmo renderizador** (rota `/preview`), com seleção e gestos
desenhados por cima — a tela é fiel à exportação sem duplicar o motor no celular.

### Backend e filas
- Supabase: Auth, Postgres com RLS, Storage em bucket privado (`{org}/{projeto}/{asset}`), URLs assinadas curtas.
- **Fonte da verdade das tarefas = tabela `agent_tasks`** (estado, tentativas, lease, custo). O despachante
  pode ser BullMQ/Redis quando o ambiente oferecer Redis, ou polling com `SELECT … FOR UPDATE SKIP LOCKED`
  no próprio Postgres. A decisão fica para a Etapa 3; o esquema já suporta ambos.
- Escritas de agentes usam a *service role* apenas no worker/API, nunca no app.

### Concorrência e versionamento
- `projects.state_revision` e `layout_versions.revision`: escrita exige `baseRevision`; divergência → `409 version_conflict`.
- Revisões aprovadas são imutáveis (trigger `forbid_approved_version_mutation`); só podem virar `superseded`.
- Assets são imutáveis (trigger `forbid_asset_mutation`); edições de pixel geram recurso derivado com `derived_from_asset_id`.
- `visual_identities`, `approvals` e `audit_logs` são somente-inserção.

### Custos de IA
- Teto por projeto (`ai_budget_cents`, padrão US$ 2) e por job (`max_cost_cents`); job que excederia o teto vai
  para `awaiting_user` pedindo autorização.
- Cada chamada registrada em `ai_calls` (tokens, custo, duração, resultado) — sem conteúdo sensível nem segredos.
- Idempotência: `Idempotency-Key` em rotas com custo; chave única em `production_jobs` e `agent_tasks`.
- Agentes Produção, Qualidade e Diretor são **determinísticos** (não consomem IA).

### Segurança e privacidade (LGPD)
- RLS em todas as tabelas; funções `is_org_member` / `can_edit_org` como `security definer`.
- Arquivos de clientes privados por padrão; envio a provedor de IA só de referências que o usuário marcou para análise,
  com aviso explícito e registro em auditoria.
- Validação de upload por MIME, tamanho (40 MB) e hash; SVG sanitizado no servidor antes de uso.
- Exclusão: "Apagar dados locais" (já implementado) e, na Etapa 2, exclusão de conta/organização com remoção do Storage.

## Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Paridade editor (Skia) × renderizador (resvg) | Mesmo esquema; testes de *golden image* com tolerância; renderizador é a referência da exportação |
| Fontes não licenciadas ou ausentes | Fonte faltando = erro bloqueante (nunca fallback silencioso) |
| Pinterest/Behance sem API aberta para o caso de uso | Somente links + upload manual; integração só com API oficial autorizada |
| Custos de IA | Tetos, aprovação explícita, agentes determinísticos onde possível |
| Expo Go sem módulos nativos novos | Development build documentado |
