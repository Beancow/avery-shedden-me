import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex, useThemeContext } from "@radix-ui/themes";
import Link from "next/link";
import { NavSection } from "../navigationProps";
import styles from "./styles.module.css";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import { Collapsible } from "radix-ui";
import { usePathname } from "next/navigation";

export default function NavigationModal({
  navItems,
}: {
  navItems: NavSection[];
}) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };
  return (
    <div className={styles.navigationModalRoot}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="soft" size="3">
            <HamburgerMenuIcon width="24" height="24" />
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.dialogOverlay} />
          <Dialog.Content className={styles.dialogContent}>
            <Dialog.Title className={styles.dialogTitle}>
              Navigation Menu
            </Dialog.Title>

            <Dialog.Close asChild>
              <Button
                variant="ghost"
                size="3"
                aria-label="Close"
                className={styles.dialogCloseButton}
              >
                <Cross2Icon width="24" height="24" />
              </Button>
            </Dialog.Close>

            <Flex
              direction="column"
              width="fill"
              gap="4"
              align="center"
              justify="between"
              height="fill"
            >
              {navItems.map((link) => (
                // <GlowWhenActive
                //   key={link.href}
                //   isActive={checkActive(link.href)}
                // >
                //   <Dialog.Close asChild key={link.href}>
                //     <Link href={link.href} className={styles.mobileNavLink}>
                //       {link.label}
                //     </Link>
                //   </Dialog.Close>
                // </GlowWhenActive>
                // This should add sections that expand for each trigger and links in the expanded sections
                <Collapsible.Root
                  key={link.type === "trigger" ? link.title : link.href}
                  className={styles.mobileNavLink}
                  onOpenChange={(open) => {
                    if (open) {
                      console.log("Opening section", open, link);
                    } else {
                      // Handle closing the section
                    }
                  }}
                >
                  <Collapsible.Trigger className={styles.mobileNavLink} asChild>
                    <Button
                      variant="soft"
                      size="3"
                      className={styles.mobileNavLink}
                    >
                      {link.type === "trigger" ? link.title : link.label}
                    </Button>
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    {link.type === "trigger" ? (
                      <Button>{link.content}</Button>
                    ) : (
                      <Dialog.Close asChild>
                        <Link href={link.href} className={styles.mobileNavLink}>
                          {link.label}
                        </Link>
                      </Dialog.Close>
                    )}
                  </Collapsible.Content>
                </Collapsible.Root>
              ))}
            </Flex>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
