import { render, screen, act } from "@testing-library/react";
import ThemeWrapperWithCookies from "./ThemeWrapperWithCookies";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { ThemeProps } from "@radix-ui/themes";

jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}));

jest.mock("@radix-ui/themes", () => ({
  __esModule: true,
  Theme: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    props: ThemeProps;
  }) => (
    <div data-testid="radix-ui-theme" {...props}>
      {children}
    </div>
  ),
}));

describe("ThemeWrapperWithCookies", () => {
  beforeEach(() => {
    (cookies as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue({ value: "light" }),
    });
  });

  it("renders children correctly", async () => {
    await act(async () =>
      render(
        <ThemeWrapperWithCookies>
          <div data-testid="child">Child</div>
        </ThemeWrapperWithCookies>,
        { wrapper: Suspense }
      )
    );
    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });

  it("applies default appearance when no cookie is set", async () => {
    (cookies as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(undefined),
    });

    await act(async () =>
      render(
        <ThemeWrapperWithCookies>
          <div data-testid="child">Child</div>
        </ThemeWrapperWithCookies>,
        { wrapper: Suspense }
      )
    );

    // The actual component does not have this attribute at render, and you would need to check for class radix-theme light, but as the component is mocked, we check the attribute directly.
    expect(screen.getByTestId("radix-ui-theme")).toHaveAttribute(
      "appearance",
      "light"
    );
  });

  it("applies appearance based on cookie value", async () => {
    (cookies as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue({ value: "dark" }),
    });

    await act(async () =>
      render(
        <ThemeWrapperWithCookies>
          <div data-testid="child">Child</div>
        </ThemeWrapperWithCookies>,
        { wrapper: Suspense }
      )
    );

    // The actual component does not have this attribute at render, and you would need to check for class radix-theme dark, but as the component is mocked, we check the attribute directly.
    expect(screen.getByTestId("radix-ui-theme")).toHaveAttribute(
      "appearance",
      "dark"
    );
  });

  it("handles invalid cookie values gracefully", async () => {
    (cookies as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue({ value: "invalid" }),
    });

    await act(async () =>
      render(
        <ThemeWrapperWithCookies>
          <div data-testid="child">Child</div>
        </ThemeWrapperWithCookies>,
        { wrapper: Suspense }
      )
    );
    // The actual component does not have this attribute at render, and you would need to check for class radix-theme light, but as the componet is mocked, we check the attribute directly.
    expect(screen.getByTestId("radix-ui-theme")).toHaveAttribute(
      "appearance",
      "light"
    );
  });
});
