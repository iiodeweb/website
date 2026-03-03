"use client"

import { useEffect, useRef, useState } from "react"

type AnimatedExplodedSvgProps = {
  src: string
  posterSrc?: string
  explodedPosterSrc?: string
  durationSeconds?: number
  triggerProgress?: number
  className?: string
  onPlaybackComplete?: () => void
  fallback?: React.ReactNode
}

const STICKY_TOP_PX = 64
const MIN_STROKE_WIDTH = 1.25
const BASE_STROKE = "#000000"

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function applyStrokeStyles(svg: SVGSVGElement) {
  const drawingNodes = svg.querySelectorAll<SVGElement>(
    "path, line, polyline, polygon, circle, ellipse, rect",
  )
  drawingNodes.forEach((node) => {
    node.setAttribute("stroke", BASE_STROKE)
    node.setAttribute("fill", "none")
  })

  const strokeNodes = svg.querySelectorAll<SVGElement>("[stroke]")
  strokeNodes.forEach((node) => {
    const stroke = node.getAttribute("stroke")
    if (!stroke || stroke.toLowerCase() === "none") return
    node.setAttribute("stroke", BASE_STROKE)
  })

  const widthNodes = svg.querySelectorAll<SVGElement>("[stroke-width]")
  widthNodes.forEach((node) => {
    const width = Number(node.getAttribute("stroke-width") ?? "")
    if (Number.isFinite(width) && width > 0 && width < MIN_STROKE_WIDTH) {
      node.setAttribute("stroke-width", String(MIN_STROKE_WIDTH))
    }
  })
}

function disableSmil(svg: SVGSVGElement) {
  const animations = svg.querySelectorAll("animate, animateTransform, animateMotion, set")
  animations.forEach((node) => node.remove())
}

function sanitizeSvgMarkup(text: string) {
  return text
    .replace(/begin="([^"]+)"/g, (_, value: string) => {
      const firstBegin = value
        .split(";")
        .map((token) => token.trim())
        .find(Boolean)
      return `begin="${firstBegin ?? "0s"}"`
    })
    .replace(/\srepeatCount="indefinite"/g, "")
}

function syncThemeFilter(host: HTMLElement) {
  const isDark = document.documentElement.classList.contains("dark")
  host.style.filter = isDark ? "invert(1)" : "none"
}

export function AnimatedExplodedSvg({
  src,
  posterSrc,
  explodedPosterSrc,
  durationSeconds = 2.2,
  triggerProgress = 0.42,
  className,
  onPlaybackComplete,
  fallback = null,
}: AnimatedExplodedSvgProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const hostRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const onCompleteRef = useRef(onPlaybackComplete)
  const playedRef = useRef(false)
  const completedRef = useRef(false)
  const playRafRef = useRef<number | null>(null)

  const [markup, setMarkup] = useState<string | null>(null)
  const [mode, setMode] = useState<"loading" | "ready" | "static">("loading")
  const [errored, setErrored] = useState(false)
  const [showExplodedPoster, setShowExplodedPoster] = useState(false)
  const [explodedPosterReady, setExplodedPosterReady] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const finalPosterSrc = explodedPosterSrc ?? posterSrc

  useEffect(() => {
    onCompleteRef.current = onPlaybackComplete
  }, [onPlaybackComplete])

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"))
    }

    updateTheme()
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    if (!finalPosterSrc) {
      setExplodedPosterReady(true)
      return () => {
        cancelled = true
      }
    }

    setExplodedPosterReady(false)
    const image = new Image()
    image.decoding = "async"
    image.onload = () => {
      if (!cancelled) setExplodedPosterReady(true)
    }
    image.onerror = () => {
      // Do not block the swap forever if preloading fails.
      if (!cancelled) setExplodedPosterReady(true)
    }
    image.src = finalPosterSrc

    if (image.complete) {
      setExplodedPosterReady(true)
    }

    return () => {
      cancelled = true
    }
  }, [finalPosterSrc])

  useEffect(() => {
    let cancelled = false
    playedRef.current = false
    completedRef.current = false
    if (playRafRef.current) {
      cancelAnimationFrame(playRafRef.current)
      playRafRef.current = null
    }
    setMarkup(null)
    setMode("loading")
    setErrored(false)
    setShowExplodedPoster(false)

    async function loadSvg() {
      try {
        const response = await fetch(src)
        if (!response.ok) throw new Error("Failed to fetch SVG")
        const text = await response.text()
        const sanitized = sanitizeSvgMarkup(text)
        if (!cancelled) setMarkup(sanitized)
      } catch {
        if (!cancelled) setErrored(true)
      }
    }

    loadSvg()
    return () => {
      cancelled = true
    }
  }, [src])

  useEffect(() => {
    if (!markup) return

    const host = hostRef.current
    if (!host) {
      setErrored(true)
      return
    }
    const svg = host?.querySelector("svg") as SVGSVGElement | null
    if (!svg) {
      setErrored(true)
      return
    }

    svgRef.current = svg
    svg.setAttribute("width", "100%")
    svg.setAttribute("height", "100%")
    if (!svg.hasAttribute("preserveAspectRatio")) {
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet")
    }
    svg.style.width = "100%"
    svg.style.height = "100%"
    svg.style.display = "block"

    applyStrokeStyles(svg)
    syncThemeFilter(host)

    const canControl =
      typeof svg.pauseAnimations === "function" && typeof svg.setCurrentTime === "function"

    if (canControl) {
      svg.pauseAnimations()
      svg.setCurrentTime(0)
      setMode("ready")
    } else {
      disableSmil(svg)
      setMode("static")
      if (!completedRef.current) {
        completedRef.current = true
        onCompleteRef.current?.()
      }
    }

    const observer = new MutationObserver(() => {
      const live = svgRef.current
      if (!live) return
      applyStrokeStyles(live)
      syncThemeFilter(host)
      const isPlaying = playRafRef.current !== null
      if (!isPlaying && mode === "ready") {
        live.pauseAnimations?.()
        live.setCurrentTime(playedRef.current ? durationSeconds : 0)
      }
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"],
    })

    return () => {
      observer.disconnect()
    }
  }, [durationSeconds, markup, mode])

  useEffect(() => {
    if (mode !== "ready") return

    const playOnce = () => {
      if (playedRef.current) return
      const svg = svgRef.current
      if (!svg) return
      playedRef.current = true

      let startTime = 0
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = (timestamp - startTime) / 1000
        const time = Math.min(durationSeconds, elapsed)
        applyStrokeStyles(svg)
        svg.pauseAnimations()
        svg.setCurrentTime(time)
        if (time < durationSeconds) {
          playRafRef.current = requestAnimationFrame(step)
        } else {
          svg.pauseAnimations()
          svg.setCurrentTime(durationSeconds)
          playRafRef.current = null
          setShowExplodedPoster(true)
          if (!completedRef.current) {
            completedRef.current = true
            onCompleteRef.current?.()
          }
        }
      }

      playRafRef.current = requestAnimationFrame(step)
    }

    const update = () => {
      const container = containerRef.current
      const svg = svgRef.current
      if (!container || !svg) return

      const track = container.closest("[data-scroll-track='true']") as HTMLElement | null
      const reference = track ?? container
      const rect = reference.getBoundingClientRect()
      const viewport = window.innerHeight || 1
      const travel = Math.max(1, rect.height - (viewport - STICKY_TOP_PX))
      const progress = clamp((STICKY_TOP_PX - rect.top) / travel)

      if (!playedRef.current) {
        svg.pauseAnimations()
        svg.setCurrentTime(0)
        if (progress >= triggerProgress) {
          playOnce()
        }
      }
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
      if (playRafRef.current) {
        cancelAnimationFrame(playRafRef.current)
        playRafRef.current = null
      }
    }
  }, [durationSeconds, mode, triggerProgress])

  if (errored) return <>{fallback}</>

  const canShowExplodedPoster = showExplodedPoster && Boolean(finalPosterSrc) && explodedPosterReady

  return (
    <div
      ref={containerRef}
      className={`relative h-full min-h-[20rem] w-full overflow-hidden ${className ?? ""}`}
    >
      {canShowExplodedPoster ? (
        <img
          src={finalPosterSrc}
          alt=""
          className="h-full w-full object-contain"
          style={{ filter: isDarkTheme ? "invert(1)" : "none" }}
          aria-hidden
        />
      ) : markup ? (
        <div
          ref={hostRef}
          className="h-full w-full"
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      ) : (
        <>
          {posterSrc ? (
            <img
              src={posterSrc}
              alt=""
              className="h-full w-full object-contain"
              style={{ filter: isDarkTheme ? "invert(1)" : "none" }}
              aria-hidden
            />
          ) : (
            <div className="h-full w-full bg-foreground/[0.04]" aria-hidden />
          )}
        </>
      )}
    </div>
  )
}
