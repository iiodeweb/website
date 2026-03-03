import type { Re27Copy } from "@/content/re27"

type GalleryProps = {
  copy: Re27Copy["gallery"]
}

export function Gallery({ copy }: GalleryProps) {
  return (
    <section className="bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left relative overflow-hidden">
            <img
              src={copy.leftImage}
              alt={copy.leftTitle}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="iiode-half-pad-1 relative z-10 flex h-full items-center justify-center text-center">
              <h2 className="iiode-type-1 text-white">{copy.leftTitle}</h2>
            </div>
          </div>
          <div className="iiode-split-half iiode-media-half iiode-media-half-right iiode-text-half iiode-half-pad-1 flex items-start pt-10 md:pt-8">
            <p className="iiode-type-1 w-full text-foreground">
              {copy.rightText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
