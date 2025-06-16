import "./global.css";
import { Theme, Portal } from "@radix-ui/themes";
import { TopBar } from "../components/layout/TopBar";
import type { Metadata } from "next";
import { cookies } from "next/headers";
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
  let appearance: "light" | "inherit" | "dark" = "light";

  try {
    const cookieManager = await cookies();
    const themePreference = cookieManager.get("theme")?.value;
    if (
      themePreference &&
      ["light", "dark", "inherit"].includes(themePreference)
    ) {
      appearance = themePreference as "light" | "inherit" | "dark";
    }
  } catch (error) {
    throw error;
  }

  return (
    <html lang="en">
      <body>
        <Theme
          accentColor="violet"
          grayColor="sage"
          radius="small"
          hasBackground
          appearance={appearance}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--accent-1), var(--accent-3))",
          }}
        >
          <TopBar />
          <>{children}</>
          <Portal id="insideTheme" />
        </Theme>
      </body>
    </html>
  );
}
