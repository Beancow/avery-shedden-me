import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { Navigation } from "./Navigation";
import React from "react";

export function TopBar() {
  return (
    <header className={styles.topBar}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="favicon.svg"
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
