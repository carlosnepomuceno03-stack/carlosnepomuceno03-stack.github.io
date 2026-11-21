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
