import Link from "next/link"

import type { MarketingCopy } from "@/content/marketing"

type HeroProps = {
  copy: MarketingCopy["hero"]
}

export function Hero({ copy }: HeroProps) {
  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="mx-auto grid min-h-[70vh] w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {copy.title}
          </h1>
          <p className="text-xl text-foreground/80">{copy.tagline}</p>
          <p className="max-w-xl text-base text-foreground/60">
            {copy.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href={copy.cta.primary.href}
              className="rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background"
            >
              {copy.cta.primary.label}
            </Link>
            <Link
              href={copy.cta.secondary.href}
              className="rounded-full border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground"
            >
              {copy.cta.secondary.label}
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5">
          <img
            src={copy.image}
            alt="iiode Re27 hero"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
