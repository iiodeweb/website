import type { Re27Copy } from "@/content/re27"

type UseCasesProps = {
  copy: Re27Copy["useCases"]
}

export function UseCases({ copy }: UseCasesProps) {
  return (
    <section id="use-cases" className="bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left relative overflow-hidden">
            <img
              src={copy.leftImage}
              alt="Re27 product image"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="iiode-half-pad-1 relative z-10 flex h-full items-start pt-10 md:pt-8">
              <h2 className="iiode-type-1 text-white">{copy.leftTitle}</h2>
            </div>
          </div>

          <div className="iiode-split-half iiode-media-half iiode-media-half-right iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-type-2 iiode-copy-narrow grid gap-5 text-foreground md:mr-auto">
              <p>{copy.bridge}</p>
              {copy.groups.map((group) => (
                <div key={group.heading} className="border-t border-foreground/20 pt-4">
                  <p className="mb-2">{group.heading}</p>
                  <ul className="space-y-1">
                    {group.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-[0.72em]">{copy.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
