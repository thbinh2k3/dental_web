"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, Smile, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#services", label: "Dịch vụ" },
  { href: "#why-us", label: "Vì sao chọn chúng tôi" },
  { href: "#testimonials", label: "Đánh giá" },
  { href: "#consultation", label: "Đặt lịch" },
]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-sm">
            <Smile className="h-5 w-5 text-white" />
          </span>
          <div>
            <span className="block text-lg font-bold tracking-tight text-slate-900">DentalCare</span>
            <span className="hidden text-xs text-slate-500 sm:block">Nha khoa thẩm mỹ &amp; điều trị</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:19001234"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-700"
          >
            <Phone className="h-4 w-4 text-teal-600" />
            1900 1234
          </a>
          <Button
            asChild
            className="rounded-full bg-teal-600 px-6 shadow-md shadow-teal-600/20 hover:bg-teal-700"
          >
            <a href="#consultation">Đặt lịch khám</a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-slate-100 bg-white md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full rounded-full bg-teal-600 hover:bg-teal-700">
            <a href="#consultation" onClick={() => setMobileOpen(false)}>
              Đặt lịch khám miễn phí
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
