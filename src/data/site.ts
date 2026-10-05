/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  TOUTES LES INFORMATIONS DE L'ENTREPRISE SONT DANS CE FICHIER.    ║
 * ║  C'est le seul fichier à modifier pour personnaliser le site.     ║
 * ║  Les valeurs entre [crochets] ou marquées « À COMPLÉTER » sont    ║
 * ║  des exemples à remplacer.                                        ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

export const site = {
  /**
   * Tant que c'est `true` : bandeau « site en construction » en haut de page
   * et avis clients signalés comme exemples. Passer à `false` une fois les
   * vraies informations renseignées.
   */
  enConstruction: true,

  name: 'BTD Energie',
  shortName: 'BTD Energie',
  owner: 'David Bastard',
  tagline: 'Électricien indépendant, dépannage et installation',
  description:
    "Électricien indépendant à [Ville] : dépannage, installation, rénovation, mise aux normes, " +
    'éclairage, borne de recharge. Devis gratuit, intervention rapide, travail soigné.',

  // ── Coordonnées ─────────────────────────────────────────────────────
  // Format international (+33…) : sert aux liens « appeler » et WhatsApp.
  phone: '+33600000000', // À COMPLÉTER
  whatsapp: '+33600000000', // À COMPLÉTER (souvent le même numéro)
  email: 'contact@exemple.fr', // À COMPLÉTER

  /** Photo de David (portrait ou chantier) affichée dans l'en-tête de page.
   *  Déposer le fichier dans public/photos/ puis indiquer ex. '/photos/david.jpg'. Vide = visuel neutre. */
  photo: '',

  address: {
    street: '', // Laisser vide pour ne pas afficher l'adresse (artisan sans local)
    postalCode: '00000', // À COMPLÉTER
    city: '[Ville]', // À COMPLÉTER
    department: '', // ex. 'Gironde' (facultatif)
  },

  /** Rayon d'intervention (km) autour de la ville. */
  radiusKm: 30,
  /** Communes desservies, affichées dans la section « Zone d'intervention ». */
  zones: [] as string[], // ex. ['Mérignac', 'Pessac', 'Talence']

  hours: [
    { label: 'Lundi – Vendredi', opens: '08:00', closes: '19:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { label: 'Samedi', opens: '09:00', closes: '13:00', days: ['Saturday'] },
  ],
  /** Affiche le bandeau « Dépannage d'urgence » avec le numéro. */
  urgence: true,

  // ── Mentions légales ────────────────────────────────────────────────
  legal: {
    form: 'Entreprise individuelle', // À COMPLÉTER : micro-entreprise, EI, EURL, SASU…
    siret: '000 000 000 00000', // À COMPLÉTER
    rcs: '', // Si société : « RCS Ville 000 000 000 ». Sinon « Répertoire des métiers de … »
    tva: 'TVA non applicable, art. 293 B du CGI', // Ou le n° FR… si assujetti
    /** Obligatoire pour les artisans du bâtiment (art. 22-2, loi n° 96-603). */
    insurance: {
      company: "[Nom de l'assureur]", // À COMPLÉTER
      contact: "[Adresse de l'assureur]", // À COMPLÉTER
      coverage: 'France métropolitaine',
    },
    certifications: [] as string[], // ex. ['Qualifelec', 'IRVE', 'RGE']
  },

  // ── Réseaux / avis ──────────────────────────────────────────────────
  social: {
    google: '', // Lien de la fiche Google Business Profile (page des avis)
    facebook: '',
    instagram: '',
  },

  host: {
    name: 'GitHub, Inc.',
    address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
    url: 'https://pages.github.com/',
  },
};

// ── Services ──────────────────────────────────────────────────────────
// `icon` : nom d'icône Lucide (https://lucide.dev/icons) parmi ceux
// déclarés dans src/components/Services.astro.
export const services = [
  {
    icon: 'Zap',
    title: 'Dépannage électrique',
    description:
      'Panne, disjoncteur qui saute, court-circuit, prise ou interrupteur hors service : je trouve la cause et je répare.',
    devis: 'un dépannage électrique',
  },
  {
    icon: 'House',
    title: 'Installation & rénovation',
    description:
      'Électricité complète en neuf ou en rénovation : câblage, prises, circuits, extension, aménagement de combles ou de garage.',
    devis: 'une installation ou rénovation électrique',
  },
  {
    icon: 'ShieldCheck',
    title: 'Mise aux normes & tableau',
    description:
      'Remplacement du tableau électrique, mise à la terre, différentiels, mise en conformité NF C 15-100 avant vente ou location.',
    devis: 'une mise aux normes / un tableau électrique',
  },
  {
    icon: 'Lightbulb',
    title: 'Éclairage',
    description:
      'Éclairage intérieur et extérieur, passage en LED, spots encastrés, variateurs, détecteurs de présence.',
    devis: "de l'éclairage",
  },
  {
    icon: 'PlugZap',
    title: 'Borne de recharge (IRVE)',
    description:
      'Installation de borne ou wallbox pour véhicule électrique à domicile, dimensionnement et protections adaptées.',
    devis: 'une borne de recharge véhicule électrique',
  },
  {
    icon: 'Smartphone',
    title: 'Domotique & connecté',
    description:
      'Volets roulants, thermostat connecté, éclairage pilotable, portail et motorisation : une maison plus pratique.',
    devis: 'de la domotique',
  },
  {
    icon: 'Thermometer',
    title: 'Chauffage électrique & VMC',
    description:
      'Radiateurs, sèche-serviettes, chauffe-eau, ventilation : pose, remplacement et raccordement.',
    devis: 'du chauffage électrique / une VMC',
  },
  {
    icon: 'Network',
    title: 'Interphone, visiophone & réseau',
    description:
      'Interphone, visiophone, prises RJ45, câblage réseau et TV : des installations fiables et discrètes.',
    devis: 'un interphone / visiophone / réseau',
  },
];

// ── Atouts ────────────────────────────────────────────────────────────
export const atouts = [
  { title: 'Un seul interlocuteur', text: 'Je réalise moi-même chaque chantier, du devis à la réception des travaux.' },
  { title: 'Devis gratuit et détaillé', text: 'Un prix clair et annoncé avant toute intervention, sans surprise.' },
  { title: 'Réactivité', text: 'Réponse rapide par téléphone ou WhatsApp, intervention sous 24 à 48 h selon urgence.' },
  { title: 'Normes respectées', text: 'Installations conformes à la norme NF C 15-100, pour votre sécurité et vos assurances.' },
  { title: 'Chantier propre', text: 'Finitions soignées, protection des sols et nettoyage en fin d’intervention.' },
  { title: 'Assurance décennale', text: 'Travaux couverts par une assurance responsabilité civile et décennale.' },
];

// ── Étapes ────────────────────────────────────────────────────────────
export const etapes = [
  { title: 'Vous me contactez', text: 'Par téléphone, WhatsApp ou via le formulaire. Décrivez votre besoin, envoyez une photo si vous le pouvez.' },
  { title: 'Devis gratuit', text: 'Je me déplace si nécessaire et je vous remets un devis clair, détaillé et sans engagement.' },
  { title: 'Intervention', text: 'Travaux réalisés à la date convenue, dans le respect des normes, avec nettoyage du chantier.' },
];

// ── Réalisations ──────────────────────────────────────────────────────
// Ajouter les photos dans public/realisations/ puis renseigner `image`
// (ex. '/realisations/tableau.jpg'). Sans image, un visuel neutre s'affiche.
export const realisations: { title: string; text: string; image?: string }[] = [
  { title: 'Remplacement de tableau électrique', text: 'Tableau 3 rangées, différentiels 30 mA, repérage des circuits.' },
  { title: 'Rénovation complète d’un appartement', text: 'Reprise totale du câblage, 60 points lumineux et prises.' },
  { title: 'Borne de recharge 7 kW', text: 'Wallbox dans un garage, ligne dédiée et protection différentielle type A.' },
  { title: 'Éclairage LED d’une cuisine', text: 'Spots encastrés, ruban LED sous meubles, variateur.' },
  { title: 'Mise aux normes avant vente', text: 'Mise à la terre, liaison équipotentielle, remplacement des prises anciennes.' },
  { title: 'Éclairage extérieur et détecteurs', text: 'Appliques, bornes de jardin et détecteurs de présence.' },
];

// ── Avis clients ──────────────────────────────────────────────────────
// ⚠️ Exemples fictifs tant que site.enConstruction = true.
// Remplacer par de vrais avis (copiés depuis la fiche Google) avant la
// mise en ligne officielle.
export const avis = [
  { author: 'Marie L.', text: 'Intervention rapide un samedi pour une panne de tableau. Travail propre, explications claires et prix annoncé respecté.', rating: 5 },
  { author: 'Thomas R.', text: 'Rénovation complète de l’électricité de notre maison. Chantier soigné, délais tenus, très bon contact. Je recommande.', rating: 5 },
  { author: 'Nadia B.', text: 'Pose d’une borne de recharge pour ma voiture. Bons conseils sur la puissance et l’abonnement, pose impeccable.', rating: 5 },
];

// ── FAQ ───────────────────────────────────────────────────────────────
export const faq = [
  {
    q: 'Intervenez-vous en urgence ?',
    a: 'Oui. En cas de panne totale, d’odeur de brûlé ou de disjoncteur qui ne se réenclenche plus, appelez-moi directement : j’interviens au plus vite selon ma disponibilité. Pour une urgence vitale (incendie, personne électrisée), composez d’abord le 18 ou le 112.',
  },
  {
    q: 'Le devis est-il vraiment gratuit ?',
    a: 'Oui, le devis est gratuit et sans engagement. Pour un dépannage, je vous indique le tarif du déplacement et du diagnostic avant de venir.',
  },
  {
    q: 'Quels sont vos délais ?',
    a: 'Un dépannage est généralement traité sous 24 à 48 h. Pour des travaux plus importants, la date est fixée ensemble lors du devis.',
  },
  {
    q: 'Travaillez-vous avec les particuliers et les professionnels ?',
    a: 'Les deux : maisons, appartements, copropriétés, commerces, bureaux et petits locaux professionnels.',
  },
  {
    q: 'Mon installation est ancienne : dois-je la mettre aux normes ?',
    a: 'Une installation de plus de 15 ans mérite un contrôle. La mise aux normes est obligatoire pour certains points de sécurité (différentiel 30 mA, terre, salle de bains) et fortement conseillée en cas de vente, de location ou de rénovation.',
  },
  {
    q: 'Quelles garanties sur les travaux ?',
    a: 'Les travaux sont couverts par ma responsabilité civile professionnelle et la garantie décennale, et le matériel installé par la garantie fabricant.',
  },
];
