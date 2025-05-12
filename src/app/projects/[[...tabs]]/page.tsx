import { ProjectTabs } from "../components/ProjectsTabs";

export async function generateStaticParams() {
  return [{ projects: "Tab1" }, { projects: "Tab2" }, { projects: "Tab3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  return <ProjectTabs params={params} />;
}
