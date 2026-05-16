import Image from "next/image"
import { ArrowRight, CheckCircle2, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import anh1 from "@/components/img/anh1.jpg"

const highlights = [
  "Bác sĩ có chứng chỉ hành nghề",
  "Báo giá minh bạch trước điều trị",
  "Trang thiết bị chuẩn y khoa",
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-white to-white">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-sm font-medium text-teal-800 shadow-sm">
              <Shield className="h-4 w-4 text-teal-600" />
              Phòng khám chuẩn y khoa · TP. Hồ Chí Minh
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-[3.25rem]">
              Nụ cười tự tin —{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Chăm sóc nha khoa
              </span>{" "}
              tận tâm
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              Đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại và quy trình vô trùng nghiêm ngặt — mang đến
              trải nghiệm an tâm cho cả gia đình bạn.
            </p>

            <ul className="mt-6 space-y-2.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-teal-600 px-8 shadow-lg shadow-teal-600/25 hover:bg-teal-700"
              >
                <a href="#consultation" className="flex items-center gap-2">
                  Đặt lịch khám miễn phí
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a
                href="#services"
                className="text-center text-sm font-semibold text-teal-700 underline-offset-4 hover:underline sm:text-left"
              >
                Xem dịch vụ &amp; bảng giá
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-teal-900/10 ring-1 ring-slate-200/80">
              <Image
                src={anh1}
                alt="Phòng khám nha khoa hiện đại"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl md:-left-6">
              <p className="text-2xl font-bold text-teal-600">4.9/5</p>
              <p className="text-sm text-slate-600">Đánh giá từ khách hàng</p>
            </div>

            <div className="absolute -right-2 top-6 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-2 shadow-md md:-right-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Ưu đãi</p>
              <p className="text-sm font-bold text-amber-900">Tư vấn miễn phí</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
