/**
 * Formulaire de devis sans backend.
 * S'applique à tout <form data-wa data-email data-owner> de la page :
 * compose le message, puis l'ouvre dans WhatsApp ou dans la messagerie.
 */
for (const form of document.querySelectorAll<HTMLFormElement>('form[data-wa]')) {
  const erreur = form.querySelector<HTMLElement>('[data-error]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const via = (event as SubmitEvent).submitter?.getAttribute('data-via') ?? 'whatsapp';

    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? '').trim();
    const nom = get('nom');
    const tel = get('tel');
    const type = get('type');
    const message = get('message');

    if (!nom || !tel) {
      if (erreur) {
        erreur.textContent = 'Merci d’indiquer votre nom et votre numéro de téléphone.';
        erreur.classList.remove('hidden');
      }
      const champ = form.elements.namedItem(nom ? 'tel' : 'nom');
      if (champ instanceof HTMLElement) champ.focus();
      return;
    }
    erreur?.classList.add('hidden');

    const texte = [
      `Bonjour ${form.dataset.owner},`,
      `Je suis ${nom}. Je souhaite un devis pour : ${type}.`,
      message ? `Détails : ${message}` : '',
      `Vous pouvez me rappeler au ${tel}.`,
    ]
      .filter(Boolean)
      .join('\n');

    if (via === 'email') {
      const subject = `Demande de devis – ${type}`;
      window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(texte)}`;
    } else {
      window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(texte)}`, '_blank', 'noopener');
    }
  });
}
