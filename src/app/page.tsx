import CTA from "@/components/landing/CTA";
import Benefits from "@/components/landing/Benefits";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent/40">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
