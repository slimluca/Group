import type { Metadata } from "next";
import { site } from "@/data/site";

type MetadataImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export function pageMetadata(title: string, description: string, path = "", image?: MetadataImage): Metadata {
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
      images: [image ?? { url: site.logoPath, width: 512, height: 512, alt: "Dog Haven Group circular logo." }]
    }
  };
}

export function jsonLd(data: unknown) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
