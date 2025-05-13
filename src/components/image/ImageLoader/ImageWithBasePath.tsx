import Image from "next/image";

export function ImageWithBasePath({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const srcWithSlash = src.startsWith("/") ? src : `/${src}`;
  const basePath = process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : "";
  const fixedPath = `${basePath}${srcWithSlash}`;
  return (
    <Image
      src={fixedPath}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
