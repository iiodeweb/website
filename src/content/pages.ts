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
  about: {
    eyebrow: string
    title: string
    faqs: Array<{ question: string; answer: string }>
    contactTitle: string
    contactLine: string
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
    about: {
      eyebrow: "About",
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
    about: {
      eyebrow: "A propos",
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
    about: {
      eyebrow: "Ueber uns",
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
