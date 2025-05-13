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
  const basePath = process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : "";
  return (
    <Image
      src={`${basePath}${src}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
