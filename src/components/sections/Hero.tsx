import type { Re27Copy } from "@/content/re27"

type HeroProps = {
  copy: Re27Copy["hero"]
}

export function Hero({ copy }: HeroProps) {
  const productName = copy.title.replace(/^iiode\s*/i, "") || "Re27"

  return (
    <section className="relative isolate -mt-16 border-b border-foreground/10 bg-background">
      <img
        src={copy.image}
        alt={copy.title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="iiode-container relative z-10 flex min-h-[100svh] items-center pt-16">
        <div className="flex w-full items-center justify-between text-5xl leading-none text-white sm:text-7xl lg:text-8xl">
          <span className="lowercase">iiode</span>
          <span>{productName}</span>
        </div>
      </div>
    </section>
  )
}
