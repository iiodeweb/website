import { existsSync } from "node:fs"
import { readdir, readFile, stat, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { pathToFileURL } from "node:url"

const explodedDir = path.resolve("public/assets/Re27/exploded")
const configPath = path.join(explodedDir, "svgo.config.mjs")

let optimize
try {
  ;({ optimize } = await import("svgo"))
} catch {
  console.log("SVGO is not installed. Skipping SVG optimization.")
  process.exit(0)
}

if (!existsSync(explodedDir)) {
  console.log("No exploded SVG directory found. Skipping SVG optimization.")
  process.exit(0)
}

let svgoConfig = {
  multipass: true,
  plugins: [{ name: "preset-default" }],
}

if (existsSync(configPath)) {
  const configModule = await import(pathToFileURL(configPath).href)
  if (configModule?.default) {
    svgoConfig = configModule.default
  }
}

const requestedFiles = process.argv.slice(2)
const targets = []

if (requestedFiles.length > 0) {
  for (const value of requestedFiles) {
    const absolutePath = path.resolve(value)
    if (!absolutePath.toLowerCase().endsWith(".svg")) continue
    if (absolutePath.toLowerCase().endsWith(".min.svg")) continue
    targets.push(absolutePath)
  }
} else {
  const entries = await readdir(explodedDir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isFile()) continue
    if (!entry.name.toLowerCase().endsWith(".svg")) continue
    if (entry.name.toLowerCase().endsWith(".min.svg")) continue
    targets.push(path.join(explodedDir, entry.name))
  }
}

if (targets.length === 0) {
  console.log("No SVG files to optimize.")
  process.exit(0)
}

let optimizedCount = 0

for (const filePath of targets) {
  if (!existsSync(filePath)) continue

  const beforeSize = (await stat(filePath)).size
  const input = await readFile(filePath, "utf8")
  const result = optimize(input, { ...svgoConfig, path: filePath })
  const output = typeof result.data === "string" ? result.data : input

  if (output !== input) {
    await writeFile(filePath, output, "utf8")
    optimizedCount += 1
  }

  const afterSize = Buffer.byteLength(output, "utf8")
  const reduction = beforeSize > 0 ? (((beforeSize - afterSize) / beforeSize) * 100).toFixed(2) : "0.00"
  const relative = path.relative(process.cwd(), filePath)
  console.log(`${relative}: ${beforeSize} -> ${afterSize} bytes (${reduction}% reduction)`)
}

console.log(`SVG optimization complete (${optimizedCount}/${targets.length} changed).`)
