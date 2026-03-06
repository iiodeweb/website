export type PreorderPayload = {
  name: string
  surname: string
  company: string
  email: string
  quantity: string
  note: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function safeTrim(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

export function isValidPreorderEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email)
}

export function validatePreorderPayload(input: unknown):
  | { ok: true; data: PreorderPayload }
  | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid payload" }
  }

  const payload = input as Partial<PreorderPayload>
  const name = safeTrim(payload.name)
  const surname = safeTrim(payload.surname)
  const company = safeTrim(payload.company)
  const email = safeTrim(payload.email)
  const quantityRaw = safeTrim(payload.quantity)
  const note = safeTrim(payload.note)

  if (!name || !surname || !company || !email || !quantityRaw || !note) {
    return { ok: false, error: "All fields are required" }
  }

  if (!isValidPreorderEmail(email)) {
    return { ok: false, error: "Invalid e-mail address" }
  }

  const quantityNumber = Number(quantityRaw)
  if (!Number.isInteger(quantityNumber) || quantityNumber < 1) {
    return { ok: false, error: "Quantity must be a whole number greater than 0" }
  }

  if (name.length > 120 || surname.length > 120 || company.length > 160 || note.length > 4000) {
    return { ok: false, error: "One or more fields are too long" }
  }

  return {
    ok: true,
    data: {
      name,
      surname,
      company,
      email,
      quantity: String(quantityNumber),
      note,
    },
  }
}

export function buildPreorderEmail(payload: PreorderPayload) {
  const noteSingleLine = payload.note.replace(/\s+/g, " ")

  return {
    subject: `Pre-Order "${payload.company}" "${payload.name}" "${payload.surname}"`,
    text: [
      "Pre-Order Request",
      "",
      `Company: ${payload.company}`,
      `Name: ${payload.name}`,
      `Surname: ${payload.surname}`,
      `E-mail: ${payload.email}`,
      `Quantity: ${payload.quantity}`,
      "Note:",
      payload.note,
      "",
      "Sheet row (TSV):",
      `${payload.company}\t${payload.name}\t${payload.surname}\t${payload.email}\t${payload.quantity}\t${noteSingleLine}`,
    ].join("\n"),
  }
}
