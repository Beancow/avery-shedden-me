import * as Nav from "@radix-ui/react-navigation-menu";
import { NavigationProps } from "../navigationProps";
import styles from "./styles.module.css";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import Link from "next/link";

export function NavigationMenuBar({ navLinks, checkActive }: NavigationProps) {
  return (
    <>
      <Nav.Root className={styles.navigationMenuBarRoot}>
        <Nav.List className={styles.navigationMenuList}>
          {navLinks.map((link) => (
            <Nav.Item key={link.href}>
              <GlowWhenActive key={link.href} isActive={checkActive(link.href)}>
                <Link href={link.href} className={styles.navigationMenuLink}>
                  {link.label}
                </Link>
              </GlowWhenActive>
            </Nav.Item>
          ))}
        </Nav.List>
      </Nav.Root>
    </>
  );
}
