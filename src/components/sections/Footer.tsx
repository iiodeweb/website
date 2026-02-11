import Link from "next/link"

import { getSiteCopy, siteConfig } from "@/content/site"
import type { Locale } from "@/lib/locale"

type FooterProps = {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const copy = getSiteCopy(locale)

  return (
    <footer id="contact" className="bg-background">
      <div className="iiode-container py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.6fr_0.3fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase text-foreground/60">
              {copy.footer.heading}
            </p>
            <p className="text-2xl">{siteConfig.email}</p>
            <Link
              href={siteConfig.archiveUrl}
              className="inline-flex items-center text-xs uppercase text-foreground/60 transition hover:text-foreground"
            >
              {copy.footer.archive}
            </Link>
          </div>
          <div className="space-y-6">
            {siteConfig.locations.map((location) => (
              <div key={location.label}>
                <p className="text-xs uppercase text-foreground/60">
                  {location.label}
                </p>
                <p className="text-sm text-foreground/70">{location.address}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-xs uppercase text-foreground/60 transition hover:text-foreground"
              >
                {copy.nav[link.key]}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-foreground/10 pt-6 text-xs text-foreground/40">
          {copy.footer.tagline}
        </div>
      </div>
    </footer>
  )
}
