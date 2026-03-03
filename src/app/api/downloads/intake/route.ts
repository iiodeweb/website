import { appendFile, mkdir } from "node:fs/promises"
import path from "node:path"

import { NextResponse } from "next/server"

type IntakePayload = {
  name?: string
  surname?: string
  email?: string
  asset?: string
  href?: string
  source?: string
}

function getDataPath() {
  const rootDir = process.env.IIODE_DATA_DIR || path.join(process.cwd(), ".iiode-data")
  return {
    dir: rootDir,
    file: path.join(rootDir, "downloads-intake.ndjson"),
  }
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

    const { dir, file } = getDataPath()
    await mkdir(dir, { recursive: true })

    const record = {
      timestamp: new Date().toISOString(),
      name,
      surname,
      email,
      asset: payload.asset?.trim() || "",
      href: payload.href?.trim() || "",
      source: payload.source?.trim() || "",
      ip: request.headers.get("x-forwarded-for") || "",
      userAgent: request.headers.get("user-agent") || "",
    }

    await appendFile(file, `${JSON.stringify(record)}\n`, "utf8")

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Intake failed" }, { status: 500 })
  }
}
