# Lumpli

Estúdio criativo mobile multiagente para produção gráfica profissional (iOS e Android).
A IA propõe, o motor gráfico determinístico executa e o usuário aprova. Layouts aprovados nunca são redesenhados por IA.

> Status: **Etapas 0, 0.1 e 0.2 implementadas** (0.2 validada localmente; Supabase pendente). Veja [PROGRESS.md](PROGRESS.md).

## Estrutura

```
studio-ai/
├── apps/mobile          App Expo (SDK 58): navegação, Sala de Produção, Produção, editor
├── apps/api             API (Fastify): auth Supabase, uploads com hash, versões, aprovação, exportação
├── packages/graphics-core  Motor gráfico determinístico (render, adaptação, verificações)
├── fixtures/demo-event  Evento fictício "Noite Neon" (arquivos sintéticos + fontes OFL)
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

## Ambiente local completo (sem Supabase)

```bash
# Postgres 15+ local e um banco vazio; segredos são gerados pelo script a cada execução
DATABASE_URL=postgres://usuario:senha@127.0.0.1:5432/lumpli_dev npm run api:local
# em outro terminal (no celular, troque 127.0.0.1 pelo IP da máquina na rede):
EXPO_PUBLIC_API_URL=http://127.0.0.1:8787 npm run mobile
```
No app: Início → **Produção** → Entrar (desenvolvimento) → Criar evento fictício → abrir o layout no editor.

Exportar o evento fictício direto pelo motor (sem API): `npm run export:demo -- ./saida`

## Testes

```bash
npm test                    # esquemas compartilhados (vitest) + migração SQL com RLS (PGlite)
npm run typecheck           # TypeScript em todos os workspaces
npm run test:e2e            # exporta a build web e roda o teste de fumaça no Chromium (Playwright)
```

O teste E2E usa o Playwright instalado no projeto ou, na falta dele, o global da máquina.
