import { ExperienceTabs } from "../components/ExperienceTabs";

export const generateStaticParams = async () => [
  { experience: "Tab1" },
  { experience: "Tab2" },
  { experience: "Tab3" },
];

export default async function Page({
  params,
}: {
  params: Promise<{ experience: string }>;
}) {
  const { experience } = await params;
  return <ExperienceTabs experience={experience} />;
}
