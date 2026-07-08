import { HeroSection } from "@/components/home/HeroSection";
// import { StatsSection } from '@/components/home/StatsSection'
import { TreatmentsSection } from "@/components/home/TreatmentsSection";
import { GlobeSection } from "@/components/home/GlobeSection";
import { GlobalHealthcareNetwork } from "@/components/sections/GlobalHealthcareNetwork";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhyChooseMediVoyage } from "@/components/sections/WhyChooseMediVoyage";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      <GlobeSection />
      <GlobalHealthcareNetwork />
      <HowItWorksSection />
      <TreatmentsSection />
      <WhyChooseMediVoyage />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
