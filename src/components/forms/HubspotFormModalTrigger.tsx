"use client"

import { useEffect, useState } from "react"

import { HubspotFormEmbed } from "@/components/forms/HubspotFormEmbed"

type HubspotFormModalTriggerProps = {
  triggerLabel: string
  modalTitle: string
  modalDescription: string
  portalId: string
  formId: string
  region: string
  className?: string
  fallbackEmail?: string
}

export function HubspotFormModalTrigger({
  triggerLabel,
  modalTitle,
  modalDescription,
  portalId,
  formId,
  region,
  className,
  fallbackEmail,
}: HubspotFormModalTriggerProps) {
  const [open, setOpen] = useState(false)

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

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {triggerLabel}
      </button>
      {open ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-4 py-6" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-2xl overflow-hidden border border-foreground/15 bg-background text-foreground shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 border-b border-foreground/15 px-5 py-4 md:px-7">
              <div className="grid gap-2">
                <h2 className="iiode-type-2">{modalTitle}</h2>
                <p className="text-sm text-foreground/70">{modalDescription}</p>
              </div>
              <button
                type="button"
                className="shrink-0 text-xs uppercase text-foreground/70 transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="max-h-[80svh] overflow-y-auto px-5 py-5 md:px-7 md:py-6">
              <HubspotFormEmbed
                region={region}
                portalId={portalId}
                formId={formId}
                fallbackEmail={fallbackEmail}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
