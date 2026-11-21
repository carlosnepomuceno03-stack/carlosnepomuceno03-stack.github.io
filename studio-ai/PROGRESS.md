# Progresso — Studio AI

## Etapa 0 — Planejamento técnico ✅ (21/11/2026)

**Entregue**
- Arquitetura e decisões: `docs/00-arquitetura.md`
- Estrutura do repositório (monorepo npm workspaces em `studio-ai/`, para não afetar o site GitHub Pages na raiz)
- Modelo de dados + migração SQL com RLS e gatilhos de imutabilidade: `docs/01-modelo-de-dados.md`, `supabase/migrations/`
- Documento gráfico v1 e Contrato de Identidade Visual (zod, com validação semântica): `docs/02-documento-grafico.md`, `packages/shared`
- Contratos de API tipados: `docs/03-contratos-api.md`, `packages/shared/src/api.ts`
- Mapa de navegação: `docs/04-navegacao.md`
- Definição do MVP e dependências externas: `docs/05-mvp-e-dependencias.md`

**Testes executados**
| Suíte | Comando | Resultado |
|---|---|---|
| Esquemas compartilhados | `npm test -w @studio-ai/shared` | 16/16 ✅ |
| Migração SQL + RLS + imutabilidade (PGlite, Postgres real embutido) | `npm test -w @studio-ai/db` | 10/10 ✅ |
| TypeScript | `npm run typecheck` | sem erros ✅ |

**Critério de conclusão**: estrutura coerente, sem dependências incompatíveis (todas as versões nativas resolvidas pela
tabela do SDK 58) e sem funcionalidade crítica sem solução técnica — a escolha final do renderizador (resvg × Skia)
tem teste de aceitação definido para o início da Etapa 2.

## Etapa 1 — Studio AI 0.1 (base mobile) ✅ com ressalvas

**Implementado (real, persistido no aparelho)**
- Projeto Expo SDK 58 · React Native 0.88 · Expo Router · Reanimated 4 · Gesture Handler · react-native-svg · TypeScript estrito
- Navegação em 5 abas (Início, Criar, Estúdio, Biblioteca, Perfil) + telas de projeto, briefing e Minha Equipe de IA
- UI dark por padrão, tema claro e "seguir sistema"; safe areas; alvos de toque ≥ 48; rótulos de acessibilidade; respeito a "reduzir movimento"
- Dashboard com projetos recentes, tarefas pendentes derivadas do estado real e estado vazio de materiais aprovados
- Criação de projeto (assistente Simples em 2 passos / Profissional em 1 tela) com validação pelos esquemas compartilhados
- Listagem e exclusão de projetos; fluxo de 15 etapas por projeto com estados reais e indicação da versão em que cada etapa chega
- Briefing versionado (cada salvamento é uma revisão nova)
- Referências por link (Pinterest/Behance/outros) com detecção de origem, vínculo a projeto — sem scraping
- Modo Simples/Profissional e tema persistidos; exclusão de todos os dados locais (LGPD)

**Demonstração (explicitamente identificada na interface)**
- Sala de Produção: 5 personagens em estações de trabalho, animações por atividade (pesquisa, direção, produção, revisão,
  coordenação, aguardando usuário), visualização em lista, detalhe do agente com atividade/resultado/erros/histórico,
  bancada de entregas. Os estados vêm de um roteiro determinístico (`features/production-room/feed.ts`) marcado como
  "Modo demonstração"; progresso numérico aparece apenas onde há contagem (ex.: 2 de 4 formatos), caso contrário indicador indeterminado.
- Minha Equipe de IA: agentes, permissões e restrições reais do catálogo; configuração marcada como pendente.

**Testes executados**
| Teste | Comando | Resultado |
|---|---|---|
| TypeScript (app) | `npm run typecheck -w @studio-ai/mobile` | sem erros ✅ |
| Bundle web | `expo export --platform web` | ✅ |
| Bundle Android (Hermes) | `expo export --platform android` | ✅ (5,1 MB .hbc) |
| E2E fumaça (Chromium, viewport 390×844, toque) | `npm run test:e2e` | 12/12 passos ✅ — abrir, 5 abas, criar projeto, validação de data, briefing, referência, persistência após recarregar, Sala de Produção + detalhe do agente + lista, Minha Equipe, tema claro, exclusão de dados, zero erros de console |

**Limitações conhecidas**
- Não foi possível executar em **dispositivo físico ou emulador** neste ambiente (container Linux sem Android SDK/Xcode).
  A validação foi feita na build web e na compilação do bundle Android. Procedimento: `npm install && npm run mobile`,
  abrir no Expo Go (SDK 58) ou `npx expo start --android` com emulador.
- `expo lint` e `expo install` online não rodaram: o ambiente bloqueia a API da Expo (instalação feita com `EXPO_OFFLINE=1`,
  que usa a tabela de compatibilidade local do SDK). ESLint ainda não configurado.
- Ícone e splash ainda são os padrões do template Expo (cores ajustadas para o tema escuro).
- Dados apenas locais (AsyncStorage); sem conta, sem sincronização.
- Biblioteca: upload de fotos/logos/fontes ainda não existe (categorias exibem a versão prevista).
- Fonte do app = fonte do sistema (SF/Roboto); tipografia própria pode ser adicionada com `expo-font`.

**Pendente (próximas etapas)**: tudo listado em `docs/05-mvp-e-dependencias.md` a partir da 0.2.

## Próxima etapa recomendada — 0.2 (motor gráfico)
1. Criar projeto Supabase e aplicar `supabase/migrations` (requer chaves — ver `.env.example`).
2. Teste de aceitação do renderizador (resvg × Skia) com fontes, transparência, ordem, recorte, sombra, dimensões e determinismo.
3. `packages/graphics-core`: documento → SVG, layout por âncoras, verificações básicas.
4. Upload real com hash, editor básico (Skia), versões/aprovação/restauração e exportação PNG dos formatos Story, Feed e Sympla.

---

## Etapa 0.2 — Motor gráfico, backend e editor ✅ localmente · ⏳ Supabase pendente (21/11/2026)

> Produto renomeado para **Lumpli** a pedido do usuário (pastas e pacotes internos mantêm `studio-ai` por ora).

**Implementado e testado**
- `packages/graphics-core` — renderizador determinístico (documento → SVG → resvg → PNG), texto em curvas a partir do
  arquivo da fonte (sem substituição), conferência SHA-256 de cada original antes de usar, contrato de identidade,
  motor de adaptação por zonas/âncoras/limites (pede revisão em vez de improvisar), 10 verificações de qualidade
  determinísticas, pipeline adaptar → renderizar → verificar, pré-visualização para o editor.
- `fixtures/demo-event` — evento **fictício** "Noite Neon": foto, logos e textura sintéticos gerados por código
  (determinísticos), fontes Anton e Inter (licença OFL incluída), regras por proporção.
- Migração 2 — bucket privado `studio-private`; funções de backend: `register_asset`, `create_document`,
  `save_document_revision` (concorrência otimista + proveniência por hash), `approve_document_revision`
  (congela identidade, substitui aprovação anterior), `restore_document_revision` (nova revisão),
  `register_generated_material`; auditoria em todas; execução negada a usuários comuns.
- `apps/api` — Fastify: JWT do Supabase (JWKS ou HS256), leituras via RLS (mesmo modelo do PostgREST), upload validado
  pelo conteúdo, documentos/revisões/aprovação/restauração, exportação por formato, URLs assinadas, logs com
  cabeçalhos sensíveis redigidos, configuração que nunca imprime valores secretos.
- `apps/mobile` — tela Produção (login, evento fictício, projetos), projeto no servidor (upload real de foto/logo/fonte
  com confirmação de direitos, arquivos com hash, materiais exportados), **editor**: pré-visualização fiel, tocar para
  selecionar, arrastar para mover, mover/escala proporcional/alinhar, editar texto, trocar imagem por outro original,
  bloquear, desfazer/refazer, guias de margem e centro, lista de camadas, salvar revisão, aprovar, exportar formatos,
  histórico e restauração. Token guardado no Keychain/Keystore (SecureStore).
- `scripts/dev-local.sh` — sobe banco local + API com segredos gerados na hora (nunca gravados).

**Testes executados nesta etapa**
| Suíte | Resultado |
|---|---|
| `packages/shared` | 16/16 ✅ |
| `packages/db` (migrações reais em PGlite: RLS, imutabilidade, versionamento, permissões) | 20/20 ✅ |
| `packages/graphics-core` (dimensões, determinismo, transparência, ordem, opacidade, fontes, glifos, integridade, adaptação nos 4 formatos, 10 verificações) | 33/33 ✅ |
| `apps/api` (fluxo completo, isolamento entre usuários, uploads, conflito, hash adulterado, aprovação, exportação, restauração, auditoria, links assinados, configuração segura) | 20/20 ✅ |
| TypeScript em todos os workspaces | ✅ |
| Migrações aplicadas em **PostgreSQL 16 real** | ✅ |
| API real (HTTP) + PostgreSQL 16 + Storage local: `scripts/smoke-http.ts` | ✅ 4 formatos, dimensões exatas; log sem tokens/segredos |
| E2E Etapa 1 (Chromium) | 12/12 ✅ |
| E2E Etapa 0.2 — app web + API real: login dev → evento fictício → upload real → editor → selecionar/mover/arrastar/desfazer → salvar → aprovar → exportar Story/Feed/Sympla → restaurar → materiais | 13/13 ✅ |
| Bundle Android (Hermes) | ✅ |
| Revisão visual humana (por mim, via capturas) | Layouts e adaptações conferidos; ver limitações |

**Critério da Etapa 0.2** ("criar ou montar um flyer, aprovar e exportar três versões com dimensões corretas, sem IA
generativa obrigatória"): **atendido no ambiente local** (API + PostgreSQL real + Storage em disco). No Supabase
real ainda **não** foi executado.

**Bloqueios**
1. **Conector Supabase não conectado** na conta do usuário → não foi possível criar o projeto "Lumpli Dev", aplicar as
   migrações, configurar Auth/Storage nem gerar as chaves. Ação necessária: conectar o conector oficial Supabase em
   claude.ai → Configurações → Conectores. Depois: criar projeto (plano gratuito), aplicar `supabase/migrations`,
   habilitar login por e-mail, guardar as chaves só no servidor, rodar `scripts/smoke-http.ts` contra ele.
2. **Hospedagem da API** não definida (nenhum serviço pago foi contratado). Hoje a API roda localmente
   (`npm run api:local`); o celular acessa pela rede local.
3. **Login com conta real** (Supabase Auth no app) depende do item 1; hoje só existe o login de desenvolvimento local.
4. Teste em **celular/emulador** físico ainda não executado (ambiente sem Android SDK/Xcode).

**Limitações conhecidas**
- Texto: mapeamento por cmap (sem ligaduras/scripts complexos); quebra de linha por palavras.
- WebP aceito na detecção mas recusado no upload até o renderizador suportá-lo.
- Exportação síncrona na API (adequada a poucos formatos); fila/worker na 0.3.
- Projetos locais da Etapa 1 (AsyncStorage) e projetos do servidor ainda são listas separadas.
- O editor não cria camadas novas nem edita regras de adaptação (o evento fictício já traz regras aprovadas).
- Gesto de pinça para escala ainda não implementado (há botões de escala proporcional).

## Próxima etapa recomendada
Conectar o Supabase e concluir a infraestrutura da 0.2 (itens 1–3 acima); depois Etapa 0.3 (IA de referências e briefing).
