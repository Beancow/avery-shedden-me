import "./global.css";
import { Theme, Portal } from "@radix-ui/themes";
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
const DynamicThemeWrappers = dynamic({
  loader: () => {
    if (process.env.NEXT_PUBLIC_BUILD_TARGET === "static") {
      return import(
        "../components/wrappers/ThemeWrappers/ThemeWrapperLocalState"
      );
    }
    return import(
      "../components/wrappers/ThemeWrappers/ThemeWrapperWithCookies"
    );
  },
  ssr: false,
  loading: () => (
    <Theme accentColor="violet" grayColor="sage" radius="small" hasBackground>
      <div style={{ padding: "20px" }}>Loading theme...</div>
    </Theme>
  ),
});

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <DynamicThemeWrappers>
          <TopBar />
          <>{children}</>
          <Portal id="insideTheme" />
        </DynamicThemeWrappers>
      </body>
    </html>
  );
}
