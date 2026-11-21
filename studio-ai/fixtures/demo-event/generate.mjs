/**
 * Gera os arquivos do EVENTO FICTÍCIO de demonstração "Noite Neon".
 * Tudo é sintético (formas geométricas e ruído) — não há pessoas, marcas ou fotos reais.
 * Fontes: Anton e Inter, licença SIL Open Font License 1.1 (copiadas dos pacotes @expo-google-fonts).
 * Uso: node fixtures/demo-event/generate.mjs   (determinístico: mesmas entradas, mesmos bytes)
 */
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const require = createRequire(import.meta.url);
const OUT = join(import.meta.dirname, 'files');
mkdirSync(OUT, { recursive: true });

// Gerador pseudoaleatório com semente fixa (determinismo)
let seed = 20261220;
const rnd = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);

// 1) "Fotografia" do artista fictício: silhueta estilizada com luz de palco (1600×2000)
const stars = Array.from({ length: 120 }, () => `<circle cx="${(rnd() * 1600).toFixed(0)}" cy="${(rnd() * 1100).toFixed(0)}" r="${(rnd() * 3 + 1).toFixed(1)}" fill="#fff" opacity="${(rnd() * 0.5 + 0.2).toFixed(2)}"/>`).join('');
const photo = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="2000">
<defs>
 <radialGradient id="spot" cx="50%" cy="30%" r="65%"><stop offset="0" stop-color="#ff3fa4"/><stop offset="0.45" stop-color="#5b2bd6"/><stop offset="1" stop-color="#0a0718"/></radialGradient>
 <linearGradient id="rim" x1="0" x2="1"><stop offset="0" stop-color="#36e0ff"/><stop offset="1" stop-color="#ff3fa4"/></linearGradient>
 <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity="0.35"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
</defs>
<rect width="1600" height="2000" fill="url(#spot)"/>${stars}
<polygon points="800,0 380,2000 640,2000" fill="url(#beam)"/><polygon points="800,0 960,2000 1220,2000" fill="url(#beam)"/>
<g>
 <path d="M300 2000 C300 1500 520 1330 800 1330 C1080 1330 1300 1500 1300 2000 Z" fill="#120a24"/>
 <rect x="720" y="1180" width="160" height="200" rx="60" fill="#120a24"/>
 <ellipse cx="800" cy="1000" rx="230" ry="280" fill="#120a24"/>
 <path d="M560 940 C560 640 1040 640 1040 940 C980 780 620 780 560 940 Z" fill="#1c1236"/>
 <path d="M570 1000 C580 1180 680 1270 800 1280" stroke="url(#rim)" stroke-width="14" fill="none" opacity="0.9"/>
 <path d="M1030 1000 C1020 1180 920 1270 800 1280" stroke="url(#rim)" stroke-width="14" fill="none" opacity="0.9"/>
 <rect x="600" y="930" width="400" height="70" rx="35" fill="#0a0718"/>
 <rect x="600" y="930" width="400" height="70" rx="35" fill="none" stroke="#36e0ff" stroke-width="6"/>
</g></svg>`;
await sharp(Buffer.from(photo)).jpeg({ quality: 88, mozjpeg: false }).toFile(join(OUT, 'artista-ficticio.jpg'));

// 2) Logo do evento (PNG transparente 1200×480): monograma geométrico, sem texto de sistema
const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="480">
<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#36e0ff"/><stop offset="1" stop-color="#ff3fa4"/></linearGradient></defs>
<g fill="none" stroke="url(#g)" stroke-width="44" stroke-linejoin="round" stroke-linecap="round">
 <path d="M80 400 L80 80 L300 400 L300 80"/><path d="M400 400 L400 80 L620 400 L620 80"/>
</g>
<circle cx="820" cy="240" r="150" fill="none" stroke="#ffffff" stroke-width="26"/>
<circle cx="820" cy="240" r="70" fill="#ff3fa4"/>
<rect x="1010" y="80" width="40" height="320" rx="20" fill="#ffffff"/><rect x="1090" y="160" width="40" height="240" rx="20" fill="#36e0ff"/>
</svg>`;
await sharp(Buffer.from(logo)).png({ compressionLevel: 9 }).toFile(join(OUT, 'logo-noite-neon.png'));

// 3) Logo de patrocinador fictício (PNG transparente 600×200)
const sponsor = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="200">
<rect x="10" y="40" width="120" height="120" rx="28" fill="#ffffff"/><path d="M40 130 L70 70 L100 130 Z" fill="#0b0b10"/>
<rect x="160" y="60" width="400" height="26" rx="13" fill="#ffffff"/><rect x="160" y="112" width="260" height="26" rx="13" fill="#ffffff" opacity="0.7"/>
</svg>`;
await sharp(Buffer.from(sponsor)).png({ compressionLevel: 9 }).toFile(join(OUT, 'logo-patrocinador-ficticio.png'));

// 4) Textura de fundo (1200×1200): ruído granulado escuro
const W = 1200, H = 1200;
const raw = Buffer.alloc(W * H * 3);
for (let i = 0; i < W * H; i++) {
  const v = 10 + Math.floor(rnd() * 18);
  raw[i * 3] = v; raw[i * 3 + 1] = v - 3 < 0 ? 0 : v - 3; raw[i * 3 + 2] = v + 12;
}
await sharp(raw, { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 80 }).toFile(join(OUT, 'textura-fundo.jpg'));

// 5) Fontes licenciadas (OFL)
const fontPkg = (p) => dirname(require.resolve(`${p}/package.json`));
copyFileSync(join(fontPkg('@expo-google-fonts/anton'), '400Regular/Anton_400Regular.ttf'), join(OUT, 'Anton-Regular.ttf'));
copyFileSync(join(fontPkg('@expo-google-fonts/inter'), '400Regular/Inter_400Regular.ttf'), join(OUT, 'Inter-Regular.ttf'));
copyFileSync(join(fontPkg('@expo-google-fonts/inter'), '700Bold/Inter_700Bold.ttf'), join(OUT, 'Inter-Bold.ttf'));
copyFileSync(join(fontPkg('@expo-google-fonts/inter'), 'LICENSE_FONT'), join(OUT, 'LICENCA-FONTES-OFL.txt'));

writeFileSync(join(import.meta.dirname, 'evento.json'), JSON.stringify({
  aviso: 'EVENTO FICTÍCIO para demonstração e testes. Nenhum artista, local ou marca real.',
  nome: 'Noite Neon',
  edicao: 'Festival Fictício · Edição 01',
  data: '2026-12-20',
  horario: '22h',
  local: 'Arena Demo — São Paulo',
  chamada: 'Ingressos na Sympla',
}, null, 2) + '\n');
console.log('Arquivos gerados em', OUT);
