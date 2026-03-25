import { AnimalIdentitiesSection } from "@/components/landing/animal-identities-section";
import { DifferentialsSection } from "@/components/landing/differentials-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { PositioningSection } from "@/components/landing/positioning-section";
import { ProductExperienceSection } from "@/components/landing/product-experience-section";
import { TrustSection } from "@/components/landing/trust-section";

export default function HomePage() {
  return (
    <main className="pb-8">
      <Header />
      <HeroSection />
      <PositioningSection />
      <AnimalIdentitiesSection />
      <DifferentialsSection />
      <ProductExperienceSection />
      <TrustSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
