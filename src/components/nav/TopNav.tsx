"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

import { LanguageToggle } from "@/components/i18n/LanguageToggle"
import { getSiteCopy, siteConfig } from "@/content/site"
import type { Locale } from "@/lib/locale"
import type { Theme } from "@/lib/theme"

type TopNavProps = {
  locale: Locale
  theme: Theme
}

export function TopNav({ locale, theme }: TopNavProps) {
  const copy = getSiteCopy(locale)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = siteConfig.nav.items.map((item) => ({
    ...item,
    label: copy.nav[item.key],
    isMailto: item.href.startsWith("mailto:"),
  }))
  const re27Item = navItems.find((item) => item.key === "re27")
  const mobileItems = navItems.filter((item) => item.key !== "re27")

  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/15 bg-background/80 text-foreground backdrop-blur">
      <div className="iiode-container relative flex h-16 items-center gap-6">
        <button
          type="button"
          onClick={() => {
            const nextTheme = theme === "dark" ? "light" : "dark"
            document.documentElement.classList.add("theme-transition")
            document.documentElement.classList.toggle("dark", nextTheme === "dark")
            window.setTimeout(() => {
              document.documentElement.classList.remove("theme-transition")
            }, 170)
            startTransition(async () => {
              await fetch("/api/theme", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ theme: nextTheme }),
              })
              router.refresh()
            })
          }}
          disabled={isPending}
          className="iiode-brand-hint cursor-pointer text-base lowercase"
          aria-label="Toggle theme"
        >
          {siteConfig.name}
        </button>
        {re27Item ? (
          <Link
            href={re27Item.href}
            className="absolute left-1/2 -translate-x-1/2 text-base md:hidden"
          >
            {re27Item.label}
          </Link>
        ) : null}
        <nav className="iiode-hover-group ml-auto hidden items-center gap-7 text-base md:flex">
          {navItems.map((item) =>
            item.isMailto ? (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <LanguageToggle locale={locale} pushLayout />
        </nav>
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="ml-auto flex h-8 w-8 items-center justify-center transition-colors md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition ${
                isMenuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] h-[2px] w-5 bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] h-[2px] w-5 bg-current transition ${
                isMenuOpen ? "translate-y-[-5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {isMenuOpen ? (
        <div className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-foreground/15 bg-background/95 text-foreground shadow-lg backdrop-blur md:hidden">
          <div className="iiode-container py-4">
            <div className="iiode-hover-group flex flex-col gap-3 text-sm">
              {mobileItems.map((item) =>
                item.isMailto ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-2">
                <LanguageToggle locale={locale} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
