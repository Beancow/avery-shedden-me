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
    appearance = themePreference as "light" | "dark" | "inherit";
  }
  console.log("ThemeWrapperWithCookies appearance:", appearance);
  return (
    <Theme
      data-is-root-theme="true"
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
