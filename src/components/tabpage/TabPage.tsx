import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Flex } from "@radix-ui/themes";
import styles from "./styles.module.css";
import Link from "next/link";

export async function TabPage({
  currentTab,
  tabs,
  ariaLabel,
  sectionTitle,
}: {
  currentTab: string;
  tabs: { label: React.ReactNode; value: string }[];
  ariaLabel: string;
  sectionTitle: string;
}) {
  return (
    <TabsPrimitive.Root value={currentTab}>
      <TabsPrimitive.List aria-label={ariaLabel}>
        <TabsPrimitive.Tabs
          dir={"ltr"}
          orientation="horizontal"
          defaultValue={currentTab}
          className={styles.tabList}
        >
          {tabs.map((item) => (
            <TabsPrimitive.Trigger asChild value={item.value} key={item.value}>
              <Link
                key={item.value}
                href={item.value}
                className={styles.tabLink}
              >
                {item.label}
              </Link>
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.Tabs>
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
