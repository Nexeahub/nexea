import RegisterComponent from "./component/RegisterComponent";

export const metadata = {
  title: "Register | Nexea Web Development Academy",
  description:
    "Register for the Nexea Frontend Development Cohort and start your journey to becoming a professional web developer. Limited seats available.",
  openGraph: {
    title: "Register | Nexea Web Development Academy",
    description:
      "Secure your spot in the Nexea founding cohort and start building real-world web development projects.",
    url: "https://www.nexea.com.ng/register",
    siteName: "Nexea",
    images: [
      {
        url: "/nexea-logo.png",
        width: 1024,
        height: 1024,
        alt: "Nexea Web Development Academy Registration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register | Nexea Web Development Academy",
    description:
      "Join the Nexea founding cohort and learn modern web development with real projects.",
    images: ["/nexea-logo.png"],
  },
};

export default function Page() {
  return <RegisterComponent />;
}
