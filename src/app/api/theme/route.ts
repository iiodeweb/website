import { NextResponse } from "next/server"

import { defaultTheme, isTheme } from "@/lib/theme"

export async function POST(request: Request) {
  let theme = defaultTheme

  try {
    const body = (await request.json()) as { theme?: string }
    if (isTheme(body.theme)) {
      theme = body.theme
    }
  } catch {
    // Ignore invalid payloads and fall back to default theme.
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set("iiode-theme", theme, {
    path: "/",
    sameSite: "lax",
  })
  return response
}
