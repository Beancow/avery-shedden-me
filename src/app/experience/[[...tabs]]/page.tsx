import { ExperienceTabs } from "../components/ExperienceTabs";

export async function generateStaticParams() {
  return [
    { experience: "Tab1" },
    { experience: "Tab2" },
    { experience: "Tab3" },
  ];
}

export default async function Experience() {
  return <ExperienceTabs />;
}
