import React from "react";
import styles from "./layout.module.css";
import { Navigation } from "./Navigation"; // Import the new component

export function TopBar() {
  return (
    <header className={styles.topBar}>
      {/* You might want a logo or title link here */}
      <a href="/" className={styles.navLink}>
        {" "}
        {/* Example Title Link */}
        Avery Shedden
      </a>
      <Navigation /> {/* Use the Navigation component */}
    </header>
  );
}
