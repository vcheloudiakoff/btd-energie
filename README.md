# BTD Energie — site vitrine (électricien)

Site vitrine statique pour un électricien indépendant : présentation des services,
zone d'intervention, réalisations, avis, FAQ et **tous les moyens de contact**
(appel, WhatsApp, e-mail, formulaire de devis).

Hébergé gratuitement sur GitHub Pages, déployé automatiquement à chaque push sur `main`.

**URL actuelle :** https://vcheloudiakoff.github.io/btd-energie/

## Choix techniques (et pourquoi)

| Choix | Pourquoi |
|---|---|
| [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) | Site 100 % statique : rapide, zéro serveur, zéro base de données, zéro coût. Très bon référencement local. |
| GitHub Pages + GitHub Actions | Hébergement gratuit, HTTPS automatique, déploiement à chaque push. Domaine personnalisé possible. |
| WhatsApp « click-to-chat » (`wa.me`) | Gratuit, sans compte développeur, sans API. Le client ouvre WhatsApp avec un message pré-rempli (par service) et peut joindre des photos. Bouton flottant sur toutes les pages. |
| Formulaire sans backend | Le formulaire **compose** le message puis l'envoie via WhatsApp ou la messagerie du visiteur. Rien n'est stocké : pas de RGPD lourd, pas de spam, pas de service tiers à payer. |
| Aucun cookie, aucun tracker, police auto-hébergée | Pas de bandeau cookies à afficher, conformité RGPD simple, chargement rapide. |
| Données structurées `schema.org/Electrician` | Google comprend qu'il s'agit d'un artisan local (téléphone, horaires, zone). |

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321/btd-energie/
npm run build      # génère dist/
npm run preview    # prévisualise dist/
npm run check      # vérification TypeScript / Astro
npm run images     # régénère public/og.png et apple-touch-icon.png (après changement de nom)
```

## Personnaliser le site

**Un seul fichier à modifier : [`src/data/site.ts`](src/data/site.ts).**
Il contient le nom, le téléphone, le WhatsApp, l'e-mail, la ville, le rayon
d'intervention, les horaires, les mentions légales, les services, les atouts,
les réalisations, les avis et la FAQ.

Une fois les vraies informations renseignées, passer `enConstruction` à `false`
pour retirer le bandeau « site en cours de création » et l'étiquette « exemples d'avis ».

Pour les photos de chantiers : déposer les images dans `public/realisations/`
(≈ 1200 px de large, JPG optimisé) et renseigner `image: '/realisations/nom.jpg'`
dans le tableau `realisations`.

### Structure

```
src/
├── data/site.ts          ← toutes les infos de l'entreprise
├── lib/utils.ts          ← liens tel:, wa.me, mailto:, préfixe d'URL
├── layouts/Base.astro    ← <head> SEO, en-tête, pied de page, bouton WhatsApp
├── components/           ← une section = un composant (Hero, Services, Contact…)
├── pages/
│   ├── index.astro       ← page d'accueil (toutes les sections)
│   ├── mentions-legales.astro
│   ├── confidentialite.astro
│   ├── 404.astro
│   └── robots.txt.ts     ← robots.txt généré avec l'URL du sitemap
└── styles/global.css     ← couleurs (jaune « électricité » + bleu nuit), classes btn/card…
scripts/generate-images.mjs ← image de partage (Open Graph) et icône iOS
.github/workflows/deploy.yml ← déploiement GitHub Pages
```

## Variantes de design (phase de choix)

Trois propositions alternatives, avec le même contenu, sont publiées en brouillon
(hors sitemap, `noindex`) pour choisir une direction :

| Page | Style |
|---|---|
| `/variantes/` | Page de comparaison |
| `/variantes/a/` | « Chantier » : noir & jaune, capitales condensées, barre Appeler / WhatsApp fixe sur mobile |
| `/variantes/b/` | « Lumière » : clair, vert-bleu, arrondis, orienté confiance |
| `/variantes/c/` | « Haute tension » : sombre premium, accents cyan, grille bento |

Une fois le choix fait : copier la variante retenue vers `src/pages/index.astro`
(ou garder l'original), puis supprimer `src/pages/variantes/`, `src/layouts/Shell.astro`,
`src/components/VariantSwitcher.astro` et les polices inutilisées dans `package.json`.

## Déploiement

1. **Une seule fois** : sur GitHub, *Settings → Pages → Build and deployment → Source : GitHub Actions*.
   Sans ce réglage, l'étape « Déployer » échoue avec « Not Found » : le jeton du workflow
   n'a pas le droit d'activer Pages lui-même. Le dépôt doit aussi être public (plan gratuit).
2. Ensuite, chaque `git push` sur `main` reconstruit et publie le site (≈ 1 min).

### Nom de domaine (recommandé, ≈ 10 €/an)

Quand David aura un domaine (ex. `btd-energie.fr` chez OVH, Gandi, Ionos…) :

1. `astro.config.mjs` : `site: 'https://btd-energie.fr'` et `base: '/'`.
2. Créer `public/CNAME` contenant `btd-energie.fr`.
3. Chez le registrar, ajouter les enregistrements DNS :
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME www` → `vcheloudiakoff.github.io`
4. GitHub → *Settings → Pages → Custom domain*, cocher *Enforce HTTPS*.

Le domaine permet aussi une adresse e-mail pro (`contact@btd-energie.fr`),
souvent incluse chez le registrar.

## Check-list pour David (infos à fournir)

- [ ] Nom commercial exact et forme juridique (micro-entreprise, EI, SASU…)
- [ ] SIRET, régime de TVA
- [ ] Numéro de téléphone (et numéro WhatsApp si différent)
- [ ] Adresse e-mail professionnelle
- [ ] Ville, code postal, rayon d'intervention, liste des communes desservies
- [ ] Horaires, dépannage d'urgence oui/non
- [ ] Assureur décennale : nom, adresse, zone de couverture (**obligatoire** sur le site)
- [ ] Qualifications éventuelles (Qualifelec, IRVE, RGE…)
- [ ] 6 à 10 photos de chantiers (avant/après si possible)
- [ ] Liste définitive des services (retirer ceux qu'il ne propose pas, ex. IRVE sans habilitation)
- [ ] Vrais avis clients (ou lien vers la fiche Google)
- [ ] Logo si existant (sinon le pictogramme éclair fait l'affaire)

## À faire côté David, hors site (gratuit et plus important que le site lui-même)

1. **Fiche Google Business Profile** (https://business.google.com) : c'est elle qui fait
   apparaître l'entreprise sur Google Maps et dans « électricien près de moi ».
   Renseigner le téléphone, les horaires, la zone, des photos, et demander un avis à
   chaque client satisfait. Mettre l'URL du site dans la fiche, et le lien de la fiche
   dans `site.social.google`.
2. **WhatsApp Business** (application gratuite, même numéro) : profil entreprise
   (adresse, horaires, site), message d'accueil automatique, message d'absence,
   réponses rapides (« Mon tarif de déplacement est… »), étiquettes (devis envoyé,
   chantier planifié…). Le site crée des liens `wa.me` qui ouvrent directement
   la conversation avec un message pré-rempli.
3. **Pages Jaunes / annuaires locaux** : fiche gratuite, cohérente avec le site
   (même nom, même téléphone, même adresse).
4. Plus tard, si l'activité grandit : page « Recrutement » (le site est prêt à
   accueillir de nouvelles pages dans `src/pages/`), outil de devis/facturation
   (ex. Henrri, Tiime, Indy), Google Analytics ou Plausible si besoin de statistiques
   (ajouter alors un bandeau cookies pour Analytics).
