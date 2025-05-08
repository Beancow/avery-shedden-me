import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { NavigationProps } from "../navigationProps";

export default function NavigationModal({
  navLinks,
  checkActive,
}: NavigationProps) {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="soft" size="3">
            <HamburgerMenuIcon width="24" height="24" />
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content title="Navigation Menu">
            <Dialog.Title>Navigation Menu</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="3" aria-label="Close">
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
                    className={`.glowItem ${
                      checkActive(link.href) ? ".active" : ""
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
