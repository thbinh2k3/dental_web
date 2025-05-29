"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  service: z.enum(["scaling", "porcelain"]),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export async function sendConsultationEmail(data: FormData) {
  // Validate the form data
  const validatedData = formSchema.parse(data)

  // In a real application, you would use your SMTP credentials
  // For demonstration purposes, we'll just log the data
  console.log("Sending email with data:", validatedData)

  // Example of how to set up nodemailer (uncomment and configure in production)
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const serviceText = validatedData.service === "scaling" ? "Cạo vôi" : "Trám răng sứ"

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL, // Your clinic's email
    subject: `Yêu cầu tư vấn từ ${validatedData.name}`,
    html: `
      <h2>Thông tin khách hàng:</h2>
      <p><strong>Họ tên:</strong> ${validatedData.name}</p>
      <p><strong>Số điện thoại:</strong> ${validatedData.phone}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Dịch vụ quan tâm:</strong> ${serviceText}</p>
      <p><strong>Lời nhắn:</strong> ${validatedData.message || "Không có"}</p>
    `,
  }

  await transporter.sendMail(mailOptions)
  

  // For demo purposes, we'll simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
