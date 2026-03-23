import Link from "next/link"

import { HubspotFormModalTrigger } from "@/components/forms/HubspotFormModalTrigger"
import { getDownloadsContent } from "@/content/downloads"
import { hubspotConfig } from "@/content/hubspot"
import { siteConfig } from "@/content/site"
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
              <p>{content.previewBody}</p>
              <p>{content.requestBody}</p>
            </div>
          </div>

          <div className="iiode-split-half iiode-media-half iiode-media-half-right iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-copy-narrow grid w-full gap-5 md:mr-auto">
              <HubspotFormModalTrigger
                triggerLabel={content.previewButtonLabel}
                modalTitle={hubspotConfig.forms.pressPreview.modalTitle}
                modalDescription={hubspotConfig.forms.pressPreview.modalDescription}
                portalId={hubspotConfig.forms.pressPreview.portalId}
                formId={hubspotConfig.forms.pressPreview.formId}
                region={hubspotConfig.forms.pressPreview.region}
                fallbackEmail={siteConfig.email}
                className="w-full bg-foreground px-6 py-3 text-xs uppercase text-background md:w-fit"
              />
              <p className="text-sm text-foreground/70">{content.previewNote}</p>
              <div className="border-t border-foreground/20 pt-4">
                <p>{content.pressContactLine}</p>
                <p className="pt-2">
                  <Link href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
                    {siteConfig.email}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
