import type { Locale } from "@/lib/locale"

export type DownloadsContent = {
  title: string
  intro: string
  previewBody: string
  requestBody: string
  previewButtonLabel: string
  pressContactLine: string
}

const downloadsContent: Record<Locale, DownloadsContent> = {
  en: {
    title: "Downloads",
    intro: "Access the lighter press preview from the form below.",
    previewBody:
      "The preview kit is intended to give a quick editorial overview of the project without exposing the full set of heavy assets on the website.",
    requestBody:
      "For full-resolution files, detailed press requests, or publication review, please contact iiode directly by e-mail.",
    previewButtonLabel: "Open Press Preview Form",
    pressContactLine: "For full press inquiries, write to",
  },
  fr: {
    title: "Downloads",
    intro: "Access the lighter press preview from the form below.",
    previewBody:
      "The preview kit is intended to give a quick editorial overview of the project without exposing the full set of heavy assets on the website.",
    requestBody:
      "For full-resolution files, detailed press requests, or publication review, please contact iiode directly by e-mail.",
    previewButtonLabel: "Open Press Preview Form",
    pressContactLine: "For full press inquiries, write to",
  },
  de: {
    title: "Downloads",
    intro: "Access the lighter press preview from the form below.",
    previewBody:
      "The preview kit is intended to give a quick editorial overview of the project without exposing the full set of heavy assets on the website.",
    requestBody:
      "For full-resolution files, detailed press requests, or publication review, please contact iiode directly by e-mail.",
    previewButtonLabel: "Open Press Preview Form",
    pressContactLine: "For full press inquiries, write to",
  },
}

export function getDownloadsContent(locale: Locale): DownloadsContent {
  return downloadsContent[locale] ?? downloadsContent.en
}
