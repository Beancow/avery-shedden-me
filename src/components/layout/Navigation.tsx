"use client";
import React from "react";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./styles.module.css";
import * as Nav from "@radix-ui/react-navigation-menu";
import {} from "next/router";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navLinks = [
    { href: "/", label: "Home", replace: false },
    { href: "/work-history", label: "Work History", replace: true },
  ];
  return (
    <>
      <Nav.Root className={styles.NavigationMenuRoot}>
        <Nav.List className={styles.NavigationMenuList}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              replace={link.replace}
              className={`${styles.glowItem} ${styles.desktopNavLink} ${
                isActive(link.href) ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </Nav.List>
      </Nav.Root>

      <div className={styles.mobileNavTriggerContainer}>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="soft" size="3" className={styles.burgerButton}>
              <HamburgerMenuIcon width="24" height="24" />
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className={styles.dialogOverlay} />

            <Dialog.Content
              title="Navigation Menu"
              className={styles.dialogContent}
            >
              <Dialog.Title className={styles.dialogTitle}>
                Navigation Menu
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button
                  variant="ghost"
                  size="3"
                  className={styles.dialogCloseButton}
                  aria-label="Close"
                >
                  <Cross2Icon width="24" height="24" />
                </Button>
              </Dialog.Close>

              <Flex
                direction="column"
                gap="4"
                align="center"
                justify="center"
                height="100%"
              >
                {navLinks.map((link) => (
                  <Dialog.Close asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.glowItem} ${styles.mobileNavLink} ${
                        isActive(link.href) ? styles.active : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </Flex>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
}
