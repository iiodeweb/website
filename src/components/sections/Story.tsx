import type { Re27Copy } from "@/content/re27"

type StoryProps = {
  copy: Re27Copy["story"]
}

export function Story({ copy }: StoryProps) {
  return (
    <section id="story" className="border-b border-foreground/10 bg-background">
      <div className="iiode-container flex flex-col gap-6 py-24">
        <p className="text-xs uppercase text-foreground/60">
          {copy.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl">{copy.title}</h2>
        <p className="max-w-3xl text-lg text-foreground/70">{copy.body}</p>
      </div>
    </section>
  )
}
