import React from "react";
import styles from "../cv.module.css";

// Define an interface for Job details for better type safety
interface Job {
  title: string;
  company: string;
  location: string;
  dates: string;
  details: string[];
  skills?: { [key: string]: string[] }; // Optional skills section
}

const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "SumUp",
    location: "London, UK",
    dates: "Oct 2020 – June 2023",
    details: [
      "Founding member of the Order and Pay team following the Goodtill acquisition.",
      "Developed QR-based payments service - per table (primarily for hospitality use) self service bill and payment with POS integration and receipt-sharing functionality in React.",
      "Integrated Stripe and SumUp payment APIs.",
      "Built self-service kiosk systems management portal with multilingual support.",
      "Led dependency management mini project for multiple repositories.",
      "Led the Kiosk internationalisation project.",
      "Enhanced monitoring across platforms using DataDog and Real User Monitoring (RUM).",
      "Worked on log/data sanitation (Removal of sensitive data before logging in third party tools).",
      "Prototyped hardware ideas with raspberry pi’s and more during hackdays.",
    ],
    skills: {
      "Languages & Frameworks": [
        "JavaScript",
        "Kotlin",
        "React",
        "Vue.js",
        "Angular.js",
        "PHP",
      ],
      "Cloud & DevOps": ["AWS", "GitHub Actions", "AWS Amplify", "AWS Cognito"],
      "CI/CD & Monitoring": ["DataDog", "RUM", "Sentry", "Renovate"],
      "Tools & Systems": [
        "Figma",
        "Git",
        "Jira",
        "Notion",
        "Coda",
        "excalidraw",
        "incident.io",
        "AWS Amplify",
      ],
      Other: ["Smartling (git integrated translation service)"],
      "Soft Skills": [
        "Sprint planning",
        "Sprint Retros",
        "Project Coordination",
        "Documentation",
      ],
    },
  },
  {
    title: "Software Engineer",
    company: "The Goodtill Co. Ltd (by SumUp)",
    location: "Remote",
    dates: "Sept 2020 – Oct 2020",
    details: [
      "Led redesign of the merchant portal in Vue 2.",
      "Developed a PWA dashboard using React and Capacitor.js.",
      "Gathered product requirements and reported to the stakeholders.",
      "Implemented analytics and reporting features for merchants.",
    ],
    skills: {
      "Languages & Frameworks": [
        "Vue 2",
        "React",
        "JavaScript",
        "PHP",
        "Angular.js",
      ],
      "Tools & Systems": ["Git", "Git issues", "GSuite", "Slack"],
      "Soft Skills": [
        "Requirements collection",
        "Project Management",
        "Design",
      ],
    },
  },
  {
    title: "IT Support Technician / DevOps",
    company: "Satellite Information Services (SIS)",
    location: "Milton Keynes, UK",
    dates: "2011 – 2016",
    details: [
      "Delivered application support and DevOps automation solutions.",
      "Built and maintained monitoring systems and service desk tools.",
      "Managed infrastructure across Linux, Windows, VMware, and phone systems.",
      "Led internal projects including security audits, system imaging, and training.",
    ],
    skills: {
      DevOps: [
        "VM management",
        "Environment setup",
        "Windows shell scripts (Powershell, batch file and similar)",
        "PHP",
        "java",
        "Linux support",
      ],
      Monitoring: ["Solarwinds", "IBM WebSphere MQ", "Service monitoring"],
      "Tools & Systems": [
        "Cisco PBX",
        "Microsoft Exchange",
        "Active Directory",
        "Blackberry server",
      ],
      Other: ["IT Procurement", "Provisioning mobile phones and equipment"],
      "Soft Skills": [
        "Phone support",
        "project planning",
        "managing user expectations",
        "Client phone support",
        "Incident management",
      ],
    },
  },
  {
    title: "3rd Line IT Support",
    company: "SalesMaster UK Ltd",
    location: "Milton Keynes, UK",
    dates: "2010 – 2011",
    details: [
      "Provided high-level support across multiple OS and server environments.",
      "Wrote automation scripts (Bash, batch and VB script on Windows)",
      "Maintained SQL databases and CRM systems, phone systems and dealership specialist equipment.",
      "Administered Active Directory, system imaging, and backups.",
    ],
  },
  {
    title: "Network/Database Administrator",
    company: "Incentive Plus",
    location: "Milton Keynes, UK",
    dates: "2007 – 2009",
    details: [
      "Maintained CRM, accounting, and backup systems.",
      "Built Linux FTP and fax servers.",
      "Audited IT security and supported staff training.",
    ],
  },
  {
    title: "Line Manager",
    company: "The Co-operative Group",
    location: "Milton Keynes, UK",
    dates: "2004 – 2007",
    details: [
      "Supervised store operations, managed staff, training, and stock.",
      "Completed S.T.A.R. management training and handled refurbishment projects.",
    ],
  },
  // Add other jobs similarly...
];

// Component for rendering skills if they exist
const JobSkills: React.FC<{ skills?: { [key: string]: string[] } }> = ({
  skills,
}) => {
  if (!skills) return null;
  return (
    <div className={styles.jobSkills}>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <strong>{category}:</strong> {items.join(", ")}
        </div>
      ))}
    </div>
  );
};

export default function Employment() {
  return (
    <section className={styles.section}>
      <h2>Employment</h2>
      {jobs.map((job, index) => (
        <div key={index} className={styles.job}>
          <h3>
            {job.title} – {job.company}
          </h3>
          <p>
            <em>
              {job.location} — {job.dates}
            </em>
          </p>
          <ul>
            {job.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          <JobSkills skills={job.skills} />
        </div>
      ))}
      {/* Add Additional Roles section */}
      <div className={styles.job}>
        <h3>Additional Roles</h3>
        <ul>
          <li>
            <strong>Next PLC</strong> – Night Delivery Team (2009–2010)
          </li>
          <li>
            <strong>Beds SU</strong> – Photographer (2016–2017)
          </li>
        </ul>
      </div>
    </section>
  );
}
