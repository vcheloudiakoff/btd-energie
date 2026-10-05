/**
 * Génère public/og.png (aperçu 1200×630 pour les partages sur réseaux /
 * WhatsApp) et public/apple-touch-icon.png (180×180) à partir du nom et du
 * slogan définis dans src/data/site.ts.
 *
 *   npm run images
 */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { site } from '../src/data/site.ts';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const BOLT = 'M36 8 16 36h14l-2 20 20-28H34z';
const FONT = 'Manrope, Inter, Arial, Helvetica, sans-serif';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f766e"/>
      <stop offset="1" stop-color="#10b981"/>
    </linearGradient>
    <radialGradient id="halo" cx="85%" cy="15%" r="60%">
      <stop offset="0" stop-color="#ffffff" stop-opacity=".18"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#halo)"/>
  <g transform="translate(96 96)">
    <circle cx="56" cy="56" r="56" fill="#ffffff"/>
    <path d="${BOLT}" fill="#0f766e" transform="translate(56 56) scale(1.26) translate(-32 -32)"/>
  </g>
  <text x="96" y="340" font-family="${FONT}" font-size="68" font-weight="800" fill="#ffffff">${esc(site.name)}</text>
  <text x="96" y="400" font-family="${FONT}" font-size="32" fill="#ccfbf1">${esc(site.tagline)}</text>
  <text x="96" y="520" font-family="${FONT}" font-size="26" font-weight="700" fill="#fde68a">Devis gratuit · Intervention rapide · ${esc(site.address.city)} et alentours</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0f766e"/>
  <path d="${BOLT}" fill="#ffffff" transform="translate(32 32) scale(0.78) translate(-32 -32)"/>
</svg>`;

await writeFile('public/og.png', await sharp(Buffer.from(og)).png().toBuffer());
await writeFile('public/apple-touch-icon.png', await sharp(Buffer.from(icon)).png().toBuffer());
console.log('✔ public/og.png et public/apple-touch-icon.png générés');
