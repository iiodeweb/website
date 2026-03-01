import type { Re27Copy } from "@/content/re27"

type StoryProps = {
  copy: Re27Copy["story"]
}

export function Story({ copy }: StoryProps) {
  return (
    <section id="story" className="border-b border-foreground/10 bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="flex items-center border-b border-foreground/10 px-0 py-10 md:border-b-0 md:border-r md:px-10 md:py-0">
            <div className="space-y-6">
              <p className="text-xs uppercase text-foreground/60">
                {copy.eyebrow}
              </p>
              <p className="max-w-xl text-xl leading-tight text-foreground/80 md:text-2xl">
                {copy.body}
              </p>
            </div>
          </div>
          <div className="flex items-center px-0 py-10 md:px-10 md:py-0">
            <h2 className="text-4xl leading-tight md:text-6xl">{copy.title}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
