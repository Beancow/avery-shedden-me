import * as Nav from "@radix-ui/react-navigation-menu";
import { LinkSectionItem, TriggerSectionItem } from "../navigationProps";
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
  const activeSection = section.items.some((item) => {
    return isActive(item.href);
  });
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
          >
            <Link
              href={section.sectionBaseHref}
              className={styles.navigationMenuTriggerLink}
            >
              <CircleIcon className={styles.triggerCircle} />
              <span>{section.label}</span>
              <CheveronIconGlowWhenActive isActive={activeSection} />
            </Link>
          </Nav.Trigger>
        </GlowWhenActive>
        <Nav.Content className={styles.navigationMenuContent}>
          {section.items.map((link) => (
            <LinkSection key={link.label} link={link} />
          ))}
        </Nav.Content>
      </Nav.Item>
    </div>
  );
}
