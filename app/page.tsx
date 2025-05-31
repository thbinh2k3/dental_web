import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ConsultationForm from "@/components/consultation-form"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <HeroSection />
      <ServicesSection />
      <ConsultationForm />
    </main>
  )
}
