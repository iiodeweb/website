import type { MarketingCopy } from "@/content/marketing"

type ThreeDProps = {
  copy: MarketingCopy["threeD"]
}

export function ThreeD({ copy }: ThreeDProps) {
  return (
    <section id="view-3d" className="border-b border-foreground/10 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            {copy.title}
          </h2>
          <p className="text-lg text-foreground/70">{copy.body}</p>
        </div>
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5">
            <video
              className="h-full w-full object-cover"
              src={copy.video}
              poster={copy.image}
              autoPlay
              muted
              loop
              preload="none"
              playsInline
            />
          </div>
          <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5">
            <img
              src={copy.image}
              alt="Exploded view detail"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
