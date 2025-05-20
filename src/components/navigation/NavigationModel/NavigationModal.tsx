import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import {
  CircleIcon,
  Cross2Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button, ChevronDownIcon } from "@radix-ui/themes";
import Link from "next/link";
import {
  LinkSectionItem,
  NavSection,
  TriggerSectionItem,
} from "../navigationProps";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";

function LinkSection({ link }: { link: LinkSectionItem }) {
  return (
    <Dialog.Close asChild>
      <Link href={link.href} className={styles.mobileNavLink}>
        <span>{link.label}</span>
      </Link>
    </Dialog.Close>
  );
}

function ExpandableSection({ section }: { section: TriggerSectionItem }) {
  const pathName = usePathname();

  // Check if the current path matches the section's base href only
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
        <Accordion.Trigger className={styles.accordionTrigger}>
          <GlowWhenActive
            styles={{ borderRadius: "999999999px" }}
            key={section.label}
            isActive={activeSection}
          >
            <CircleIcon className={styles.accordionCircle} />
          </GlowWhenActive>
          <span>{section.label}</span>
          <ChevronDownIcon
            width="24"
            height="24"
            className={styles.accordionChevron}
          />
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
