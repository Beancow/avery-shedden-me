import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import { Navigation } from "./Navigation";
import React from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function TopBar() {
  return (
    <header className={styles.topBar}>
      <Link href="/" className={styles.logoLink}>
        <Image
          // Temp fix: Manually prepend the basePath to the src it was not loading on gh pages
          src={`${basePath}/favicon.svg`}
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
