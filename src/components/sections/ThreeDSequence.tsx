"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type ThreeDSequenceProps = {
  basePath: string
  frameCount: number
  pad?: number
  ext?: "webp" | "avif"
  startFrame?: number
  alt?: string
}

export function ThreeDSequence({
  basePath,
  frameCount,
  pad = 6,
  ext = "webp",
  startFrame = 1,
  alt = "Interactive bulb view",
}: ThreeDSequenceProps) {
  const [frame, setFrame] = useState(startFrame)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const frameSrc = useMemo(() => {
    const index = Math.min(frameCount, Math.max(1, frame))
    const padded = String(index).padStart(pad, "0")
    return `${basePath}${padded}.${ext}`
  }, [basePath, frame, frameCount, pad, ext])

  useEffect(() => {
    const updateFrame = () => {
      const element = containerRef.current
      if (!element) return
      const rect = element.getBoundingClientRect()
      const viewHeight = window.innerHeight || 1
      const start = viewHeight
      const end = -rect.height
      const progress = (start - rect.top) / (start - end)
      const clamped = Math.min(1, Math.max(0, progress))
      const next = Math.round(clamped * (frameCount - 1)) + 1
      setFrame(next)
    }

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updateFrame)
    }

    updateFrame()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [frameCount])

  return (
    <div ref={containerRef} className="relative select-none">
      <img
        src={frameSrc}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-foreground/20 bg-background/80 px-3 py-1 text-[11px] text-foreground/70">
        Scroll to explore
      </div>
    </div>
  )
}
