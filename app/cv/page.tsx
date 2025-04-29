import React from "react";
import Summary from "./components/Summary";
import Employment from "./components/Employment";
import Education from "./components/Education";
import TechnicalSkills from "./components/TechnicalSkills";
import ProjectExperience from "./components/ProjectExperience";
import SoftSkills from "./components/SoftSkills";
import Languages from "./components/Languages";
import styles from "./cv.module.css"; // Assuming you have this CSS module

export default function CVPage() {
  return (
    <div className={styles.cvContainer}>
      <h1>Avery Shedden's CV/Resume</h1>
      <Summary />
      <Employment />
      <Education />
      <TechnicalSkills />
      <ProjectExperience />
      <SoftSkills />
      <Languages />
    </div>
  );
}
