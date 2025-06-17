import { Suspense } from "react";
import ThemeWrapperLocalState from "./ThemeWrapperLocalState";
import ThemeWrapperWithCookies from "./ThemeWrapperWithCookies";

export default function DynamicThemeWrappers({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NEXT_PUBLIC_BUILD_TARGET === "static") {
    return (
      <Suspense>
        <ThemeWrapperLocalState initialAppearance="light">
          {children}
        </ThemeWrapperLocalState>
      </Suspense>
    );
  }
  return <ThemeWrapperWithCookies>{children}</ThemeWrapperWithCookies>;
}
