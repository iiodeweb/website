import type { Locale } from "@/lib/locale"

export type PressContent = {
  eyebrow: string
  title: string
  description: string
  downloadLabel: string
  downloads: Array<{ label: string; href: string }>
  contact: {
    label: string
    email: string
  }
}

const pressContent: Record<Locale, PressContent> = {
  en: {
    eyebrow: "Press",
    title: "Press kit",
    description:
      "A concise kit with essential assets for editors, curators, and collaborators.",
    downloadLabel: "Download",
    downloads: [
      {
        label: "Logo (SVG, white)",
        href: "/assets/brand/logo/3111%20BLANC/SVG/iiode-logo%20txt.svg",
      },
      {
        label: "Logo (SVG, black)",
        href: "/assets/brand/logo/3112%20NOIR/SVG/iiode-logo%20txt.svg",
      },
      {
        label: "Exhibition image (JPG)",
        href: "/assets/press/01%20abat-jour/Re27-Suspension.jpg",
      },
    ],
    contact: {
      label: "Press contact",
      email: "admin@iiode.com",
    },
  },
  fr: {
    eyebrow: "Presse",
    title: "Kit presse",
    description:
      "Un kit concis avec les assets essentiels pour editeurs, curateurs et partenaires.",
    downloadLabel: "Telecharger",
    downloads: [
      {
        label: "Logo (SVG, blanc)",
        href: "/assets/brand/logo/3111%20BLANC/SVG/iiode-logo%20txt.svg",
      },
      {
        label: "Logo (SVG, noir)",
        href: "/assets/brand/logo/3112%20NOIR/SVG/iiode-logo%20txt.svg",
      },
      {
        label: "Image exposition (JPG)",
        href: "/assets/press/01%20abat-jour/Re27-Suspension.jpg",
      },
    ],
    contact: {
      label: "Contact presse",
      email: "admin@iiode.com",
    },
  },
  de: {
    eyebrow: "Presse",
    title: "Pressekit",
    description:
      "Ein kompaktes Kit mit den wichtigsten Assets fuer Redaktion, Kuratoren und Partner.",
    downloadLabel: "Download",
    downloads: [
      {
        label: "Logo (SVG, weiss)",
        href: "/assets/brand/logo/3111%20BLANC/SVG/iiode-logo%20txt.svg",
      },
      {
        label: "Logo (SVG, schwarz)",
        href: "/assets/brand/logo/3112%20NOIR/SVG/iiode-logo%20txt.svg",
      },
      {
        label: "Ausstellungsbild (JPG)",
        href: "/assets/press/01%20abat-jour/Re27-Suspension.jpg",
      },
    ],
    contact: {
      label: "Pressekontakt",
      email: "admin@iiode.com",
    },
  },
}

export function getPressContent(locale: Locale): PressContent {
  return pressContent[locale] ?? pressContent.en
}
