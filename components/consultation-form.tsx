"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
// Update the import path below if your form components are located elsewhere
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
//import { useToast } from "@/components/ui/use-toast"
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
  //const { toast } = useToast()
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
    //   toast({
    //     title: "Gửi yêu cầu tư vấn thành công!",
    //     description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    //     variant: "default",
    //   })
    //   form.reset()
    // } catch (error) {
    //   toast({
    //     title: "Có lỗi xảy ra",
    //     description: "Không thể gửi yêu cầu tư vấn. Vui lòng thử lại sau.",
    //     variant: "destructive",
    //   })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-gray-50 py-16" id="consultation">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">Đăng Ký Tư Vấn</h2>
          <p className="mb-8 text-center text-gray-600">
            Điền thông tin của bạn dưới đây để nhận tư vấn miễn phí từ đội ngũ chuyên gia của chúng tôi
          </p>

          <div className="rounded-lg bg-white p-6 shadow-md md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="scaling" />
                            </FormControl>
                            <FormLabel className="font-normal">Cạo vôi</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="porcelain" />
                            </FormControl>
                            <FormLabel className="font-normal">Trám răng sứ</FormLabel>
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

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
