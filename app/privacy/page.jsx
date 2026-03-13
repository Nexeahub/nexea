import PrivacyPolicyComponent from "./component/PrivacyPolicyComponent";

export const metadata = {
  title: "Privacy Policy | Nexea Web Academy",
  description:
    "Learn how Nexea protects your personal data and privacy while using our web development academy and agency services.",
  openGraph: {
    title: "Privacy Policy | Nexea Web Academy",
    description:
      "Learn how Nexea protects your personal data and privacy while using our web development academy and agency services.",
    url: "https://www.nexea.com.ng/privacy",
    siteName: "Nexea",
    images: [
      {
        url: "/nexea-logo.png",
        width: 1024,
        height: 1024,
        alt: "Nexea Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Nexea Web Academy",
    description:
      "Learn how Nexea protects your personal data and privacy while using our web development academy and agency services.",
    images: ["/nexea-logo.png"],
  },
};

export default function Page() {
  return <PrivacyPolicyComponent />;
}
