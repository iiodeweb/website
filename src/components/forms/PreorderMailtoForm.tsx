"use client"

import { FormEvent, useMemo, useState } from "react"

type PreorderFields = {
  name: string
  surname: string
  company: string
  email: string
  quantity: string
  note: string
}

type PreorderMailtoFormProps = {
  labels: {
    name: string
    surname: string
    company: string
    email: string
    quantity: string
    note: string
  }
  submitLabel: string
  recipient: string
}

export function PreorderMailtoForm({ labels, submitLabel, recipient }: PreorderMailtoFormProps) {
  const [values, setValues] = useState<PreorderFields>({
    name: "",
    surname: "",
    company: "",
    email: "",
    quantity: "",
    note: "",
  })

  const canSubmit = useMemo(() => {
    return Boolean(values.name.trim() && values.surname.trim() && values.email.trim())
  }, [values.email, values.name, values.surname])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit) return

    const company = values.company.trim() || "-"
    const name = values.name.trim()
    const surname = values.surname.trim()
    const email = values.email.trim()
    const quantity = values.quantity.trim() || "-"
    const note = values.note.trim() || "-"
    const noteSingleLine = note.replace(/\s+/g, " ")

    const subject = `Pre-Order "${company}" "${name}" "${surname}"`
    const body = [
      "Pre-Order Request",
      "",
      `Company: ${company}`,
      `Name: ${name}`,
      `Surname: ${surname}`,
      `E-mail: ${email}`,
      `Quantity: ${quantity}`,
      "Note:",
      note,
      "",
      "Sheet row (TSV):",
      `${company}\t${name}\t${surname}\t${email}\t${quantity}\t${noteSingleLine}`,
    ].join("\n")

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
            value={values.quantity}
            onChange={(event) => setValues((current) => ({ ...current, quantity: event.target.value }))}
            className="mt-2 w-full border border-foreground/20 bg-foreground/5 px-4 py-3 text-foreground outline-none focus:border-foreground"
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
        />
      </label>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-foreground px-6 py-3 text-xs uppercase text-background disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
      >
        {submitLabel}
      </button>
    </form>
  )
}
