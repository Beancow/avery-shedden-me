"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

export function ProjectTabs() {
  const tabs = [
    { value: "Tab1", label: "Tab 1" },
    { value: "Tab2", label: "Tab 2" },
    { value: "Tab3", label: "Tab 3" },
  ];

  return (
    <TabsPrimitive.Root
      value={"Tab1"}
      onValueChange={(e) => console.log("Tab changed to:", e)}
    >
      <TabsPrimitive.List aria-label="Experience sections">
        {tabs.map((tab) => (
          <>
            <TabsPrimitive.Trigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsPrimitive.Trigger>
          </>
        ))}
      </TabsPrimitive.List>
      <TabsPrimitive.Content value={"Tab1"}>
        <div>
          <h2>{1}</h2>
          <p>Content for {1}</p>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
