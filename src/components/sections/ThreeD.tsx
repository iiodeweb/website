"use client"

import { useRef, useState } from "react"

import type { Re27Copy } from "@/content/re27"

import { AnimatedExplodedSvg } from "./AnimatedExplodedSvg"

type ThreeDProps = {
  copy: Re27Copy["threeD"]
}

export function ThreeD({ copy }: ThreeDProps) {
  const partMarkers = [14, 31, 43, 57, 73, 89]
  const overlayRef = useRef<HTMLDivElement | null>(null)

  return (
    <section id="view-3d" className="bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left relative overflow-hidden">
            <div className="absolute inset-0">
              <AnimatedExplodedSvg
                src={copy.animationSrc}
                posterSrc={copy.animationPoster}
                durationSeconds={copy.durationSeconds}
                triggerProgress={copy.triggerProgress}
                onPlaybackComplete={() => {
                  const overlay = overlayRef.current
                  if (!overlay) return
                  overlay.classList.remove("opacity-0", "pointer-events-none")
                  overlay.classList.add("opacity-100", "pointer-events-auto")
                }}
                className="h-full w-full"
              />
            </div>

            <CompositionOverlay
              overlayRef={overlayRef}
              partMarkers={partMarkers}
              items={copy.compositionItems}
              note={copy.compositionNote}
            />
          </div>

          <div className="iiode-split-half iiode-media-half iiode-media-half-right relative overflow-hidden">
            <img
              src={copy.rightImage}
              alt={copy.rightTitle}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center md:px-10">
              <h2 className="iiode-type-1 text-white">{copy.rightTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type CompositionOverlayProps = {
  overlayRef: React.RefObject<HTMLDivElement | null>
  partMarkers: number[]
  items: string[]
  note: string
}

function CompositionOverlay({ overlayRef, partMarkers, items, note }: CompositionOverlayProps) {
  const [activePart, setActivePart] = useState<number | null>(null)

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500"
      onMouseLeave={() => setActivePart(null)}
    >
      {items.map((item, index) => (
        <button
          key={item}
          type="button"
          className="absolute left-1/2 z-20 h-16 w-24 -translate-x-1/2 opacity-0"
          style={{ top: `${partMarkers[index]}%` }}
          aria-label={item}
          onMouseEnter={() => setActivePart(index)}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart(index)}
          onBlur={() => setActivePart(null)}
          onClick={() => {
            setActivePart((current) => (current === index ? null : index))
          }}
        />
      ))}

      {activePart !== null ? (
        <p
          className="iiode-type-2 pointer-events-none absolute left-1/2 z-20 w-[min(86%,42rem)] -translate-x-1/2 -translate-y-1/2 bg-background/80 p-4 text-center text-foreground"
          style={{ top: `${partMarkers[activePart]}%` }}
        >
          {items[activePart]}
        </p>
      ) : null}

      <p className="pointer-events-none absolute bottom-3 left-4 text-[11px] text-foreground md:left-10">
        {note}
      </p>
    </div>
  )
}
