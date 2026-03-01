import Link from "next/link"

import { getPagesCopy } from "@/content/pages"
import { siteConfig } from "@/content/site"
import { getLocale } from "@/lib/locale-server"

export default async function AboutPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).about

  return (
    <section className="bg-background text-foreground">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half flex items-start px-0 pt-10 md:px-10 md:pt-8">
            <div className="iiode-type-2 grid w-full max-w-3xl gap-5 text-foreground">
              <h1 className="iiode-type-2 text-foreground">{copy.title}</h1>
              {copy.sections.map((line, index) => (
                <p key={line} className={index === 0 ? "" : "border-t border-foreground/20 pt-4"}>
                  {line}
                </p>
              ))}
              <p className="border-t border-foreground/20 pt-4">
                {copy.servicesLabel}{" "}
                <Link href={siteConfig.archiveUrl} className="underline underline-offset-4">
                  services.iiode.com
                </Link>
              </p>
            </div>
          </div>
          <div className="iiode-split-half flex items-start px-0 pt-10 md:px-10 md:pt-8">
            <div className="iiode-type-2 grid w-full max-w-3xl gap-5 text-foreground">
              <h2 className="iiode-type-2 text-foreground">{copy.contactTitle}</h2>
              <p>{copy.contactIntro}</p>
              {copy.addresses.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                {copy.contactLine}{" "}
                <Link href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
                  {siteConfig.email}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
