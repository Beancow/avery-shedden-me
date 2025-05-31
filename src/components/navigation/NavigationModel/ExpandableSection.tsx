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
  // Create a local copy of the section to avoid mutating the original and affecting the other navigation components
  const localSectionCopy = { ...section, items: [...section.items] };

  const pathName = usePathname();

  const isActive = (href: string) => {
    return pathName === href || pathName.endsWith(href + "/");
  };
  const activeSection = section.items.some((item) => {
    return isActive(item.href);
  });

  // Adds a default "Home" link if no items have a default property.
  // As the navRoutes is shared between mobile and desktop nav to be able to get
  // back to home on the mobile nav we need to ensure that the home link is
  // present as the component works a bit differently
  // If anothe section needs this I will need to refactor this logic as the Home label is hardcoded
  if (
    localSectionCopy.items.every((item) => item.type === "linkWithHref") &&
    localSectionCopy.sectionBaseHref
  ) {
    localSectionCopy.items.unshift({
      type: "linkWithHref",
      label: localSectionCopy.mobileNavLabel!,
      href: localSectionCopy.sectionBaseHref,
      mobileNavLabel: localSectionCopy.mobileNavLabel,
    });
  }

  return (
    <Accordion.Item
      key={localSectionCopy.label}
      value={localSectionCopy.label}
      className={styles.accordionItem}
    >
      <Accordion.Header className={styles.accordionHeader}>
        <Accordion.Trigger
          className={`${styles.accordionTrigger} ${
            activeSection ? styles.active : ""
          }`}
        >
          <CircleIcon className={styles.accordionCircle} />
          <span>{localSectionCopy.label}</span>
          <CheveronIconGlowWhenActive isActive={activeSection} />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.accordionContent}>
        <div className={styles.accordionContentInner}>
          {localSectionCopy.items.map((item) => {
            if (item.type === "linkWithSlug" || item.type === "linkWithHref") {
              return <LinkSection key={item.label} link={item} />;
            }
            return null;
          })}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
