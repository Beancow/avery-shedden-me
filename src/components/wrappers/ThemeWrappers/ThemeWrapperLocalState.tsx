"use client";
import { Theme } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function ThemeWrapperLocalState({
  children,
  initialAppearance = "light",
}: {
  children: React.ReactNode;
  initialAppearance?: "light" | "dark" | "inherit";
}) {
  const searchParams = useSearchParams();
  const [appearance, setAppearance] = useState<"light" | "dark" | "inherit">(
    initialAppearance
  );
  useEffect(() => {
    const themePreference = searchParams.get("theme");
    if (
      themePreference &&
      ["light", "dark", "inherit"].includes(themePreference)
    ) {
      setAppearance(themePreference as "light" | "dark" | "inherit");
    }
  }, [searchParams]);

  if (process.env.NODE_ENV !== "production") {
    console.log("ThemeWrapperWithLocalState appearance:", appearance);
  }

  return (
    <Suspense fallback={<div>Loading theme...</div>}>
      <Theme
        data-testId="radix-ui-theme"
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
    </Suspense>
  );
}
