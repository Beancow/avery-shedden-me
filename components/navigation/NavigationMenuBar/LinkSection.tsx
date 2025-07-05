import { LinkSectionItem } from "../../../types/navigationProps";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import styles from "./styles.module.css";
import { Flex } from "@radix-ui/themes";

export function LinkSection({ link }: { link: LinkSectionItem }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  if (link.type === "linkWithIcon") {
    return (
      <Flex
        direction="row"
        gap="2"
        align="center"
        justify="center"
        p="0.35rem 0.35rem"
        m="0"
      >
        <Link
          href={{ href: `${pathname}/`, query: { theme: link.value } }}
          className={styles.navigationMenuIconButton}
          key={link.value}
          aria-label={`Switch to ${link.value} theme`}
        >
          {link.icon}
        </Link>
      </Flex>
    );
  }
  if (link.type === "linkWithSlug") {
    return (
      <GlowWhenActive key={link.href} isActive={isActive(link.href)}>
        <Link href={link.href} className={styles.navigationMenuLink}>
          {link.label}
        </Link>
      </GlowWhenActive>
    );
  }
  if (link.type === "linkWithHref") {
    return (
      <GlowWhenActive key={link.href} isActive={isActive(link.href)}>
        <Link href={link.href} className={styles.navigationMenuLink}>
          {link.label}
        </Link>
      </GlowWhenActive>
    );
  }
}
