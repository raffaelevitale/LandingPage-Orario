import { Navbar } from "./components/layout/Navbar";
import { CTAFooter } from "./components/layout/CTAFooter";
import { HeroSection } from "./components/sections/HeroSection";
import { FeatureCards } from "./components/sections/FeatureCards";
import { ShowcaseSection } from "./components/sections/ShowcaseSection";
import { DarkModeDemo } from "./components/sections/DarkModeDemo";
import { HowItWorks } from "./components/sections/HowItWorks";
import { StatsSection } from "./components/sections/StatsSection";
import { Testimonials } from "./components/sections/Testimonials";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureCards />
        <ShowcaseSection />
        <DarkModeDemo />
        <HowItWorks />
        <StatsSection />
        <Testimonials />
        <CTAFooter />
      </main>
    </>
  );
}
