import type { TextLayer } from '@studio-ai/shared';
import opentype, { type Font, type Glyph } from 'opentype.js';

/**
 * Tipografia determinística: o texto é convertido em curvas a partir do ARQUIVO de fonte do projeto.
 * Consequências: o PNG nunca usa fonte substituta, e um glifo ausente vira erro explícito.
 */
export type ParsedFont = { font: Font; sha256: string };

export function parseFont(bytes: Uint8Array): Font {
  const copy = bytes.slice().buffer;
  return opentype.parse(copy);
}

export type TextLine = { text: string; width: number; baseline: number };
export type TextLayout = {
  lines: TextLine[];
  /** Caixa da TINTA dos glifos (o que de fato aparece), em coordenadas do documento. */
  bounds: { x: number; y: number; width: number; height: number };
  /** Caracteres sem glifo na fonte (nunca renderizados com outra fonte). */
  missingGlyphs: string[];
  /** Linha ou palavra mais larga que a caixa da camada. */
  overflowX: boolean;
  /** Linhas ultrapassam a altura da caixa. */
  overflowY: boolean;
  pathData: string;
};

/**
 * Mapeamento caractere → glifo pela tabela cmap (sem shaping GSUB, que o opentype.js não suporta por completo).
 * Suficiente para escrita latina com caracteres pré-compostos (texto normalizado em NFC).
 */
export function glyphsFor(font: Font, text: string): Glyph[] {
  return Array.from(text.normalize('NFC')).map((ch) => font.charToGlyph(ch));
}

function kerning(font: Font, a: Glyph, b: Glyph): number {
  try {
    return font.getKerningValue(a, b);
  } catch {
    return 0;
  }
}

function measure(font: Font, glyphs: Glyph[], fontSize: number, letterSpacing: number): number {
  const scale = fontSize / font.unitsPerEm;
  let w = 0;
  glyphs.forEach((g, i) => {
    w += (g.advanceWidth ?? 0) * scale;
    const next = glyphs[i + 1];
    if (next) w += kerning(font, g, next) * scale + letterSpacing;
  });
  return w;
}

export function displayText(layer: Pick<TextLayer, 'text' | 'uppercase'>): string {
  return layer.uppercase ? layer.text.toLocaleUpperCase('pt-BR') : layer.text;
}

/** Quebra automática por palavras dentro da largura da camada; `\n` força nova linha. */
export function layoutText(layer: TextLayer, font: Font): TextLayout {
  const fontSize = layer.fontSize * layer.scale;
  const letterSpacing = layer.letterSpacing * layer.scale;
  const boxW = layer.width * layer.scale;
  const boxH = layer.height * layer.scale;
  const text = displayText(layer);
  const width = (s: string) => measure(font, glyphsFor(font, s), fontSize, letterSpacing);

  const missing = new Set<string>();
  for (const ch of text.replace(/\s/g, '')) {
    const [g] = glyphsFor(font, ch);
    if (!g || g.index === 0) missing.add(ch);
  }

  let overflowX = false;
  const rawLines: string[] = [];
  for (const paragraph of text.split('\n')) {
    const words = paragraph.split(/ +/);
    let current = '';
    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (width(candidate) <= boxW + 0.01 || !current) {
        current = candidate;
      } else {
        rawLines.push(current);
        current = word;
      }
      if (width(word) > boxW + 0.01) overflowX = true;
    }
    rawLines.push(current);
  }

  // Alinhamento pelo topo das maiúsculas (cap height): o topo da caixa coincide com o topo das letras,
  // independentemente das métricas verticais de cada fonte.
  const lineGap = fontSize * layer.lineHeight;
  const capHeight = ((font.tables.os2?.sCapHeight || font.ascender * 0.7) / font.unitsPerEm) * fontSize;
  const lines: TextLine[] = rawLines.map((t, i) => ({ text: t, width: width(t), baseline: layer.y + capHeight + i * lineGap }));

  const scale = fontSize / font.unitsPerEm;
  let pathData = '';
  let ink = { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity };
  for (const line of lines) {
    let x = layer.x;
    if (layer.align === 'center') x = layer.x + (boxW - line.width) / 2;
    else if (layer.align === 'right') x = layer.x + boxW - line.width;
    const glyphs = glyphsFor(font, line.text);
    glyphs.forEach((g, i) => {
      if (g.index !== 0) {
        const path = g.getPath(x, line.baseline, fontSize);
        pathData += path.toPathData(2);
        const bb = path.getBoundingBox();
        if (bb.x2 > bb.x1) ink = { x1: Math.min(ink.x1, bb.x1), y1: Math.min(ink.y1, bb.y1), x2: Math.max(ink.x2, bb.x2), y2: Math.max(ink.y2, bb.y2) };
      }
      x += (g.advanceWidth ?? 0) * scale;
      const next = glyphs[i + 1];
      if (next) x += kerning(font, g, next) * scale + letterSpacing;
    });
  }
  const hasInk = ink.x2 > ink.x1;
  const bounds = hasInk
    ? { x: ink.x1, y: ink.y1, width: ink.x2 - ink.x1, height: ink.y2 - ink.y1 }
    : { x: layer.x, y: layer.y, width: 0, height: 0 };
  // Acentos sobre maiúsculas podem subir até ~35% do corpo acima da caixa; descendentes não podem passar do fundo.
  const overflowY = hasInk && (ink.y2 > layer.y + boxH + 0.5 || ink.y1 < layer.y - fontSize * 0.35);

  return {
    lines,
    bounds,
    missingGlyphs: [...missing],
    overflowX,
    overflowY,
    pathData,
  };
}
