"use client"

import { FormEvent, useMemo, useState } from "react"

import { isValidPreorderEmail, type PreorderPayload } from "@/lib/preorder"

type FormLabels = {
  name: string
  surname: string
  company: string
  email: string
  quantity: string
  note: string
}

type PreorderRequestFormProps = {
  labels: FormLabels
  submitLabel: string
}

export function PreorderRequestForm({ labels, submitLabel }: PreorderRequestFormProps) {
  const [values, setValues] = useState<PreorderPayload>({
    name: "",
    surname: "",
    company: "",
    email: "",
    quantity: "",
    note: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const quantityValue = Number(values.quantity.trim())

  const canSubmit = useMemo(() => {
    return Boolean(
      values.name.trim() &&
        values.surname.trim() &&
        values.company.trim() &&
        values.email.trim() &&
        isValidPreorderEmail(values.email.trim()) &&
        values.note.trim() &&
        Number.isInteger(quantityValue) &&
        quantityValue > 0,
    )
  }, [quantityValue, values.company, values.email, values.name, values.note, values.quantity, values.surname])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit || status === "submitting") return

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/preorder/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          surname: values.surname.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          quantity: String(quantityValue),
          note: values.note.trim(),
        }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || "Send failed")
      }

      setStatus("success")
      setValues({
        name: "",
        surname: "",
        company: "",
        email: "",
        quantity: "",
        note: "",
      })
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Send failed")
    }
  }

  return (
    <form className="mt-10 grid gap-6" onSubmit={onSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm text-foreground">
          {labels.name}
          <input
            name="name"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
            required
          />
        </label>
        <label className="text-sm text-foreground">
          {labels.surname}
          <input
            name="surname"
            value={values.surname}
            onChange={(event) => setValues((current) => ({ ...current, surname: event.target.value }))}
            className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
            required
          />
        </label>
      </div>

      <label className="text-sm text-foreground">
        {labels.company}
        <input
          name="company"
          value={values.company}
          onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
          className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
          required
        />
      </label>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm text-foreground">
          {labels.email}
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
            required
          />
        </label>

        <label className="text-sm text-foreground">
          {labels.quantity}
          <input
            name="quantity"
            type="number"
            min="1"
            step="1"
            value={values.quantity}
            onChange={(event) => setValues((current) => ({ ...current, quantity: event.target.value }))}
            className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
            required
          />
        </label>
      </div>

      <label className="text-sm text-foreground">
        {labels.note}
        <textarea
          name="note"
          rows={4}
          value={values.note}
          onChange={(event) => setValues((current) => ({ ...current, note: event.target.value }))}
          className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
          required
        />
      </label>

      <button
        type="submit"
        disabled={!canSubmit || status === "submitting"}
        className="w-full bg-foreground px-6 py-3 text-xs uppercase text-background disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
      >
        {status === "submitting" ? "Sending..." : submitLabel}
      </button>

      {status === "success" ? (
        <p className="text-sm text-foreground">Pre-order request sent.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-foreground">{errorMessage || "Pre-order send failed."}</p>
      ) : null}
    </form>
  )
}
