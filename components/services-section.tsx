import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SmileIcon as Tooth } from "lucide-react"
import { Scaling } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Dịch Vụ Của Chúng Tôi</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-sky-50 pb-6">
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-sky-100 p-3">
                  <Scaling className="h-8 w-8 text-sky-600" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">Cạo Vôi</CardTitle>
              <CardDescription className="text-center text-gray-600">
                Làm sạch cao răng, mảng bám và các vết ố
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Loại bỏ cao răng và mảng bám</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Làm sạch vùng dưới nướu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Đánh bóng bề mặt răng</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Phòng ngừa các bệnh nha chu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Cải thiện hơi thở</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-sky-50 pb-6">
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-sky-100 p-3">
                  <Tooth className="h-8 w-8 text-sky-600" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">Trám Răng Sứ</CardTitle>
              <CardDescription className="text-center text-gray-600">
                Phục hồi răng bị hư hỏng với vật liệu sứ cao cấp
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Phục hồi răng bị sâu, mẻ, vỡ</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Vật liệu sứ cao cấp, bền đẹp</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Màu sắc tự nhiên, phù hợp với răng thật</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Không chứa thủy ngân, an toàn cho sức khỏe</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">✓</span>
                  <span>Tuổi thọ cao, ít bị đổi màu theo thời gian</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
