import * as Nav from "@radix-ui/react-navigation-menu";
import { NavSection } from "../../../types/navigationProps";
import styles from "./styles.module.css";
import { TriggerSection } from "./TriggerSection";
import { LinkSection } from "./LinkSection";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Flex, Link, useThemeContext } from "@radix-ui/themes";

export function NavigationMenuBar({ navRoutes }: { navRoutes: NavSection[] }) {
  const { appearance } = useThemeContext();

  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <Nav.Root className={styles.navigationMenuBarRoot}>
        <Nav.List className={styles.navigationMenuList}>
          {navRoutes.map((item) => {
            if (item.type === "trigger") {
              return <TriggerSection key={item.label} section={item} />;
            } else if (
              item.type === "linkWithHref" ||
              item.type === "linkWithSlug"
            ) {
              return <LinkSection key={item.info.title} link={item} />;
            } else {
              console.error("Unknown item type:", item);
              return null;
            }
          })}
          <Flex
            direction="row"
            gap="2"
            align="center"
            justify="center"
            p="0.35rem 0.35rem"
            m="0"
          >
            <Link
              key="theme-toggle"
              href={`${appearance === "dark" ? "?theme=light" : "?theme=dark"}`}
              aria-label={`Switch to ${
                appearance === "dark" ? "light" : "dark"
              } theme`}
            >
              {appearance === "dark" ? <SunIcon /> : <MoonIcon />}
            </Link>
          </Flex>
        </Nav.List>
      </Nav.Root>
    </span>
  );
}
