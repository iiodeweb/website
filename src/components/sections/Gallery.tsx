import type { Re27Copy } from "@/content/re27"

type GalleryProps = {
  copy: Re27Copy["gallery"]
}

export function Gallery({ copy }: GalleryProps) {
  if (copy.items.length === 0) {
    return (
      <section className="border-b border-foreground/10 bg-background">
        <div className="iiode-container flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-20">
          <p className="text-xs uppercase text-foreground/60">
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
      <div className="iiode-container flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-20">
        <p className="text-xs uppercase text-foreground/60">
          {copy.eyebrow}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {copy.items.map((image) => (
            <div
              key={image}
              className="overflow-hidden border border-foreground/10 bg-foreground/5"
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
