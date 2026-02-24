import Link from "next/link"

import { getDownloadsContent } from "@/content/downloads"
import { getLocale } from "@/lib/locale-server"

export default async function DownloadsPage() {
  const locale = await getLocale()
  const downloadsContent = getDownloadsContent(locale)

  return (
    <section className="bg-background text-foreground">
      <div className="iiode-container py-24">
        <p className="text-xs uppercase text-foreground/60">
          {downloadsContent.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl">{downloadsContent.title}</h1>
        <p className="mt-4 text-foreground/70">{downloadsContent.description}</p>
        <div className="mt-10 space-y-4">
          {downloadsContent.downloads.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-2xl border border-foreground/10 bg-foreground/5 px-6 py-4 text-sm text-foreground/80 transition hover:border-foreground/40"
            >
              {item.label}
              <span className="text-xs uppercase text-foreground/50">
                {downloadsContent.downloadLabel}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
          <p className="text-xs uppercase text-foreground/60">
            {downloadsContent.contact.label}
          </p>
          <p className="mt-3 text-lg">{downloadsContent.contact.email}</p>
        </div>
        <div className="mt-8 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 text-sm text-foreground/70">
          <p className="text-xs uppercase text-foreground/60">
            {downloadsContent.terms.title}
          </p>
          <p className="mt-4">{downloadsContent.terms.body}</p>
        </div>
      </div>
    </section>
  )
}
