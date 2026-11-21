# 06 — Hospedagem da API (opções, segurança, monitoramento e custos)

Nada foi contratado. Esta é a preparação técnica e a comparação para você decidir.
Valores de referência de 11/2026 — confira no site de cada serviço antes de contratar.

## O que já está pronto
- **Imagem Docker** (`apps/api/Dockerfile`): construída e executada neste ambiente. No teste, o container de produção
  rodou o fluxo HTTP completo (evento fictício → aprovação → 4 PNGs → restauração) contra PostgreSQL 16 real:
  0 erros no log e nenhum segredo nos logs. Imagem: ~430 MB. Usuário sem privilégios (`node`) e healthcheck embutido.
- **Driver de dados `supabase-rest`**: a API fala com o Supabase só por HTTPS (PostgREST + Storage + JWKS), sem
  conexão TCP com o banco. Por isso pode rodar em qualquer serviço, inclusive serverless (escala a zero).
- **Configurações prontas** (não fazem nada sozinhas): `apps/api/render.yaml` (Render) e `apps/api/fly.toml` (Fly.io).

## Opções
| Opção | Custo estimado | Prós | Contras | Indicação |
|---|---|---|---|---|
| **Render — Free** | R$ 0 | Sem cartão; deploy pelo GitHub; HTTPS | Dorme após ~15 min sem uso (primeira chamada ~30–60 s); 512 MB | **Desenvolvimento/testes** |
| **Google Cloud Run** | R$ 0 dentro da cota gratuita (≈2 mi requisições/mês); depois por uso | Escala a zero; região São Paulo; alertas de orçamento | Exige conta com faturamento (cartão) | **Melhor custo-benefício** para piloto |
| **Fly.io** | ~US$ 0–5/mês (com desligamento automático); por uso | Região GRU; máquinas pequenas; `fly secrets` | Exige cartão; sem plano gratuito | Alternativa simples |
| **Railway — Hobby** | US$ 5/mês (inclui US$ 5 de uso) | Muito simples | Custo fixo | Se preferir previsibilidade |
| Supabase Edge Functions | Incluído no Supabase | Sem outro fornecedor | Runtime Deno e limite de CPU por requisição: o renderizador precisaria ser portado para WASM e dividido por formato | Futuro, não recomendado agora |

**Recomendação:** use o Render Free para validar a 0.2 com custo zero; para o piloto com usuários, o Cloud Run
com alerta de orçamento (ex.: US$ 5) em `southamerica-east1`.

## Configuração segura
| Variável | Onde fica | Observação |
|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | Cofre de segredos da hospedagem (Render "secret", `fly secrets`, Secret Manager) | **Nunca** no app, no repositório ou nos logs |
| `SUPABASE_URL`, `SUPABASE_ANON_KEY` | Variáveis da hospedagem | Públicas por natureza (protegidas por RLS) |
| `DATA_DRIVER=supabase-rest`, `STORAGE_DRIVER=supabase` | Variáveis | — |
| `CORS_ORIGINS` | Variáveis | Vazio para app nativo; só origens web conhecidas |
| `DEV_AUTH` | **Não definir** | O servidor recusa iniciar com login de desenvolvimento usando Storage do Supabase |

Garantias já implementadas e testadas:
- a configuração inválida lista só **nomes** de variáveis, nunca valores;
- cabeçalhos `authorization`, `apikey` e `cookie` são redigidos nos logs;
- a chave de serviço só é usada nas funções de backend; leituras usam o JWT do usuário (RLS);
- usuários comuns não executam funções de backend, nem pelo PostgREST (falha corrigida na migração 3).

## Monitoramento
- `GET /health`: o processo está vivo (usado pelo healthcheck do container).
- `GET /ready`: dependências acessíveis (banco/Supabase). Use como health check da plataforma.
- Logs JSON (pino) com `reqId`, método, rota, status e `responseTime`; o cabeçalho `x-request-id` volta ao app
  para correlacionar erros.
- Erros 500 respondem `{ code: "internal", requestId }`, sem detalhes internos; o detalhe vai para o log.
- Sugestões gratuitas (dependem da sua conta): checagem de disponibilidade a cada 5 min em `/ready`
  (UptimeRobot/Better Stack) e alertas de log da própria plataforma para `level >= 50`.

## Controle de custos
1. **Limites por usuário na API** (`apps/api/src/limits.ts`, configuráveis): 30 exportações/hora (até 8 formatos
   cada), 120 pré-visualizações/min, 60 uploads/hora, 300 escritas/min → `429` com `retry-after`.
2. Upload até 40 MB, imagens até 12000 px, tempo máximo por requisição de 120 s.
3. **Supabase Free**: 500 MB de banco, 1 GB de Storage, 5 GB de saída/mês, sem cobrança extra (spend cap ligado).
   O projeto pausa após 7 dias sem uso (reativável no painel).
4. Hospedagem com escala a zero (Cloud Run/Fly) + alerta de orçamento.
5. Nenhum provedor de IA é chamado nesta etapa (custo de IA = 0).

## Passo a passo (quando você autorizar)
**Render (gratuito):** conectar o repositório → *New → Blueprint* → `studio-ai/apps/api/render.yaml` → preencher
os 3 valores do Supabase no painel → *Deploy*. Depois me passe a URL pública: eu rodo o teste
`apps/api/scripts/smoke-http.ts` contra ela.

**Cloud Run:** `gcloud run deploy lumpli-api --source studio-ai --region southamerica-east1 --min-instances 0
--max-instances 2 --set-secrets SUPABASE_SERVICE_ROLE_KEY=...` (o `gcloud` já existe neste ambiente, mas exige a sua
autorização e um projeto Google Cloud com faturamento).
