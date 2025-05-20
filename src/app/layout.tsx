import "./global.css";
import { Portal, Theme } from "@radix-ui/themes";
import { TopBar } from "../components/layout/TopBar";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

type Props = {
  children: React.ReactNode;
};

const basePath = process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : "";

export const metadata: Metadata = {
  title: "Averything",
  description: "My Portfolio and other stuff",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  manifest: `${basePath}/site.webmanifest`,
  appleWebApp: {
    capable: true,
    title: "Averything",
    statusBarStyle: "default",
    startupImage: [`${basePath}/favicon.svg`],
  },
};

const ToggleThemeSelect = dynamic(
  () => import("../components/themePanelToggle/ThemePanelToggle"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Theme
          accentColor="jade"
          grayColor="sage"
          radius="small"
          hasBackground
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--accent-1), var(--accent-3))",
          }}
        >
          <TopBar />
          <ToggleThemeSelect />
          <>{children}</>
          <Portal id="insideTheme" />
        </Theme>
      </body>
    </html>
  );
}
