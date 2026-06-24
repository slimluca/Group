import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${site.url}${path ? `/${path}` : ""}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: site.logoPath, width: 1024, height: 1024, alt: "DogHaven Group circular logo." }]
    }
  };
}

export function jsonLd(data: unknown) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
