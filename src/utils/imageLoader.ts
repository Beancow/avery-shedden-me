import { ImageLoaderProps } from "next/image";

const imageBasePath = process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : "";

export default function staticImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  console.log("Image loader called with src:", src, imageBasePath);
  return `${imageBasePath}${src}?w=${width}&q=${quality || 75}`;
}
