import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import {
  DynamicSectionItem,
  LinkSectionItem,
  NavSection,
  TriggerSectionItem,
} from "../navigationProps";
import styles from "./styles.module.css";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import { Collapsible } from "radix-ui";
import { usePathname } from "next/navigation";

function TriggerSection({ section }: { section: TriggerSectionItem }) {
  const pathName = usePathname();
  const isActive = (href: string) => {
    return pathName === href || pathName.startsWith(href + "/");
  };
  return (
    <GlowWhenActive
      key={section.label}
      isActive={isActive(section.sectionBaseHref)}
    >
      <Collapsible.Trigger className={styles.mobileNavLink} asChild>
        <Button variant="soft" size="3">
          <span>{section.label}</span>
        </Button>
      </Collapsible.Trigger>
    </GlowWhenActive>
  );
}

function LinkSection({ link }: { link: LinkSectionItem }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };
  return (
    <GlowWhenActive key={link.href} isActive={isActive(link.href)}>
      <Link href={link.href} className={styles.mobileNavLink}>
        {link.label}
      </Link>
    </GlowWhenActive>
  );
}

function CollapsibleContent({ section }: { section: DynamicSectionItem }) {
  return (
    <Collapsible.Content>
      {
        <Flex direction="column" gap="2">
          {section.pattern}
        </Flex>
      }
    </Collapsible.Content>
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
              gap="8"
              align="stretch"
              justify="between"
              height="fill"
            >
              {navRoutes.map((link) => {
                if (link.type === "link") {
                  return <LinkSection key={link.label} link={link} />;
                }
                if (link.type === "trigger") {
                  return (
                    <Collapsible.Root key={link.label}>
                      <Collapsible.Trigger
                        className={styles.mobileNavLink}
                        asChild
                      >
                        <Button
                          variant="soft"
                          size="3"
                          className={styles.mobileNavLink}
                        >
                          {link.label}
                        </Button>
                      </Collapsible.Trigger>
                      <Collapsible.Content>
                        <Flex direction="column" gap="2">
                          {link.items.map((item) => {
                            if (item.type === "link") {
                              return (
                                <LinkSection key={item.label} link={item} />
                              );
                            }
                            if (item.type === "dynamic") {
                              return (
                                <LinkSection key={item.label} link={item} />
                              );
                            }
                            return null;
                          })}
                        </Flex>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  );
                }
                return null;
              })}
            </Flex>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
