import { ChevronRightIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

export default function CheveronIconGlowWhenActive({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <div
      className={`${styles.cssChevronRightIcon} ${
        isActive ? `${styles.active}` : ""
      }`}
    />
  );
}
