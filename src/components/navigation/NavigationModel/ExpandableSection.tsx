import { usePathname } from "next/navigation";
import { TriggerSectionItem } from "../navigationProps";
import styles from "./styles.module.css";
import { CircleIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import CheveronIconGlowWhenActive from "@/components/styledIcons/IconGlowWhenActive/CheveronIconGlowWhenActive";
import { LinkSection } from "./LinkSection";

export default function ExpandableSection({
  section,
}: {
  section: TriggerSectionItem;
}) {
  const pathName = usePathname();

  const isActive = (href: string) => {
    return pathName === href || pathName.endsWith(href + "/");
  };
  const activeSection = section.items.some((item) => {
    return isActive(item.href);
  });

  return (
    <Accordion.Item
      key={section.label}
      value={section.label}
      className={styles.accordionItem}
    >
      <Accordion.Header className={styles.accordionHeader}>
        <Accordion.Trigger
          className={`${styles.accordionTrigger} ${
            activeSection ? styles.active : ""
          }`}
        >
          <CircleIcon className={styles.accordionCircle} />
          <span>{section.label}</span>
          <CheveronIconGlowWhenActive isActive={activeSection} />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.accordionContent}>
        <div className={styles.accordionContentInner}>
          {section.items.map((item) => {
            if (item.type === "link") {
              return <LinkSection key={item.label} link={item} />;
            }
            return null;
          })}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
