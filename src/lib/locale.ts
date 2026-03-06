export const locales = ["en", "fr", "de"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"
export const localeSwitchEnabled = false

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale))
}
