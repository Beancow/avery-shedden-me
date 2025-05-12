import * as TabsPrimitive from "@radix-ui/react-tabs";
import Link from "next/link";

export async function ExperienceTabs({ experience }: { experience: string }) {
  const tabs = [
    { value: "Tab1", label: "Tab 1" },
    { value: "Tab2", label: "Tab 2" },
    { value: "Tab3", label: "Tab 3" },
  ];

  return (
    <TabsPrimitive.Root value={experience}>
      <TabsPrimitive.List aria-label="Experience sections">
        {tabs.map((tab) => (
          <Link key={tab.value} href={`/experience/${tab.value}`}>
            <TabsPrimitive.Trigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsPrimitive.Trigger>
          </Link>
        ))}
      </TabsPrimitive.List>
      <TabsPrimitive.Content value={experience}>
        <div>
          <h2>{experience}</h2>
          <p>Content for {experience}</p>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
