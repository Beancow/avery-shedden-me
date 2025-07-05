import { usePathname } from "next/navigation";
import {
  LinkSectionWithHref,
  LinkSectionWithSlug,
} from "../../../types/navigationProps";
import styles from "./styles.module.css";
import GlowWhenActive from "@/components/wrappers/GlowWhenActive/GlowWhenActive";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

export default function LinkSection({
  link,
}: {
  link: LinkSectionWithSlug | LinkSectionWithHref;
}) {
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

export { LinkSection };
