import React from "react";
import styles from "./layout.module.css";

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return <main className={styles.mainContent}>{children}</main>;
}
