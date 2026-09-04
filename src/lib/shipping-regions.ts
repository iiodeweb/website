import type Stripe from "stripe"

import type { Currency } from "./currency"

type AllowedCountry =
  Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry

const eeaCountries: AllowedCountry[] = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IS",
  "IT",
  "LI",
  "LT",
  "LU",
  "LV",
  "MT",
  "NL",
  "NO",
  "PL",
  "PT",
  "RO",
  "SE",
  "SI",
  "SK",
  "ES",
]

// The buyer picks a region in the currency dropdown, so checkout only offers
// shipping to the countries that belong to that region.
export const shippingCountries: Record<Currency, AllowedCountry[]> = {
  CHF: ["CH"],
  EUR: eeaCountries,
  GBP: ["GB"],
}
