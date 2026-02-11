import type { Locale } from "@/lib/locale"

type NavKey =
  | "re27"
  | "collaborations"
  | "about"
  | "downloads"
  | "contact"
  | "preorder"

type FooterLinkKey =
  | "preorder"
  | "collaborations"
  | "about"
  | "downloads"

type SiteCopy = {
  nav: {
    re27: string
    contact: string
    collaborations: string
    about: string
    downloads: string
    preorder: string
  }
  ctas: {
    primary: string
  }
  footer: {
    heading: string
    archive: string
    tagline: string
  }
}

const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    nav: {
      re27: "Re27",
      contact: "Contact",
      collaborations: "Collaborations",
      about: "About",
      downloads: "Downloads",
      preorder: "Preorder",
    },
    ctas: {
      primary: "Preorder",
    },
    footer: {
      heading: "Get in touch",
      archive: "Visit archive",
      tagline: "iiode - Lighting made conscious",
    },
  },
  fr: {
    nav: {
      re27: "Re27",
      contact: "Contact",
      collaborations: "Collaborations",
      about: "A propos",
      downloads: "Telechargements",
      preorder: "Precommande",
    },
    ctas: {
      primary: "Precommande",
    },
    footer: {
      heading: "Contact",
      archive: "Voir les archives",
      tagline: "iiode - Eclairage conscient",
    },
  },
  de: {
    nav: {
      re27: "Re27",
      contact: "Kontakt",
      collaborations: "Kooperationen",
      about: "Ueber uns",
      downloads: "Downloads",
      preorder: "Vorbestellung",
    },
    ctas: {
      primary: "Vorbestellung",
    },
    footer: {
      heading: "Kontakt",
      archive: "Archiv besuchen",
      tagline: "iiode - Bewusstes Licht",
    },
  },
}

export const siteConfig = {
  name: "iiode",
  description:
    "iiode Re27 is a conscious lighting system that combines natural light quality, smart control, and recycled materials in a serviceable design.",
  email: "info@iiode.com",
  archiveUrl: "https://services.iiode.com",
  nav: {
    items: [
      { key: "re27" as NavKey, href: "/" },
      { key: "collaborations" as NavKey, href: "/collaborations" },
      { key: "about" as NavKey, href: "/about" },
      { key: "downloads" as NavKey, href: "/downloads" },
      { key: "contact" as NavKey, href: "mailto:info@iiode.com" },
    ],
  },
  ctas: {
    primary: { href: "/preorder" },
  },
  footerLinks: [
    { key: "preorder" as FooterLinkKey, href: "/preorder" },
    { key: "collaborations" as FooterLinkKey, href: "/collaborations" },
    { key: "about" as FooterLinkKey, href: "/about" },
    { key: "downloads" as FooterLinkKey, href: "/downloads" },
  ],
  locations: [
    {
      label: "Lausanne",
      address: "Av. des Alpes 9, CH - 1006 Lausanne",
    },
    {
      label: "Paris",
      address: "Rue d'Hauteville 25, FR - 75010 Paris",
    },
  ],
}

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale] ?? siteCopy.en
}
