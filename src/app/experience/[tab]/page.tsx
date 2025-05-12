import { ExperienceTabs } from "../components/ExperienceTabs";

export const generateStaticParams = async () => [
  { tab: "Tab1" },
  { tab: "Tab2" },
  { tab: "Tab3" },
];

export default async function Page({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;
  console.log("tab", tab);
  if (!tab) {
    return <div>Loading...</div>;
  }
  return <ExperienceTabs tab={tab} />;
}
