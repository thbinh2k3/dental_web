import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scaling, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: Scaling,
    title: "Cạo vôi & đánh bóng",
    description: "Làm sạch cao răng, mảng bám và các vết ố — phòng ngừa bệnh nha chu hiệu quả.",
    price: "Từ 200.000đ",
    features: [
      "Loại bỏ cao răng và mảng bám",
      "Làm sạch vùng dưới nướu",
      "Đánh bóng bề mặt răng",
      "Cải thiện hơi thở",
    ],
  },
  {
    icon: Sparkles,
    title: "Trám răng sứ",
    description: "Phục hồi răng bị hư hỏng với vật liệu sứ cao cấp, màu sắc tự nhiên.",
    price: "Từ 500.000đ / răng",
    features: [
      "Phục hồi răng sâu, mẻ, vỡ",
      "Vật liệu sứ cao cấp, bền đẹp",
      "Không chứa thủy ngân, an toàn",
      "Tuổi thọ cao, ít đổi màu",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="Dịch vụ"
          title="Giải pháp nha khoa chuyên sâu"
          description="Bảng giá minh bạch, tư vấn chi tiết trước khi điều trị — không phát sinh bất ngờ."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-slate-100 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl"
            >
              <CardHeader className="border-b border-slate-50 bg-gradient-to-br from-teal-50 to-cyan-50/50 pb-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-teal-100">
                    <service.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-800 ring-1 ring-amber-100">
                    {service.price}
                  </span>
                </div>
                <CardTitle className="text-2xl text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-base text-slate-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t border-slate-50 bg-slate-50/50 pt-6">
                <Button
                  asChild
                  className="w-full rounded-full bg-teal-600 hover:bg-teal-700"
                >
                  <Link href="#consultation">Đặt lịch dịch vụ này</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          * Giá có thể thay đổi tùy tình trạng răng. Liên hệ để nhận báo giá chính xác.
        </p>
      </div>
    </section>
  )
}
