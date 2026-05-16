import { Award, HeartHandshake, ShieldCheck, Users } from "lucide-react"

const stats = [
  { icon: Award, value: "10+", label: "Năm kinh nghiệm" },
  { icon: Users, value: "5.000+", label: "Khách hàng tin tưởng" },
  { icon: HeartHandshake, value: "98%", label: "Hài lòng dịch vụ" },
  { icon: ShieldCheck, value: "100%", label: "Vô trùng chuẩn y khoa" },
]

export default function TrustSection() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50">
                <stat.icon className="h-6 w-6 text-teal-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900 md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
