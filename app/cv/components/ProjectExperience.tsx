import React from "react";
import styles from "../cv.module.css";

const projects = [
  "Greenfield Projects",
  "POS Systems",
  "QR Payments",
  "Self-service Kiosks",
  "Monitoring Systems",
  "Internationalisation",
  "Dependency Management",
  "Reporting & Analytics",
  "Prototyping",
  "Automation",
  "Infrastructure Management",
];

export default function ProjectExperience() {
  return (
    <section className={styles.section}>
      <h2>Project Experience</h2>
      <ul className={styles.listColumns}>
        {" "}
        {/* Optional: Use CSS for columns */}
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}
