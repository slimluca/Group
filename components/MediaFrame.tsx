import Image from "next/image";
import type { ImageRef } from "@/data/content";

export function MediaFrame({ image }: { image: ImageRef }) {
  return (
    <figure className="media-frame">
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 48vw" />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
