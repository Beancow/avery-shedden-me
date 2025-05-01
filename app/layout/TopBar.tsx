import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import { Navigation } from "./Navigation";

export function TopBar() {
  return (
    <header className={styles.topBar}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/favicon.png"
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
