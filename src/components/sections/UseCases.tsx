import type { Re27Copy } from "@/content/re27"

type UseCasesProps = {
  copy: Re27Copy["useCases"]
}

export function UseCases({ copy }: UseCasesProps) {
  return (
    <section id="use-cases" className="border-b border-foreground/10 bg-background">
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
              <h2 className="text-3xl leading-tight md:text-5xl">{copy.title}</h2>
              <p className="text-lg text-foreground/75">{copy.body}</p>
            </div>
          </div>
          <div className="flex items-center px-0 py-10 md:px-10 md:py-0">
            <div className="grid w-full gap-6">
              {copy.items.map((item) => (
                <div
                  key={item}
                  className="border border-foreground/10 bg-foreground/5 p-6 text-sm leading-relaxed whitespace-pre-line text-foreground/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
