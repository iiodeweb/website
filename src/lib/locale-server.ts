import { cookies } from "next/headers"

import { defaultLocale, isLocale, localeSwitchEnabled, type Locale } from "./locale"

export async function getLocale(): Promise<Locale> {
  if (!localeSwitchEnabled) {
    return defaultLocale
  }

  const cookieStore = await cookies()
  const cookie = cookieStore.get("iiode-locale")?.value
  return isLocale(cookie) ? cookie : defaultLocale
}
