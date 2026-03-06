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
              <p className="iiode-type-2 iiode-copy-narrow whitespace-pre-line md:ml-auto">{copy.introLeft}</p>
            </div>
            <div className="iiode-split-half iiode-media-half iiode-media-half-right overflow-hidden">
              <div className="grid h-full w-full grid-cols-2 grid-rows-2">
                {copy.introImages.slice(0, 4).map((image) => (
                  <div key={image.desktop} className="group relative overflow-hidden">
                    <picture>
                      <source media="(max-width: 767px)" srcSet={image.mobile} />
                      <img
                        src={image.desktop}
                        alt="Collaborations intro"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                ))}
              </div>
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
                <p className="whitespace-pre-line">{copy.abatJourTitle}</p>
                {copy.contributors.length > 0 ? (
                  <div className="grid gap-1">
                    {copy.contributors.map((name) => (
                      <p key={name}>{name}</p>
                    ))}
                  </div>
                ) : null}
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
