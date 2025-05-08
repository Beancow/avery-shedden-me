import "@radix-ui/themes/styles.css";
import "../styles/global.css";
import { Theme } from "@radix-ui/themes";
import { TopBar } from "../components/layout/TopBar";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Averything",
  description: "My Portfolio and other stuff",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Theme
          accentColor="plum"
          grayColor="sage"
          radius="medium"
          panelBackground="solid"
        >
          <TopBar />
          <>{children}</>
        </Theme>
      </body>
    </html>
  );
}
