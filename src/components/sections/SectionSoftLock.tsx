"use client"

import { useEffect } from "react"

const STICKY_TOP_PX = 64

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function easeInOutCubic(value: number) {
  if (value < 0.5) return 4 * value * value * value
  return 1 - Math.pow(-2 * value + 2, 3) / 2
}

export function SectionSoftLock() {
  useEffect(() => {
    let raf = 0

    const update = () => {
      const desktop = window.matchMedia("(min-width: 768px)").matches
      const tracks = document.querySelectorAll<HTMLElement>("[data-scroll-track='true']")

      tracks.forEach((track) => {
        const panel = track.querySelector<HTMLElement>("[data-scroll-panel='true']")
        if (!panel) return

        if (!desktop) {
          panel.style.removeProperty("--iiode-lock-y")
          panel.style.removeProperty("--iiode-lock-o")
          return
        }

        const rect = track.getBoundingClientRect()
        const viewport = window.innerHeight || 1
        const travel = Math.max(1, rect.height - (viewport - STICKY_TOP_PX))
        const progress = clamp((STICKY_TOP_PX - rect.top) / travel)
        const eased = easeInOutCubic(progress)

        const driftY = (0.5 - eased) * 16
        const focus = 1 - clamp(Math.abs(eased - 0.5) * 1.8)
        const opacity = 0.9 + focus * 0.1

        panel.style.setProperty("--iiode-lock-y", `${driftY.toFixed(2)}px`)
        panel.style.setProperty("--iiode-lock-o", opacity.toFixed(3))
      })
    }

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

  return null
}
