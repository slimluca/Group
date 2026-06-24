import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";
import { jsonLd } from "@/lib/metadata";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "DogHaven Group | Global Dog Ownership Platform",
    template: "%s"
  },
  description: site.description,
  alternates: { canonical: site.url },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    logo: `${site.url}${site.logoPath}`
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
      <body>
        {jsonLd(organization)}
        {jsonLd(website)}
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
