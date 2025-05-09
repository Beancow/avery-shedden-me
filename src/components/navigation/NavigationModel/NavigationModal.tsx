import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { NavigationProps } from "../navigationProps";
import styles from "./styles.module.css";

export default function NavigationModal({
  navLinks,
  checkActive,
}: NavigationProps) {
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
              gap="4" // Radix Flex gap prop
              align="center"
              justify="center"
              height="100%" // Ensure Flex takes full height of Dialog.Content
            >
              {navLinks.map((link) => (
                // Dialog.Close ensures clicking a link closes the modal
                <Dialog.Close asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} glowItem ${
                      checkActive(link.href) ? "active" : ""
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
  );
}
