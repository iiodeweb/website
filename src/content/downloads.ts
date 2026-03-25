import type { Locale } from "@/lib/locale"

export type DownloadsContent = {
  title: string
  intro: string
  copyrightBody: string
  previewButtonLabel: string
  pressContactLine: string
}

const copyrightText =
  "By submitting your name, surname and email address and downloading any images from this website, you receive a limited, non-exclusive, non-transferable, revocable permission from iiode to use those images for personal use and for editorial or press coverage about iiode only. The images may not be sold, sublicensed, redistributed as standalone files, used for unrelated commercial purposes, or used in any misleading or unlawful manner without prior written permission from iiode. Please credit (c) iiode where reasonably possible. For any other use, please contact info@iiode.com."

const downloadsContent: Record<Locale, DownloadsContent> = {
  en: {
    title: "Downloads",
    intro: "Access a press preview by filling out your details.",
    copyrightBody: copyrightText,
    previewButtonLabel: "Download Press Preview",
    pressContactLine: "For full-resolution files and detailed press requests, please contact iiode",
  },
  fr: {
    title: "Downloads",
    intro: "Access a press preview by filling out your details.",
    copyrightBody: copyrightText,
    previewButtonLabel: "Download Press Preview",
    pressContactLine: "For full-resolution files and detailed press requests, please contact iiode",
  },
  de: {
    title: "Downloads",
    intro: "Access a press preview by filling out your details.",
    copyrightBody: copyrightText,
    previewButtonLabel: "Download Press Preview",
    pressContactLine: "For full-resolution files and detailed press requests, please contact iiode",
  },
}

export function getDownloadsContent(locale: Locale): DownloadsContent {
  return downloadsContent[locale] ?? downloadsContent.en
}
