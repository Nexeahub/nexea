import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearnSection from "./components/LearnSection";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LearnSection />
      <ServicesSection />
      <Testimonials />
    </>
  );
}
