import Link from "next/link"

import type { Re27Copy } from "@/content/re27"
import { getSiteCopy, siteConfig } from "@/content/site"
import { getLocale } from "@/lib/locale-server"

type CTAProps = {
  copy: Re27Copy["cta"]
}

export async function CTA({ copy }: CTAProps) {
  const locale = await getLocale()
  const siteCopy = getSiteCopy(locale)

  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="iiode-container flex min-h-[calc(100svh-4rem)] flex-col items-start justify-center gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <p className="text-xs uppercase text-foreground/60">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl">{copy.title}</h2>
        </div>
        <Link
          href={siteConfig.ctas.primary.href}
          className="bg-foreground px-6 py-3 text-xs uppercase text-background"
        >
          {siteCopy.ctas.primary}
        </Link>
      </div>
    </section>
  )
}
