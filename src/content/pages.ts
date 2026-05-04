import type { Locale } from "@/lib/locale"

import { localizedContent, type PagesCopy, type ResponsiveImage } from "./locales"

export type { PagesCopy, ResponsiveImage }

export function getPagesCopy(locale: Locale): PagesCopy {
  return localizedContent[locale]?.pages ?? localizedContent.en.pages
}
