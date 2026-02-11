import type { Locale } from "@/lib/locale"

export type DownloadsContent = {
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

const downloadsContent: Record<Locale, DownloadsContent> = {
  en: {
    eyebrow: "Downloads",
    title: "Downloads",
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
      label: "Contact",
      email: "info@iiode.com",
    },
  },
  fr: {
    eyebrow: "Telechargements",
    title: "Telechargements",
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
      label: "Contact",
      email: "info@iiode.com",
    },
  },
  de: {
    eyebrow: "Downloads",
    title: "Downloads",
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
      label: "Kontakt",
      email: "info@iiode.com",
    },
  },
}

export function getDownloadsContent(locale: Locale): DownloadsContent {
  return downloadsContent[locale] ?? downloadsContent.en
}
