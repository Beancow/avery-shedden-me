import { Flex } from "@radix-ui/themes";
import styles from "./styles.module.css";

export default function GlowWhenActive({
  children,
  isActive,
  style: customStyles,
}: {
  children: React.ReactNode;
  isActive: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <Flex
      direction="row"
      gap="2"
      align="center"
      justify="center"
      p="0"
      m="0"
      className={`${styles.glowItem} ${isActive ? `${styles.active}` : ""}`}
      style={customStyles}
    >
      {children}
    </Flex>
  );
}
