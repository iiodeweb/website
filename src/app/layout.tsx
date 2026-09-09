import type { Metadata } from "next"

import { CookieConsent } from "@/components/privacy/CookieConsent"
import { re27Assets } from "@/content/locales/assets"
import { getSiteCopy, siteConfig } from "@/content/site"
import { getLocale } from "@/lib/locale-server"
import { getTheme } from "@/lib/theme-server"

import appleTouchIcon from "../../public/apple-touch-icon.png"
import icon from "../../public/icon.png"

import "./globals.css"

const siteDescription =
  "iiode Re27 is a conscious light bulb that combines natural light quality, gentle smart control, and recycled materials in a serviceable design."

export const metadata: Metadata = {
  metadataBase: new URL("https://iiode.com"),
  title: {
    default: "iiode - Lighting made conscious",
    template: "%s | iiode",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://iiode.com",
    siteName: "iiode",
    title: "iiode - Lighting made conscious",
    description: siteDescription,
    images: [
      {
        url: re27Assets.heroImage,
        alt: "iiode Re27",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iiode - Lighting made conscious",
    description: siteDescription,
    images: [re27Assets.heroImage],
  },
  icons: {
    icon: [{ url: icon.src, type: "image/png", sizes: `${icon.width}x${icon.height}` }],
    apple: [{ url: appleTouchIcon.src, type: "image/png", sizes: `${appleTouchIcon.width}x${appleTouchIcon.height}` }],
    shortcut: [icon.src],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale()
  const theme = await getTheme()
  const copy = getSiteCopy(locale)
  const googleMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    siteConfig.analytics.googleMeasurementId

  return (
    <html
      lang={locale}
      className={theme === "dark" ? "dark" : ""}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <CookieConsent
          copy={copy.cookieConsent}
          googleMeasurementId={googleMeasurementId}
        />
        {children}
      </body>
    </html>
  )
}
