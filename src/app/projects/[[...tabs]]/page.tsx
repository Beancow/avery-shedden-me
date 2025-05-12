import { ProjectTabs } from "../components/ProjectsTabs";

export function generateStaticParams() {
  return [
    { experience: "Tab1" },
    { experience: "Tab2" },
    { experience: "Tab3" },
  ];
}

export default function Projects() {
  return <ProjectTabs />;
}
