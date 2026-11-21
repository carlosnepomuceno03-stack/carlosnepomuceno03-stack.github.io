import { DEMO_EVENT_DIR } from '@studio-ai/graphics-core';
import { buildApp } from './app';
import { createVerifier } from './auth';
import { loadConfig } from './config';
import { pgDb } from './db';
import { localStorage, supabaseStorage } from './storage';

const config = loadConfig();
const db = pgDb(config.DATABASE_URL);
const storage =
  config.STORAGE_DRIVER === 'supabase'
    ? supabaseStorage({ url: config.SUPABASE_URL!, serviceKey: config.SUPABASE_SERVICE_ROLE_KEY!, bucket: config.STORAGE_BUCKET })
    : localStorage({ dir: config.LOCAL_STORAGE_DIR, secret: config.LOCAL_URL_SECRET ?? (() => { throw new Error('LOCAL_URL_SECRET é obrigatório com STORAGE_DRIVER=local'); })(), publicBaseUrl: config.PUBLIC_BASE_URL });

const app = buildApp({
  db,
  storage,
  verify: createVerifier({ supabaseUrl: config.SUPABASE_URL, jwtSecret: config.SUPABASE_JWT_SECRET }),
  demoDir: DEMO_EVENT_DIR,
  logger: true,
  corsOrigins: config.CORS_ORIGINS.split(',').map((s) => s.trim()).filter(Boolean),
});

app.listen({ port: config.PORT, host: config.HOST }).then(() => {
  app.log.info({ storage: config.STORAGE_DRIVER, bucket: config.STORAGE_BUCKET }, 'Lumpli API pronta');
});

for (const sig of ['SIGINT', 'SIGTERM'] as const) {
  process.on(sig, async () => {
    await app.close();
    await db.close();
    process.exit(0);
  });
}
