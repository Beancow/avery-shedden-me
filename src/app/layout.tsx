import "@radix-ui/themes/styles.css";
import "./global.css";
import { Theme } from "@radix-ui/themes";
import { TopBar } from "../components/layout/TopBar";
import type { Metadata } from "next";

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
  openGraph: {
    title: "Averything",
    description: "My Portfolio and other stuff",
    url: `${basePath}/`,
    siteName: "Averything",
    images: [
      {
        url: `${basePath}/favicon.svg`,
        width: 512,
        height: 512,
      },
    ],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: `${basePath}/`,
    languages: {
      "en-US": `${basePath}/`,
      "ja-JP": `${basePath}/ja`,
    },
  },
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
