import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { buildPreorderEmail, validatePreorderPayload } from "@/lib/preorder"

function getMailerConfig() {
  const host = process.env.IIODE_SMTP_HOST?.trim() || ""
  const portRaw = process.env.IIODE_SMTP_PORT?.trim() || "587"
  const user = process.env.IIODE_SMTP_USER?.trim() || ""
  const pass = process.env.IIODE_SMTP_PASS?.trim() || ""
  const from = process.env.IIODE_SMTP_FROM?.trim() || user
  const to = process.env.IIODE_PREORDER_TO?.trim() || "info@iiode.com"

  const port = Number(portRaw)
  const secureFromEnv = process.env.IIODE_SMTP_SECURE?.trim()
  const secure =
    secureFromEnv === "true" ? true : secureFromEnv === "false" ? false : port === 465

  return {
    host,
    port,
    user,
    pass,
    from,
    to,
    secure,
  }
}

function hasMailerConfig(config: ReturnType<typeof getMailerConfig>) {
  return Boolean(
    config.host &&
      Number.isFinite(config.port) &&
      config.port > 0 &&
      config.user &&
      config.pass &&
      config.from &&
      config.to,
  )
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const validation = validatePreorderPayload(payload)

    if (!validation.ok) {
      return NextResponse.json({ ok: false, error: validation.error }, { status: 400 })
    }

    const config = getMailerConfig()
    if (!hasMailerConfig(config)) {
      return NextResponse.json(
        { ok: false, error: "SMTP is not configured" },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    })

    const email = buildPreorderEmail(validation.data)
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: validation.data.email,
      subject: email.subject,
      text: email.text,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Pre-order send failed" }, { status: 500 })
  }
}
