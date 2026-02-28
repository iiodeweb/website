import type { Re27Copy } from "@/content/re27"

import { ThreeDSequence } from "./ThreeDSequence"

type ThreeDProps = {
  copy: Re27Copy["threeD"]
}

export function ThreeD({ copy }: ThreeDProps) {
  return (
    <section id="view-3d" className="border-b border-foreground/10 bg-background">
      <div className="iiode-container grid min-h-[calc(100svh-4rem)] grid-cols-1 md:grid-cols-2">
        <div className="flex items-center border-b border-foreground/10 px-0 py-12 md:border-b-0 md:border-r md:px-10">
          <div className="space-y-6">
            <p className="text-xs uppercase text-foreground/60">{copy.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl">{copy.title}</h2>
            <p className="text-sm leading-relaxed whitespace-pre-line text-foreground/75">
              {copy.body}
            </p>
          </div>
        </div>
        <div className="flex items-center px-0 py-12 md:px-10">
          <div className="w-full space-y-4">
            <p className="text-xs uppercase text-foreground/60">Building a better bulb</p>
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
          </div>
        </div>
      </div>
    </section>
  )
}
