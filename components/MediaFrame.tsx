import Image from "next/image";
import type { ImageRef } from "@/data/content";
import { BoxerPlaceholderVisual } from "./BoxerPlaceholderVisual";

export function MediaFrame({ image }: { image: ImageRef }) {
  if (image.src.endsWith(".svg")) return <BoxerPlaceholderVisual />;

  return (
    <figure className="media-frame">
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 48vw" />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
