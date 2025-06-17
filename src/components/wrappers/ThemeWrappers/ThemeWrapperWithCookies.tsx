import { Theme } from "@radix-ui/themes";
import { cookies } from "next/headers";

export default async function ThemeWrapperWithCookies({
  children,
}: {
  children: React.ReactNode;
}) {
  let appearance: "light" | "inherit" | "dark" = "light";

  const cookieManager = await cookies();
  const themePreference = cookieManager.get("theme")?.value;
  if (
    themePreference &&
    ["light", "dark", "inherit"].includes(themePreference)
  ) {
    appearance = themePreference as "light" | "inherit" | "dark";
    return (
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
        {children}
      </Theme>
    );
  }
  return <>{children}</>;
}

export const metadata = {
  title: "Averything - Theme Wrapper",
  description: "Theme wrapper with cookie management for appearance.",
};

export const dynamic = "force-dynamic";
