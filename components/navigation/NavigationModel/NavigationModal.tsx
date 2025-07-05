import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { NavSection } from "../../../types/navigationProps";
import styles from "./styles.module.css";
import { LinkSection } from "./LinkSection";
import ExpandableSection from "./ExpandableSection";

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
            Welcome to the Navigation Menu
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
              if (
                section.type === "linkWithHref" ||
                section.type === "linkWithSlug"
              ) {
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
