"use client"

import { useEffect, useRef, useState } from "react"

import type { Re27Copy } from "@/content/re27"
import { getMobileVariant } from "@/lib/responsive-asset"

import { AnimatedExplodedSvg } from "./AnimatedExplodedSvg"

type ThreeDProps = {
  copy: Re27Copy["threeD"]
}

export function ThreeD({ copy }: ThreeDProps) {
  const partMarkers = [14, 31, 43, 57, 73, 89]
  const [overlayEnabled, setOverlayEnabled] = useState(false)
  const mobileRightImage = getMobileVariant(copy.rightImage)

  return (
    <section id="view-3d" className="bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left order-2 relative overflow-hidden md:order-1">
            <div className="absolute inset-0">
              <AnimatedExplodedSvg
                src={copy.animationSrc}
                posterSrc={copy.animationPoster}
                explodedPosterSrc={copy.explodedPosterSrc}
                durationSeconds={copy.durationSeconds}
                triggerProgress={copy.triggerProgress}
                onPlaybackComplete={() => setOverlayEnabled(true)}
                className="h-full w-full"
              />
            </div>

            <CompositionOverlay
              key={overlayEnabled ? "enabled" : "disabled"}
              enabled={overlayEnabled}
              partMarkers={partMarkers}
              items={copy.compositionItems}
              note={copy.compositionNote}
            />
          </div>

          <div className="iiode-split-half iiode-media-half iiode-media-half-right order-1 relative overflow-hidden md:order-2">
            <picture>
              {mobileRightImage ? <source media="(max-width: 767px)" srcSet={mobileRightImage} /> : null}
              <img
                src={copy.rightImage}
                alt={copy.rightTitle}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-black/25" />
            <div className="iiode-half-pad-1 relative z-10 flex h-full items-center justify-center text-center">
              <h2 className="iiode-type-1 text-white">{copy.rightTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type CompositionOverlayProps = {
  enabled: boolean
  partMarkers: number[]
  items: string[]
  note: string
}

function CompositionOverlay({ enabled, partMarkers, items, note }: CompositionOverlayProps) {
  const [activePart, setActivePart] = useState<number | null>(null)
  const hideTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current)
      }
    }
  }, [])

  const triggerPart = (index: number) => {
    setActivePart(index)
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current)
    }
    hideTimerRef.current = window.setTimeout(() => {
      setActivePart(null)
      hideTimerRef.current = null
    }, 2000)
  }

  return (
    <div
      className={`absolute inset-0 z-10 transition-opacity duration-500 ${
        enabled ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setActivePart(null)
          if (hideTimerRef.current !== null) {
            window.clearTimeout(hideTimerRef.current)
            hideTimerRef.current = null
          }
        }
      }}
    >
      {items.map((item, index) => (
        <button
          key={item}
          type="button"
          className="absolute left-1/2 z-20 h-24 w-36 -translate-x-1/2 cursor-pointer opacity-0 md:h-28 md:w-44"
          style={{ top: `${partMarkers[index]}%` }}
          aria-label={item}
          onFocus={() => triggerPart(index)}
          onBlur={() => setActivePart(null)}
          onClick={() => {
            triggerPart(index)
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

      {note ? (
        <p className="pointer-events-none absolute bottom-3 left-4 text-[11px] text-foreground md:left-10">
          {note}
        </p>
      ) : null}
    </div>
  )
}
