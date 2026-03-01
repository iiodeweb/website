import type { Re27Copy } from "@/content/re27"

type GalleryProps = {
  copy: Re27Copy["gallery"]
}

export function Gallery({ copy }: GalleryProps) {
  const image = copy.items[0]

  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="flex items-center border-b border-foreground/10 px-0 py-10 md:border-b-0 md:border-r md:px-10 md:py-0">
            <h2 className="text-4xl leading-tight md:text-6xl">{copy.eyebrow}</h2>
          </div>
          <div className="relative flex items-center overflow-hidden px-0 py-10 md:px-10 md:py-0">
            {image ? (
              <img
                src={image}
                alt="iiode Re27 use cases"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            ) : null}
            <div className="absolute inset-0 bg-black/30" />
            <p className="relative z-10 max-w-xl text-xl leading-tight text-white md:text-2xl">
              {copy.empty}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
