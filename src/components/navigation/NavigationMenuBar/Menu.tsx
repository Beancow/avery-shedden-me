import * as Nav from "@radix-ui/react-navigation-menu";
import { NavSection } from "../navigationProps";
import styles from "./styles.module.css";
import { TriggerSection } from "./TriggerSection";
import { LinkSection } from "./LinkSection";

export function NavigationMenuBar({ navItems }: { navItems: NavSection[] }) {
  return (
    <>
      <Nav.Root className={styles.navigationMenuRoot}>
        <Nav.List className={styles.navigationMenuList}>
          {navItems.map((item) => {
            if (item.type === "trigger") {
              return <TriggerSection key={item.title} section={item} />;
            } else if (item.type === "link") {
              return <LinkSection key={item.label} link={item} />;
            } else {
              console.error("Unknown item type:", item);
              return null;
            }
          })}
        </Nav.List>
      </Nav.Root>
    </>
  );
}
