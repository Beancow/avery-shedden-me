import * as Nav from "@radix-ui/react-navigation-menu";
import { NavigationProps } from "../navigationProps";
import styles from "./styles.module.css";
export function NavigationMenuBar({ navLinks, checkActive }: NavigationProps) {
  return (
    <>
      <Nav.Root className={styles.navigationMenuBarRoot}>
        <Nav.List className={styles.navigationMenuList}>
          {navLinks.map((link) => (
            <Nav.Item key={link.href}>
              <Nav.Link
                href={link.href}
                className={`${styles.navigationMenuLink} glowItem ${
                  checkActive(link.href) ? "active" : ""
                }`}
              >
                {link.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav.List>
      </Nav.Root>
    </>
  );
}
