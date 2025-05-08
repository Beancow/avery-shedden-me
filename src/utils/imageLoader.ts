import { ImageLoaderProps } from "next/image";

const imageBasePath = `/${process.env.REPO_NAME}` || "";

export default function staticImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `${imageBasePath}${src}?w=${width}&q=${quality || 75}`;
}
