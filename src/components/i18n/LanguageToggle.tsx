"use client"

import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

import { locales, type Locale } from "@/lib/locale"

type LanguageToggleProps = {
  locale: Locale
  className?: string
  pushLayout?: boolean
}

export function LanguageToggle({
  locale,
  className,
  pushLayout = false,
}: LanguageToggleProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const availableLocales = locales.filter((option) => option !== locale)
  const containerClass = pushLayout
    ? isOpen
      ? "w-[108px]"
      : "w-7"
    : "w-auto"
  const showInactiveLocales = pushLayout || isOpen

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
    <div
      className={`overflow-hidden transition-[width] duration-200 ease-out ${containerClass} ${className ?? ""}`}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          disabled={isPending}
          className="w-7 text-center text-base uppercase text-current transition-colors"
          aria-expanded={isOpen}
        >
          {locale.toUpperCase()}
        </button>
        {availableLocales.map((option) =>
          showInactiveLocales ? (
            <button
              key={option}
              type="button"
              onClick={() => handleLocale(option)}
              disabled={isPending}
              className={`w-7 text-center text-base uppercase text-current transition-colors ${
                pushLayout && !isOpen
                  ? "pointer-events-none opacity-0"
                  : "opacity-100"
              }`}
            >
              {option.toUpperCase()}
            </button>
          ) : null
        )}
      </div>
    </div>
  )
}
