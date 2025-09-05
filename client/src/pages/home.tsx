import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Integrations } from "@/components/sections/integrations";
import { Comparison } from "@/components/sections/comparison";
import { PricingVPS } from "@/components/sections/pricing-vps";
import { FreeTrial } from "@/components/sections/free-trial";
import { Testimonials } from "@/components/sections/testimonials";
import { Support } from "@/components/sections/support";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Statistics />
        <Features />
        <ProductShowcase />
        <Integrations />
        <Comparison />
        <PricingVPS />
        <FreeTrial />
        <Testimonials />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
