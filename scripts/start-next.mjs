import { spawn } from "node:child_process"
import process from "node:process"

const port = process.env.PORT ?? "3000"
const host = process.env.HOST ?? process.env.HOSTNAME ?? "0.0.0.0"
const nextCliPath = "node_modules/next/dist/bin/next"
const forwardedArgs = process.argv.slice(2)

const hasPortArg = forwardedArgs.includes("--port") || forwardedArgs.includes("-p")
const hasHostArg =
  forwardedArgs.includes("--hostname") ||
  forwardedArgs.includes("--host") ||
  forwardedArgs.includes("-H")

const args = [nextCliPath, "start", ...forwardedArgs]

if (!hasPortArg) {
  args.push("--port", port)
}
if (!hasHostArg) {
  args.push("--hostname", host)
}

const child = spawn(process.execPath, args, {
  stdio: "inherit",
  env: process.env,
})

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  process.exit(code ?? 0)
})
