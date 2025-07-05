/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import DynamicThemeWrapper from "./DynamicThemeWrapper";
import { cookies } from "next/headers";
import { Suspense } from "react";

process.env.NEXT_PUBLIC_BUILD_TARGET = "production";

jest.mock("@radix-ui/themes", () => ({
  __esModule: true,
  Theme: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="radix-ui-theme">{children}</div>
  ),
}));

jest.mock("next/headers", () => ({
  cookies: () => ({
    get: jest.fn().mockReturnValue({ value: "dark" }),
  }),
}));

jest.mock("./ThemeWrapperLocalState", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-wrapper-local-state">{children}</div>
  ),
}));

jest.mock("./ThemeWrapperWithCookies", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-wrapper-with-cookies">{children}</div>
  ),
}));

describe("DynamicThemeWrapper", () => {
  it("renders child components", async () => {
    await act(async () =>
      render(
        <DynamicThemeWrapper>
          <div data-testid="child">Child</div>
        </DynamicThemeWrapper>,
        { wrapper: Suspense }
      )
    );

    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });

  it("renders ThemeWrapperLocalState for static build target", async () => {
    process.env.NEXT_PUBLIC_BUILD_TARGET = "static";
    await act(async () =>
      render(
        <DynamicThemeWrapper>
          <div data-testid="child-static">Static Child</div>
        </DynamicThemeWrapper>,
        { wrapper: Suspense }
      )
    );

    expect(
      await waitFor(async () =>
        screen.findByTestId("theme-wrapper-local-state")
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/static child/i)).toBeInTheDocument();
    // Should not render the cookies wrapper in static mode
    expect(screen.queryByTestId("theme-wrapper-with-cookies")).toBeNull();
  });

  it("renders ThemeWrapperWithCookies for non-static build target", async () => {
    process.env.NEXT_PUBLIC_BUILD_TARGET = "production";
    await act(async () =>
      render(
        <DynamicThemeWrapper>
          <div data-testid="child-prod">Prod Child</div>
        </DynamicThemeWrapper>,
        { wrapper: Suspense }
      )
    );

    expect(
      await waitFor(async () =>
        screen.findByTestId("theme-wrapper-with-cookies")
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/prod child/i)).toBeInTheDocument();
    // Should not render the local state wrapper in non-static mode
    expect(screen.queryByTestId("theme-wrapper-local-state")).toBeNull();
  });
});
