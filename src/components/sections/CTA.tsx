import type { Re27Copy } from "@/content/re27"

type CTAProps = {
  copy: Re27Copy["cta"]
}

export function CTA({ copy }: CTAProps) {
  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half flex items-center border-b border-foreground/10 px-0 py-10 md:border-b-0 md:border-r md:px-10 md:py-0">
            <div>
              <p className="mb-6 text-xs uppercase text-foreground/60">
                {copy.eyebrow}
              </p>
              <h2 className="text-5xl leading-tight md:text-7xl">{copy.title}</h2>
            </div>
          </div>
          <div className="iiode-split-half flex items-center px-0 py-10 md:px-10 md:py-0">
            <p className="text-4xl md:text-6xl">Re27</p>
          </div>
        </div>
      </div>
    </section>
  )
}
