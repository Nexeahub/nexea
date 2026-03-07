import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import PricingSection from "./components/PricingSection";
import RoadmapsSection from "./components/RoadmapsSection";
import ServicePackages from "./components/ServicePackages";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <PricingSection />
      <RoadmapsSection />
      <ServicesSection />
      <ServicePackages />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
}
