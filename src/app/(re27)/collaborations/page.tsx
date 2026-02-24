import { getPagesCopy } from "@/content/pages"
import { getLocale } from "@/lib/locale-server"

export default async function CollaborationsPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).collaborations

  return (
    <>
      <section className="border-b border-foreground/10 bg-background text-foreground">
        <div className="iiode-container flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-20">
          <p className="text-xs uppercase text-foreground/60">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl">{copy.title}</h1>
          <p className="mt-4 max-w-2xl text-foreground/70">
            {copy.description}
          </p>
        </div>
      </section>
      <section className="border-b border-foreground/10 bg-background text-foreground">
        <img
          src="/assets/collaborations/01%20abat-jour/images/Re27-Suspension.jpg"
          alt="Collaborative exhibition"
          className="h-[calc(100svh-4rem)] w-full object-cover"
          loading="lazy"
        />
      </section>
    </>
  )
}
