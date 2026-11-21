# 07 — Testar o Lumpli no iPhone

## Caminho 1 — Expo Go (gratuito, funciona hoje)
Todos os módulos nativos usados pelo app (Reanimated, Gesture Handler, SVG, SecureStore, Image Picker, Document
Picker, Haptics, Crypto) fazem parte do Expo Go, então não é preciso um build próprio para testar.

1. No iPhone, instale o **Expo Go** pela App Store. Ele precisa suportar o **SDK 58**; se a loja oferecer outro SDK,
   use o Caminho 2.
2. No computador (Mac, Windows ou Linux, com Node 20+):
   ```bash
   git clone <repositório> && cd <repositório>/studio-ai
   git checkout claude/studio-ai-technical-planning-dm01dc
   npm install
   # sem servidor: o app funciona com dados só no aparelho
   npm run mobile
   ```
3. Escaneie o QR code com a **câmera do iPhone**. Celular e computador precisam estar na mesma rede Wi-Fi;
   se não estiverem, rode `npx expo start --tunnel` dentro de `apps/mobile`.

Para testar também o editor, a aprovação e a exportação com o servidor local:
```bash
# terminal 1 (PostgreSQL local instalado)
DATABASE_URL=postgres://usuario:senha@127.0.0.1:5432/lumpli_dev npm run api:local
# terminal 2 — troque pelo IP do computador na rede (ex.: 192.168.0.10)
EXPO_PUBLIC_API_URL=http://192.168.0.10:8787 npm run mobile
```
No app: **Perfil → Conta e nuvem → Entrar (desenvolvimento)**.

Com o Supabase e a API hospedada, inclua também `EXPO_PUBLIC_SUPABASE_URL` e `EXPO_PUBLIC_SUPABASE_ANON_KEY`
(valores públicos). O app passa a mostrar o login por código enviado por e-mail.

## Caminho 2 — Development build com EAS (app próprio "Lumpli" instalado no iPhone)
Já está pronto no repositório:
- `apps/mobile/eas.json`: perfis `development` (aparelho), `development-simulator`, `preview` e `production`;
- `expo-dev-client` instalado; bundle identifier `app.lumpli.mobile`;
- permissões revisadas: só **Fotos**, com texto em português; câmera, microfone e Face ID desativados.
  Validado com `expo prebuild -p ios`.

**Requisitos que só você pode cumprir:**
1. Conta Expo gratuita (expo.dev).
2. **Apple Developer Program — US$ 99/ano.** É exigência da Apple para instalar builds próprios em iPhone físico.
   É um custo: só prossiga se autorizar.

**Passos (no seu computador):**
```bash
cd studio-ai/apps/mobile
npx eas-cli@latest login
npx eas-cli@latest init                     # vincula o projeto à sua conta Expo (grava o projectId no app.json)
npx eas-cli@latest device:create            # gera um link/QR: abra no iPhone para registrar o aparelho
npx eas-cli@latest build --profile development --platform ios
```
O EAS pede o login da Apple e gera certificados e perfil de provisionamento automaticamente. No fim, ele mostra um
QR code: abra-o no iPhone para instalar. No iOS 16 ou mais recente, ative **Ajustes → Privacidade e Segurança →
Modo de Desenvolvedor**. Depois:
```bash
npx expo start --dev-client     # o app "Lumpli" do iPhone se conecta a este servidor de desenvolvimento
```

Cota gratuita do EAS (referência 11/2026): builds limitados por mês, com fila. Confira em expo.dev/pricing.

**Variáveis no EAS** (valores públicos): `eas env:create --environment development --name EXPO_PUBLIC_API_URL --value ...`
Nunca coloque chaves secretas em variáveis `EXPO_PUBLIC_*`: elas ficam dentro do app.

## O que ainda precisa ser validado no aparelho real
Veja a lista no fim do `PROGRESS.md` (seção "Depende de validação no dispositivo").
