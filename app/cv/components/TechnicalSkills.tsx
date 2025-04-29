import React from "react";
import styles from "../cv.module.css";

const skills = {
  "Full-stack": [
    "JavaScript",
    "Kotlin",
    "React",
    "Vue.js",
    "Angular.js",
    "PHP",
  ],
  "Cloud & DevOps": [
    "AWS",
    "AWS Cognito",
    "AWS Amplify",
    "GitHub Actions",
    "CI/CD",
  ],
  Monitoring: ["DataDog", "RUM", "Sentry"],
  "Tools & Systems": [
    "Figma",
    "Git",
    "Capacitor.js",
    "PWA",
    "SQL",
    "Linux",
    "Bash",
  ],
};

export default function TechnicalSkills() {
  return (
    <section className={styles.section}>
      <h2>Technical Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className={styles.skillCategory}>
          <strong>{category}:</strong> {items.join(", ")}
        </div>
      ))}
    </section>
  );
}
