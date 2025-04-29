import React from "react";
import styles from "../cv.module.css";

const softSkills = [
  "Leadership",
  "Collaboration",
  "Sprint Planning",
  "Project Management",
  "Stakeholder Reporting",
  "Technical Support",
  "Documentation",
  "Process Improvement",
];

export default function SoftSkills() {
  return (
    <section className={styles.section}>
      <h2>Soft Skills</h2>
      <ul className={styles.listColumns}>
        {" "}
        {/* Optional: Use CSS for columns */}
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
