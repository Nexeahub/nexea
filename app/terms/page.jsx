import TermsContextComponent from "./component/TermsContextComponent";

export const metadata = {
  title: "Terms of Service | Nexea Web Academy",
  description:
    "Read the terms and conditions for using Nexea Web Academy services...",
  openGraph: {
    title: "Terms of Service | Nexea Web Academy",
    description:
      "Read the terms and conditions for using Nexea Web Academy services...",
    url: "https://www.nexea.com.ng/terms",
    siteName: "Nexea",
    images: [
      {
        url: "/nexea-logo.png",
        width: 1024,
        height: 1024,
        alt: "Nexea Terms of Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Nexea Web Academy",
    description:
      "Read the terms and conditions for using Nexea Web Academy services...",
    images: ["/nexea-logo.png"],
  },
};

export default function Page() {
  return <TermsContextComponent />;
}
