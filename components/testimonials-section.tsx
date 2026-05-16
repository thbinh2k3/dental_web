import { Quote, Star } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    name: "Nguyễn Thị Mai",
    role: "Khách hàng cạo vôi",
    content:
      "Bác sĩ rất nhẹ nhàng, giải thích rõ từng bước. Răng sạch hơn hẳn, không đau sau khi làm. Tôi sẽ quay lại định kỳ 6 tháng.",
    rating: 5,
  },
  {
    name: "Trần Văn Hùng",
    role: "Khách hàng trám răng sứ",
    content:
      "Màu răng tự nhiên, hài lòng với báo giá minh bạch. Phòng khám sạch sẽ, nhân viên tư vấn nhiệt tình.",
    rating: 5,
  },
  {
    name: "Lê Phương Anh",
    role: "Khách hàng tư vấn online",
    content:
      "Đặt lịch online rất nhanh, được gọi xác nhận trong vòng 15 phút. Cảm giác được chăm sóc chu đáo từ đầu đến cuối.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="Đánh giá"
          title="Khách hàng nói gì về chúng tôi"
          description="Hàng nghìn nụ cười tự tin được tạo nên từ sự tin tưởng và hài lòng của khách hàng."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-teal-100" />
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{item.content}&rdquo;</p>
              <div>
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-teal-600">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
