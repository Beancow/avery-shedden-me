import React from "react";
import styles from "../cv.module.css";

export default function Education() {
  return (
    <section className={styles.section}>
      <h2>Education & Certifications</h2>
      <div>
        <h3>University of Bedfordshire</h3>
        <p>BSc (Hons) - Computer Science and Software Engineering (2:1)</p>
        <p>Add-on modules: Basic Mandarin (pass), German (pass)</p>
      </div>
      <div>
        <h3>Certifications</h3>
        <ul>
          <li>ITIL Foundation Certification – BCS/QA</li>
          <li>NVQ Level 2 in Business Administration</li>
        </ul>
      </div>
    </section>
  );
}
