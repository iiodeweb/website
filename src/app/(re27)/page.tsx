import { CTA } from "@/components/sections/CTA"
import { Features } from "@/components/sections/Features"
import { Gallery } from "@/components/sections/Gallery"
import { Hero } from "@/components/sections/Hero"
import { Story } from "@/components/sections/Story"
import { ThreeD } from "@/components/sections/ThreeD"
import { UseCases } from "@/components/sections/UseCases"
import { WorkWithUs } from "@/components/sections/WorkWithUs"
import { getRe27Copy } from "@/content/re27"
import { getLocale } from "@/lib/locale-server"

export default async function Re27Page() {
  const locale = await getLocale()
  const copy = getRe27Copy(locale)

  return (
    <>
      <Hero copy={copy.hero} />
      <Story copy={copy.story} />
      <Features copy={copy.features} />
      <UseCases copy={copy.useCases} />
      <ThreeD copy={copy.threeD} />
      <Gallery copy={copy.gallery} />
      <WorkWithUs copy={copy.workWithUs} />
      <CTA copy={copy.cta} />
    </>
  )
}
