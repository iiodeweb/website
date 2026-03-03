import { DownloadAccessForm } from "@/components/forms/DownloadAccessForm"
import { getDownloadsContent } from "@/content/downloads"
import { getLocale } from "@/lib/locale-server"

export default async function DownloadsPage() {
  const locale = await getLocale()
  const content = getDownloadsContent(locale)

  return (
    <section className="bg-background text-foreground">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-type-2 iiode-copy-narrow grid gap-5 text-foreground md:ml-auto">
              <h1 className="iiode-type-2">{content.title}</h1>
              <p>{content.intro}</p>
              <p>{content.termsTitle}</p>
              <p>{content.termsBody}</p>
            </div>
          </div>

          <div className="iiode-split-half iiode-media-half iiode-media-half-right iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-copy-narrow w-full md:mr-auto">
              <DownloadAccessForm
                fields={content.fields}
                buttonLabel={content.buttonLabel}
                assetHref={content.assetHref}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
