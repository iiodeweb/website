import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

export type FileCandidateResult = {
  path: string
  exists: boolean
  readable: boolean
  error: string
}

export type TextFileProbe = {
  cwd: string
  found: boolean
  sourcePath: string
  content: string
  candidates: FileCandidateResult[]
}

type ProbeOptions = {
  configuredPath?: string
  relativePaths: string[]
  absolutePaths?: string[]
}

function getAncestorDirectories(startPath: string): string[] {
  const directories: string[] = []
  let currentPath = path.resolve(startPath)

  while (true) {
    directories.push(currentPath)
    const parentPath = path.dirname(currentPath)
    if (parentPath === currentPath) {
      return directories
    }

    currentPath = parentPath
  }
}

function buildCandidatePaths({
  configuredPath,
  relativePaths,
  absolutePaths = [],
}: ProbeOptions): string[] {
  const cwd = process.cwd()
  const ancestorDirectories = getAncestorDirectories(cwd)
  const candidates = [
    configuredPath?.trim(),
    ...ancestorDirectories.flatMap((directoryPath) =>
      relativePaths.map((relativePath) => path.join(directoryPath, relativePath)),
    ),
    ...absolutePaths,
  ].filter(Boolean) as string[]

  return [...new Set(candidates)]
}

export function probeTextFile(options: ProbeOptions): TextFileProbe {
  const candidates: FileCandidateResult[] = []
  let found = false
  let sourcePath = ""
  let content = ""

  for (const candidatePath of buildCandidatePaths(options)) {
    if (!existsSync(candidatePath)) {
      candidates.push({
        path: candidatePath,
        exists: false,
        readable: false,
        error: "",
      })
      continue
    }

    try {
      const candidateContent = readFileSync(candidatePath, "utf8").trim()
      candidates.push({
        path: candidatePath,
        exists: true,
        readable: true,
        error: "",
      })

      if (!found) {
        found = true
        sourcePath = candidatePath
        content = candidateContent
      }
    } catch (error) {
      candidates.push({
        path: candidatePath,
        exists: true,
        readable: false,
        error: error instanceof Error ? error.message : "Read failed",
      })
    }
  }

  return {
    cwd: process.cwd(),
    found,
    sourcePath,
    content,
    candidates,
  }
}
