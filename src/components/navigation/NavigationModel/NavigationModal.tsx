import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex, useThemeContext } from "@radix-ui/themes";
import Link from "next/link";
import { NavigationProps } from "../navigationProps";
import styles from "./styles.module.css";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";

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
              width="fill"
              gap="4"
              align="center"
              justify="between"
              height="fill"
            >
              {navLinks.map((link) => (
                <GlowWhenActive
                  key={link.href}
                  isActive={checkActive(link.href)}
                >
                  <Dialog.Close asChild key={link.href}>
                    <Link href={link.href} className={styles.mobileNavLink}>
                      {link.label}
                    </Link>
                  </Dialog.Close>
                </GlowWhenActive>
              ))}
            </Flex>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
