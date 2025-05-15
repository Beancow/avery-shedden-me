import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, ChevronDownIcon, Flex } from "@radix-ui/themes";
import Link from "next/link";
import {
  LinkSectionItem,
  NavSection,
  TriggerSectionItem,
} from "../navigationProps";
import styles from "./styles.module.css";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import { Collapsible } from "radix-ui";
import { usePathname } from "next/navigation";

function TriggerSection({ section }: { section: TriggerSectionItem }) {
  return (
    <Collapsible.Trigger asChild className={styles.mobileNavLink}>
      <Button variant="outline" size="3">
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: ".5rem",
          }}
        >
          {section.label} <ChevronDownIcon />
        </span>
      </Button>
    </Collapsible.Trigger>
  );
}

function LinkSection({ link }: { link: LinkSectionItem }) {
  return (
    <Dialog.Close asChild>
      <Link href={link.href} className={styles.mobileNavLink}>
        {link.label}
      </Link>
    </Dialog.Close>
  );
}

export default function NavigationModal({
  navRoutes,
}: {
  navRoutes: NavSection[];
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
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, var(--accent-1), var(--accent-5))",
              }}
            >
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

              {navRoutes.map((link) => {
                if (link.type === "link") {
                  return <LinkSection key={link.label} link={link} />;
                }
                if (link.type === "trigger") {
                  return (
                    <Collapsible.Root key={link.label}>
                      <TriggerSection section={link} />
                      <Collapsible.Content>
                        {link.items.map((item) => {
                          if (item.type === "link") {
                            return <LinkSection key={item.label} link={item} />;
                          }
                          if (item.type === "dynamic") {
                            return <LinkSection key={item.label} link={item} />;
                          }
                          return null;
                        })}
                      </Collapsible.Content>
                    </Collapsible.Root>
                  );
                }
                return null;
              })}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
