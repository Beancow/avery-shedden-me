import * as TabsPrimitive from "@radix-ui/react-tabs";
import Link from "next/link";

export async function ExperienceTabs({ tab }: { tab: string }) {
  const tabs = [
    { value: "Tab1", label: "Tab 1" },
    { value: "Tab2", label: "Tab 2" },
    { value: "Tab3", label: "Tab 3" },
  ];

  return (
    <TabsPrimitive.Root value={tab}>
      <TabsPrimitive.List aria-label="Experience sections">
        {tabs.map((item) => (
          <Link key={item.value} href={`/experience/${item.value}`}>
            <TabsPrimitive.Trigger key={item.value} value={item.value}>
              {item.label}
            </TabsPrimitive.Trigger>
          </Link>
        ))}
      </TabsPrimitive.List>
      <TabsPrimitive.Content value={tab}>
        <div>
          <h2>{tab}</h2>
          <p>Content for {tab}</p>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
