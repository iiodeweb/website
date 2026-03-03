import type { Locale } from "@/lib/locale"

export type DownloadsContent = {
  title: string
  intro: string
  termsTitle: string
  termsBody: string
  buttonLabel: string
  assetHref: string
  fields: {
    name: string
    surname: string
    email: string
  }
}

const termsText =
  "By submitting your name, surname and email address and downloading any images from this website, you receive a limited, non-exclusive, non-transferable, revocable permission from iiode to use those images for personal use and for editorial or press coverage about iiode only. The images may not be sold, sublicensed, redistributed as standalone files, used for unrelated commercial purposes, or used in any misleading or unlawful manner without prior written permission from iiode. Please credit (c) iiode where reasonably possible. For any other use, please contact info@iiode.com."

const downloadsContent: Record<Locale, DownloadsContent> = {
  en: {
    title: "Downloads",
    intro: "Please fill out your details to download the selected assets.",
    termsTitle: "Download Terms",
    termsBody: termsText,
    buttonLabel: "Matter and Shape 2026 Press Kit",
    assetHref: "/assets/press/01%20abat-jour/Re27-Suspension.jpg",
    fields: {
      name: "Name",
      surname: "Surname",
      email: "E-mail",
    },
  },
  fr: {
    title: "Downloads",
    intro: "Please fill out your details to download the selected assets.",
    termsTitle: "Download Terms",
    termsBody: termsText,
    buttonLabel: "Matter and Shape 2026 Press Kit",
    assetHref: "/assets/press/01%20abat-jour/Re27-Suspension.jpg",
    fields: {
      name: "Name",
      surname: "Surname",
      email: "E-mail",
    },
  },
  de: {
    title: "Downloads",
    intro: "Please fill out your details to download the selected assets.",
    termsTitle: "Download Terms",
    termsBody: termsText,
    buttonLabel: "Matter and Shape 2026 Press Kit",
    assetHref: "/assets/press/01%20abat-jour/Re27-Suspension.jpg",
    fields: {
      name: "Name",
      surname: "Surname",
      email: "E-mail",
    },
  },
}

export function getDownloadsContent(locale: Locale): DownloadsContent {
  return downloadsContent[locale] ?? downloadsContent.en
}
