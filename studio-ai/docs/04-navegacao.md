# 04 — Mapa de navegação

```
Stack raiz (src/app/_layout.tsx)
├── (tabs)  — barra inferior, alcançável com o polegar
│   ├── index      Início      dashboard: projetos recentes, tarefas pendentes, materiais aprovados, novo projeto
│   ├── create     Criar       assistente (Simples: 2 passos · Profissional: 1 tela)
│   ├── studio     Estúdio     Sala de Produção (visual ou lista) + bancada de entregas + detalhe do agente (sheet)
│   ├── library    Biblioteca  referências por link (com vínculo a projeto), categorias de arquivos/identidades
│   └── profile    Perfil      modo de uso, tema, Minha Equipe de IA, integrações, privacidade/exclusão de dados
├── project/[id]            Projeto: briefing, referências, fluxo de 15 etapas com estado real
├── project/[id]/briefing   Briefing (modal) — cada salvamento é uma revisão
└── team                    Minha Equipe de IA — agentes, permissões e restrições

Etapa 2+ (planejado)
├── project/[id]/assets       Arquivos originais (upload, hash, direitos de uso)
├── project/[id]/editor       Editor por camadas (Skia): seleção, mover, redimensionar, textos, guias, desfazer/refazer
├── project/[id]/versions     Histórico, comparação e restauração
├── project/[id]/formats      Seleção de formatos e presets
└── project/[id]/review       Revisão por formato + exportação
```

O fluxo de 16 passos da especificação (seção 7) começa em "Abrir aplicativo"; os 15 passos seguintes são as etapas
rastreadas por projeto (`FLOW_STEPS`), cada uma com estado: não iniciado, em andamento, aguardando usuário,
concluído, erro, cancelado (transições em `packages/shared/src/status.ts`).
