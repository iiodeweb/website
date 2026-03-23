import { probeTextFile, type TextFileProbe } from "@/lib/server-file-probe"

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

export function getRuntimeEnvProbe(): TextFileProbe {
  return probeTextFile({
    configuredPath: process.env.IIODE_RUNTIME_ENV_FILE?.trim(),
    relativePaths: ["logs/WebsiteLogs/.env.runtime", "logs/Websitelogs/.env.runtime"],
    absolutePaths: ["/srv/customer/logs/WebsiteLogs/.env.runtime", "/logs/WebsiteLogs/.env.runtime"],
  })
}

function ensureRuntimeEnvLoaded() {
  if (runtimeEnvLoaded) {
    return
  }

  runtimeEnvLoaded = true
  const probe = getRuntimeEnvProbe()
  if (probe.found) {
    parseRuntimeEnv(probe.content)
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
