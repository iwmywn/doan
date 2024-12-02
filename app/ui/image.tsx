import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function ImageTag({ src, alt, className }: ImageProps) {
  return (
    <span className={twMerge("flex h-[85px] justify-center", className)}>
      <Image
        src={src}
        alt={alt}
        width={85}
        height={85}
        loading="eager"
        priority
        sizes="(max-width: 640px) 33vw, 85px"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </span>
  );
}
