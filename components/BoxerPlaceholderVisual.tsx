import Image from "next/image";

export function BoxerPlaceholderVisual() {
  return (
    <figure className="boxer-placeholder-visual">
      <Image
        src="/brand/dog-haven-group-boxer-head-clean.webp"
        alt="White Boxer dog representing the Dog Haven Group global dog information platform"
        fill
        sizes="(max-width: 520px) calc(100vw - 24px), (max-width: 900px) calc(100vw - 32px), 46vw"
      />
    </figure>
  );
}
