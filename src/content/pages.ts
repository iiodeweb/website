import type { Locale } from "@/lib/locale"

type ResponsiveImage = {
  desktop: string
  mobile: string
}

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
    introImages: ResponsiveImage[]
    abatJourTitle: string
    contributors: string[]
    images: ResponsiveImage[]
  }
}

const collaborationIntroImages: ResponsiveImage[] = [
  {
    desktop: "/assets/collaborations/01 abat-jour/intro/desktop/iiode-Re27-AlexandraGerber-detail.webp",
    mobile: "/assets/collaborations/01 abat-jour/intro/mobile/iiode-Re27-AlexandraGerber-detail.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/intro/desktop/iiode-Re27-BIG-GAME-detail.webp",
    mobile: "/assets/collaborations/01 abat-jour/intro/mobile/iiode-Re27-BIG-GAME-detail.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/intro/desktop/iiode-Re27-FromLighting-detail.webp",
    mobile: "/assets/collaborations/01 abat-jour/intro/mobile/iiode-Re27-FromLighting-detail.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/intro/desktop/iiode-Re27-JoergBoner-detail.webp",
    mobile: "/assets/collaborations/01 abat-jour/intro/mobile/iiode-Re27-JoergBoner-detail.webp",
  },
]

const collaborationCarouselImages: ResponsiveImage[] = [
  {
    desktop: "/assets/collaborations/01 abat-jour/carousel/desktop/iiode-Re27-AlexandraGerber.webp",
    mobile: "/assets/collaborations/01 abat-jour/carousel/mobile/iiode-Re27-AlexandraGerber.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/carousel/desktop/iiode-Re27-BIG-GAME.webp",
    mobile: "/assets/collaborations/01 abat-jour/carousel/mobile/iiode-Re27-BIG-GAME.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/carousel/desktop/iiode-Re27-DimitriBaehler.webp",
    mobile: "/assets/collaborations/01 abat-jour/carousel/mobile/iiode-Re27-DimitriBaehler.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/carousel/desktop/iiode-Re27-FromLighting.webp",
    mobile: "/assets/collaborations/01 abat-jour/carousel/mobile/iiode-Re27-FromLighting.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/carousel/desktop/iiode-Re27-JoergBoner.webp",
    mobile: "/assets/collaborations/01 abat-jour/carousel/mobile/iiode-Re27-JoergBoner.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/carousel/desktop/iiode-Re27-PanterTourron.webp",
    mobile: "/assets/collaborations/01 abat-jour/carousel/mobile/iiode-Re27-PanterTourron.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/carousel/desktop/iiode-Re27-TablotMauloubier.webp",
    mobile: "/assets/collaborations/01 abat-jour/carousel/mobile/iiode-Re27-TablotMauloubier.webp",
  },
  {
    desktop: "/assets/collaborations/01 abat-jour/carousel/desktop/iiode-Re27-VanessaSchindler.webp",
    mobile: "/assets/collaborations/01 abat-jour/carousel/mobile/iiode-Re27-VanessaSchindler.webp",
  },
]

const sharedPagesCopy = {
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
    introLeft:
      "Collaborations\n\nAlongside our Re27 series, we develop limited editions around the bulb. These collaborations with conscious practitioners explore how Re27 becomes a lighting object - how it lives in a space, how it is used, and what it can become beyond a standalone product.\n\nThese collaborations are conceived as an adaptive format, meant to evolve over time - moving from one theme to another, and from one place to another - always starting from the same base: Re27.",
    introImages: collaborationIntroImages,
    abatJourTitle:
      'First chapter: Abat-Jour - Matter and Shape 2026\n\nAt Matter and Shape 2026 in Paris, iiode presents a collaborative exhibition centred on Re27. Eight invited designers and studios developed lampshades for a shared Re27 base: Dimitri Baehler, BIG-GAME, Joerg Boner, From Lighting, Alexandra Gerber, Vanessa Schindler, Charlotte Talbot & Jonathan Mauloubier, Panter & Tourron. The resulting limited editions explore materials and pendant-light uses, with one common starting point.',
    contributors: [],
    images: collaborationCarouselImages,
  },
}

const pagesCopy: Record<Locale, PagesCopy> = {
  en: sharedPagesCopy,
  fr: sharedPagesCopy,
  de: sharedPagesCopy,
}

export function getPagesCopy(locale: Locale): PagesCopy {
  return pagesCopy[locale] ?? pagesCopy.en
}
