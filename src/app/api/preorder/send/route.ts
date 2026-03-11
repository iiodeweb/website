import { NextResponse } from "next/server"

import { isMailchimpConfigured, upsertMailchimpContact } from "@/lib/mailchimp"
import { validatePreorderPayload } from "@/lib/preorder"
import { appendContactLog, hasFileContactLogConfig } from "@/lib/server-contact-log"

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const validation = validatePreorderPayload(payload)

    if (!validation.ok) {
      return NextResponse.json({ ok: false, error: validation.error }, { status: 400 })
    }

    let stored = false
    const providers: string[] = []

    if (isMailchimpConfigured()) {
      await upsertMailchimpContact({
        email: validation.data.email,
        firstName: validation.data.name,
        lastName: validation.data.surname,
        tags: [process.env.IIODE_MAILCHIMP_TAG_PREORDER?.trim() || "preorder"],
      })
      stored = true
      providers.push("mailchimp")
    }

    if (hasFileContactLogConfig()) {
      const filePath = await appendContactLog({
        source: "preorder",
        company: validation.data.company,
        name: validation.data.name,
        surname: validation.data.surname,
        email: validation.data.email,
        quantity: validation.data.quantity,
        note: validation.data.note,
      })
      stored = true
      providers.push(`file:${filePath}`)
    }

    if (!stored) {
      return NextResponse.json(
        { ok: false, error: "No intake provider configured" },
        { status: 500 },
      )
    }

    console.info(`[intake] preorder stored via ${providers.join(", ")}`)
    return NextResponse.json({ ok: true, providers })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Pre-order send failed",
      },
      { status: 500 },
    )
  }
}
