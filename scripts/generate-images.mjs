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
const bolt = (x, y, s) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><rect width="64" height="64" rx="14" fill="#f5b400"/><path d="M36 8 16 36h14l-2 20 20-28H34z" fill="#0b1b36"/></g>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="90%" cy="0%" r="80%">
      <stop offset="0" stop-color="#f5b400" stop-opacity=".35"/>
      <stop offset="1" stop-color="#0b1b36" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0v44" fill="none" stroke="#ffffff" stroke-opacity=".05"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#0b1b36"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  ${bolt(96, 96, 1.75)}
  <text x="96" y="330" font-family="Inter, Arial, Helvetica, sans-serif" font-size="68" font-weight="800" fill="#ffffff">${esc(site.name)}</text>
  <text x="96" y="395" font-family="Inter, Arial, Helvetica, sans-serif" font-size="32" fill="#cbd5e1">${esc(site.tagline)}</text>
  <text x="96" y="520" font-family="Inter, Arial, Helvetica, sans-serif" font-size="26" font-weight="600" fill="#ffc21f">Devis gratuit · Intervention rapide · ${esc(site.address.city)} et alentours</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#f5b400"/>
  <path d="M36 8 16 36h14l-2 20 20-28H34z" fill="#0b1b36"/>
</svg>`;

await writeFile('public/og.png', await sharp(Buffer.from(og)).png().toBuffer());
await writeFile('public/apple-touch-icon.png', await sharp(Buffer.from(icon)).png().toBuffer());
console.log('✔ public/og.png et public/apple-touch-icon.png générés');
