"use client"

import { useEffect, useId, useRef } from "react"

import { hubspotConfig } from "@/content/hubspot"

declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create: (options: Record<string, unknown>) => void
      }
    }
  }
}

type HubspotFormEmbedProps = {
  region: string
  portalId: string
  formId: string
  fallbackEmail?: string
  onSubmitted?: () => void
  onClose?: () => void
  closeLabel?: string
}

type HubspotSubmissionEventDetail = {
  formId?: string
}

type HubspotLegacyMessageData = {
  type?: string
  eventName?: string
  id?: string
  formId?: string
  formGuid?: string
}

let hubspotEmbedLoadPromise: Promise<void> | null = null

function loadHubspotEmbedScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("HubSpot forms can only load in the browser"))
  }

  if (window.hbspt?.forms?.create) {
    return Promise.resolve()
  }

  if (hubspotEmbedLoadPromise) {
    return hubspotEmbedLoadPromise
  }

  hubspotEmbedLoadPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-hubspot-forms="true"], script[src="${hubspotConfig.embedScriptSrc}"]`,
    )

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true })
      existingScript.addEventListener("error", () => reject(new Error("HubSpot forms failed to load")), {
        once: true,
      })
      return
    }

    const script = document.createElement("script")
    script.src = hubspotConfig.embedScriptSrc
    script.async = true
    script.defer = true
    script.dataset.hubspotForms = "true"
    script.addEventListener("load", () => resolve(), { once: true })
    script.addEventListener("error", () => reject(new Error("HubSpot forms failed to load")), { once: true })
    document.head.appendChild(script)
  })

  return hubspotEmbedLoadPromise
}

async function waitForHubspotApi(timeoutMs = 10000): Promise<void> {
  await loadHubspotEmbedScript()

  const start = window.performance.now()
  while (!window.hbspt?.forms?.create) {
    if (window.performance.now() - start > timeoutMs) {
      throw new Error("HubSpot forms API timed out")
    }

    await new Promise((resolve) => window.setTimeout(resolve, 100))
  }
}

export function HubspotFormEmbed({
  region,
  portalId,
  formId,
  fallbackEmail,
  onSubmitted,
  onClose,
  closeLabel,
}: HubspotFormEmbedProps) {
  const targetId = useId().replace(/:/g, "")
  const submissionHandledRef = useRef(false)

  useEffect(() => {
    submissionHandledRef.current = false
  }, [formId, targetId])

  useEffect(() => {
    const handleSubmitted = () => {
      if (submissionHandledRef.current) {
        return
      }

      submissionHandledRef.current = true
      onSubmitted?.()
    }

    const handleSuccessEvent = (event: Event) => {
      const detail = (event as CustomEvent<HubspotSubmissionEventDetail>).detail
      if (!detail) {
        return
      }

      if (!detail.formId || detail.formId === formId) {
        handleSubmitted()
      }
    }

    const handleLegacyMessage = (event: MessageEvent<HubspotLegacyMessageData>) => {
      const data = event.data
      if (!data || typeof data !== "object") {
        return
      }

      if (data.type !== "hsFormCallback" || data.eventName !== "onFormSubmitted") {
        return
      }

      const messageFormId = data.id ?? data.formGuid ?? data.formId
      if (!messageFormId || messageFormId === formId) {
        handleSubmitted()
      }
    }

    window.addEventListener("hs-form-event:on-submission:success", handleSuccessEvent as EventListener)
    window.addEventListener("message", handleLegacyMessage)

    return () => {
      window.removeEventListener("hs-form-event:on-submission:success", handleSuccessEvent as EventListener)
      window.removeEventListener("message", handleLegacyMessage)
    }
  }, [formId, onSubmitted, targetId])

  useEffect(() => {
    let cancelled = false
    const wrapper = document.createElement("div")
    wrapper.className = "iiode-hubspot-form-body-host"

    if (onClose) {
      const closeButton = document.createElement("button")
      closeButton.type = "button"
      closeButton.className = "cursor-pointer absolute top-2 right-3 z-10 text-xs uppercase !text-black"
      closeButton.setAttribute("aria-label", closeLabel ?? "Close")
      closeButton.textContent = "Close"
      closeButton.addEventListener("click", (event) => {
        event.stopPropagation()
        onClose()
      })
      wrapper.appendChild(closeButton)
    }

    const host = document.createElement("div")
    host.id = targetId
    host.className = "iiode-hubspot-form-shell"
    wrapper.appendChild(host)
    document.body.appendChild(wrapper)

    async function mountForm() {
      try {
        await waitForHubspotApi()
        if (cancelled) {
          return
        }

        window.hbspt?.forms?.create({
          region,
          portalId,
          formId,
          target: `#${targetId}`,
          formInstanceId: targetId,
          onFormSubmitted: () => {
            if (submissionHandledRef.current) {
              return
            }

            submissionHandledRef.current = true
            onSubmitted?.()
          },
        })
      } catch {
        if (!cancelled) {
          const errorMessage = document.createElement("p")
          errorMessage.className = "text-sm text-foreground"
          errorMessage.textContent = fallbackEmail
            ? `The form could not be loaded right now. Please contact ${fallbackEmail}.`
            : "The form could not be loaded right now."
          host.replaceChildren(errorMessage)
        }
      }
    }

    void mountForm()

    return () => {
      cancelled = true
      wrapper.remove()
    }
  }, [closeLabel, fallbackEmail, formId, onClose, onSubmitted, portalId, region, targetId])

  return null
}
