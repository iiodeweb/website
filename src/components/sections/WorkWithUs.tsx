import Link from "next/link"

import type { Re27Copy } from "@/content/re27"

type WorkWithUsProps = {
  copy: Re27Copy["workWithUs"]
}

export function WorkWithUs({ copy }: WorkWithUsProps) {
  return (
    <section className="bg-background">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-type-2 iiode-copy-narrow grid gap-4 text-foreground md:ml-auto">
              <h2 className="iiode-type-2 mb-2">{copy.leftTitle}</h2>
              {copy.items.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-foreground/20 pt-4"
                >
                  <h3>{item.title}</h3>
                  <p className="mt-3">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="iiode-split-half iiode-media-half iiode-media-half-right relative overflow-hidden">
            <img
              src={copy.rightImage}
              alt={copy.rightTitle}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="iiode-half-pad-1 relative z-10 flex h-full items-center justify-center text-center">
              <Link href="/preorder" className="iiode-type-1 text-white">
                {copy.rightTitle}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
