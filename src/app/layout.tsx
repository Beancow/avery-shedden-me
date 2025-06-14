import "./global.css";
import { Theme, Portal } from "@radix-ui/themes";
import { TopBar } from "../components/layout/TopBar";
import type { Metadata } from "next";

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

export default function RootLayout({ children, searchParams }: Props) {
  const appearance = new Headers().get("X-Theme"); // This is just to ensure headers are fetched, not used directly
  return (
    <html lang="en">
      <body>
        <Theme
          accentColor="violet"
          grayColor="sage"
          radius="small"
          hasBackground
          style={{
            colorScheme: appearance || "light", // Fallback to light if no appearance is set
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
