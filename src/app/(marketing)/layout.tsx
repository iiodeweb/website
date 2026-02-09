import type { ReactNode } from "react"

import { Footer } from "@/components/sections/Footer"
import { TopNav } from "@/components/nav/TopNav"
import { getLocale } from "@/lib/locale-server"
import { getTheme } from "@/lib/theme-server"

type MarketingLayoutProps = {
  children: ReactNode
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  const locale = await getLocale()
  const theme = await getTheme()

  return (
    <div className="bg-background text-foreground">
      <TopNav locale={locale} theme={theme} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  )
}
