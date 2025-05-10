import * as Nav from "@radix-ui/react-navigation-menu";
import {
  LinkSectionItem,
  TriggerSectionItem,
  NavigationProps,
} from "../navigationProps";
import styles from "./styles.module.css";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import Link from "next/link";

function LinkSection({
  item,
  checkActive,
}: {
  item: LinkSectionItem;
  checkActive: (x: string) => boolean;
}) {
  return (
    <GlowWhenActive key={item.label} isActive={checkActive(item.href)}>
      <Nav.Item key={item.label}>
        <Link href={item.href}>{item.label}</Link>
      </Nav.Item>
    </GlowWhenActive>
  );
}

function TriggerSection({
  item,
  checkActive,
}: {
  item: TriggerSectionItem;
  checkActive: (x: string) => boolean;
}) {
  return (
    <Nav.Item key={item.title}>
      <Nav.Trigger className={styles.navigationMenuTrigger}>
        {item.title}
      </Nav.Trigger>
      <Nav.Content className={styles.navigationMenuContent}>
        <Nav.List className={styles.navigationMenuListSub}>
          {item.items.map((link) => (
            <LinkSection
              key={link.label}
              item={link}
              checkActive={checkActive}
            />
          ))}
        </Nav.List>
        <div className={styles.navigationMenuArrow} />
      </Nav.Content>
    </Nav.Item>
  );
}

export function NavigationMenuBar({ navItems, checkActive }: NavigationProps) {
  return (
    <>
      <Nav.Root className={styles.navigationMenuRoot}>
        <Nav.List className={styles.navigationMenuList}>
          {navItems.map((item) => {
            if (item.type === "trigger") {
              return (
                <TriggerSection
                  key={item.title}
                  item={item}
                  checkActive={checkActive}
                />
              );
            } else {
              return (
                <LinkSection
                  key={item.label}
                  item={item}
                  checkActive={checkActive}
                />
              );
            }
          })}
        </Nav.List>
      </Nav.Root>
    </>
  );
}
