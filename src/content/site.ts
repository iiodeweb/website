import type { Locale } from "@/lib/locale"

type NavKey =
  | "re27"
  | "collaborations"
  | "about"
  | "downloads"
  | "contact"
  | "preorder"

type FooterLinkKey =
  | "services"
  | "preorder"
  | "newsletter"

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
  links: {
    services: string
    preorder: string
    newsletter: string
  }
  footer: {
    brandTagline: string
    instagram: string
    legal: string
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
    links: {
      services: "Services",
      preorder: "Pre-Order",
      newsletter: "Newsletter",
    },
    footer: {
      brandTagline: "Re27",
      instagram: "@iiode",
      legal:
        "Copyright Notice. Unless otherwise stated, all content on this website, including text, images and downloadable materials, is protected by copyright and related rights. No part of this website may be copied, reproduced, modified, distributed, stored, transmitted or otherwise used in any form without the prior written consent of iiode, except for strictly personal, non-commercial use or as expressly permitted by applicable terms on this website. (c) 2026 iiode. All rights reserved.",
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
    links: {
      services: "Services",
      preorder: "Pre-Order",
      newsletter: "Newsletter",
    },
    footer: {
      brandTagline: "Re27",
      instagram: "@iiode",
      legal:
        "Copyright Notice. Unless otherwise stated, all content on this website, including text, images and downloadable materials, is protected by copyright and related rights. No part of this website may be copied, reproduced, modified, distributed, stored, transmitted or otherwise used in any form without the prior written consent of iiode, except for strictly personal, non-commercial use or as expressly permitted by applicable terms on this website. (c) 2026 iiode. All rights reserved.",
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
    links: {
      services: "Services",
      preorder: "Pre-Order",
      newsletter: "Newsletter",
    },
    footer: {
      brandTagline: "Re27",
      instagram: "@iiode",
      legal:
        "Copyright Notice. Unless otherwise stated, all content on this website, including text, images and downloadable materials, is protected by copyright and related rights. No part of this website may be copied, reproduced, modified, distributed, stored, transmitted or otherwise used in any form without the prior written consent of iiode, except for strictly personal, non-commercial use or as expressly permitted by applicable terms on this website. (c) 2026 iiode. All rights reserved.",
    },
  },
}

export const siteConfig = {
  name: "iiode",
  description:
    "iiode Re27 is a conscious lighting system that combines natural light quality, smart control, and recycled materials in a serviceable design.",
  email: "info@iiode.com",
  archiveUrl: "https://services.iiode.com",
  instagramUrl: "https://www.instagram.com/iiode/",
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
    { key: "services" as FooterLinkKey, href: "https://services.iiode.com" },
    { key: "preorder" as FooterLinkKey, href: "/preorder#top" },
    {
      key: "newsletter" as FooterLinkKey,
      href: "https://mailchi.mp/7b98e90f02f7/ii-e27",
    },
  ],
  locations: [
    {
      country: "Switzerland",
      line1: "Avenue des Alpes 9",
      line2: "CH - 1006 Lausanne",
    },
    {
      country: "France",
      line1: "Rue d'Hauteville 25",
      line2: "FR - 75010 Paris",
    },
  ],
}

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale] ?? siteCopy.en
}
