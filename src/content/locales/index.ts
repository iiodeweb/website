import type { Locale } from "@/lib/locale"

import { de } from "./de"
import { en } from "./en"
import { fr } from "./fr"
import type { LocaleContent } from "./types"

export const localizedContent: Record<Locale, LocaleContent> = {
  en,
  fr,
  de,
}

export type {
  DownloadsContent,
  LocaleContent,
  PagesCopy,
  Re27Copy,
  ResponsiveImage,
  SiteCopy,
} from "./types"
