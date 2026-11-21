# Imagem de produção da API do Lumpli (monorepo). Build a partir da pasta studio-ai/:
#   docker build -f apps/api/Dockerfile -t lumpli-api .
# Nenhum segredo entra na imagem: configure as variáveis no painel/cofre da hospedagem.
# syntax=docker/dockerfile:1
FROM node:22-bookworm-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY apps/api/package.json apps/api/
COPY packages/shared/package.json packages/shared/
COPY packages/graphics-core/package.json packages/graphics-core/
COPY packages/db/package.json packages/db/
# só os workspaces de que a API precisa em produção (sem app mobile, sem ferramentas de teste)
# Certificado extra opcional (somente para builds atrás de proxy corporativo): --secret id=ca,src=/caminho/ca.crt
RUN --mount=type=secret,id=ca,required=false \
    if [ -f /run/secrets/ca ]; then export NODE_EXTRA_CA_CERTS=/run/secrets/ca npm_config_cafile=/run/secrets/ca; fi; \
    npm ci --omit=dev --workspace @studio-ai/api --include-workspace-root=false

FROM node:22-bookworm-slim
ENV NODE_ENV=production PORT=8787 HOST=0.0.0.0
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY apps/api ./apps/api
COPY packages/shared ./packages/shared
COPY packages/graphics-core ./packages/graphics-core
# Fontes e arquivos do evento fictício (rota /v1/demo/seed)
COPY fixtures/demo-event/files ./fixtures/demo-event/files
USER node
EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s CMD node -e "fetch('http://127.0.0.1:'+process.env.PORT+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "--import", "tsx", "apps/api/src/server.ts"]
