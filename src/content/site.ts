import type { Locale } from "@/lib/locale"

type NavKey =
  | "story"
  | "features"
  | "view3d"
  | "useCases"
  | "contact"
  | "collaborations"
  | "info"
  | "press"
  | "support"
  | "updates"

type FooterLinkKey =
  | "preorder"
  | "info"
  | "press"
  | "support"
  | "updates"
  | "collaborations"

type SiteCopy = {
  nav: {
    sectionsLabel: string
    pagesLabel: string
    story: string
    features: string
    view3d: string
    useCases: string
    contact: string
    collaborations: string
    info: string
    press: string
    support: string
    updates: string
    preorder: string
  }
  ctas: {
    primary: string
    secondary: string
  }
  theme: {
    light: string
    dark: string
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
      sectionsLabel: "Re27",
      pagesLabel: "Pages",
      story: "Story",
      features: "Features",
      view3d: "3D View",
      useCases: "Use Cases",
      contact: "Contact",
      collaborations: "Collaborations",
      info: "Info",
      press: "Press",
      support: "Support",
      updates: "Updates",
      preorder: "Preorder",
    },
    ctas: {
      primary: "Preorder",
      secondary: "Archive",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    footer: {
      heading: "Get in touch",
      archive: "Visit archive",
      tagline: "iiode - Lighting made conscious",
    },
  },
  fr: {
    nav: {
      sectionsLabel: "Re27",
      pagesLabel: "Pages",
      story: "Histoire",
      features: "Fonctionnalites",
      view3d: "Vue 3D",
      useCases: "Usages",
      contact: "Contact",
      collaborations: "Collaborations",
      info: "Infos",
      press: "Presse",
      support: "Support",
      updates: "Actualites",
      preorder: "Precommande",
    },
    ctas: {
      primary: "Precommande",
      secondary: "Archives",
    },
    theme: {
      light: "Clair",
      dark: "Sombre",
    },
    footer: {
      heading: "Contact",
      archive: "Voir les archives",
      tagline: "iiode - Eclairage conscient",
    },
  },
  de: {
    nav: {
      sectionsLabel: "Re27",
      pagesLabel: "Pages",
      story: "Geschichte",
      features: "Merkmale",
      view3d: "3D-Ansicht",
      useCases: "Einsatzbereiche",
      contact: "Kontakt",
      collaborations: "Kooperationen",
      info: "Info",
      press: "Presse",
      support: "Support",
      updates: "Updates",
      preorder: "Vorbestellung",
    },
    ctas: {
      primary: "Vorbestellung",
      secondary: "Archiv",
    },
    theme: {
      light: "Hell",
      dark: "Dunkel",
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
  email: "admin@iiode.com",
  archiveUrl: "https://services.iiode.com",
  nav: {
    sections: [
      { key: "story" as NavKey, href: "/#story" },
      { key: "features" as NavKey, href: "/#features" },
      { key: "view3d" as NavKey, href: "/#view-3d" },
      { key: "useCases" as NavKey, href: "/#use-cases" },
      { key: "contact" as NavKey, href: "/#contact" },
    ],
    pages: [
      { key: "collaborations" as NavKey, href: "/collaborations" },
      { key: "info" as NavKey, href: "/info" },
      { key: "press" as NavKey, href: "/press" },
      { key: "support" as NavKey, href: "/support" },
      { key: "updates" as NavKey, href: "/updates" },
    ],
  },
  ctas: {
    primary: { href: "/preorder" },
    secondary: { href: "https://services.iiode.com" },
  },
  footerLinks: [
    { key: "preorder" as FooterLinkKey, href: "/preorder" },
    { key: "info" as FooterLinkKey, href: "/info" },
    { key: "press" as FooterLinkKey, href: "/press" },
    { key: "support" as FooterLinkKey, href: "/support" },
    { key: "updates" as FooterLinkKey, href: "/updates" },
    { key: "collaborations" as FooterLinkKey, href: "/collaborations" },
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
