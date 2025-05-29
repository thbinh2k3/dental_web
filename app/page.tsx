//import { Toaster } from "@/components/ui/toaster"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ConsultationForm from "@/components/consultation-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Toaster /> */}
      <HeroSection />
      <ServicesSection />
      <ConsultationForm />
    </main>
  )
}
