import { CTA } from "@/components/sections/CTA"
import { Features } from "@/components/sections/Features"
import { Gallery } from "@/components/sections/Gallery"
import { Hero } from "@/components/sections/Hero"
import { Story } from "@/components/sections/Story"
import { ThreeD } from "@/components/sections/ThreeD"
import { UseCases } from "@/components/sections/UseCases"
import { WorkWithUs } from "@/components/sections/WorkWithUs"
import { getMarketingCopy } from "@/content/marketing"
import { getLocale } from "@/lib/locale-server"

export default async function MarketingPage() {
  const locale = await getLocale()
  const copy = getMarketingCopy(locale)

  return (
    <>
      <Hero copy={copy.hero} />
      <Story copy={copy.story} />
      <Features copy={copy.features} />
      <ThreeD copy={copy.threeD} />
      <UseCases copy={copy.useCases} />
      <WorkWithUs copy={copy.workWithUs} />
      <Gallery copy={copy.gallery} />
      <CTA copy={copy.cta} />
    </>
  )
}
