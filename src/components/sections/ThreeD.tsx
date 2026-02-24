import type { Re27Copy } from "@/content/re27"

import { ThreeDSequence } from "./ThreeDSequence"

type ThreeDProps = {
  copy: Re27Copy["threeD"]
}

export function ThreeD({ copy }: ThreeDProps) {
  return (
    <section id="view-3d" className="border-b border-foreground/10 bg-background">
      <div className="iiode-container grid min-h-[calc(100svh-4rem)] items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="space-y-6">
          <p className="text-xs uppercase text-foreground/60">{copy.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl">{copy.title}</h2>
          <p className="text-lg text-foreground/70">{copy.body}</p>
        </div>
        <div className="space-y-6">
          <div className="overflow-hidden border border-foreground/10 bg-foreground/5">
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
          <div className="overflow-hidden border border-foreground/10 bg-foreground/5">
            <ThreeDSequence
              basePath={copy.sequence.basePath}
              frameCount={copy.sequence.frameCount}
              pad={copy.sequence.pad}
              ext={copy.sequence.ext}
              startFrame={copy.sequence.startFrame}
              alt={copy.sequence.alt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
