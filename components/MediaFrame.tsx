import Image from "next/image";
import type { ImageRef } from "@/data/content";

const generatedEditorialImageBySource: Array<[string, string]> = [
  ["/lab/", "/images/doghavengroup/visuals/doghaven-lab-tools-v2.webp"],
  ["/academy/", "/images/doghavengroup/visuals/doghaven-academy-reading-room-v2.webp"],
  ["/journal/", "/images/doghavengroup/visuals/doghaven-journal-editorial-desk-v2.webp"],
  ["/downloads/", "/images/doghavengroup/visuals/download-library-guides-v2.webp"],
  ["/travel/", "/images/doghavengroup/visuals/international-dog-travel-v2.webp"],
  ["/countries/", "/images/doghavengroup/visuals/world-atlas-premium-map-v2.webp"],
  ["/home/", "/images/doghavengroup/visuals/global-dog-ownership-network-v2.webp"],
];

export function resolveEditorialImageSrc(src: string) {
  if (!src.endsWith(".svg")) return src;
  return generatedEditorialImageBySource.find(([segment]) => src.includes(segment))?.[1]
    ?? "/images/doghavengroup/visuals/global-dog-ownership-network-v2.webp";
}

export function MediaFrame({ image }: { image: ImageRef }) {
  return (
    <figure className="media-frame">
      <Image src={resolveEditorialImageSrc(image.src)} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 48vw" />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
