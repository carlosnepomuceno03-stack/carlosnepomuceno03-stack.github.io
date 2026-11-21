/**
 * E2E da Etapa 0.2 — app (build web) + API real em execução.
 * Pré-requisitos: API local com DEV_AUTH=true e CORS_ORIGINS=http://127.0.0.1:8099;
 * build web exportada com EXPO_PUBLIC_API_URL apontando para a API.
 * Uso: node e2e/production.mjs [pasta-de-screenshots]
 */
import { execSync } from 'node:child_process';
import { createReadStream, existsSync, mkdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { extname, join, resolve } from 'node:path';

let pw;
try {
  pw = await import('playwright');
} catch {
  pw = createRequire(join(execSync('npm root -g').toString().trim(), 'noop.js'))('playwright');
}
const DIST = resolve(import.meta.dirname, '../dist');
const FIXTURES = resolve(import.meta.dirname, '../../../fixtures/demo-event/files');
const SHOTS = process.argv[2] ? resolve(process.argv[2]) : null;
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.ttf': 'font/ttf', '.ico': 'image/x-icon' };
const server = createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = join(DIST, url);
  if (!file.startsWith(DIST) || !existsSync(file) || statSync(file).isDirectory()) file = join(DIST, 'index.html');
  res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
}).listen(8099, '127.0.0.1');

let failures = 0;
const browser = await pw.chromium.launch();
const page = await browser.newPage({ viewport: { width: 400, height: 860 }, deviceScaleFactor: SHOTS ? 2 : 1, hasTouch: true });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
const shot = async (n) => SHOTS && page.screenshot({ path: join(SHOTS, `${n}.png`), fullPage: false });
const visible = (loc) => loc.filter({ visible: true }).first();
const text = (t, timeout = 15000) => visible(page.getByText(t, { exact: false })).waitFor({ timeout });
const btn = (name) => visible(page.getByRole('button', { name }));
const step = async (name, fn) => {
  try {
    await fn();
    console.log(`✓ ${name}`);
  } catch (e) {
    failures++;
    await shot(`falha-${failures}`).catch(() => {});
    console.log(`✗ ${name}\n   ${e.message.split('\n')[0]}`);
  }
};

// Verificação direta no banco (opcional): DATABASE_URL do ambiente local
const pgModule = await import('pg').catch(() => null);
const db = process.env.DATABASE_URL && pgModule ? new pgModule.default.Client({ connectionString: process.env.DATABASE_URL }) : null;
if (db) await db.connect();
const PROJ = `Festa Offline ${Date.now()}`;

await step('cria projeto e briefing SEM login (só no aparelho)', async () => {
  await page.goto('http://127.0.0.1:8099/');
  await text('Seus projetos estão só neste aparelho');
  await visible(page.getByRole('tab', { name: 'Criar' }).or(page.getByLabel('Criar', { exact: true }))).click();
  await visible(page.getByRole('radio', { name: /Evento/ })).click();
  await visible(page.getByLabel('Nome do evento')).fill(PROJ);
  await btn('Criar projeto').click();
  await text('Só no aparelho');
  await btn('Informar briefing').click();
  await visible(page.getByLabel('Objetivo')).fill('Testar a sincronização');
  await visible(page.getByLabel('Textos obrigatórios')).fill('SÁB 20.12');
  await btn('Salvar briefing').click();
  await text('Revisão 1 · 1 texto(s) obrigatório(s)');
});

await step('entra e o projeto local é enviado à nuvem (lista única)', async () => {
  await page.goto('http://127.0.0.1:8099/cloud');
  await text('LOGIN DE DESENVOLVIMENTO');
  await btn('Entrar (desenvolvimento)').click();
  await text('Criar evento fictício de demonstração');
  await visible(page.getByLabel('Ver meus projetos')).click();
  await text('Tudo sincronizado', 20000);
  await visible(page.getByLabel(`Abrir projeto ${PROJ}`)).waitFor();
  await visible(page.getByLabel('Sincronizado na nuvem')).waitFor();
  await shot('00-sincronizado');
  if (db) {
    const r = await db.query(`select p.id, (select count(*) from briefings b where b.project_id = p.id)::int as briefings from projects p where p.name = $1 and p.deleted_at is null`, [PROJ]);
    if (r.rows.length !== 1 || r.rows[0].briefings !== 1) throw new Error(`no banco: ${JSON.stringify(r.rows)}`);
  }
});

await step('projeto sincronizado abre a produção pelo próprio projeto', async () => {
  await visible(page.getByLabel(`Abrir projeto ${PROJ}`)).click();
  await text('Na nuvem');
  await btn('Abrir produção').click();
  await text('Nenhum documento ainda');
  await page.goBack();
});

await step('excluir no app exclui (logicamente) na nuvem', async () => {
  page.once('dialog', (d) => d.accept());
  await btn('Excluir projeto').click();
  await text('Tudo sincronizado', 20000);
  if (db) {
    const r = await db.query(`select deleted_at from projects where name = $1`, [PROJ]);
    if (!r.rows[0]?.deleted_at) throw new Error('projeto não foi marcado como excluído no servidor');
  }
  await visible(page.getByRole('tab', { name: 'Perfil' }).or(page.getByLabel('Perfil', { exact: true }))).click();
  await visible(page.getByLabel('Abrir Conta e nuvem')).click();
  await text('Criar evento fictício de demonstração');
});

await step('cria o evento fictício no servidor', async () => {
  await btn('Criar evento fictício de demonstração').click();
  await text('Noite Neon — Flyer principal');
  await text('Arquivos originais (7)');
  await shot('01-projeto-servidor');
});

await step('envia um arquivo original real (upload com hash)', async () => {
  await visible(page.getByRole('radio', { name: 'Logo' })).click();
  await visible(page.getByRole('checkbox', { name: /direito de uso/ })).click();
  const chooser = page.waitForEvent('filechooser');
  await btn('Enviar arquivo').click();
  await (await chooser).setFiles(join(FIXTURES, 'logo-patrocinador-ficticio.png'));
  await text('Arquivo original guardado sem alterações');
  await text('Arquivos originais (8)');
});

await step('abre o editor com pré-visualização do renderizador', async () => {
  await visible(page.getByLabel(/Editar Noite Neon/)).click();
  await text('Revisão 1');
  await page.waitForFunction(() => [...document.images].some((i) => i.src.startsWith('data:image/png') && i.naturalWidth > 0), null, { timeout: 20000 });
  await shot('02-editor');
});

await step('seleciona camada tocando no layout (título bloqueado)', async () => {
  const canvas = visible(page.getByLabel(/Área do layout/));
  const box = await canvas.boundingBox();
  // título fica em ~68% da altura, no centro
  await page.mouse.click(box.x + box.width / 2, box.y + box.height * 0.69);
  await text('Camada bloqueada');
});

await step('move a data com os controles e desfaz/refaz', async () => {
  await visible(page.getByRole('button', { name: 'Camada Data' })).click();
  await btn('Mover para cima').click();
  await text('alterações não salvas');
  await btn('Desfazer').click();
  await btn('Refazer').click();
});

await step('arrasta a linha decorativa na tela', async () => {
  await visible(page.getByRole('button', { name: 'Camada Linha neon' })).click();
  const canvas = visible(page.getByLabel(/Área do layout/));
  const box = await canvas.boundingBox();
  const y = box.y + box.height * (833 / 1350);
  await page.mouse.move(box.x + box.width / 2, y);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 30, y + 5, { steps: 8 });
  await page.mouse.up();
  await shot('03-editado');
});

await step('salva a revisão 2', async () => {
  await btn('Salvar revisão').click();
  await text('Revisão 2 salva');
});

await step('aprova e congela a identidade', async () => {
  await btn('Aprovar revisão 2').click();
  await text('Revisão 2 aprovada e identidade congelada', 30000);
  await text('Esta revisão está congelada');
});

await step('exporta Story, Feed e Sympla com verificações aprovadas', async () => {
  await btn('Gerar e exportar PNG').click();
  await text('Story · 1080×1920', 60000);
  await text('Feed · 1080×1440');
  await text('Sympla · 1600×838');
  const ok = await page.getByText('Verificações aprovadas · aguardando sua revisão').filter({ visible: true }).count();
  if (ok !== 3) throw new Error(`esperava 3 formatos aprovados nas verificações, obtive ${ok}`);
  await visible(page.getByText('Exportar formatos')).scrollIntoViewIfNeeded();
  await shot('04-exportado');
});

await step('restaura a v1 como nova revisão sem perder a aprovada', async () => {
  await visible(page.getByRole('button', { name: 'Restaurar' })).click();
  await text('v1 restaurada como nova revisão v3');
  await text('Aprovada');
});

await step('materiais aparecem no projeto', async () => {
  await page.goBack();
  await text('Materiais exportados (3)');
  await shot('05-materiais');
});

await step('sem erros de JavaScript', async () => {
  if (errors.length) throw new Error(errors.slice(0, 3).join(' | '));
});

await browser.close();
server.close();
await db?.end();
console.log(failures ? `\n${failures} falha(s)` : '\nTodos os passos passaram');
process.exit(failures ? 1 : 0);
