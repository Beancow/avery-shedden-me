import * as Nav from "@radix-ui/react-navigation-menu";
import { NavSection } from "../navigationProps";
import styles from "./styles.module.css";
import { TriggerSection } from "./TriggerSection";
import { LinkSection } from "./LinkSection";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useThemeContext } from "@radix-ui/themes";

const isStaticBuild = process.env.BUILD_TARGET === "static";

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
              return <LinkSection key={item.label} link={item} />;
            } else {
              console.error("Unknown item type:", item);
              return null;
            }
          })}
          {!isStaticBuild && (
            <LinkSection
              link={{
                type: "linkWithIcon",
                icon: appearance === "dark" ? <SunIcon /> : <MoonIcon />,
                value: appearance === "dark" ? "light" : "dark",
              }}
            />
          )}
        </Nav.List>
      </Nav.Root>
    </span>
  );
}
