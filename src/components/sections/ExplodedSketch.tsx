"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type TransformState = {
  x?: number
  y?: number
  rotate?: number
  scale?: number
  opacity?: number
}

type ProgressRange = {
  start: number
  end: number
}

type VisibilityRange = {
  start: number
  end: number
  feather?: number
}

type ExplodedPart = {
  id: string
  stroke: string
  matte?: string
  z?: number
  from?: TransformState
  to: TransformState
  move?: ProgressRange
  visible?: VisibilityRange
}

type ExplodedManifest = {
  canvas?: { width: number; height: number }
  parts: ExplodedPart[]
}

type ExplodedSketchProps = {
  manifestPath: string
  className?: string
  fallback?: React.ReactNode
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount
}

function visibilityAt(progress: number, visible?: VisibilityRange) {
  if (!visible) return 1
  const feather = visible.feather ?? 0.08
  const startIn = visible.start - feather
  const endOut = visible.end + feather

  if (progress <= startIn || progress >= endOut) return 0
  if (progress < visible.start) return clamp((progress - startIn) / feather)
  if (progress > visible.end) return clamp((endOut - progress) / feather)
  return 1
}

function moveProgress(progress: number, move?: ProgressRange) {
  if (!move) return progress
  const span = Math.max(0.0001, move.end - move.start)
  return clamp((progress - move.start) / span)
}

export function ExplodedSketch({
  manifestPath,
  className,
  fallback = null,
}: ExplodedSketchProps) {
  const [manifest, setManifest] = useState<ExplodedManifest | null>(null)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadManifest() {
      try {
        const response = await fetch(manifestPath)
        if (!response.ok) {
          setManifest(null)
          return
        }
        const data = (await response.json()) as ExplodedManifest
        if (!cancelled) {
          setManifest(data)
        }
      } catch {
        if (!cancelled) {
          setManifest(null)
        }
      }
    }

    loadManifest()

    return () => {
      cancelled = true
    }
  }, [manifestPath])

  useEffect(() => {
    const update = () => {
      const element = containerRef.current
      if (!element) return
      const track = element.closest("[data-scroll-track='true']") as HTMLElement | null
      const reference = track ?? element
      const rect = reference.getBoundingClientRect()
      const viewHeight = window.innerHeight || 1
      const stickyTop = 64
      const travel = Math.max(1, rect.height - (viewHeight - stickyTop))
      const ratio = (stickyTop - rect.top) / travel
      setProgress(clamp(ratio))
    }

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const orderedParts = useMemo(() => {
    if (!manifest?.parts?.length) return []
    return [...manifest.parts].sort((a, b) => (a.z ?? 0) - (b.z ?? 0))
  }, [manifest])

  if (!orderedParts.length) {
    return <>{fallback}</>
  }

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] w-full overflow-hidden border border-foreground/10 bg-background ${className ?? ""}`}
    >
      {orderedParts.map((part) => {
        const from = part.from ?? {}
        const to = part.to ?? {}
        const local = moveProgress(progress, part.move)
        const visible = visibilityAt(progress, part.visible)

        const x = lerp(from.x ?? 0, to.x ?? 0, local)
        const y = lerp(from.y ?? 0, to.y ?? 0, local)
        const rotate = lerp(from.rotate ?? 0, to.rotate ?? 0, local)
        const scale = lerp(from.scale ?? 1, to.scale ?? 1, local)
        const opacity = lerp(from.opacity ?? 1, to.opacity ?? 1, local) * visible

        const transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`

        return (
          <div
            key={part.id}
            className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full"
            style={{ zIndex: part.z ?? 0, transform, opacity }}
          >
            {part.matte ? (
              <img
                src={part.matte}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-contain dark:invert"
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <img
              src={part.stroke}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-contain dark:invert"
              loading="lazy"
              decoding="async"
            />
          </div>
        )
      })}
    </div>
  )
}
