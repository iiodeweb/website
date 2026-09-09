"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import type { Re27Copy } from "@/content/re27"
import { getMobileVariant } from "@/lib/responsive-asset"

type HeroProps = {
  copy: Re27Copy["hero"]
  preorderLabel: string
}

export function Hero({ copy, preorderLabel }: HeroProps) {
  const productName = copy.title.replace(/^iiode\s*/i, "") || "Re27"
  const mobileImage = getMobileVariant(copy.image)
  const [isPreorderVisible, setIsPreorderVisible] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const timeoutId = window.setTimeout(reveal, 2000)

    function reveal() {
      setIsPreorderVisible(true)
      window.clearTimeout(timeoutId)
      controller.abort()
    }

    for (const event of ["scroll", "wheel", "pointermove", "pointerdown", "touchstart", "keydown"]) {
      window.addEventListener(event, reveal, { passive: true, signal: controller.signal })
    }

    return () => {
      window.clearTimeout(timeoutId)
      controller.abort()
    }
  }, [])

  return (
    <section className="relative isolate -mt-16 bg-background">
      <picture>
        {mobileImage ? <source media="(max-width: 767px)" srcSet={mobileImage} /> : null}
        <img
          src={copy.image}
          alt={copy.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-black/25" />
      <div className="iiode-container relative z-10 min-h-[100svh] text-white">
        <h1 aria-label={copy.title} className="iiode-type-hero absolute inset-x-[var(--content-padding)] top-1/2 flex -translate-y-1/2 items-center justify-between">
          <span className="lowercase">iiode</span>
          <span>{productName}</span>
        </h1>
        <Link
          href="/preorder"
          aria-hidden={!isPreorderVisible}
          tabIndex={isPreorderVisible ? undefined : -1}
          className={`iiode-type-1 absolute left-1/2 top-[calc(50%+3.5rem)] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap underline-offset-4 transition-opacity duration-200 hover:underline motion-reduce:transition-none sm:top-1/2 ${isPreorderVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          {preorderLabel}
        </Link>
      </div>
    </section>
  )
}
