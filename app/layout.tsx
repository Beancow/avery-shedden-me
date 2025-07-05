import "./global.css";
import { Portal } from "@radix-ui/themes";
import { TopBar } from "../components/layout/TopBar";
import type { Metadata } from "next";
import DynamicThemeWrapper from "@/components/wrappers/ThemeWrappers/DynamicThemeWrapper";
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

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <DynamicThemeWrapper>
          <TopBar />
          <>{children}</>
          <Portal id="insideTheme" />
        </DynamicThemeWrapper>
      </body>
    </html>
  );
}
