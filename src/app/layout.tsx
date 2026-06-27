import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"

import { site } from "@/lib/site"

import "./globals.css"

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading-family",
  weight: ["400", "500", "600", "700"]
})

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body-family",
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-paper font-body text-ink antialiased`}>
        {children}
      </body>
    </html>
  )
}

