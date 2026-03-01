import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const inputArg = process.argv[2] ?? "public/assets/Re27/exploded/Re27_Animation30FPS.svg"
const outputArg =
  process.argv[3] ?? "public/assets/Re27/exploded/Re27_Animation30FPS.poster.svg"

const inputPath = path.resolve(inputArg)
const outputPath = path.resolve(outputArg)

const source = await readFile(inputPath, "utf8")

const poster = source
  .replace(/<animate(?:Transform|Motion)?[\s\S]*?\/>/gi, "")
  .replace(/<set[\s\S]*?\/>/gi, "")

await writeFile(outputPath, poster, "utf8")

console.log(`Poster generated: ${path.relative(process.cwd(), outputPath)}`)
