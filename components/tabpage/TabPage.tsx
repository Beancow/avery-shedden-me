import * as TabsPrimitive from "@radix-ui/react-tabs";
import styles from "./styles.module.css";
import Link from "next/link";
import { LinkSectionWithSlug } from "@/types/navigationProps";

export async function TabPage({
  currentTab,
  tabs,
  ariaLabel,
  sectionTitle,
}: {
  currentTab: string;
  tabs: LinkSectionWithSlug[];
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
            <TabsPrimitive.Trigger
              asChild
              value={item.info.title}
              key={item.info.title}
            >
              <Link
                key={item.info.title}
                href={item.info.title}
                className={styles.tabLink}
              >
                {item.info.title}
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
