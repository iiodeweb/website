import { PreorderMailtoForm } from "@/components/forms/PreorderMailtoForm"
import { getPagesCopy } from "@/content/pages"
import { siteConfig } from "@/content/site"
import { getLocale } from "@/lib/locale-server"

export default async function PreorderPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).preorder

  return (
    <section id="top" className="bg-background text-foreground">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-type-2 iiode-copy-narrow grid gap-5 text-foreground md:ml-auto">
              <h1 className="iiode-type-2">{copy.title}</h1>
              <p>{copy.description}</p>
            </div>
          </div>

          <div className="iiode-split-half iiode-media-half iiode-media-half-right iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-copy-narrow w-full md:mr-auto">
              <PreorderMailtoForm
                labels={copy.fields}
                submitLabel={copy.submit}
                recipient={siteConfig.email}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
