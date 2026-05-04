import type { Locale } from "@/lib/locale"

import { localizedContent, type Re27Copy } from "./locales"

export type { Re27Copy }

export function getRe27Copy(locale: Locale): Re27Copy {
  return localizedContent[locale]?.re27 ?? localizedContent.en.re27
}
