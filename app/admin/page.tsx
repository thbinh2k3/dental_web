"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scaling, SmileIcon } from "lucide-react"

const ICONS = {
  scaling: <Scaling className="h-8 w-8 text-sky-600" />,
  tooth: <SmileIcon className="h-8 w-8 text-sky-600" />,
}

export default function AdminServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Cạo Vôi",
      description: "Làm sạch cao răng, mảng bám và các vết ố",
      icon: "scaling",
      features: [
        "Loại bỏ cao răng và mảng bám",
        "Làm sạch vùng dưới nướu",
        "Đánh bóng bề mặt răng",
        "Phòng ngừa các bệnh nha chu",
        "Cải thiện hơi thở",
      ],
    },
    {
      id: 2,
      title: "Trám Răng Sứ",
      description: "Phục hồi răng bị hư hỏng với vật liệu sứ cao cấp",
      icon: "tooth",
      features: [
        "Phục hồi răng bị sâu, mẻ, vỡ",
        "Vật liệu sứ cao cấp, bền đẹp",
        "Màu sắc tự nhiên, phù hợp với răng thật",
        "Không chứa thủy ngân, an toàn cho sức khỏe",
        "Tuổi thọ cao, ít bị đổi màu theo thời gian",
      ],
    },
  ])

  const [form, setForm] = useState({
    title: "",
    description: "",
    icon: "scaling",
    features: "",
  })

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault()
    setServices([
      ...services,
      {
        id: Date.now(),
        title: form.title,
        description: form.description,
        icon: form.icon,
        features: form.features.split("\n").filter(Boolean),
      },
    ])
    setForm({ title: "", description: "", icon: "scaling", features: "" })
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Quản trị dịch vụ</h1>
      <form onSubmit={handleAddService} className="mb-8 space-y-4 max-w-xl">
        <input
          className="border p-2 w-full"
          placeholder="Tên dịch vụ"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          className="border p-2 w-full"
          placeholder="Mô tả"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          required
        />
        <select
          className="border p-2 w-full"
          value={form.icon}
          onChange={e => setForm({ ...form, icon: e.target.value })}
        >
          <option value="scaling">Scaling</option>
          <option value="tooth">Tooth</option>
        </select>
        <textarea
          className="border p-2 w-full"
          placeholder="Các đặc điểm (mỗi dòng 1 đặc điểm)"
          value={form.features}
          onChange={e => setForm({ ...form, features: e.target.value })}
        />
        <button className="bg-sky-600 text-white px-4 py-2 rounded" type="submit">
          Thêm dịch vụ
        </button>
      </form>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map(service => (
          <Card key={service.id} className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-sky-50 pb-6">
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-sky-100 p-3">
                  {ICONS[service.icon as keyof typeof ICONS]}
                </div>
              </div>
              <CardTitle className="text-center text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-center text-gray-600">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-gray-700">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-sky-600">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}