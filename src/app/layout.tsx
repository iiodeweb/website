import type { Metadata } from "next"

import { getLocale } from "@/lib/locale-server"
import { getTheme } from "@/lib/theme-server"

import "./globals.css"

export const metadata: Metadata = {
  title: "iiode - Lighting made conscious",
  description:
    "iiode Re27 is a conscious lighting system that combines natural light quality, smart control, and recycled materials in a serviceable design.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale()
  const theme = await getTheme()

  return (
    <html
      lang={locale}
      className={theme === "dark" ? "dark" : ""}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
