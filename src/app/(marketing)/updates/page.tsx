import { getPagesCopy } from "@/content/pages"
import { updates } from "@/content/updates"
import { getLocale } from "@/lib/locale-server"

export default async function UpdatesPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).updates

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {copy.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          {copy.title}
        </h1>
        {updates.length === 0 ? (
          <p className="mt-6 text-foreground/70">{copy.empty}</p>
        ) : (
          <div className="mt-10 space-y-6">
            {updates.map((update) => (
              <div
                key={update.title}
                className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8"
              >
                <h2 className="text-lg font-semibold">{update.title}</h2>
                <p className="mt-2 text-sm text-foreground/60">
                  {update.date}
                </p>
                <p className="mt-4 text-sm text-foreground/70">
                  {update.summary}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
