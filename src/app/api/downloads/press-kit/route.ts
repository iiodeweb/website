import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

import JSZip from "jszip"
import { NextResponse } from "next/server"

const PRESS_KIT_DIR = path.join(process.cwd(), "public", "assets", "press", "01 abat-jour")
const OUTPUT_FILE_NAME = "iiode-press-kit-01-abat-jour.zip"

async function addFolderToZip(zip: JSZip, absoluteDir: string, relativePrefix = "") {
  const entries = await readdir(absoluteDir, { withFileTypes: true })

  await Promise.all(
    entries.map(async (entry) => {
      if (entry.name === ".gitkeep") {
        return
      }

      const entryAbsolutePath = path.join(absoluteDir, entry.name)
      const entryRelativePath = relativePrefix ? `${relativePrefix}/${entry.name}` : entry.name

      if (entry.isDirectory()) {
        await addFolderToZip(zip, entryAbsolutePath, entryRelativePath)
        return
      }

      const fileBuffer = await readFile(entryAbsolutePath)
      zip.file(entryRelativePath, fileBuffer)
    }),
  )
}

export async function GET() {
  try {
    const zip = new JSZip()
    await addFolderToZip(zip, PRESS_KIT_DIR)

    const archive = await zip.generateAsync({
      type: "nodebuffer",
      compression: "DEFLATE",
      compressionOptions: { level: 9 },
    })

    return new NextResponse(new Uint8Array(archive), {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${OUTPUT_FILE_NAME}"`,
        "Cache-Control": "no-store",
      },
    })
  } catch {
    return NextResponse.json({ ok: false, error: "Press kit generation failed" }, { status: 500 })
  }
}
