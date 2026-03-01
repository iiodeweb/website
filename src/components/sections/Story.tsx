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
          <div className="iiode-split-half relative px-0 md:px-10">
            <p className="iiode-type-1 absolute left-0 right-0 top-10 px-0 text-foreground md:px-0">
              {copy.leftText}
            </p>
            <div className="absolute inset-0 flex items-center justify-center px-0 text-center md:px-0">
              <h2 className="iiode-type-1 text-foreground">{copy.leftCallout}</h2>
            </div>
          </div>
          <div className="iiode-split-half iiode-media-half iiode-media-half-right relative overflow-hidden">
            <img
              src={copy.rightImage}
              alt="Lighting made conscious"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center md:px-10">
              <h2 className="iiode-type-1 text-white">{copy.rightTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
