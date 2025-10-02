import type React from "react"
import type { Metadata } from "next"
import { Nunito, Baloo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })
const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo" })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${baloo.variable} antialiased`}>
      <body className={`font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
