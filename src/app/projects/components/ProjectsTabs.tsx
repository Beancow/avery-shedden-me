"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

interface ExperienceTabsProps {
  value: string;
  onValueChange: (value: string) => void;
}

const tabs = [
  { value: "Tab1", label: "Tab 1" },
  { value: "Tab2", label: "Tab 2" },
  { value: "Tab3", label: "Tab 3" },
];

export function ProjectTabs({
  value: activeTabValue,
  onValueChange: handleTabChange,
}: ExperienceTabsProps) {
  return (
    <TabsPrimitive.Root value={activeTabValue} onValueChange={handleTabChange}>
      <TabsPrimitive.List aria-label="Experience sections">
        {tabs.map((tab) => (
          <>
            <TabsPrimitive.Trigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsPrimitive.Trigger>
          </>
        ))}
      </TabsPrimitive.List>
      <TabsPrimitive.Content value={activeTabValue}>
        <div>
          <h2>{activeTabValue}</h2>
          <p>Content for {activeTabValue}</p>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
