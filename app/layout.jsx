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
  metadataBase: new URL("https://www.nexea.com.ng"),

  title: {
    default: "Nexea Web Development Academy | Learn React & Next.js Online",
    template: "%s | Nexea Academy",
  },

  description:
    "Nexea is a modern web development academy. Learn React, Next.js, and frontend development online with real-world projects, mentorship, and job-ready training.",

  keywords: [
    "web development academy",
    "learn web development online",
    "React course online",
    "Next.js training",
    "frontend development course",
    "coding school",
  ],

  authors: [{ name: "Nexea", url: "https://www.nexea.com.ng" }],
  creator: "Nexea",
  publisher: "Nexea",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.nexea.com.ng",
  },

  openGraph: {
    title: "Nexea Web Development Academy | Learn React & Next.js Online",
    description:
      "Become a job-ready developer with Nexea. Learn React, Next.js, and modern web development from anywhere.",
    url: "https://www.nexea.com.ng",
    siteName: "Nexea",
    images: [
      {
        url: "/nexea-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexea Web Development Academy",
      },
    ],
    locale: "en",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexea Web Development Academy",
    description:
      "Learn web development online with Nexea. React, Next.js, and real-world projects.",
    images: ["/nexea-logo.png"],
  },

  category: "education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Nexea",
              url: "https://www.nexea.com.ng",
              logo: "https://www.nexea.com.ng/nexea-logo.png",
              sameAs: ["https://twitter.com/", "https://linkedin.com/"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
              },
            }),
          }}
        />

        <Navbar />
        <main>{children}</main>
        <FooterSection />
        <WhatsAppButton />
      </body>
    </html>
  );
}
