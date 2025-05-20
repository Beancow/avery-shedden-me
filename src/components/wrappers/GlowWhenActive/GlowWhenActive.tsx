import { Flex } from "@radix-ui/themes";
import styles from "./styles.module.css";

export default function GlowWhenActive({
  children,
  isActive,
  styles: customStyles,
}: {
  children: React.ReactNode;
  isActive: boolean;
  styles?: React.CSSProperties;
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
      style={customStyles}
    >
      {children}
    </Flex>
  );
}
