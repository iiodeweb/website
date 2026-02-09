import type { Locale } from "@/lib/locale"

export type PagesCopy = {
  preorder: {
    eyebrow: string
    title: string
    description: string
    fields: {
      name: string
      surname: string
      company: string
      address: string
      number: string
      postCode: string
      city: string
      quantity: string
      message: string
    }
    submit: string
  }
  info: {
    eyebrow: string
    title: string
    faqs: Array<{ question: string; answer: string }>
    contactTitle: string
    contactLine: string
  }
  support: {
    eyebrow: string
    title: string
    description: string
    cards: Array<{ title: string; body: string }>
  }
  updates: {
    eyebrow: string
    title: string
    empty: string
  }
  collaborations: {
    eyebrow: string
    title: string
    description: string
  }
}

const pagesCopy: Record<Locale, PagesCopy> = {
  en: {
    preorder: {
      eyebrow: "Preorder",
      title: "Start a preorder request",
      description:
        "We collect preorder interest manually. Send your request and we will follow up with availability and pricing.",
      fields: {
        name: "Name",
        surname: "Surname",
        company: "Company",
        address: "Address",
        number: "Number",
        postCode: "Post code",
        city: "City",
        quantity: "Quantity",
        message: "Message",
      },
      submit: "Send preorder request",
    },
    info: {
      eyebrow: "Information",
      title: "FAQs and contact",
      faqs: [
        {
          question: "What is iiode Re27?",
          answer: "Placeholder answer for now. We will add the final copy soon.",
        },
        {
          question: "Who is iiode for?",
          answer: "Placeholder answer for now. We will add the final copy soon.",
        },
      ],
      contactTitle: "Contact",
      contactLine: "Email us at",
    },
    support: {
      eyebrow: "Support",
      title: "Serviceable by design",
      description:
        "The Re27 is built to be maintained, repaired, and recycled. Detailed warranty and support guidelines will follow.",
      cards: [
        {
          title: "Warranty",
          body: "Long-life components and modular construction allow replacement instead of disposal.",
        },
        {
          title: "Repairs",
          body: "We can guide you through component swaps or coordinate a service visit when needed.",
        },
      ],
    },
    updates: {
      eyebrow: "Updates",
      title: "Latest updates",
      empty: "No updates yet.",
    },
    collaborations: {
      eyebrow: "Collaborations",
      title: "Collaborative exhibitions",
      description:
        "This page will grow with upcoming exhibition formats and collaborators.",
    },
  },
  fr: {
    preorder: {
      eyebrow: "Precommande",
      title: "Demarrer une demande de precommande",
      description:
        "Nous collectons les demandes de precommande manuellement. Envoyez votre demande et nous reviendrons avec disponibilite et prix.",
      fields: {
        name: "Prenom",
        surname: "Nom",
        company: "Societe",
        address: "Adresse",
        number: "Numero",
        postCode: "Code postal",
        city: "Ville",
        quantity: "Quantite",
        message: "Message",
      },
      submit: "Envoyer la demande",
    },
    info: {
      eyebrow: "Informations",
      title: "FAQ et contact",
      faqs: [
        {
          question: "Qu'est-ce que iiode Re27 ?",
          answer: "Reponse provisoire pour l'instant. Le texte final arrive bientot.",
        },
        {
          question: "Pour qui est iiode ?",
          answer: "Reponse provisoire pour l'instant. Le texte final arrive bientot.",
        },
      ],
      contactTitle: "Contact",
      contactLine: "Ecrivez-nous a",
    },
    support: {
      eyebrow: "Support",
      title: "Reparable par conception",
      description:
        "Le Re27 est concu pour etre maintenu, repare et recycle. Les informations de garantie et support suivront.",
      cards: [
        {
          title: "Garantie",
          body: "Les composants durables et la conception modulaire privilegient le remplacement.",
        },
        {
          title: "Reparations",
          body: "Nous pouvons guider les remplacements de pieces ou organiser une intervention.",
        },
      ],
    },
    updates: {
      eyebrow: "Actualites",
      title: "Dernieres actualites",
      empty: "Pas d'actualites pour le moment.",
    },
    collaborations: {
      eyebrow: "Collaborations",
      title: "Expositions collaboratives",
      description:
        "Cette page evoluera avec les prochaines expositions et collaborateurs.",
    },
  },
  de: {
    preorder: {
      eyebrow: "Vorbestellung",
      title: "Vorbestellung anfragen",
      description:
        "Wir sammeln Vorbestellungen manuell. Senden Sie Ihre Anfrage und wir melden uns mit Verfuegbarkeit und Preisen.",
      fields: {
        name: "Vorname",
        surname: "Nachname",
        company: "Firma",
        address: "Adresse",
        number: "Nummer",
        postCode: "PLZ",
        city: "Stadt",
        quantity: "Menge",
        message: "Nachricht",
      },
      submit: "Anfrage senden",
    },
    info: {
      eyebrow: "Information",
      title: "FAQ und Kontakt",
      faqs: [
        {
          question: "Was ist iiode Re27?",
          answer: "Platzhalterantwort vorerst. Der finale Text folgt bald.",
        },
        {
          question: "Fuer wen ist iiode?",
          answer: "Platzhalterantwort vorerst. Der finale Text folgt bald.",
        },
      ],
      contactTitle: "Kontakt",
      contactLine: "Schreiben Sie an",
    },
    support: {
      eyebrow: "Support",
      title: "Wartbar durch Design",
      description:
        "Re27 ist so gebaut, dass er gewartet, repariert und recycelt werden kann. Details zu Garantie und Support folgen.",
      cards: [
        {
          title: "Garantie",
          body: "Langlebige Komponenten und modulare Konstruktion ermoeglichen Ersatz statt Entsorgung.",
        },
        {
          title: "Reparaturen",
          body: "Wir begleiten Komponententausch oder koordinieren einen Servicebesuch.",
        },
      ],
    },
    updates: {
      eyebrow: "Updates",
      title: "Neueste Updates",
      empty: "Noch keine Updates.",
    },
    collaborations: {
      eyebrow: "Kooperationen",
      title: "Kollaborative Ausstellungen",
      description:
        "Diese Seite waechst mit kommenden Ausstellungen und Partnern.",
    },
  },
}

export function getPagesCopy(locale: Locale): PagesCopy {
  return pagesCopy[locale] ?? pagesCopy.en
}
