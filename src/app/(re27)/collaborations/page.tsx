import { getPagesCopy } from "@/content/pages"
import { getLocale } from "@/lib/locale-server"
import { SimpleCarousel } from "@/components/sections/SimpleCarousel"

export default async function CollaborationsPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).collaborations

  return (
    <>
      <section className="bg-background text-foreground">
        <div className="iiode-section-wrap" data-scroll-track="true">
          <div
            className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
            data-scroll-panel="true"
          >
            <div className="iiode-split-half iiode-media-half iiode-media-half-left iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
              <p className="iiode-type-2 iiode-copy-narrow md:ml-auto">{copy.introLeft}</p>
            </div>
            <div className="iiode-split-half iiode-media-half iiode-media-half-right overflow-hidden">
              <img
                src={copy.introImage}
                alt="Collaborations intro"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground">
        <div className="iiode-section-wrap" data-scroll-track="true">
          <div
            className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
            data-scroll-panel="true"
          >
            <div className="iiode-split-half iiode-media-half iiode-media-half-left iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
              <div className="iiode-type-2 iiode-copy-narrow grid gap-5 md:ml-auto">
                <p>{copy.abatJourTitle}</p>
                <div className="grid gap-1">
                  {copy.contributors.map((name) => (
                    <p key={name}>{name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="iiode-split-half iiode-media-half iiode-media-half-right overflow-hidden">
              <SimpleCarousel images={copy.images} alt="Abat-jour collaborations" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
