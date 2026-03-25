"use client"

import { useEffect, useState } from "react"

import { HubspotFormEmbed } from "@/components/forms/HubspotFormEmbed"

type HubspotFormModalTriggerProps = {
  triggerLabel: string
  modalTitle: string
  portalId: string
  formId: string
  region: string
  className?: string
  fallbackEmail?: string
  successMessage?: string
  downloadHref?: string
}

export function HubspotFormModalTrigger({
  triggerLabel,
  modalTitle,
  portalId,
  formId,
  region,
  className,
  fallbackEmail,
  successMessage,
  downloadHref,
}: HubspotFormModalTriggerProps) {
  const [open, setOpen] = useState(false)
  const [notice, setNotice] = useState("")

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleEscape)
    }
  }, [open])

  useEffect(() => {
    if (!notice) {
      return
    }

    const timeout = window.setTimeout(() => setNotice(""), 5000)
    return () => window.clearTimeout(timeout)
  }, [notice])

  const handleSubmitted = () => {
    setOpen(false)

    if (downloadHref) {
      const anchor = document.createElement("a")
      anchor.href = downloadHref
      anchor.setAttribute("download", "")
      document.body.appendChild(anchor)
      anchor.click()
      document.body.removeChild(anchor)
    }

    if (successMessage) {
      setNotice(successMessage)
    }
  }

  return (
    <>
      <button
        type="button"
        className={`cursor-pointer appearance-none border-0 p-0 text-left font-inherit ${className ?? ""}`}
        onClick={() => setOpen(true)}
      >
        {triggerLabel}
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-background text-foreground"
            aria-label={modalTitle}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-8 right-0 z-10 text-xs uppercase text-white/80 transition-colors hover:text-white"
              aria-label={`Close ${modalTitle}`}
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <div className="max-h-[80svh] overflow-y-auto">
              <HubspotFormEmbed
                region={region}
                portalId={portalId}
                formId={formId}
                fallbackEmail={fallbackEmail}
                onSubmitted={handleSubmitted}
              />
            </div>
          </div>
        </div>
      ) : null}
      {notice ? (
        <p className="fixed bottom-4 left-4 z-[121] max-w-sm border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground shadow-xl">
          {notice}
        </p>
      ) : null}
    </>
  )
}
