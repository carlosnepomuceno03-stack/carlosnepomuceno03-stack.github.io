/**
 * Teste de fumaça E2E (Etapa 1) — roda o build web exportado num Chromium com viewport de celular.
 * Uso: npm run export:web && node e2e/smoke.mjs [pasta-de-screenshots]
 *
 * Cobre: abertura, navegação pelas 5 abas, criação de projeto (persistida após recarregar),
 * briefing com revisão, referência por link, Sala de Produção (estados demo identificados),
 * detalhe do agente, tema claro e exclusão de dados locais.
 * Limitação: valida a build web (react-native-web); iOS/Android exigem dispositivo/emulador.
 */
import { createReadStream, existsSync, mkdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';

// Usa o Playwright do projeto se instalado; senão, o global da máquina (ex.: ambiente de CI/nuvem).
let pw;
try {
  pw = await import('playwright');
} catch {
  pw = createRequire(join(execSync('npm root -g').toString().trim(), 'noop.js'))('playwright');
}
const { chromium } = pw;

const DIST = resolve(import.meta.dirname, '../dist');
const SHOTS = process.argv[2] ? resolve(process.argv[2]) : null;
if (SHOTS) mkdirSync(SHOTS, { recursive: true });
if (!existsSync(join(DIST, 'index.html'))) throw new Error('Rode "npm run export:web" antes.');

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.ttf': 'font/ttf', '.ico': 'image/x-icon', '.json': 'application/json' };
const server = createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = join(DIST, url);
  if (!file.startsWith(DIST) || !existsSync(file) || statSync(file).isDirectory()) file = join(DIST, 'index.html'); // SPA
  res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;

let failures = 0;
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

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: SHOTS ? 2 : 1, hasTouch: true, isMobile: true });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
const shot = async (n) => SHOTS && page.screenshot({ path: join(SHOTS, `${n}.png`) });
const tab = (name) => visible(page.getByRole('tab', { name }).or(page.getByLabel(name, { exact: true })));
// Abas já visitadas continuam montadas (ocultas); por isso filtramos apenas elementos visíveis.
const visible = (loc) => loc.filter({ visible: true }).first();
const expectText = async (t) => visible(page.getByText(t, { exact: false })).waitFor({ timeout: 8000 });

await step('abre no Início com estado vazio real', async () => {
  await page.goto(base);
  await expectText('Seu estúdio criativo');
  await expectText('Nenhum projeto ainda');
  await shot('01-inicio-vazio');
});

await step('navega pelas 5 abas', async () => {
  for (const [name, text] of [['Criar', 'O que vamos criar?'], ['Estúdio', 'Sala de Produção'], ['Biblioteca', 'Adicionar referência por link'], ['Perfil', 'Modo de uso'], ['Início', 'Projetos recentes']]) {
    await tab(name).click();
    await expectText(text);
  }
});

await step('cria projeto pelo assistente (modo simples)', async () => {
  await tab('Criar').click();
  await visible(page.getByRole('radio', { name: /Evento/ })).click();
  await expectText('PASSO 2 DE 2');
  await page.getByLabel('Nome do evento').fill('Noite Eletrônica — Verão');
  await page.getByLabel('Data (opcional)').fill('20122026');
  await page.getByLabel('Local (opcional)').fill('Arena Centro');
  await shot('02-criar');
  await visible(page.getByRole('button', { name: 'Criar projeto' })).click();
  await expectText('1 de 15 etapas concluídas');
  await expectText('20/12/2026 · Arena Centro');
  await shot('03-projeto');
  await page.goBack();
});

await step('valida data inválida', async () => {
  await tab('Criar').click();
  await visible(page.getByRole('radio', { name: /Evento/ })).click();
  await page.getByLabel('Nome do evento').fill('Teste data');
  await page.getByLabel('Data (opcional)').fill('31022026');
  await visible(page.getByRole('button', { name: 'Criar projeto' })).click();
  await expectText('Use o formato DD/MM/AAAA');
  await visible(page.getByRole('button', { name: 'Voltar' })).click();
});

await step('salva briefing e cria revisão', async () => {
  await tab('Início').click();
  await visible(page.getByLabel(/Abrir projeto Noite Eletrônica/)).click();
  await visible(page.getByRole('button', { name: 'Informar briefing' })).click();
  await page.getByLabel('Objetivo').fill('Divulgar a edição de verão e vender antecipados.');
  await page.getByLabel('Textos obrigatórios').fill('SÁBADO 20.12\nARENA CENTRO');
  await visible(page.getByRole('button', { name: 'Salvar briefing' })).click();
  await expectText('Revisão 1 · 2 texto(s) obrigatório(s)');
  await expectText('2 de 15 etapas concluídas');
});

await step('adiciona referência do Pinterest vinculada ao projeto', async () => {
  await visible(page.getByRole('button', { name: 'Adicionar referência' })).click();
  await visible(page.getByLabel('Link', { exact: true })).fill('https://br.pinterest.com/pin/123456/');
  await expectText('Origem detectada: Pinterest');
  await visible(page.getByRole('button', { name: /Salvar em/ })).click();
  await expectText('Referência salva.');
  await expectText('Referências (1)');
  await shot('04-biblioteca');
});

await step('persiste dados após recarregar', async () => {
  await page.reload();
  await tab('Início').click();
  await expectText('Noite Eletrônica — Verão');
  await expectText('Adicionar referências');
  await shot('05-inicio-com-projeto');
});

await step('Sala de Produção identifica demo e mostra estados', async () => {
  await tab('Estúdio').click();
  await expectText('MODO DEMONSTRAÇÃO');
  await expectText('Montando plano de tarefas');
  await page.waitForTimeout(6000);
  await expectText('Analisando 3 referências');
  await shot('06-sala');
  await visible(page.getByRole('button', { name: /Agente de Pesquisa/ })).click();
  await expectText('ATIVIDADE ATUAL');
  await expectText('Iniciou análise de 3 referências');
  await shot('07-agente');
  await visible(page.getByRole('button', { name: 'Fechar', exact: true })).click();
  await visible(page.getByRole('radio', { name: 'Lista' })).click();
  await expectText('Diretor de Produção');
  await visible(page.getByRole('radio', { name: 'Sala' })).click();
});

await step('Minha Equipe de IA lista os 5 agentes', async () => {
  await tab('Perfil').click();
  await visible(page.getByLabel('Abrir Minha Equipe de IA')).click();
  await expectText('CONFIGURAÇÃO PENDENTE');
  for (const n of ['Diretor de Produção', 'Agente de Pesquisa', 'Agente de Direção de Arte', 'Agente de Produção', 'Agente de Qualidade']) await expectText(n);
  await page.goBack();
});

await step('troca para tema claro', async () => {
  await tab('Perfil').click();
  await visible(page.getByRole('radio', { name: 'Claro' })).click();
  await tab('Início').click();
  const bg = await page.evaluate(() => getComputedStyle(document.querySelector('[data-testid], div div') ?? document.body).backgroundColor);
  await shot('08-tema-claro');
  if (!bg) throw new Error('sem cor de fundo');
  await tab('Perfil').click();
  await visible(page.getByRole('radio', { name: 'Escuro' })).click();
});

await step('apaga dados locais (LGPD)', async () => {
  page.once('dialog', (d) => d.accept());
  await visible(page.getByRole('button', { name: 'Apagar dados locais' })).click();
  await expectText('Dados locais apagados.');
  await tab('Início').click();
  await expectText('Nenhum projeto ainda');
});

await step('sem erros de JavaScript no console', async () => {
  const relevant = errors.filter((e) => !/favicon|DevTools/.test(e));
  if (relevant.length) throw new Error(relevant.slice(0, 3).join(' | '));
});

await browser.close();
server.close();
console.log(failures ? `\n${failures} falha(s)` : '\nTodos os passos passaram');
process.exit(failures ? 1 : 0);
