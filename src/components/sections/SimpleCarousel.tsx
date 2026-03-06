"use client"

import { useRef, useState } from "react"
import type { MouseEvent, TouchEvent } from "react"

type ResponsiveImage = {
  desktop: string
  mobile: string
}

type SimpleCarouselProps = {
  images: ResponsiveImage[]
  alt: string
}

const SWIPE_THRESHOLD = 40

export function SimpleCarousel({ images, alt }: SimpleCarouselProps) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const safeImages =
    images.length > 0
      ? images
      : [
          {
            desktop: "/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg",
            mobile: "/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg",
          },
        ]

  const showPrevious = () => {
    setIndex((current) => (current - 1 + safeImages.length) % safeImages.length)
  }

  const showNext = () => {
    setIndex((current) => (current + 1) % safeImages.length)
  }

  const handleAreaClick = (event: MouseEvent<HTMLDivElement>) => {
    if (safeImages.length <= 1) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const clickOnLeft = event.clientX - bounds.left < bounds.width / 2
    if (clickOnLeft) {
      showPrevious()
      return
    }
    showNext()
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || safeImages.length <= 1) {
      return
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const delta = endX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(delta) < SWIPE_THRESHOLD) {
      return
    }

    if (delta < 0) {
      showNext()
      return
    }

    showPrevious()
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onClick={handleAreaClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={safeImages[index].mobile} />
        <img
          src={safeImages[index].desktop}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </picture>
      {safeImages.length > 1 ? (
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            className="pointer-events-auto h-8 w-8 bg-black/30 text-lg leading-none text-white backdrop-blur-sm transition hover:bg-black/45"
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="pointer-events-auto h-8 w-8 bg-black/30 text-lg leading-none text-white backdrop-blur-sm transition hover:bg-black/45"
            aria-label="Next image"
          >
            &#8594;
          </button>
        </div>
      ) : null}
    </div>
  )
}
