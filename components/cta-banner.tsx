import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 via-teal-600 to-cyan-600 px-6 py-12 text-center text-white shadow-xl shadow-teal-600/25 md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-amber-400/20" />
          <h2 className="relative text-2xl font-bold md:text-3xl">Sẵn sàng cho nụ cười khỏe đẹp?</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-teal-50">
            Đặt lịch khám miễn phí hôm nay — đội ngũ tư vấn sẽ liên hệ trong vòng 15 phút.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 text-teal-700 shadow-lg hover:bg-teal-50"
            >
              <a href="#consultation" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Đặt lịch ngay
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="tel:19001234" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Gọi 1900 1234
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
