# Studio AI

Estúdio criativo mobile multiagente para produção gráfica profissional (iOS e Android).
A IA propõe, o motor gráfico determinístico executa e o usuário aprova. Layouts aprovados nunca são redesenhados por IA.

> Status: **Etapa 0 concluída · Etapa 1 (v0.1) implementada**. Veja [PROGRESS.md](PROGRESS.md).

## Estrutura

```
studio-ai/
├── apps/mobile          App Expo (SDK 58) — Etapa 1
├── packages/shared      Esquemas zod: documento gráfico v1, identidade visual, domínio, agentes, contratos de API
├── packages/db          Testes da migração SQL em Postgres embutido (PGlite)
├── supabase/migrations  Esquema do banco com RLS
└── docs                 Arquitetura, modelo de dados, documento gráfico, API, navegação, MVP
```

## Requisitos
- Node.js 20+ (testado com 22.23) e npm 10+
- Para rodar no celular: app **Expo Go** compatível com o SDK 58, ou um development build
- Para emulador: Android Studio (Android) ou Xcode no macOS (iOS)

## Instalação e execução

```bash
cd studio-ai
npm install                 # instala todos os workspaces

npm run mobile              # inicia o Metro (expo start); escaneie o QR code com o Expo Go
# ou, dentro de apps/mobile:
npx expo start --android    # emulador Android
npx expo start --ios        # simulador iOS (macOS)
npx expo start --web        # navegador
```

Nenhuma variável de ambiente é necessária na Etapa 1 (dados ficam no aparelho). Veja `.env.example` para as etapas seguintes.

## Testes

```bash
npm test                    # esquemas compartilhados (vitest) + migração SQL com RLS (PGlite)
npm run typecheck           # TypeScript em todos os workspaces
npm run test:e2e            # exporta a build web e roda o teste de fumaça no Chromium (Playwright)
```

O teste E2E usa o Playwright instalado no projeto ou, na falta dele, o global da máquina.
