import { NextResponse } from "next/server"

import { defaultLocale, isLocale } from "@/lib/locale"

export async function POST(request: Request) {
  let locale = defaultLocale

  try {
    const body = (await request.json()) as { locale?: string }
    if (isLocale(body.locale)) {
      locale = body.locale
    }
  } catch {
    // Ignore invalid payloads and fall back to default locale.
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set("iiode-locale", locale, {
    path: "/",
    sameSite: "lax",
  })
  return response
}
