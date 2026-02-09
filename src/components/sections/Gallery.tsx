import type { MarketingCopy } from "@/content/marketing"

type GalleryProps = {
  copy: MarketingCopy["gallery"]
}

export function Gallery({ copy }: GalleryProps) {
  if (copy.items.length === 0) {
    return (
      <section className="border-b border-foreground/10 bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            {copy.eyebrow}
          </p>
          <div className="mt-8 rounded-3xl border border-foreground/10 bg-foreground/5 p-10 text-sm text-foreground/50">
            {copy.empty}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {copy.eyebrow}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {copy.items.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5"
            >
              <img
                src={image}
                alt="iiode Re27 gallery"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
