// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────────────
// Hébergement actuel : GitHub Pages, sans nom de domaine.
//   → https://vcheloudiakoff.github.io/david-bastard-elec/
//
// Le jour où un nom de domaine est acheté (ex. david-bastard-elec.fr) :
//   1. site: 'https://david-bastard-elec.fr'
//   2. base: '/'
//   3. créer le fichier public/CNAME contenant « david-bastard-elec.fr »
//   4. GitHub → Settings → Pages → Custom domain, puis DNS chez le registrar
//      (voir README « Nom de domaine »).
// Les liens internes passent tous par href() dans src/lib/utils.ts,
// donc rien d'autre à changer.
// ─────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://vcheloudiakoff.github.io',
  base: '/david-bastard-elec',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
