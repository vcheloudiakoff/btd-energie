/**
 * Préfixe un chemin interne avec la base du site.
 * Tant que le site est servi sous /david-bastard-elec (GitHub Pages sans
 * domaine), tous les liens internes doivent passer par ici.
 *   href('/')                 → /david-bastard-elec/
 *   href('/#contact')         → /david-bastard-elec/#contact
 *   href('/mentions-legales/')→ /david-bastard-elec/mentions-legales/
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path.startsWith('#')) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** URL absolue (pour canonical, Open Graph, JSON-LD). */
export function absolute(path: string, site: URL | undefined): string {
  return new URL(href(path), site).href;
}

/** Ne garde que les chiffres : '+33 6 12 34 56 78' → '33612345678' */
export function digits(phone: string): string {
  return phone.replace(/\D/g, '');
}

/** '+33612345678' → '06 12 34 56 78' (affichage français) */
export function formatPhone(e164: string): string {
  const d = digits(e164);
  const national = d.startsWith('33') ? `0${d.slice(2)}` : d;
  return national.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
}

/** Lien cliquable « appeler ». */
export function telHref(e164: string): string {
  return `tel:+${digits(e164)}`;
}

/**
 * Lien « click-to-chat » WhatsApp, gratuit et sans compte développeur.
 * Ouvre l'application (mobile) ou WhatsApp Web (ordinateur) avec un
 * message pré-rempli que le client n'a plus qu'à envoyer.
 */
export function whatsappHref(e164: string, text?: string): string {
  const base = `https://wa.me/${digits(e164)}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mailtoHref(email: string, subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const q = params.toString().replace(/\+/g, '%20');
  return `mailto:${email}${q ? `?${q}` : ''}`;
}
