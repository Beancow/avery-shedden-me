import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../navigation/Navigation";
import styles from "./styles.module.css";
import { ImageWithBasePath } from "../image/ImageWithBasePath";

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
