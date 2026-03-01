import type { ReactNode } from "react"

import { TopNav } from "@/components/nav/TopNav"
import { Footer } from "@/components/sections/Footer"
import { SectionSoftLock } from "@/components/sections/SectionSoftLock"
import { getLocale } from "@/lib/locale-server"
import { getTheme } from "@/lib/theme-server"

type Re27LayoutProps = {
  children: ReactNode
}

export default async function Re27Layout({ children }: Re27LayoutProps) {
  const locale = await getLocale()
  const theme = await getTheme()

  return (
    <div className="bg-background text-foreground">
      <TopNav locale={locale} theme={theme} />
      <main>
        <SectionSoftLock />
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  )
}
