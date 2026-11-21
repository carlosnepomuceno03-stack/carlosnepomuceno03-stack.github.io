/**
 * Exporta o evento fictício: layout principal + adaptações Story, Feed, Sympla e Telão, com relatório de qualidade.
 * Uso: npx tsx scripts/export-demo.ts <pasta-de-saída>
 */
import { BUILT_IN_FORMATS } from '@studio-ai/shared';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { DEMO_ASPECT_RULES, buildDemoMaster, createIdentityContract, demoAssetSource, loadDemoAssetFiles, markApproved, produceAdaptation, renderDocument } from '../src';

async function main() {
const out = resolve(process.argv[2] ?? 'demo-export');
mkdirSync(out, { recursive: true });
const files = loadDemoAssetFiles();
const assets = demoAssetSource(files);
const now = new Date('2026-11-21T12:00:00Z');
const draft = buildDemoMaster(files);
const contract = createIdentityContract(draft, { id: 'demo-contract', approvedBy: 'demo-user', now, aspectRules: DEMO_ASPECT_RULES });
const master = markApproved(draft, 'demo-user', now, contract.id);

const m = await renderDocument(master, assets);
writeFileSync(join(out, 'master-1080x1350.png'), m.png);
const summary: unknown[] = [{ file: 'master-1080x1350.png', sha256: m.sha256, width: m.width, height: m.height }];
for (const format of BUILT_IN_FORMATS) {
  const r = await produceAdaptation(master, contract, format, assets, { id: `demo-${format.id}`, now });
  const name = `${format.id}-${format.width}x${format.height}.png`;
  if (r.render) writeFileSync(join(out, name), r.render.png);
  summary.push({ file: r.render ? name : null, status: r.status, sha256: r.render?.sha256, issues: r.adaptationIssues, quality: r.quality?.results, changes: r.changes });
}
writeFileSync(join(out, 'relatorio.json'), JSON.stringify({ rendererVersion: m.rendererVersion, contract, summary }, null, 2));
console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
