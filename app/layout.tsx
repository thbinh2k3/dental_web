import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "DentalCare | Nha khoa thẩm mỹ & điều trị chuyên sâu",
  description:
    "Phòng khám nha khoa hiện đại tại TP.HCM. Dịch vụ cạo vôi, trám răng sứ với đội ngũ bác sĩ giàu kinh nghiệm. Đặt lịch khám miễn phí.",
  keywords: ["nha khoa", "cạo vôi", "trám răng sứ", "đặt lịch nha khoa", "TP.HCM"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
