import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../navigation/Navigation";
import styles from "./styles.module.css";

function ImageWithBasePath({
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

export function TopBar() {
  return (
    <header className={styles.topBar}>
      <Link href="/" className={styles.logoLink}>
        <ImageWithBasePath
          src="/favicon.svg"
          alt="Avery Shedden Portfolio Logo"
          width={40}
          height={40}
          className={styles.logoImage}
        />
      </Link>
      <Navigation />
    </header>
  );
}
