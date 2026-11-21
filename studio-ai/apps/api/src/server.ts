import { DEMO_EVENT_DIR } from '@studio-ai/graphics-core';
import { API_VERSION, buildApp } from './app';
import { createVerifier } from './auth';
import { loadConfig } from './config';
import { sqlDataPort, supabaseRestDataPort } from './data';
import { pgDb } from './db';
import { localStorage, supabaseStorage } from './storage';

const config = loadConfig();
const db = config.DATA_DRIVER === 'postgres' ? pgDb(config.DATABASE_URL!) : null;
const data = db
  ? sqlDataPort(db)
  : supabaseRestDataPort({ url: config.SUPABASE_URL!, anonKey: config.SUPABASE_ANON_KEY!, serviceKey: config.SUPABASE_SERVICE_ROLE_KEY! });
const storage =
  config.STORAGE_DRIVER === 'supabase'
    ? supabaseStorage({ url: config.SUPABASE_URL!, serviceKey: config.SUPABASE_SERVICE_ROLE_KEY!, bucket: config.STORAGE_BUCKET })
    : localStorage({
        dir: config.LOCAL_STORAGE_DIR,
        secret: config.LOCAL_URL_SECRET ?? (() => { throw new Error('LOCAL_URL_SECRET é obrigatório com STORAGE_DRIVER=local'); })(),
        publicBaseUrl: config.PUBLIC_BASE_URL,
      });

const app = buildApp({
  data,
  storage,
  verify: createVerifier({ supabaseUrl: config.SUPABASE_URL, jwtSecret: config.SUPABASE_JWT_SECRET }),
  demoDir: DEMO_EVENT_DIR,
  logger: true,
  devAuth: config.DEV_AUTH === 'true' ? { jwtSecret: config.SUPABASE_JWT_SECRET! } : undefined,
  corsOrigins: config.CORS_ORIGINS.split(',').map((s) => s.trim()).filter(Boolean),
});

app.listen({ port: config.PORT, host: config.HOST }).then(() => {
  // Somente nomes de drivers — nunca valores de configuração sensíveis.
  app.log.info({ version: API_VERSION, data: config.DATA_DRIVER, storage: config.STORAGE_DRIVER, devAuth: config.DEV_AUTH === 'true' }, 'Lumpli API pronta');
});

for (const sig of ['SIGINT', 'SIGTERM'] as const) {
  process.on(sig, async () => {
    await app.close();
    await db?.close();
    process.exit(0);
  });
}
