import * as TabsPrimitive from "@radix-ui/react-tabs";
import Link from "next/link";

export async function TabPage({
  currentTab,
  tabs,
  ariaLabel,
  sectionTitle,
}: {
  currentTab: string;
  tabs: { label: string; value: string }[];
  ariaLabel: string;
  sectionTitle: string;
}) {
  return (
    <TabsPrimitive.Root value={currentTab}>
      <TabsPrimitive.List aria-label={ariaLabel}>
        {tabs.map((item) => (
          <Link key={item.value} href={item.value}>
            <TabsPrimitive.Trigger key={item.value} value={item.value}>
              {item.label}
            </TabsPrimitive.Trigger>
          </Link>
        ))}
      </TabsPrimitive.List>
      <TabsPrimitive.Content value={currentTab}>
        <div>
          <h2>{sectionTitle}</h2>
          <p>Content for {currentTab}</p>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
