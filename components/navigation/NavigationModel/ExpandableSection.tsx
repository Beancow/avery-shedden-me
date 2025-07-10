import { usePathname } from "next/navigation";
import { TriggerSectionItem } from "../../../types/navigationProps";
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

  // Adds a default "Home" link if no items have a default property.
  // As the navRoutes is shared between mobile and desktop nav to be able to get
  // back to home on the mobile nav we need to ensure that the home link is
  // present as the component works a bit differently
  // If another section needs this I will need to refactor this logic as the Home label is hardcoded
  if (
    localSectionCopy.items.every((item) => item.type === "linkWithHref") &&
    localSectionCopy.sectionBaseHref
  ) {
    localSectionCopy.items.unshift({
      type: "linkWithHref",
      href: localSectionCopy.sectionBaseHref,
      label: localSectionCopy.label,
      info: {
        title: localSectionCopy.label,
        content: "Go to about home",
        meta: {
          description: "About page",
          keywords: ["home", "introduction"],
        },
      },
      mobileNavLabel: localSectionCopy.mobileNavLabel,
    });
  }

  const pathName = usePathname();

  const isActive = (href: string) => {
    return pathName === href || pathName.endsWith(href + "/");
  };

  const activeSection = localSectionCopy.items
    .filter((item) => item.type !== "linkWithIcon")
    .some((item) => {
      return isActive(item.href);
    });

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
          <span>
            {localSectionCopy.mobileNavLabel ?? localSectionCopy.label}
          </span>
          <CheveronIconGlowWhenActive isActive={activeSection} />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.accordionContent}>
        <div className={styles.accordionContentInner}>
          {localSectionCopy.items.map((item) => {
            if (item.type === "linkWithSlug" || item.type === "linkWithHref") {
              return <LinkSection key={item.info.title} link={item} />;
            }
            return null;
          })}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
