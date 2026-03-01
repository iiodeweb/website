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
    sections: string[]
    servicesLabel: string
    contactTitle: string
    contactIntro: string
    addresses: string[]
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
      title: "Beyond the bulb",
      sections: [
        "iiode is committed to charting the future of sustainable electronics through the development of lasting and responsible solutions, with a focus on conscious lighting.",
        "We specialise in the development of lighting fixtures, installations, series extensions, and design-to-assembly solutions.",
        "We also create spaces for events and interiors, crafting sensory narratives that offer immersive experiences.",
      ],
      servicesLabel: "For design and production see",
      contactTitle: "Get in touch",
      contactIntro: "iiode has offices in both Lausanne & Paris",
      addresses: [
        "Av. des Alpes 9, CH - 1006 Lausanne",
        "Rue d'Hauteville 25, FR - 75010 Paris",
      ],
      contactLine: "To contact us, kindly send us a message at",
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
      eyebrow: "About",
      title: "Beyond the bulb",
      sections: [
        "iiode is committed to charting the future of sustainable electronics through the development of lasting and responsible solutions, with a focus on conscious lighting.",
        "We specialise in the development of lighting fixtures, installations, series extensions, and design-to-assembly solutions.",
        "We also create spaces for events and interiors, crafting sensory narratives that offer immersive experiences.",
      ],
      servicesLabel: "For design and production see",
      contactTitle: "Get in touch",
      contactIntro: "iiode has offices in both Lausanne & Paris",
      addresses: [
        "Av. des Alpes 9, CH - 1006 Lausanne",
        "Rue d'Hauteville 25, FR - 75010 Paris",
      ],
      contactLine: "To contact us, kindly send us a message at",
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
      eyebrow: "About",
      title: "Beyond the bulb",
      sections: [
        "iiode is committed to charting the future of sustainable electronics through the development of lasting and responsible solutions, with a focus on conscious lighting.",
        "We specialise in the development of lighting fixtures, installations, series extensions, and design-to-assembly solutions.",
        "We also create spaces for events and interiors, crafting sensory narratives that offer immersive experiences.",
      ],
      servicesLabel: "For design and production see",
      contactTitle: "Get in touch",
      contactIntro: "iiode has offices in both Lausanne & Paris",
      addresses: [
        "Av. des Alpes 9, CH - 1006 Lausanne",
        "Rue d'Hauteville 25, FR - 75010 Paris",
      ],
      contactLine: "To contact us, kindly send us a message at",
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
