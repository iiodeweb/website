import { probeTextFile, type TextFileProbe } from "@/lib/server-file-probe"

export type AccessProbeResult = TextFileProbe

export function readServerAccessProbe(): AccessProbeResult {
  return probeTextFile({
    configuredPath: process.env.IIODE_ACCESS_PROBE_FILE?.trim(),
    relativePaths: ["connect/access"],
    absolutePaths: ["/srv/customer/connect/access", "/connect/access"],
  })
}
