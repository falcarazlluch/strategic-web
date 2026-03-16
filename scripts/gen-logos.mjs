/**
 * Generates logo files with fully vectorized text (no font dependencies).
 * Matches the nav exactly: font-bold (700) for both words, tracking-tight (-0.025em), no gap between words.
 * Run: node scripts/gen-logos.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import opentype from 'opentype.js';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

const __dir = dirname(fileURLToPath(import.meta.url));
const root  = resolve(__dir, '..');
const pub   = resolve(root, 'public');

// ── Load fonts ────────────────────────────────────────────────────────────────
const fontDir  = resolve(root, 'node_modules/@fontsource/inter/files');
const font400b = readFileSync(resolve(fontDir, 'inter-latin-400-normal.woff'));
const font700b = readFileSync(resolve(fontDir, 'inter-latin-700-normal.woff'));
const font400  = opentype.parse(font400b.buffer);
const font700  = opentype.parse(font700b.buffer);

// ── Helper: text → SVG path string ───────────────────────────────────────────
// tracking-tight = -0.025em letter spacing (matches Tailwind's tracking-tight)
const TRACKING = -0.025;

function textToSvgPath(font, text, x, y, size) {
  const path = font.getPath(text, x, y, size, { kerning: true, letterSpacing: TRACKING });
  return path.toPathData(3);
}

function textWidth(font, text, size) {
  const glyphs = font.stringToGlyphs(text);
  let width = 0;
  const scale = size / font.unitsPerEm;
  for (let i = 0; i < glyphs.length; i++) {
    const g = glyphs[i];
    width += g.advanceWidth * scale;
    if (i < glyphs.length - 1) {
      width += font.getKerningValue(g, glyphs[i + 1]) * scale;
      width += size * TRACKING; // letter-spacing per character
    }
  }
  return width;
}

// ── Layout — mirrors nav proportions ─────────────────────────────────────────
// Nav: diamond=28px, text=15px, gap=10px, tracking-tight, font-bold=700
// Scale factor so diamond fits at 44px (same shape as mark.svg)
// 44 / 28 ≈ 1.571 → text = 15 * 1.571 ≈ 23.6 → use 24px
// gap = 10 * 1.571 ≈ 15.7 → use 16px
const HEIGHT    = 52;
const TEXT_Y    = 36;   // baseline (vertically centered in 52px)
const FONT_MAIN = 24;   // "Strategic" and "Decision" — both font-bold (700)
const FONT_AI   = 15;   // ".ai" — text-xs scaled: 12 * 1.571 ≈ 18.9 → 15px (visually smaller)
const MARK_W    = 48;   // diamond bounding box width (incl. internal padding)
const GAP       = 16;   // gap between diamond and wordmark

// Words are directly adjacent — no SPACING (matches HTML: Strategic<span>Decision</span>)
const xWordmark  = MARK_W + GAP;
const wStrategic = textWidth(font700, 'Strategic', FONT_MAIN);
const xDecision  = xWordmark + wStrategic;           // zero gap
const wDecision  = textWidth(font700, 'Decision',  FONT_MAIN);
const xAi        = xDecision + wDecision + 1;
const wAi        = textWidth(font400, '.ai', FONT_AI);
const totalWidth = Math.ceil(xAi + wAi + 4);

console.log(`Layout: width=${totalWidth}px`);
console.log(`  Strategic: ${xWordmark.toFixed(1)} – ${(xWordmark+wStrategic).toFixed(1)}`);
console.log(`  Decision:  ${xDecision.toFixed(1)} – ${(xDecision+wDecision).toFixed(1)}`);
console.log(`  .ai:       ${xAi.toFixed(1)}`);

// ── Vectorized path data ──────────────────────────────────────────────────────
const pStrategic = textToSvgPath(font700, 'Strategic', xWordmark, TEXT_Y,     FONT_MAIN);
const pDecision  = textToSvgPath(font700, 'Decision',  xDecision, TEXT_Y,     FONT_MAIN);
const pAi        = textToSvgPath(font400, '.ai',       xAi,       TEXT_Y + 2, FONT_AI);

// ── Diamond mark SVG fragment ─────────────────────────────────────────────────
// Matches logo-mark.svg: diamond from corner-to-corner 44px, centered in 48×52 space
// Shape: M24 3 L45 24 L24 45 L3 24 Z (within translate(0,2) for vertical centering)
const diamond = `
  <defs>
    <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
  </defs>
  <g transform="translate(0, 2)">
    <path d="M24 3 L45 24 L24 45 L3 24 Z" fill="url(#mg)"/>
    <line x1="6"  y1="24" x2="42" y2="24" stroke="white" stroke-opacity="0.35" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="24" y1="6"  x2="24" y2="42" stroke="white" stroke-opacity="0.35" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="24" cy="6"  r="2" fill="white" fill-opacity="0.6"/>
    <circle cx="42" cy="24" r="2" fill="white" fill-opacity="0.6"/>
    <circle cx="24" cy="42" r="2" fill="white" fill-opacity="0.6"/>
    <circle cx="6"  cy="24" r="2" fill="white" fill-opacity="0.6"/>
  </g>`;

// ── Write SVGs ────────────────────────────────────────────────────────────────
const vb = `0 0 ${totalWidth} ${HEIGHT}`;

writeFileSync(resolve(pub, 'logo-full.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="none" role="img" aria-label="Strategic Decision">${diamond}
  <path d="${pStrategic}" fill="#0f172a"/>
  <path d="${pDecision}"  fill="#6366f1"/>
  <path d="${pAi}"        fill="#818cf8" fill-opacity="0.65"/>
</svg>`);

writeFileSync(resolve(pub, 'logo-full-dark.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="none" role="img" aria-label="Strategic Decision">${diamond}
  <path d="${pStrategic}" fill="#f1f5f9"/>
  <path d="${pDecision}"  fill="#818cf8"/>
  <path d="${pAi}"        fill="#818cf8" fill-opacity="0.6"/>
</svg>`);

console.log('✓ logo-full.svg');
console.log('✓ logo-full-dark.svg');

// ── PDF generation ────────────────────────────────────────────────────────────
const S     = 3;                   // scale factor (SVG px → PDF pt)
const PDF_W = totalWidth * S;
const PDF_H = HEIGHT     * S;

// SVG → PDF coordinate transform (PDF y-axis is bottom-up)
const px  = (svgX) => svgX * S;
const py  = (svgY) => PDF_H - svgY * S;
// Diamond has translate(0,2), so add 2 to y before flipping
const pyd = (svgY) => PDF_H - (svgY + 2) * S;

// Diamond path pre-computed in PDF coords
const diamondPath = `M${px(24)} ${pyd(3)} L${px(45)} ${pyd(24)} L${px(24)} ${pyd(45)} L${px(3)} ${pyd(24)} Z`;

async function buildFullPdf(darkBg) {
  const doc  = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const page = doc.addPage([PDF_W, PDF_H]);

  if (darkBg) {
    page.drawRectangle({ x: 0, y: 0, width: PDF_W, height: PDF_H, color: rgb(5/255, 9/255, 15/255) });
  }

  // Diamond (gradient approximated as indigo midpoint #6b70f4)
  page.drawSvgPath(diamondPath, {
    color: rgb(107/255, 112/255, 244/255),
    borderWidth: 0,
  });

  // Grid lines
  const lw = 1.4 * S / 3;
  page.drawLine({ start: { x: px(6),  y: pyd(24) }, end: { x: px(42), y: pyd(24) }, thickness: lw, color: rgb(1,1,1), opacity: 0.35 });
  page.drawLine({ start: { x: px(24), y: pyd(6)  }, end: { x: px(24), y: pyd(42) }, thickness: lw, color: rgb(1,1,1), opacity: 0.35 });

  // Corner dots
  const dotR = 2 * S * 0.75;
  for (const [cx, cy] of [[24,6],[42,24],[24,42],[6,24]]) {
    page.drawCircle({ x: px(cx), y: pyd(cy), size: dotR, color: rgb(1,1,1), opacity: 0.6 });
  }

  // Embed fonts
  const pf400 = await doc.embedFont(font400b, { subset: true });
  const pf700 = await doc.embedFont(font700b, { subset: true });

  const cStrategic = darkBg ? rgb(241/255, 245/255, 249/255) : rgb(15/255,  23/255,  42/255);
  const cDecision  = darkBg ? rgb(129/255, 140/255, 248/255) : rgb(99/255,  102/255, 241/255);
  const cAi        = rgb(129/255, 140/255, 248/255);

  const fsMain = FONT_MAIN * S;
  const fsAi   = FONT_AI   * S;
  const baseY  = PDF_H - TEXT_Y       * S;
  const aiY    = PDF_H - (TEXT_Y + 2) * S;

  page.drawText('Strategic', { x: px(xWordmark), y: baseY, size: fsMain, font: pf700, color: cStrategic, characterSpacing: FONT_MAIN * TRACKING * S });
  page.drawText('Decision',  { x: px(xDecision), y: baseY, size: fsMain, font: pf700, color: cDecision,  characterSpacing: FONT_MAIN * TRACKING * S });
  page.drawText('.ai',       { x: px(xAi),       y: aiY,   size: fsAi,   font: pf400, color: cAi, opacity: 0.65, characterSpacing: FONT_AI * TRACKING * S });

  return await doc.save();
}

// ── Logo mark PDF (diamond only) ─────────────────────────────────────────────
// logo-mark.svg viewBox="0 0 32 32": diamond M16 1 L31 16 L16 31 L1 16 Z
async function buildMarkPdf() {
  const S2   = 6;   // larger scale for standalone mark
  const MW   = 32 * S2;
  const MH   = 32 * S2;
  const doc  = await PDFDocument.create();
  const page = doc.addPage([MW, MH]);

  const mpx = (x) => x * S2;
  const mpy = (y) => MH - y * S2;

  // Dark background square
  page.drawRectangle({ x: 0, y: 0, width: MW, height: MH, color: rgb(13/255, 20/255, 36/255) });

  // Diamond
  const markPath = `M${mpx(16)} ${mpy(1)} L${mpx(31)} ${mpy(16)} L${mpx(16)} ${mpy(31)} L${mpx(1)} ${mpy(16)} Z`;
  page.drawSvgPath(markPath, { color: rgb(107/255, 112/255, 244/255), borderWidth: 0 });

  // Grid lines
  const lw2 = 1.2 * S2 / 4;
  page.drawLine({ start: { x: mpx(4),  y: mpy(16) }, end: { x: mpx(28), y: mpy(16) }, thickness: lw2, color: rgb(1,1,1), opacity: 0.35 });
  page.drawLine({ start: { x: mpx(16), y: mpy(4)  }, end: { x: mpx(16), y: mpy(28) }, thickness: lw2, color: rgb(1,1,1), opacity: 0.35 });

  // Corner dots
  const dotR2 = 1.5 * S2 * 0.75;
  for (const [cx, cy] of [[16,4],[28,16],[16,28],[4,16]]) {
    page.drawCircle({ x: mpx(cx), y: mpy(cy), size: dotR2, color: rgb(1,1,1), opacity: 0.6 });
  }

  return await doc.save();
}

const [pdfLight, pdfDark, pdfMark] = await Promise.all([
  buildFullPdf(false),
  buildFullPdf(true),
  buildMarkPdf(),
]);

writeFileSync(resolve(pub, 'logo-full.pdf'),      pdfLight);
writeFileSync(resolve(pub, 'logo-full-dark.pdf'), pdfDark);
writeFileSync(resolve(pub, 'logo-mark.pdf'),      pdfMark);
console.log('✓ logo-full.pdf');
console.log('✓ logo-full-dark.pdf');
console.log('✓ logo-mark.pdf');

console.log('\nDone — all files written to public/');
