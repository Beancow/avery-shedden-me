import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { TopBar } from "./layout/TopBar";

export const metadata: Metadata = {
  title: "Averything",
  description: "My Portfolio and other stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
