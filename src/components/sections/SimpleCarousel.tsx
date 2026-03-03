"use client"

import { useState } from "react"

type SimpleCarouselProps = {
  images: string[]
  alt: string
}

export function SimpleCarousel({ images, alt }: SimpleCarouselProps) {
  const [index, setIndex] = useState(0)
  const safeImages = images.length > 0 ? images : ["/assets/collaborations/01 abat-jour/images/Re27-Suspension.jpg"]

  const showPrevious = () => {
    setIndex((current) => (current - 1 + safeImages.length) % safeImages.length)
  }

  const showNext = () => {
    setIndex((current) => (current + 1) % safeImages.length)
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={safeImages[index]}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      {safeImages.length > 1 ? (
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
          <button
            type="button"
            onClick={showPrevious}
            className="border border-white/50 bg-black/30 px-3 py-2 text-xs uppercase text-white"
            aria-label="Previous image"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={showNext}
            className="border border-white/50 bg-black/30 px-3 py-2 text-xs uppercase text-white"
            aria-label="Next image"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  )
}
