"use client"

import { FormEvent, useMemo, useState } from "react"

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
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle")

  const canSubmit = useMemo(() => {
    return Boolean(name.trim() && surname.trim() && email.trim())
  }, [email, name, surname])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit || status === "submitting") return

    setStatus("submitting")
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

      if (!response.ok) {
        throw new Error("Intake failed")
      }

      const anchor = document.createElement("a")
      anchor.href = assetHref
      anchor.setAttribute("download", "")
      document.body.appendChild(anchor)
      anchor.click()
      document.body.removeChild(anchor)
      setStatus("idle")
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
        disabled={!canSubmit || status === "submitting"}
        className="w-full bg-foreground px-6 py-3 text-xs uppercase text-background disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
      >
        {status === "submitting" ? "Preparing..." : buttonLabel}
      </button>

      {status === "error" ? (
        <p className="text-sm text-foreground">Download failed. Please try again.</p>
      ) : null}
    </form>
  )
}
