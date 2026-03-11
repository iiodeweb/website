import { appendFile, mkdir } from "node:fs/promises"
import path from "node:path"

type ContactRecord = Record<string, unknown>

function getConfiguredLogFilePath(): string {
  const explicitFile = process.env.IIODE_CONTACTS_LOG_FILE?.trim() || ""
  if (explicitFile) {
    return explicitFile
  }

  const legacyDir = process.env.IIODE_DATA_DIR?.trim() || ""
  if (legacyDir) {
    return path.join(legacyDir, "contacts.ndjson")
  }

  return ""
}

function resolveLogFilePath(logFilePath: string): string {
  if (path.isAbsolute(logFilePath)) {
    return logFilePath
  }

  return path.join(process.cwd(), logFilePath)
}

export function hasFileContactLogConfig(): boolean {
  return Boolean(getConfiguredLogFilePath())
}

export async function appendContactLog(record: ContactRecord): Promise<void> {
  const configuredPath = getConfiguredLogFilePath()
  if (!configuredPath) {
    throw new Error("File contact log is not configured")
  }

  const absolutePath = resolveLogFilePath(configuredPath)
  await mkdir(path.dirname(absolutePath), { recursive: true })

  const payload = {
    timestamp: new Date().toISOString(),
    ...record,
  }

  await appendFile(absolutePath, `${JSON.stringify(payload)}\n`, "utf8")
}
