import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

type AccessProbeResult = {
  found: boolean
  sourcePath: string
  content: string
}

function getCandidateAccessPaths(): string[] {
  const configuredPath = process.env.IIODE_ACCESS_PROBE_FILE?.trim()
  const cwd = process.cwd()
  const candidates = [
    configuredPath,
    path.resolve(cwd, "../connect/access"),
    path.resolve(cwd, "connect/access"),
    path.resolve(cwd, "../../connect/access"),
    "/srv/customer/connect/access",
    "/connect/access",
  ].filter(Boolean) as string[]

  return [...new Set(candidates)]
}

export function readServerAccessProbe(): AccessProbeResult {
  for (const candidatePath of getCandidateAccessPaths()) {
    if (!existsSync(candidatePath)) {
      continue
    }

    try {
      const content = readFileSync(candidatePath, "utf8").trim()
      return {
        found: true,
        sourcePath: candidatePath,
        content,
      }
    } catch {
      // Keep trying the next location.
    }
  }

  return {
    found: false,
    sourcePath: "",
    content: "",
  }
}
