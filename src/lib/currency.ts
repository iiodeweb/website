import type { Locale } from "./locale"

export const currencies = ["CHF", "EUR", "GBP"] as const

export type Currency = (typeof currencies)[number]

export const defaultCurrency: Currency = "EUR"

export type CurrencyOption = {
  currency: Currency
  regionLabel: Record<Locale, string>
  currencyLabel: string
}

export const currencyOptions: Record<Currency, CurrencyOption> = {
  CHF: {
    currency: "CHF",
    regionLabel: { en: "Switzerland", fr: "Suisse", de: "Schweiz" },
    currencyLabel: "CHF",
  },
  EUR: {
    currency: "EUR",
    regionLabel: { en: "EU / EEA", fr: "UE / EEE", de: "EU / EWR" },
    currencyLabel: "EUR",
  },
  GBP: {
    currency: "GBP",
    regionLabel: { en: "United Kingdom", fr: "Royaume-Uni", de: "Vereinigtes Königreich" },
    currencyLabel: "GBP",
  },
}

// Order the dropdown presents the options in.
export const currencyOrder: readonly Currency[] = ["CHF", "EUR", "GBP"]

export function isCurrency(value: string | null | undefined): value is Currency {
  return Boolean(value && currencies.includes(value as Currency))
}

export function formatPrice(amount: number, currency: Currency, locale: Locale = "en"): string {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}
