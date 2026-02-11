"use client"

import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

import { locales, type Locale } from "@/lib/locale"

type LanguageToggleProps = {
  locale: Locale
}

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)

  const handleLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    startTransition(async () => {
      await fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: nextLocale }),
      })
      router.refresh()
      setIsOpen(false)
    })
  }

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        disabled={isPending}
        className="px-1 text-[10px] uppercase text-foreground/70 transition hover:text-foreground"
        aria-expanded={isOpen}
      >
        {locale.toUpperCase()}
      </button>
      <div
        className={`flex items-center gap-2 transition-all duration-150 ease-out ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "pointer-events-none opacity-0 translate-x-2"
        } md:absolute md:right-full md:top-1/2 md:-translate-y-1/2 md:mr-2`}
      >
        {locales
          .filter((option) => option !== locale)
          .map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleLocale(option)}
              disabled={isPending}
              className="px-1 text-[10px] uppercase text-foreground/60 transition hover:text-foreground"
            >
              {option.toUpperCase()}
            </button>
          ))}
      </div>
    </div>
  )
}
