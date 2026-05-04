import type { Locale } from "@/lib/locale"

import { localizedContent, type DownloadsContent } from "./locales"

export type { DownloadsContent }

export function getDownloadsContent(locale: Locale): DownloadsContent {
  return localizedContent[locale]?.downloads ?? localizedContent.en.downloads
}
