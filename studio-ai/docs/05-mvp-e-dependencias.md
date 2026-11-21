# 05 — Definição do MVP e dependências externas

## MVP (Studio AI 1.0)
Fluxo completo para **flyers de eventos** usado internamente:
briefing → referências (links + upload) → análise por IA com confiança explícita → direção de arte →
documento editável montado com **arquivos originais** → edição no celular → aprovação → contrato congelado →
adaptações Story / Feed / Sympla (Telão opcional) por regras → verificações automáticas → revisão humana → PNG exportado.

Fora do MVP: cobrança, marketplace de agentes, vídeo, calendário, redes sociais, agentes externos, versão web/desktop,
remoção de fundo/retoque (apenas preparado via assets derivados), integração por API com Pinterest/Behance.

## Etapas
| Versão | Entrega | Critério de conclusão |
|---|---|---|
| 0 | Planejamento, esquemas, migração, contratos | Esquemas e migração testados ✅ |
| 0.1 | Base mobile, navegação, projetos, Sala de Produção (demo identificada) | App inicia e navega sem falhas ✅ (web/Chromium; dispositivo real pendente) |
| 0.2 | Supabase, upload real, documento por camadas, editor básico, versões, aprovação, presets, exportação PNG | Montar flyer, aprovar e exportar 3 formatos com dimensões corretas, sem IA |
| 0.3 | Análise de referências e briefing por IA, agentes, orquestração, estados reais na Sala | 1 fluxo real de IA gera dados estruturados usados pelo projeto, com custo registrado |
| 0.4 | Adaptação por regras, verificações, alertas, correções autorizadas, revisão por formato | Adaptações passam nos testes técnicos e vão para revisão humana |
| 1.0 | Integração ponta a ponta + teste real com evento autorizado | Fluxo completo no celular; critérios da seção 22 |

## Dependências externas
| Dependência | Uso | Status | Alternativa se indisponível |
|---|---|---|---|
| Supabase (projeto + chaves anon/service) | Auth, Postgres, Storage, Realtime | **Não configurado** — necessário na 0.2 | Postgres local + armazenamento em disco para desenvolvimento |
| Provedor de LLM com visão (ex.: Anthropic Claude) | Análise de referências e briefing | **Sem chave** — necessário na 0.3 | Análise manual pelo usuário (formulário estruturado), identificada como manual |
| Redis (opcional) | Despacho de filas BullMQ | Opcional | Fila no Postgres (`agent_tasks` + `SKIP LOCKED`) |
| Hospedagem Node (API + worker) | Fly.io / Render / Railway / VM | A definir | Execução local |
| Conta Expo/EAS | Builds de desenvolvimento e lojas | A definir | `npx expo run:android|ios` local |
| Apple Developer / Google Play | Distribuição | Futuro | TestFlight / APK interno |
| APIs Pinterest / Behance | Importação de referências | **Não usar** sem aprovação da plataforma | Links + upload manual (implementado) |
| Fontes licenciadas | Renderização fiel | Fornecidas pelo usuário | Fontes livres (OFL) declaradas no documento |

## Variáveis de ambiente (a partir da 0.2)
Veja `studio-ai/.env.example`. Nenhuma é necessária na Etapa 1.
