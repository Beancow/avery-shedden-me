import { ProjectTabs } from "../components/ProjectsTabs";

export function generateStaticParams() {
  return [{ projectId: "Tab1" }, { projectId: "Tab2" }, { projectId: "Tab3" }];
}

export async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  return <ProjectTabs params={params} />;
}
