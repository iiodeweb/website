import type { Locale } from "@/lib/locale"

import { localizedContent, type SiteCopy } from "./locales"

type NavKey =
  | "re27"
  | "collaborations"
  | "about"
  | "downloads"
  | "contact"

type FooterLinkKey =
  | "services"
  | "preorder"
  | "newsletter"

export const siteConfig = {
  name: "iiode",
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
  footerLinks: [
    { key: "services" as FooterLinkKey, href: "https://services.iiode.com" },
    { key: "preorder" as FooterLinkKey, href: "/preorder#top" },
    {
      key: "newsletter" as FooterLinkKey,
      href: "#newsletter",
    },
  ],
}

export function getSiteCopy(locale: Locale): SiteCopy {
  return localizedContent[locale]?.site ?? localizedContent.en.site
}
