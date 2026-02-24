import Link from "next/link"

import { getSiteCopy, siteConfig } from "@/content/site"
import type { Locale } from "@/lib/locale"

type FooterProps = {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const copy = getSiteCopy(locale)

  return (
    <footer id="contact" className="bg-background text-white">
      <div className="iiode-container py-8 md:py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 xl:grid-cols-4 xl:gap-y-4">
          <div className="iiode-hover-group grid content-start gap-y-1">
            <p className="text-base lowercase leading-6">{siteConfig.name}</p>
            <p className="whitespace-nowrap text-base leading-6">{copy.footer.brandTagline}</p>
            <Link
              href={siteConfig.instagramUrl}
              className="inline-flex items-center text-base leading-6"
              target="_blank"
              rel="noreferrer"
            >
              {copy.footer.instagram}
            </Link>
          </div>
          <div className="iiode-hover-group grid content-start gap-y-1 text-right xl:text-left">
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base leading-6"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {copy.links[link.key]}
              </Link>
            ))}
          </div>
          <div className="col-span-2 text-justify text-[9px] leading-[1.08] sm:text-[9.5px] sm:leading-[1.12] xl:col-span-2 xl:text-[10px] xl:leading-[1.24]">
            <p>{copy.footer.legal}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
