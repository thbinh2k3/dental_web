"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, Phone, User, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { sendConsultationEmail } from "@/app/action"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Vui lòng nhập họ tên của bạn.",
  }),
  phone: z.string().min(10, {
    message: "Vui lòng nhập số điện thoại hợp lệ.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
  service: z.enum(["scaling", "porcelain"], {
    required_error: "Vui lòng chọn dịch vụ bạn quan tâm.",
  }),
  message: z.string().optional(),
})

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await sendConsultationEmail(values)

      toast(
        <div className="flex items-center space-x-3">
          <CheckCircle2 className="text-green-500 w-7 h-7" />
          <div>
            <div className="font-bold text-lg text-green-700">Gửi yêu cầu tư vấn thành công!</div>
            <div className="text-base text-gray-700">
              Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </div>
          </div>
        </div>
      )

      form.reset()
    } catch {
      toast(
        <div>
          <div className="font-semibold text-red-600">Có lỗi xảy ra</div>
          <div className="text-sm text-gray-600">
            Không thể gửi yêu cầu tư vấn. Vui lòng thử lại sau.
          </div>
        </div>
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-teal-50/30 py-20" id="consultation">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-wide text-teal-700">
            Đặt lịch
          </span>
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-900 md:text-4xl">Đăng ký tư vấn miễn phí</h2>
          <p className="mb-8 text-center text-slate-600">
            Điền form bên dưới — chúng tôi liên hệ trong vòng{" "}
            <strong className="text-teal-700">15 phút</strong> trong giờ làm việc.
          </p>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Họ và tên */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Họ và tên</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input className="pl-10" placeholder="Nguyễn Văn A" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Số điện thoại */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input className="pl-10" placeholder="0912345678" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input className="pl-10" placeholder="example@gmail.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Dịch vụ bạn quan tâm</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid gap-3 sm:grid-cols-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border border-slate-200 px-4 py-3 has-[[data-state=checked]]:border-teal-500 has-[[data-state=checked]]:bg-teal-50">
                            <FormControl>
                              <RadioGroupItem value="scaling" className="border-teal-600 text-teal-600" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">Cạo vôi &amp; đánh bóng</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border border-slate-200 px-4 py-3 has-[[data-state=checked]]:border-teal-500 has-[[data-state=checked]]:bg-teal-50">
                            <FormControl>
                              <RadioGroupItem value="porcelain" className="border-teal-600 text-teal-600" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">Trám răng sứ</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lời nhắn (không bắt buộc)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Nhập thông tin bổ sung hoặc câu hỏi của bạn..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Chia sẻ thêm thông tin về tình trạng răng miệng của bạn hoặc câu hỏi cụ thể.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="h-12 w-full rounded-full bg-teal-600 text-base font-semibold shadow-lg shadow-teal-600/20 hover:bg-teal-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu — Đặt lịch miễn phí"}
                </Button>
                <p className="text-center text-xs text-slate-500">
                  Thông tin của bạn được bảo mật và chỉ dùng để liên hệ tư vấn.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
