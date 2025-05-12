import { ProjectTabs } from "../components/ProjectsTabs";

export const generateStaticParams = async () => [
  { tabs: ["Tab1", "Tab2", "Tab3"] },
];

export default async function Page({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;
  if (!tab) {
    return <div>Loading...</div>;
  }
  console.log("ProjectTabs", tab);
  return <ProjectTabs projectId={tab} />;
}
