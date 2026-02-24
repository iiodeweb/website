import Link from "next/link"

import { getPagesCopy } from "@/content/pages"
import { siteConfig } from "@/content/site"
import { getLocale } from "@/lib/locale-server"

export default async function AboutPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).about

  return (
    <section className="bg-background text-foreground">
      <div className="iiode-container py-24">
        <p className="text-xs uppercase text-foreground/60">
          {copy.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl">{copy.title}</h1>
        <div className="mt-12 grid gap-10">
          <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
            <h2 className="text-lg">{copy.faqs[0].question}</h2>
            <p className="mt-4 text-sm text-foreground/70">
              {copy.faqs[0].answer}
            </p>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
            <h2 className="text-lg">{copy.faqs[1].question}</h2>
            <p className="mt-4 text-sm text-foreground/70">
              {copy.faqs[1].answer}
            </p>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
            <h2 className="text-lg">Studios</h2>
            <div className="mt-4 grid gap-8 text-sm text-foreground/70 sm:grid-cols-2">
              {siteConfig.locations.map((location) => (
                <div key={location.country}>
                  <p className="text-foreground">{location.country}</p>
                  <p className="mt-2">{location.line1}</p>
                  <p>{location.line2}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
            <h2 className="text-lg">{copy.contactTitle}</h2>
            <p className="mt-4 text-sm text-foreground/70">
              {copy.contactLine}{" "}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="text-foreground"
              >
                {siteConfig.email}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
