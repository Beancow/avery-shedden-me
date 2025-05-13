import { LinkSectionItem } from "../navigationProps";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import styles from "./styles.module.css";

export function LinkSection({ link }: { link: LinkSectionItem }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };
  return (
    <GlowWhenActive key={link.href} isActive={isActive(link.href)}>
      <Link href={link.href} className={styles.navigationMenuLink}>
        {link.label}
      </Link>
    </GlowWhenActive>
  );
}
