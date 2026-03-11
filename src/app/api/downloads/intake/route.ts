import { NextResponse } from "next/server"

import { isMailchimpConfigured, upsertMailchimpContact } from "@/lib/mailchimp"
import { appendContactLog, hasFileContactLogConfig } from "@/lib/server-contact-log"

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

    let stored = false
    const providers: string[] = []

    if (isMailchimpConfigured()) {
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
      stored = true
      providers.push("mailchimp")
    }

    if (hasFileContactLogConfig()) {
      const filePath = await appendContactLog({
        source: payload.source?.trim() || "downloads",
        name,
        surname,
        email,
        asset: payload.asset?.trim() || "",
        href: payload.href?.trim() || "",
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

    console.info(`[intake] downloads stored via ${providers.join(", ")}`)
    return NextResponse.json({ ok: true, providers })
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
