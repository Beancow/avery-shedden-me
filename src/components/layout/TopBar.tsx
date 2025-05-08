import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { Navigation } from "./Navigation";

const imagePath = process.env.REPO_NAME || "";

export function TopBar() {
  return (
    <header className={styles.topBar}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src={`${imagePath}/favicon.svg`}
          alt="Avery Shedden Portfolio Logo"
          width={40}
          height={40}
          className={styles.logoImage}
          priority
        />
      </Link>

      <Navigation />
    </header>
  );
}
