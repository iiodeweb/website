"use client"

import { useEffect, useId, useRef, useState } from "react"

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
}: HubspotFormEmbedProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const targetId = useId().replace(/:/g, "")
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let cancelled = false

    async function mountForm() {
      setStatus("loading")

      try {
        await waitForHubspotApi()
        if (cancelled || !containerRef.current) {
          return
        }

        containerRef.current.innerHTML = ""
        window.hbspt?.forms?.create({
          region,
          portalId,
          formId,
          target: `#${targetId}`,
        })
        setStatus("ready")
      } catch {
        if (!cancelled) {
          setStatus("error")
        }
      }
    }

    void mountForm()

    return () => {
      cancelled = true
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [formId, portalId, region, targetId])

  return (
    <div className="iiode-hubspot-form-shell">
      {status === "loading" ? <p className="text-sm text-foreground/70">Loading form...</p> : null}
      {status === "error" ? (
        <p className="text-sm text-foreground">
          The form could not be loaded right now.
          {fallbackEmail ? ` Please contact ${fallbackEmail}.` : ""}
        </p>
      ) : null}
      <div id={targetId} ref={containerRef} className={status === "loading" ? "hidden" : ""} />
    </div>
  )
}
