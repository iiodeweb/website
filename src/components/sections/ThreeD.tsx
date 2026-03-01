import type { Re27Copy } from "@/content/re27"

import { AnimatedExplodedSvg } from "./AnimatedExplodedSvg"
import { ThreeDSequence } from "./ThreeDSequence"

type ThreeDProps = {
  copy: Re27Copy["threeD"]
}

export function ThreeD({ copy }: ThreeDProps) {
  return (
    <section id="view-3d" className="border-b border-foreground/10 bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="flex items-center border-b border-foreground/10 px-0 py-10 md:border-b-0 md:border-r md:px-10 md:py-0">
            <div className="space-y-6">
              <p className="text-xs uppercase text-foreground/60">{copy.eyebrow}</p>
              <h2 className="text-3xl md:text-5xl">{copy.title}</h2>
              <p className="text-sm leading-relaxed whitespace-pre-line text-foreground/75">
                {copy.body}
              </p>
            </div>
          </div>
          <div className="flex items-stretch px-0 py-10 md:px-10 md:py-0">
            <AnimatedExplodedSvg
              src="/assets/Re27/exploded/Re27_Animation30FPS.svg"
              durationSeconds={2.2}
              triggerProgress={0.32}
              className="w-full"
              fallback={(
                <ThreeDSequence
                  basePath={copy.sequence.basePath}
                  frameCount={copy.sequence.frameCount}
                  pad={copy.sequence.pad}
                  ext={copy.sequence.ext}
                  startFrame={copy.sequence.startFrame}
                  alt={copy.sequence.alt}
                />
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
