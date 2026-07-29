import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PromiseSection } from "@/components/PromiseSection";
import { FoundersSection } from "@/components/FoundersSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100%" }}>
      <Nav />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PromiseSection />
      <FoundersSection />
      <WaitlistSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
