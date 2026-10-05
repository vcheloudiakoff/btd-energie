// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────────────
// Hébergement actuel : GitHub Pages, sans nom de domaine.
//   → https://vcheloudiakoff.github.io/btd-energie/
//
// Le jour où un nom de domaine est acheté (ex. btd-energie.fr) :
//   1. site: 'https://btd-energie.fr'
//   2. base: '/'
//   3. créer le fichier public/CNAME contenant « btd-energie.fr »
//   4. GitHub → Settings → Pages → Custom domain, puis DNS chez le registrar
//      (voir README « Nom de domaine »).
// Les liens internes passent tous par href() dans src/lib/utils.ts,
// donc rien d'autre à changer.
// ─────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://vcheloudiakoff.github.io',
  base: '/btd-energie',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
