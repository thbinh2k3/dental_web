import { SmileIcon as Tooth } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="mb-6 rounded-full bg-sky-100 p-3">
            <Tooth className="h-10 w-10 text-sky-600" />
          </div>
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Dịch Vụ Nha Khoa Chất Lượng Cao</h1>
          <p className="mb-8 text-xl text-gray-600">
            Chúng tôi cung cấp các dịch vụ nha khoa chuyên nghiệp với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị
            hiện đại
          </p>
          <a
            href="#consultation"
            className="rounded-full bg-sky-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-sky-700"
          >
            Đặt Lịch Tư Vấn
          </a>
        </div>
      </div>
    </section>
  )
}
