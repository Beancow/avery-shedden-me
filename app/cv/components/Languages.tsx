import React from "react";
import styles from "../cv.module.css";

export default function Languages() {
  return (
    <section className={styles.section}>
      <h2>Languages</h2>
      <ul>
        <li>
          <strong>English:</strong> Native
        </li>
        <li>
          <strong>Japanese:</strong> Limited (3+ years of private lessons)
        </li>
      </ul>
    </section>
  );
}
