import { cookies } from "next/headers"

import { defaultCurrency, isCurrency, type Currency } from "./currency"

export async function getCurrency(): Promise<Currency> {
  const cookieStore = await cookies()
  const cookie = cookieStore.get("iiode-currency")?.value
  return isCurrency(cookie) ? cookie : defaultCurrency
}
