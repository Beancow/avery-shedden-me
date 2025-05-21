import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import {
  CircleIcon,
  Cross2Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import {
  LinkSectionItem,
  NavSection,
  TriggerSectionItem,
} from "../navigationProps";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import CheveronIconGlowWhenActive from "@/components/styledIcons/IconGlowWhenActive/CheveronIconGlowWhenActive";

function LinkSection({ link }: { link: LinkSectionItem }) {
  const pathName = usePathname();

  const isActive = (href: string) => {
    return pathName === href || pathName.endsWith(href + "/");
  };
  return (
    <GlowWhenActive key={link.label} isActive={isActive(link.href)}>
      <Dialog.Close asChild>
        <Link
          href={link.href}
          className={`${styles.mobileNavLink} ${
            isActive(link.href) ? styles.active : ""
          }`}
        >
          <span>{link.label}</span>
        </Link>
      </Dialog.Close>
    </GlowWhenActive>
  );
}

function ExpandableSection({ section }: { section: TriggerSectionItem }) {
  const pathName = usePathname();

  const isActive = (href: string) => {
    return pathName === href || pathName.endsWith(href + "/");
  };
  const activeSection = section.items.some((item) => {
    return isActive(item.href);
  });

  return (
    <Accordion.Item
      key={section.label}
      value={section.label}
      className={styles.accordionItem}
    >
      <Accordion.Header className={styles.accordionHeader}>
        <Accordion.Trigger
          className={`${styles.accordionTrigger} ${
            activeSection ? styles.active : ""
          }`}
        >
          <CircleIcon className={styles.accordionCircle} />
          <span>{section.label}</span>
          <CheveronIconGlowWhenActive isActive={activeSection} />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.accordionContent}>
        <div className={styles.accordionContentInner}>
          {section.items.map((item) => {
            if (item.type === "link") {
              return <LinkSection key={item.label} link={item} />;
            }
            return null;
          })}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default function NavigationModal({
  navRoutes,
}: {
  navRoutes: NavSection[];
}) {
  return (
    <div className={styles.navigationModalRoot}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="soft" size="3">
            <HamburgerMenuIcon width="24" height="24" />
          </Button>
        </Dialog.Trigger>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <Dialog.Description className={styles.vissiblyHiddenForScreenReaders}>
            This is a modal dialog. Clicking outside this dialog will dismiss
            it.
          </Dialog.Description>
          <Dialog.Title className={styles.vissiblyHiddenForScreenReaders}>
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
          <Accordion.Root
            type="single"
            className={styles.accordionRoot}
            collapsible
          >
            {navRoutes.map((section) => {
              if (section.type === "link") {
                return <LinkSection key={section.label} link={section} />;
              }
              if (section.type === "trigger") {
                return (
                  <ExpandableSection
                    key={section.sectionBaseHref}
                    section={section}
                  />
                );
              }
              return null;
            })}
          </Accordion.Root>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
