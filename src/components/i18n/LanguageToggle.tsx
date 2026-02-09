"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"

import { locales, type Locale } from "@/lib/locale"

type LanguageToggleProps = {
  locale: Locale
}

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

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
    })
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((option) => {
        const isActive = option === locale
        return (
          <button
            key={option}
            type="button"
            onClick={() => handleLocale(option)}
            disabled={isPending}
            className={`rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.2em] transition ${
              isActive
                ? "border-foreground text-foreground"
                : "border-foreground/30 text-foreground/60 hover:border-foreground hover:text-foreground"
            }`}
            aria-pressed={isActive}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
