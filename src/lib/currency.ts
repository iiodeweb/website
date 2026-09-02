export const currencies = ["CHF", "EUR", "GBP"] as const

export type Currency = (typeof currencies)[number]

export const defaultCurrency: Currency = "EUR"

export type CurrencyOption = {
  currency: Currency
  regionLabel: string
  currencyLabel: string
  // {amount} is replaced with the formatted number.
  priceTemplate: string
}

export const currencyOptions: Record<Currency, CurrencyOption> = {
  CHF: {
    currency: "CHF",
    regionLabel: "Switzerland",
    currencyLabel: "CHF",
    priceTemplate: "CHF\u00a0{amount}",
  },
  EUR: {
    currency: "EUR",
    regionLabel: "EEE countries",
    currencyLabel: "Euros",
    priceTemplate: "{amount}\u20ac",
  },
  GBP: {
    currency: "GBP",
    regionLabel: "UK",
    currencyLabel: "GBP",
    priceTemplate: "\u00a3{amount}",
  },
}

// Order the dropdown presents the options in.
export const currencyOrder: readonly Currency[] = ["CHF", "EUR", "GBP"]

export function isCurrency(value: string | null | undefined): value is Currency {
  return Boolean(value && currencies.includes(value as Currency))
}

export function formatPrice(amount: number, currency: Currency): string {
  return currencyOptions[currency].priceTemplate.replace(
    "{amount}",
    String(amount)
  )
}
