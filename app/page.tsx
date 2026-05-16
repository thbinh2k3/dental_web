import HeroSection from "@/components/hero-section"
import TrustSection from "@/components/trust-section"
import ServicesSection from "@/components/services-section"
import WhyChooseSection from "@/components/why-choose-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaBanner from "@/components/cta-banner"
import ConsultationForm from "@/components/consultation-form"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CtaBanner />
      <ConsultationForm />
    </main>
  )
}
