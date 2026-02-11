import { getPagesCopy } from "@/content/pages"
import { getLocale } from "@/lib/locale-server"

export default async function CollaborationsPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).collaborations

  return (
    <section className="bg-background text-foreground">
      <div className="iiode-container py-24">
        <p className="text-xs uppercase text-foreground/60">
          {copy.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl">{copy.title}</h1>
        <p className="mt-4 text-foreground/70">
          {copy.description}
        </p>
        <div className="mt-10 overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5">
          <img
            src="/assets/collaborations/01%20abat-jour/images/Re27-Suspension.jpg"
            alt="Collaborative exhibition"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
