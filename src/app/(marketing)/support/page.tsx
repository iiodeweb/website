import { getPagesCopy } from "@/content/pages"
import { getLocale } from "@/lib/locale-server"

export default async function SupportPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).support

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {copy.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          {copy.title}
        </h1>
        <p className="mt-4 text-foreground/70">
          {copy.description}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
            <h2 className="text-lg font-semibold">{copy.cards[0].title}</h2>
            <p className="mt-4 text-sm text-foreground/70">{copy.cards[0].body}</p>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
            <h2 className="text-lg font-semibold">{copy.cards[1].title}</h2>
            <p className="mt-4 text-sm text-foreground/70">{copy.cards[1].body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
