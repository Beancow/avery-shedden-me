import "./global.css";
import { Theme, Portal } from "@radix-ui/themes";
import { TopBar } from "../components/layout/TopBar";
import type { Metadata } from "next";
import { cookies } from "next/headers"; // Import cookies from next/headers

type Props = {
  children: React.ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
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

export default async function RootLayout({ children, searchParams }: Props) {
  const cookieStore = await cookies();
  const themePreference = cookieStore.get("theme")?.value;

  let appearance: "light" | "inherit" | "dark" = "light"; // Default to 'inherit'

  if (
    themePreference &&
    ["light", "dark", "inherit"].includes(themePreference)
  ) {
    appearance = themePreference as "light" | "inherit" | "dark";
  }

  return (
    <html lang="en">
      <body>
        <Theme
          accentColor="violet"
          grayColor="sage"
          radius="small"
          hasBackground
          appearance={appearance} // Set appearance based on cookie
          style={{
            // Radix UI's Theme component handles color-scheme based on its appearance prop
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
