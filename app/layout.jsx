import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import FooterSection from "./components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexea | Learn Web Development Online in Nigeria",
  description:
    "Join Nexea and master web development with practical projects, expert mentorship, and job-ready skills. Register now and start building your future!",
  keywords:
    "Web Development, Next.js, React, HTML, CSS, JavaScript, Online Academy, Nigeria, Learn to Code, Programming, Student Courses",
  author: "Nexea",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main>{children}</main>

        <FooterSection />
        <WhatsAppButton />
      </body>
    </html>
  );
}
