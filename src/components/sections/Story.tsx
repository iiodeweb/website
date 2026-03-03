import type { Re27Copy } from "@/content/re27"

type StoryProps = {
  copy: Re27Copy["story"]
}

export function Story({ copy }: StoryProps) {
  return (
    <section id="story" className="bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left iiode-text-half order-2 relative md:order-1">
            <div className="iiode-half-pad-1 relative z-10 flex h-full items-start pt-10 md:pt-8">
              <h2 className="iiode-type-1 text-foreground">{copy.leftText}</h2>
            </div>
            <div className="iiode-half-pad-1 pointer-events-none absolute inset-0 z-20 flex items-center justify-center text-center">
              <h2 className="iiode-type-1 text-foreground">{copy.leftCallout}</h2>
            </div>
          </div>
          <div className="iiode-split-half iiode-media-half iiode-media-half-right order-1 relative overflow-hidden md:order-2">
            <img
              src={copy.rightImage}
              alt="Lighting made conscious"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="iiode-half-pad-1 relative z-10 flex h-full items-center justify-center text-center">
              <h2 className="iiode-type-1 text-white">{copy.rightTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
