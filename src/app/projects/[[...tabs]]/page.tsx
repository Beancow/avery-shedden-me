import { ProjectTabs } from "../components/ProjectsTabs";

export function generateStaticParams() {
  return [{ projects: "Tab1" }, { projects: "Tab2" }, { projects: "Tab3" }];
}

export default async function Projects() {
  return <ProjectTabs />;
}
