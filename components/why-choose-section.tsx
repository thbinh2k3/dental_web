import { BadgeCheck, Heart, Sparkles, Wallet } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const reasons = [
  {
    icon: BadgeCheck,
    title: "Bác sĩ chuyên môn cao",
    description: "Đội ngũ có chứng chỉ hành nghề, thường xuyên cập nhật kỹ thuật điều trị mới nhất.",
  },
  {
    icon: Sparkles,
    title: "Trang thiết bị hiện đại",
    description: "Máy chụp X-quang kỹ thuật số, ghế nha khoa êm ái, quy trình vô trùng nghiêm ngặt.",
  },
  {
    icon: Wallet,
    title: "Báo giá minh bạch",
    description: "Tư vấn chi phí rõ ràng trước khi điều trị, không phát sinh bất ngờ.",
  },
  {
    icon: Heart,
    title: "Chăm sóc tận tâm",
    description: "Theo dõi sau điều trị, hỗ trợ đặt lịch tái khám và tư vấn chăm sóc tại nhà.",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="bg-slate-50 py-20" id="why-us">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="Cam kết"
          title="Vì sao khách hàng chọn DentalCare?"
          description="Chúng tôi kết hợp chuyên môn y khoa với trải nghiệm thân thiện, giúp bạn an tâm trong suốt quá trình điều trị."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-100 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-500/20 transition-transform group-hover:scale-105">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
