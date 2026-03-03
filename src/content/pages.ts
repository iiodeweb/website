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
      email: string
      quantity: string
      note: string
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
    introLeft: string
    introImage: string
    abatJourTitle: string
    contributors: string[]
    images: string[]
  }
}

const pagesCopy: Record<Locale, PagesCopy> = {
  en: {
    preorder: {
      eyebrow: "Preorder",
      title: "Pre-Order",
      description:
        "We currently collect preorder interest manually. Send your request and we will follow up with availability and pricing.",
      fields: {
        name: "Name",
        surname: "Surname",
        company: "Company",
        email: "E-mail",
        quantity: "Quantity",
        note: "Note",
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
      introLeft: "Beside limited editions around the Re27",
      introImage: "/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg",
      abatJourTitle: 'The first collective exhibition is dedicated to "abat-jour". Following designers/ studio contributed:',
      contributors: [
        "Dimitri Bähler",
        "Jörg boner",
        "Big-Game",
        "FROM",
        "Alexandra Gerber",
        "Vanessa Schindler",
        "Panter&Tourron",
        "Charlotte Talbot Jonathan Mauloubier",
      ],
      images: [
        "/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg",
      ],
    },
  },
  fr: {
    preorder: {
      eyebrow: "Precommande",
      title: "Pre-Order",
      description:
        "We currently collect preorder interest manually. Send your request and we will follow up with availability and pricing.",
      fields: {
        name: "Name",
        surname: "Surname",
        company: "Company",
        email: "E-mail",
        quantity: "Quantity",
        note: "Note",
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
      introLeft: "Beside limited editions around the Re27",
      introImage: "/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg",
      abatJourTitle: 'The first collective exhibition is dedicated to "abat-jour". Following designers/ studio contributed:',
      contributors: [
        "Dimitri Bähler",
        "Jörg boner",
        "Big-Game",
        "FROM",
        "Alexandra Gerber",
        "Vanessa Schindler",
        "Panter&Tourron",
        "Charlotte Talbot Jonathan Mauloubier",
      ],
      images: [
        "/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg",
      ],
    },
  },
  de: {
    preorder: {
      eyebrow: "Vorbestellung",
      title: "Pre-Order",
      description:
        "We currently collect preorder interest manually. Send your request and we will follow up with availability and pricing.",
      fields: {
        name: "Name",
        surname: "Surname",
        company: "Company",
        email: "E-mail",
        quantity: "Quantity",
        note: "Note",
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
      introLeft: "Beside limited editions around the Re27",
      introImage: "/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg",
      abatJourTitle: 'The first collective exhibition is dedicated to "abat-jour". Following designers/ studio contributed:',
      contributors: [
        "Dimitri Bähler",
        "Jörg boner",
        "Big-Game",
        "FROM",
        "Alexandra Gerber",
        "Vanessa Schindler",
        "Panter&Tourron",
        "Charlotte Talbot Jonathan Mauloubier",
      ],
      images: [
        "/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg",
      ],
    },
  },
}

export function getPagesCopy(locale: Locale): PagesCopy {
  return pagesCopy[locale] ?? pagesCopy.en
}
