"use client";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex, Link } from "@radix-ui/themes";
import styles from "./styles.module.css";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work-history", label: "Work History" },
  ];
  return (
    <>
      <NavigationMenu className={styles.NavigationMenuRoot}>
        <NavigationMenuList className={styles.NavigationMenuList}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.glowItem} ${styles.desktopNavLink} ${
                isActive(link.href) ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className={styles.mobileNavTriggerContainer}>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="soft" size="3" className={styles.burgerButton}>
              <HamburgerMenuIcon width="24" height="24" />
            </Button>
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay className={styles.dialogOverlay} />

            <DialogContent
              title="Navigation Menu"
              className={styles.dialogContent}
            >
              <DialogTitle className={styles.dialogTitle}>
                Navigation Menu
              </DialogTitle>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="3"
                  className={styles.dialogCloseButton}
                  aria-label="Close"
                >
                  <Cross2Icon width="24" height="24" />
                </Button>
              </DialogClose>

              <Flex
                direction="column"
                gap="4"
                align="center"
                justify="center"
                height="100%"
              >
                {navLinks.map((link) => (
                  <DialogClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.glowItem} ${styles.mobileNavLink} ${
                        isActive(link.href) ? styles.active : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DialogClose>
                ))}
              </Flex>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </>
  );
}
