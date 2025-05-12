import { ExperienceTabs } from "../components/ExperienceTabs";

export const generateStaticParams = async () => [
  { tabs: ["Tab1"] },
  { tabs: ["Tab2"] },
  { tabs: ["Tab3"] },
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
  return <ExperienceTabs experience={tabs} />;
}
