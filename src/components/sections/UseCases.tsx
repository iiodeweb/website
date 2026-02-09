import type { MarketingCopy } from "@/content/marketing"

type UseCasesProps = {
  copy: MarketingCopy["useCases"]
}

export function UseCases({ copy }: UseCasesProps) {
  return (
    <section id="use-cases" className="border-b border-foreground/10 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {copy.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          {copy.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground/70">
          {copy.body}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {copy.items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-foreground/10 bg-foreground/5 px-6 py-8 text-xs uppercase tracking-[0.2em] text-foreground/70"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
