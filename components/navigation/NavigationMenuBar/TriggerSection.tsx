import * as Nav from "@radix-ui/react-navigation-menu";
import { TriggerSectionItem } from "../../../types/navigationProps";
import styles from "./styles.module.css";
import { LinkSection } from "./LinkSection";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CircleIcon } from "@radix-ui/react-icons";
import CheveronIconGlowWhenActive from "@/components/styledIcons/IconGlowWhenActive/CheveronIconGlowWhenActive";

export function TriggerSection({ section }: { section: TriggerSectionItem }) {
  const pathName = usePathname();
  const isActive = (href: string) => {
    return pathName === href || pathName.endsWith(href + "/");
  };
  const activeSection = section.items
    .filter((item) => item.type !== "linkWithIcon")
    .some((item) => {
      return isActive(item.href);
    });

  const getSectionHref = (section: TriggerSectionItem) => {
    return section.items.reduce((path, item) => {
      if (item.type === "linkWithSlug") {
        path = item.href;
      }
      return path;
    }, section.sectionBaseHref);
  };

  return (
    <div style={{ position: "relative" }}>
      <Nav.Item key={section.label}>
        <GlowWhenActive
          key={section.label}
          isActive={isActive(section.sectionBaseHref)}
        >
          <Nav.Trigger
            asChild
            className={`${styles.navigationMenuTrigger}  ${
              activeSection ? styles.active : ""
            }`}
            key={section.label}
          >
            <Link
              key={section.label}
              href={getSectionHref(section)}
              className={styles.navigationMenuTriggerLink}
            >
              <CircleIcon className={styles.triggerCircle} />
              <span>{section.label}</span>
              <CheveronIconGlowWhenActive isActive={activeSection} />
            </Link>
          </Nav.Trigger>
        </GlowWhenActive>
        <Nav.Content className={styles.navigationMenuContent}>
          {section.items
            .filter((item) => item.type !== "linkWithIcon")
            .map((link) => (
              <LinkSection key={link.info.title} link={link} />
            ))}
        </Nav.Content>
      </Nav.Item>
    </div>
  );
}
