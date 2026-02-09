import { cookies } from "next/headers"

import { defaultTheme, isTheme, type Theme } from "./theme"

export async function getTheme(): Promise<Theme> {
  const cookieStore = await cookies()
  const cookie = cookieStore.get("iiode-theme")?.value
  return isTheme(cookie) ? cookie : defaultTheme
}
