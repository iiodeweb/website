"use client"

import { useSyncExternalStore } from "react"

import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import type { SiteCopy } from "@/content/locales"

type ConsentState = "accepted" | "rejected" | "unset" | "loading"

type CookieConsentProps = {
  copy: SiteCopy["cookieConsent"]
  googleMeasurementId: string
}

const storageKey = "iiode-cookie-consent"
const storageEventName = "iiode-cookie-consent-change"

function getStoredConsent(): ConsentState {
  const storedConsent = window.localStorage.getItem(storageKey)
  if (storedConsent === "accepted" || storedConsent === "rejected") {
    return storedConsent
  }

  return "unset"
}

function getServerConsent(): ConsentState {
  return "loading"
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback)
  window.addEventListener(storageEventName, callback)

  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener(storageEventName, callback)
  }
}

export function CookieConsent({
  copy,
  googleMeasurementId,
}: CookieConsentProps) {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getStoredConsent,
    getServerConsent,
  )

  const updateConsent = (nextConsent: "accepted" | "rejected") => {
    window.localStorage.setItem(storageKey, nextConsent)
    window.dispatchEvent(new Event(storageEventName))
  }

  const hasAccepted = consent === "accepted"

  return (
    <>
      {hasAccepted ? (
        <GoogleAnalytics measurementId={googleMeasurementId} />
      ) : null}
      {consent === "unset" ? (
        <div className="fixed inset-x-0 bottom-0 z-[140] border-t border-foreground/15 bg-background/95 px-4 py-3 text-foreground shadow-xl backdrop-blur">
          <div className="mx-auto flex max-w-[64rem] flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <p>{copy.message}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => updateConsent("rejected")}
                className="border border-foreground/20 px-4 py-2 text-xs uppercase"
              >
                {copy.reject}
              </button>
              <button
                type="button"
                onClick={() => updateConsent("accepted")}
                className="bg-foreground px-4 py-2 text-xs uppercase text-background"
              >
                {copy.accept}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
