import { ExperienceTabs } from "../components/ExperienceTabs";

export function generateStaticParams() {
  return [
    { experience: "Tab1" },
    { experience: "Tab2" },
    { experience: "Tab3" },
  ];
}

export default function Experience() {
  return <ExperienceTabs />;
}
