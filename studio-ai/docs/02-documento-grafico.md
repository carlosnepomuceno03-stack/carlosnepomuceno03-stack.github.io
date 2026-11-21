# 02 — Documento gráfico (esquema v1) e Contrato de Identidade

Código: `packages/shared/src/document.ts`, `packages/shared/src/identity.ts`. Testes: `packages/shared/test/shared.test.ts`.

## GraphicDocument v1

```jsonc
{
  "schemaVersion": 1,
  "id": "doc_…", "projectId": "…", "revision": 3, "parentRevision": 2,
  "name": "Flyer principal",
  "kind": "master",            // master | adaptation | reconstruction_proposal (Caso B)
  "formatId": null,            // ex.: "story" em adaptações
  "width": 1080, "height": 1350,
  "backgroundColor": "#0B0B10",
  "fonts":  [{ "id": "f_title", "family": "Inter", "weight": 800, "assetId": "…", "assetSha256": "…" }],
  "colors": [{ "id": "c1", "name": "Neon", "hex": "#8F80FF" }],
  "zones":  [{ "id": "z_info", "name": "Informações", "x": 0.07, "y": 0.8, "width": 0.86, "height": 0.15, "layerIds": ["title"] }],
  "layers": [ /* de baixo para cima */ ],
  "approval": { "status": "draft" }   // draft | approved | superseded
}
```

Coordenadas em px do documento; zonas e recortes normalizados (0–1). Rotação em graus.

### Tipos de camada
`background`, `image`, `text`, `shape` (rect/ellipse), `vector` (path SVG), `group` (filhos), `mask` (recorta filhos por forma).

### Propriedades comuns
`x, y, width, height, rotation, scale, opacity, visible, locked, anchor {horizontal, vertical}, constraints
{keepAspectRatio, minScale, maxScale, allowCrop}, priority (hierarquia, 1 = mais importante), role
(background/photo/logo/headline/subheadline/info/cta/decoration/other), effects, unsupportedEffects`.

Específicas: imagem (`assetId`, `assetSha256`, `fit` cover/contain/stretch, `crop`, `protected`);
texto (`text`, `fontId`, `fontSize`, `color`, `align`, `lineHeight`, `letterSpacing`, `uppercase`, `required`).

### Validação semântica (`validateDocument`)
| Código | Severidade | Regra |
|---|---|---|
| `schema` | erro | Estrutura/tipos (inclui cor `#RRGGBB[AA]`, recorte dentro do recurso, versão do esquema) |
| `duplicate_layer_id` | erro | IDs únicos, inclusive dentro de grupos |
| `missing_font` | erro | Texto usa fonte não declarada → nunca substituição silenciosa |
| `protected_distortion` | erro | Recurso protegido com `fit: stretch` |
| `protected_aspect` | erro | Recurso protegido sem `keepAspectRatio` |
| `zone_unknown_layer` | erro | Zona referencia camada inexistente |
| `unsupported_effect` | aviso | Efeito preservado no documento, informado ao usuário e no relatório de exportação |

Efeitos suportados no v1: `drop_shadow`, `blur`. Efeitos vindos de importação ou IA que o renderizador não implementa
ficam em `unsupportedEffects` com os dados brutos — **nunca são descartados silenciosamente**.

### Evolução do esquema
`schemaVersion` é literal. Uma v2 exige função de migração `v1 → v2` testada; documentos aprovados permanecem na
versão em que foram aprovados (o renderizador mantém suporte às versões existentes).

## Caso A / B / C (seção 9)
- **A — originais disponíveis**: `kind: master`, camadas `image` apontando para assets enviados (hash registrado).
- **B — só imagem de referência**: `kind: reconstruction_proposal`, sempre marcado como proposta e exigindo revisão.
  A imagem fica como `reference_image`; nunca é tratada como camadas recuperadas.
- **C — aprovado no Studio AI**: adaptações (`kind: adaptation`) derivam do master aprovado + contrato.

## Contrato de Identidade Visual
Criado na aprovação do master (`VisualIdentityContractSchema`): assets protegidos (id + SHA-256 + transformações
permitidas + obrigatório), fontes e pesos, cores, unidade de espaçamento, margem de segurança, regras por elemento
(âncora, prioridade, escala mín./máx., corte permitido, texto aprovado, bloqueio), regras por proporção
(tall/portrait/square/landscape/wide → camadas opcionais e reorganização), histórico de aprovação.
Imutável; mudanças geram revisão nova com `parentRevision`. Aprovar o master **não** aprova as adaptações —
cada uma tem `review_status` próprio em `generated_materials`.

## Formatos iniciais
| id | Nome | Dimensão | Margem segura |
|---|---|---|---|
| story | Story | 1080 × 1920 | 120 |
| feed | Feed | 1080 × 1440 | 64 |
| sympla | Sympla | 1600 × 838 | 48 |
| telao | Telão | 1920 × 1080 | 64 |
