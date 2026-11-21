# 08 — Supabase "Lumpli Dev": roteiro de configuração

Status: **aguardando o conector oficial do Supabase** ser conectado na conta do usuário
(claude.ai → Configurações → Conectores → Supabase). Nada foi criado ainda.

## O que será feito assim que houver acesso
1. Criar o projeto **Lumpli Dev** no plano **Free** (custo zero), região `sa-east-1` (São Paulo).
2. Aplicar as migrações **nesta ordem**, sem os arquivos de `supabase/local/`, que são só para testes locais:
   1. `20261121000000_initial_schema.sql`: tabelas e RLS;
   2. `20261121010000_storage_and_versioning.sql`: bucket privado `studio-private` e funções de backend;
   3. `20261122000000_rpc_sync_hardening.sql`: correção de permissões, funções RPC e imutabilidade dos materiais.
3. Conferir com o *Security Advisor* do Supabase (RLS em todas as tabelas, funções com `search_path` fixo).
4. **Auth**: habilitar login por e-mail com **código de 6 dígitos**. No template "Magic Link", incluir `{{ .Token }}`
   para o app receber o código. Desativar cadastro anônimo. Expiração do JWT: 3600 s.
5. **Storage**: o bucket `studio-private` já é criado pela migração 2 (privado, limite de 40 MB, tipos permitidos).
6. Chaves:
   - **públicas** (URL e anon/publishable): vão para o app (`EXPO_PUBLIC_*`) e para a API;
   - **secreta** (service role / `sb_secret_…`): vai **somente** para o cofre de segredos da hospedagem da API.
     Ela nunca passa por este chat, pelo repositório ou por logs.
7. Testes reais contra a nuvem, com o mesmo roteiro já validado localmente (`apps/api/scripts/smoke-http.ts`,
   `apps/api/test/*` e o E2E do app):
   - criar usuário de teste e fazer login;
   - criar projeto e sincronizar;
   - upload com hash;
   - salvar, aprovar e exportar 4 formatos;
   - conferir os PNGs no Storage;
   - restaurar;
   - comprovar o isolamento entre dois usuários.

## Rede deste ambiente de desenvolvimento
O ambiente onde o Claude trabalha bloqueia hoje `supabase.com`, `api.supabase.com` e `*.supabase.co`. Quando o projeto
existir, será pedida (com sua aprovação) a liberação **apenas** do host `<ref>.supabase.co` do Lumpli Dev, para rodar
os testes reais daqui. O conector do Supabase em si não depende dessa liberação.
