import { ProjectTabs } from "../components/ProjectsTabs";

export const generateStaticParams = async () => [
  { tabs: ["Tab1", "Tab2", "Tab3"] },
];

export default async function Page({
  params,
}: {
  params: Promise<{ tabs: string }>;
}) {
  const { tabs } = await params;
  if (!tabs) {
    return <div>Loading...</div>;
  }
  console.log("ProjectTabs", tabs);
  return <ProjectTabs projectId={tabs} />;
}
