"use client"

import { FormEvent, useEffect, useMemo, useRef, useState } from "react"

type DownloadAccessFormProps = {
  fields: {
    name: string
    surname: string
    email: string
  }
  buttonLabel: string
  assetHref: string
}

export function DownloadAccessForm({ fields, buttonLabel, assetHref }: DownloadAccessFormProps) {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "starting" | "error">("idle")
  const [providerMessage, setProviderMessage] = useState("")
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const canSubmit = useMemo(() => {
    return Boolean(name.trim() && surname.trim() && email.trim())
  }, [email, name, surname])

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current)
      }
    }
  }, [])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit || status === "submitting") return

    setStatus("submitting")
    setProviderMessage("")
    try {
      const response = await fetch("/api/downloads/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          surname: surname.trim(),
          email: email.trim(),
          asset: buttonLabel,
          href: assetHref,
          source: "downloads-page",
        }),
      })

      const data = (await response.json().catch(() => ({}))) as {
        providers?: string[]
      }

      if (!response.ok) {
        throw new Error("Intake failed")
      }
      if (Array.isArray(data.providers) && data.providers.length > 0) {
        setProviderMessage(`Stored via ${data.providers.join(", ")}`)
      }

      const anchor = document.createElement("a")
      anchor.href = assetHref
      anchor.setAttribute("download", "")
      document.body.appendChild(anchor)
      anchor.click()
      document.body.removeChild(anchor)
      setStatus("starting")
      if (resetTimer.current) {
        clearTimeout(resetTimer.current)
      }
      resetTimer.current = setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className="iiode-type-2 grid w-full gap-5" onSubmit={onSubmit}>
      <label>
        {fields.name}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
          required
        />
      </label>

      <label>
        {fields.surname}
        <input
          type="text"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
          required
        />
      </label>

      <label>
        {fields.email}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
          required
        />
      </label>

      <button
        type="submit"
        disabled={!canSubmit || status === "submitting" || status === "starting"}
        className="w-full bg-foreground px-6 py-3 text-xs uppercase text-background disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
      >
        {status === "submitting" ? "Preparing..." : status === "starting" ? "Starting..." : buttonLabel}
      </button>

      {status === "starting" ? (
        <p className="flex items-center gap-2 text-sm text-foreground">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground" />
          Download is starting...
          {providerMessage ? ` ${providerMessage}` : ""}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-foreground">Download failed. Please try again.</p>
      ) : null}
    </form>
  )
}
