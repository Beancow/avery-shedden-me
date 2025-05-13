import { ImageLoaderProps } from "next/image";

const imageBasePath = process.env.NEXT_PUBLIC_REPO_NAME
  ? `/${process.env.NEXT_PUBLIC_REPO_NAME}`
  : "";

export default function staticImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `${imageBasePath}${src}?w=${width}&q=${quality || 75}`;
}
