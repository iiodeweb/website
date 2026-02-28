import { existsSync } from "node:fs"
import { spawnSync } from "node:child_process"
import process from "node:process"

const nextCliPath = "node_modules/next/dist/bin/next"
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm"

if (!existsSync(nextCliPath)) {
  console.log("Dependencies missing. Running npm install before build...")
  const install = spawnSync(npmCommand, ["install", "--include=dev"], {
    stdio: "inherit",
    env: process.env,
  })
  if (install.status !== 0) {
    process.exit(install.status ?? 1)
  }
}

const build = spawnSync(process.execPath, [nextCliPath, "build"], {
  stdio: "inherit",
  env: process.env,
})

process.exit(build.status ?? 0)
