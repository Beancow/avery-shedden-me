import { Flex } from "@radix-ui/themes";
import styles from "./styles.module.css";

export default function GlowWhenActive({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Flex
      direction="row"
      gap="2"
      align="center"
      justify="center"
      p="0"
      m="0"
      className={`${styles.GlowWhenActive} glowItem ${
        isActive ? "active" : ""
      }`}
    >
      {children}
    </Flex>
  );
}
