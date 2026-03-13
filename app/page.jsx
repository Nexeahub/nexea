import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import PricingSection from "./components/PricingSection";
import RoadmapsSection from "./components/RoadmapsSection";
import ServicePackages from "./components/ServicePackages";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";

export const metadata = {
  title: "Nexea | Learn Web Development Online in Nigeria",
  description:
    "Join Nexea and master web development with practical projects, expert mentorship, and job-ready skills. Start building your future today!",
  keywords:
    "Web Development, Next.js, React, HTML, CSS, JavaScript, Online Academy, Nigeria, Learn to Code, Programming, Student Courses",
  openGraph: {
    title: "Nexea | Learn Web Development Online in Nigeria",
    description:
      "Join Nexea and master web development with practical projects, expert mentorship, and job-ready skills. Start building your future today!",
    url: "https://www.nexea.com.ng",
    siteName: "Nexea",
    images: [
      {
        url: "/nexea-logo.png",
        width: 1024,
        height: 1024,
        alt: "Nexea - Learn Web Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexea | Learn Web Development Online in Nigeria",
    description:
      "Join Nexea and master web development with practical projects, expert mentorship, and job-ready skills.",
    images: ["/nexea-logo.png"],
  },
};

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
      <FAQSection />
      <TestimonialsSection />
    </>
  );
}
