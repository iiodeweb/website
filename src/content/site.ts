import type { Locale } from "@/lib/locale"

import { localizedContent, type SiteCopy } from "./locales"

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

export const siteConfig = {
  name: "iiode",
  description:
    "iiode Re27 is a conscious lighting system that combines natural light quality, smart control, and recycled materials in a serviceable design.",
  email: "info@iiode.com",
  archiveUrl: "https://services.iiode.com",
  instagramUrl: "https://www.instagram.com/iiode/",
  analytics: {
    googleMeasurementId: "G-95N9191CK7",
  },
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
      href: "#newsletter",
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
  return localizedContent[locale]?.site ?? localizedContent.en.site
}
