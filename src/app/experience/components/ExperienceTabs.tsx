import * as TabsPrimitive from "@radix-ui/react-tabs";

export async function ExperienceTabs({
  params,
}: {
  params: Promise<{ experience: string }>;
}) {
  const { experience } = await params;
  const tabs = [
    { value: "Tab1", label: "Tab 1" },
    { value: "Tab2", label: "Tab 2" },
    { value: "Tab3", label: "Tab 3" },
  ];

  return (
    <TabsPrimitive.Root value={experience}>
      <TabsPrimitive.List aria-label="Experience sections">
        {tabs.map((tab) => (
          <div key={tab.value}>
            <TabsPrimitive.Trigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsPrimitive.Trigger>
          </div>
        ))}
      </TabsPrimitive.List>
      <TabsPrimitive.Content value={"Tab1"}>
        <div>
          <h2>{experience}</h2>
          <p>Content for {experience}</p>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
