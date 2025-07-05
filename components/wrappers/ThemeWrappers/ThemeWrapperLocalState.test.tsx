import { render, screen, act } from "@testing-library/react";
import ThemeWrapperLocalState from "./ThemeWrapperLocalState";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ThemeProps } from "@radix-ui/themes";
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

jest.mock("@radix-ui/themes", () => ({
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

describe("ThemeWrapperLocalState", () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn(),
    });
  });

  it("renders children correctly", async () => {
    await act(async () =>
      render(
        <ThemeWrapperLocalState>
          <div data-testid="child">Child</div>
        </ThemeWrapperLocalState>,
        { wrapper: Suspense }
      )
    );

    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });

  it("initializes with default appearance", async () => {
    await act(async () =>
      render(
        <ThemeWrapperLocalState>
          <div data-testid="child">Child</div>
        </ThemeWrapperLocalState>,
        { wrapper: Suspense }
      )
    );

    // The actual component does not have this attribute at render, and you would need to check for class radix-theme light, but as the component is mocked, we check the attribute directly.
    expect(screen.getByTestId("radix-ui-theme")).toHaveAttribute(
      "appearance",
      "light"
    );
  });

  it("initializes with default appearance", async () => {
    await act(async () =>
      render(
        <ThemeWrapperLocalState>
          <div data-testid="child-static">Static Child</div>
        </ThemeWrapperLocalState>
      )
    );

    // The actual component does not have this attribute at render, and you would need to check for class radix-theme light, but as the component is mocked, we check the attribute directly.
    expect(screen.getByTestId("radix-ui-theme")).toHaveAttribute(
      "appearance",
      "light"
    );
  });

  it("updates appearance based on search params", async () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("dark"),
    });

    await act(async () =>
      render(
        <ThemeWrapperLocalState>
          <div data-testid="child">Child</div>
        </ThemeWrapperLocalState>,
        { wrapper: Suspense }
      )
    );

    // The actual component does not have this attribute at render, and you would need to check for class radix-theme dark, but as the component is mocked, we check the attribute directly.
    expect(screen.getByTestId("radix-ui-theme")).toHaveAttribute(
      "appearance",
      "dark"
    );
  });

  it("handles invalid search param gracefully", async () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("invalid"),
    });

    await act(async () =>
      render(
        <ThemeWrapperLocalState>
          <div data-testid="child">Child</div>
        </ThemeWrapperLocalState>,
        { wrapper: Suspense }
      )
    );

    // The actual component does not have this attribute at render, and you would need to check for class radix-theme light, but as the component is mocked, we check the attribute directly.
    expect(screen.getByTestId("radix-ui-theme")).toHaveAttribute(
      "appearance",
      "light"
    );
  });
});
