import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Header } from "@/components/Header";
import { FloatingActions } from "@/components/FloatingActions";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <WhyChoose />
        <Testimonials />
        <Process />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <div className="h-16 md:hidden" />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </div>
  );
}
