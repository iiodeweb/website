import type { MarketingCopy } from "@/content/marketing"

type StoryProps = {
  copy: MarketingCopy["story"]
}

export function Story({ copy }: StoryProps) {
  return (
    <section id="story" className="border-b border-foreground/10 bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {copy.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold md:text-4xl">{copy.title}</h2>
        <p className="max-w-3xl text-lg text-foreground/70">{copy.body}</p>
      </div>
    </section>
  )
}
