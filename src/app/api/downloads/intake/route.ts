import { NextResponse } from "next/server"

import { isMailchimpConfigured, upsertMailchimpContact } from "@/lib/mailchimp"

type IntakePayload = {
  name?: string
  surname?: string
  email?: string
  asset?: string
  href?: string
  source?: string
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as IntakePayload
    const name = payload.name?.trim() ?? ""
    const surname = payload.surname?.trim() ?? ""
    const email = payload.email?.trim() ?? ""

    if (!name || !surname || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    if (!isMailchimpConfigured()) {
      return NextResponse.json({ ok: false, error: "Mailchimp is not configured" }, { status: 500 })
    }

    const sourceTag = payload.source?.trim() || ""
    const downloadTag = process.env.IIODE_MAILCHIMP_TAG_DOWNLOAD?.trim() || "download-presskit"
    const tags = [downloadTag]
    if (sourceTag) {
      tags.push(sourceTag)
    }

    await upsertMailchimpContact({
      email,
      firstName: name,
      lastName: surname,
      tags,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Intake failed",
      },
      { status: 500 },
    )
  }
}
