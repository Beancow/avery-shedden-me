import * as Nav from "@radix-ui/react-navigation-menu";
import { TriggerSectionItem } from "../navigationProps";
import styles from "./styles.module.css";
import { LinkSection } from "./LinkSection";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import { usePathname } from "next/navigation";

export function TriggerSection({ section }: { section: TriggerSectionItem }) {
  const pathName = usePathname();
  const isActive = (href: string) => {
    return pathName === href || pathName.startsWith(href + "/");
  };

  return (
    <div style={{ position: "relative" }}>
      <Nav.Item key={section.label}>
        <GlowWhenActive
          key={section.label}
          isActive={isActive(section.sectionBaseHref)}
        >
          <Nav.Trigger className={styles.navigationMenuTrigger}>
            <span>{section.label}</span>
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
