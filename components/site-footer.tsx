import Link from "next/link"
import { Clock, Mail, MapPin, Phone, Smile } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600">
                <Smile className="h-4 w-4 text-white" />
              </span>
              <span className="text-lg font-bold text-white">DentalCare</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Phòng khám nha khoa hiện đại, chăm sóc tận tâm với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị
              chuẩn y khoa.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-teal-400">
                  Cạo vôi &amp; đánh bóng
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400">
                  Trám răng sứ
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-teal-400">
                  Tư vấn miễn phí
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#why-us" className="hover:text-teal-400">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-400">
                  Đánh giá khách hàng
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-teal-400">
                  Quản trị
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                <span>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-teal-500" />
                <a href="tel:19001234" className="hover:text-teal-400">
                  1900 1234
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-teal-500" />
                <a href="mailto:contact@dentalcare.vn" className="hover:text-teal-400">
                  contact@dentalcare.vn
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 text-teal-500" />
                <span>T2–T7: 8:00 – 20:00 | CN: 8:00 – 17:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} DentalCare. Bảo lưu mọi quyền.
      </div>
    </footer>
  )
}
