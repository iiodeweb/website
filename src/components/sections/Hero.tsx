import type { Re27Copy } from "@/content/re27"

type HeroProps = {
  copy: Re27Copy["hero"]
}

export function Hero({ copy }: HeroProps) {
  const productName = copy.title.replace(/^iiode\s*/i, "") || "Re27"

  return (
    <section className="relative isolate border-b border-foreground/10 bg-background">
      <img
        src={copy.image}
        alt={copy.title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="iiode-container relative z-10 flex min-h-[calc(100svh-4rem)] items-start pt-10 sm:pt-12">
        <div className="flex w-full items-center justify-between text-base text-white sm:text-lg">
          <span className="lowercase">iiode</span>
          <span>{productName}</span>
        </div>
      </div>
    </section>
  )
}
