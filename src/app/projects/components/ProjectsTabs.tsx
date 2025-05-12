import * as TabsPrimitive from "@radix-ui/react-tabs";
import Link from "next/link";

export async function ProjectTabs({ projectId }: { projectId: string }) {
  const tabs = [
    { value: "Tab1", label: "Tab 1" },
    { value: "Tab2", label: "Tab 2" },
    { value: "Tab3", label: "Tab 3" },
  ];

  return (
    <TabsPrimitive.Root value={projectId}>
      <TabsPrimitive.List aria-label="project sections">
        {tabs.map((tab) => (
          <Link key={tab.value} href={`/projects/${tab.value}`}>
            <TabsPrimitive.Trigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsPrimitive.Trigger>
          </Link>
        ))}
      </TabsPrimitive.List>
      <TabsPrimitive.Content value={projectId}>
        <div>
          <h2>{projectId}</h2>
          <p>Content for {projectId}</p>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
