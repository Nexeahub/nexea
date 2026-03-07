import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearnSection from "./components/LearnSection";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FeaturesGrid from "./components/FeaturesGrid";
import AboutUsSection from "./components/AboutUsSection";
import PricingSection from "./components/PricingSection";
import RoadmapsSection from "./components/RoadmapsSection";
import ServicePackages from "./components/ServicePackages";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <PricingSection />
      <RoadmapsSection />
      <ServicesSection />
      <ServicePackages />
    </>
  );
}
