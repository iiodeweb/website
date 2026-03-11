import { createHash } from "node:crypto"

import { readRuntimeEnv } from "@/lib/runtime-env"

type MailchimpConfig = {
  apiKey: string
  audienceId: string
  serverPrefix: string
}

type MailchimpPayload = {
  email: string
  firstName: string
  lastName: string
  tags?: string[]
}

function readMailchimpConfig(): MailchimpConfig | null {
  const apiKey = readRuntimeEnv("IIODE_MAILCHIMP_API_KEY")
  const audienceId = readRuntimeEnv("IIODE_MAILCHIMP_AUDIENCE_ID")
  const serverFromKey = apiKey.split("-")[1] || ""
  const serverPrefix = readRuntimeEnv("IIODE_MAILCHIMP_SERVER_PREFIX") || serverFromKey

  if (!apiKey || !audienceId || !serverPrefix) {
    return null
  }

  return {
    apiKey,
    audienceId,
    serverPrefix,
  }
}

function getSubscriberHash(email: string): string {
  return createHash("md5").update(email.trim().toLowerCase()).digest("hex")
}

async function readMailchimpError(response: Response): Promise<string> {
  try {
    const payload = (await response.json()) as {
      detail?: string
      title?: string
    }
    return payload.detail || payload.title || "Mailchimp request failed"
  } catch {
    return "Mailchimp request failed"
  }
}

function getAuthHeader(apiKey: string) {
  return `Basic ${Buffer.from(`iiode:${apiKey}`).toString("base64")}`
}

export function isMailchimpConfigured(): boolean {
  return Boolean(readMailchimpConfig())
}

export async function upsertMailchimpContact({
  email,
  firstName,
  lastName,
  tags = [],
}: MailchimpPayload): Promise<void> {
  const config = readMailchimpConfig()
  if (!config) {
    throw new Error("Mailchimp is not configured")
  }

  const subscriberHash = getSubscriberHash(email)
  const baseUrl = `https://${config.serverPrefix}.api.mailchimp.com/3.0/lists/${config.audienceId}/members/${subscriberHash}`
  const authHeader = getAuthHeader(config.apiKey)

  const upsertResponse = await fetch(baseUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
    body: JSON.stringify({
      email_address: email.trim(),
      status_if_new: "subscribed",
      merge_fields: {
        FNAME: firstName.trim(),
        LNAME: lastName.trim(),
      },
    }),
    cache: "no-store",
  })

  if (!upsertResponse.ok) {
    throw new Error(await readMailchimpError(upsertResponse))
  }

  const cleanTags = tags
    .map((value) => value.trim())
    .filter(Boolean)

  if (cleanTags.length === 0) {
    return
  }

  const tagResponse = await fetch(`${baseUrl}/tags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
    body: JSON.stringify({
      tags: cleanTags.map((name) => ({ name, status: "active" })),
    }),
    cache: "no-store",
  })

  if (!tagResponse.ok) {
    throw new Error(await readMailchimpError(tagResponse))
  }
}
