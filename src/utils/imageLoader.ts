import { ImageLoaderProps } from "next/image";

export default function staticImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const imageBasePath = process.env.BASE_PATH
    ? `/${process.env.BASE_PATH}`
    : "";
  console.log("Image loader called with src:", src, imageBasePath);
  return `${imageBasePath}${src}?w=${width}&q=${quality || 75}`;
}
