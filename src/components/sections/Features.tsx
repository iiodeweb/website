import type { Re27Copy } from "@/content/re27"

type FeaturesProps = {
  copy: Re27Copy["features"]
}

export function Features({ copy }: FeaturesProps) {
  return (
    <section id="features" className="border-b border-foreground/10 bg-background">
      <div className="iiode-container py-24">
        <p className="text-xs uppercase text-foreground/60">
          {copy.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl">{copy.title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {copy.items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8 text-sm text-foreground/70"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
