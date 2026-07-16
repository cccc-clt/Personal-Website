import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const cards = [
  { file: 'og-general.webp', eyebrow: 'AI PRODUCT PORTFOLIO', title: 'AI PRODUCT\nWITH EVIDENCE', accent: '#6475e9', mist: '#dcd8ff' },
  { file: 'og-game.webp', eyebrow: 'GAME AI · AIGC', title: 'GAME AI\nPRODUCT PRACTICE', accent: '#d98772', mist: '#f5d7dd' },
  { file: 'og-agent.webp', eyebrow: 'AGENT SYSTEM · LLM', title: 'AGENT\nPRODUCT PRACTICE', accent: '#6475e9', mist: '#d8e3ff' },
  { file: 'og-auto.webp', eyebrow: 'AUTOMOTIVE AI', title: 'SCENARIO AI\nWITH BOUNDARIES', accent: '#3897b8', mist: '#d8eff5' },
];

const outputDir = resolve('public/images/og');
await mkdir(outputDir, { recursive: true });

for (const card of cards) {
  const [lineOne, lineTwo] = card.title.split('\n');
  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f8fbff"/>
        <stop offset="0.56" stop-color="#edf5ff"/>
        <stop offset="1" stop-color="${card.mist}"/>
      </linearGradient>
      <radialGradient id="halo">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
        <stop offset="0.45" stop-color="${card.accent}" stop-opacity="0.24"/>
        <stop offset="1" stop-color="${card.accent}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#paper)"/>
    <circle cx="972" cy="206" r="285" fill="url(#halo)"/>
    <ellipse cx="945" cy="340" rx="292" ry="235" fill="none" stroke="${card.accent}" stroke-opacity="0.18" stroke-width="2" transform="rotate(-14 945 340)"/>
    <ellipse cx="945" cy="340" rx="218" ry="174" fill="none" stroke="${card.accent}" stroke-opacity="0.22" stroke-width="2" stroke-dasharray="7 12" transform="rotate(13 945 340)"/>
    <path d="M796 222c5-104 73-150 137-138 72 13 107 75 96 181l-18 148H803l-18-148c-4-16-1-29 11-43z" fill="#7f9ed9" fill-opacity="0.9"/>
    <path d="M837 184c20-54 103-67 140-8 20 33 13 102-6 131-18 27-43 43-70 42-29-1-55-19-72-49-17-31-14-83 8-116z" fill="#f7edf2"/>
    <path d="M823 203c13-77 127-104 171-23-56-31-97-16-139 21-10 9-21 9-32 2z" fill="#a9c8ee"/>
    <path d="M957 154c38 45 43 101 22 153 31-22 45-78 23-127-10-23-25-34-45-26z" fill="#7692d2"/>
    <circle cx="866" cy="247" r="5" fill="${card.accent}"/>
    <circle cx="936" cy="247" r="5" fill="${card.accent}"/>
    <path d="M889 289c9 7 18 7 27 0" fill="none" stroke="#b46f87" stroke-width="3" stroke-linecap="round"/>
    <path d="M771 507c10-105 61-158 130-158s120 53 130 158" fill="${card.accent}" fill-opacity="0.78"/>
    <path d="M812 390l54 47 35-71 35 71 54-47" fill="none" stroke="#ffffff" stroke-opacity="0.72" stroke-width="3"/>
    <path d="M901 367v129" fill="none" stroke="#ffffff" stroke-opacity="0.32" stroke-width="2"/>
    <rect x="64" y="54" width="1072" height="522" rx="34" fill="none" stroke="#334066" stroke-opacity="0.1"/>
    <text x="94" y="108" fill="${card.accent}" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="4">${card.eyebrow}</text>
    <text x="94" y="260" fill="#171b2b" font-family="Segoe UI, Arial, sans-serif" font-size="78" font-weight="700" letter-spacing="-3">${lineOne}</text>
    <text x="94" y="345" fill="#171b2b" font-family="Segoe UI, Arial, sans-serif" font-size="78" font-weight="700" letter-spacing="-3">${lineTwo}</text>
    <text x="96" y="430" fill="#4d5670" font-family="Segoe UI, Arial, sans-serif" font-size="25">Tianqi Zhao · AI Product Manager</text>
    <text x="96" y="518" fill="#4d5670" font-family="Consolas, monospace" font-size="16" letter-spacing="2">GAME AI / AGENT / EVALUATION / RAG</text>
  </svg>`;

  await sharp(Buffer.from(svg)).webp({ quality: 88, effort: 5 }).toFile(resolve(outputDir, card.file));
}
