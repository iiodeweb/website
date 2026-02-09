import Link from "next/link"

import { getPressContent } from "@/content/press"
import { getLocale } from "@/lib/locale-server"

export default async function PressPage() {
  const locale = await getLocale()
  const pressContent = getPressContent(locale)

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {pressContent.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          {pressContent.title}
        </h1>
        <p className="mt-4 text-foreground/70">{pressContent.description}</p>
        <div className="mt-10 space-y-4">
          {pressContent.downloads.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-2xl border border-foreground/10 bg-foreground/5 px-6 py-4 text-sm text-foreground/80 transition hover:border-foreground/40"
            >
              {item.label}
              <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                {pressContent.downloadLabel}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            {pressContent.contact.label}
          </p>
          <p className="mt-3 text-lg">{pressContent.contact.email}</p>
        </div>
      </div>
    </section>
  )
}
