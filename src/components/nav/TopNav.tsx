"use client"

import Link from "next/link"

import { LanguageToggle } from "@/components/i18n/LanguageToggle"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { getSiteCopy, siteConfig } from "@/content/site"
import type { Locale } from "@/lib/locale"
import type { Theme } from "@/lib/theme"

type TopNavProps = {
  locale: Locale
  theme: Theme
}

export function TopNav({ locale, theme }: TopNavProps) {
  const copy = getSiteCopy(locale)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] lowercase">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-4 text-xs uppercase tracking-[0.2em] text-foreground/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            {copy.nav.sectionsLabel}
          </span>
          {siteConfig.nav.sections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {copy.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} />
          <ThemeToggle theme={theme} labels={copy.theme} />
          <Link
            href={siteConfig.ctas.primary.href}
            className="rounded-full border border-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-foreground"
          >
            {copy.ctas.primary}
          </Link>
        </div>
      </div>
    </header>
  )
}
