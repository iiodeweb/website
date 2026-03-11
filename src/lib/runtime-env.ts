import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

const runtimeEnvCache = new Map<string, string>()
let runtimeEnvLoaded = false

function parseRuntimeEnv(content: string) {
  const lines = content.split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) {
      continue
    }

    const separatorIndex = trimmed.indexOf("=")
    if (separatorIndex <= 0) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    if (!key) {
      continue
    }

    let value = trimmed.slice(separatorIndex + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    runtimeEnvCache.set(key, value)
  }
}

function getCandidateRuntimeEnvPaths(): string[] {
  const configuredPath = process.env.IIODE_RUNTIME_ENV_FILE?.trim()
  const candidates = [
    configuredPath,
    path.resolve(process.cwd(), "../logs/WebsiteLogs/.env.runtime"),
    path.resolve(process.cwd(), "logs/WebsiteLogs/.env.runtime"),
  ].filter(Boolean) as string[]

  return [...new Set(candidates)]
}

function ensureRuntimeEnvLoaded() {
  if (runtimeEnvLoaded) {
    return
  }

  runtimeEnvLoaded = true
  for (const candidatePath of getCandidateRuntimeEnvPaths()) {
    if (!existsSync(candidatePath)) {
      continue
    }

    try {
      const content = readFileSync(candidatePath, "utf8")
      parseRuntimeEnv(content)
      return
    } catch {
      // Keep trying the next location.
    }
  }
}

export function readRuntimeEnv(key: string): string {
  const directValue = process.env[key]
  if (typeof directValue === "string" && directValue.trim()) {
    return directValue.trim()
  }

  ensureRuntimeEnvLoaded()
  return runtimeEnvCache.get(key)?.trim() || ""
}

