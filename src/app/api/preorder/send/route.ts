import { NextResponse } from "next/server"

import { isMailchimpConfigured, upsertMailchimpContact } from "@/lib/mailchimp"
import { validatePreorderPayload } from "@/lib/preorder"

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const validation = validatePreorderPayload(payload)

    if (!validation.ok) {
      return NextResponse.json({ ok: false, error: validation.error }, { status: 400 })
    }

    if (!isMailchimpConfigured()) {
      return NextResponse.json({ ok: false, error: "Mailchimp is not configured" }, { status: 500 })
    }

    await upsertMailchimpContact({
      email: validation.data.email,
      firstName: validation.data.name,
      lastName: validation.data.surname,
      tags: [process.env.IIODE_MAILCHIMP_TAG_PREORDER?.trim() || "preorder"],
    })

    return NextResponse.json({ ok: true })
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
