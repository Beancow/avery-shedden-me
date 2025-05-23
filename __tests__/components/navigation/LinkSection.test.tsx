import { render, screen } from "@testing-library/react";
import { LinkSection } from "@/components/navigation/NavigationModel/LinkSection";
import { LinkSectionItem } from "@/components/navigation/navigationProps";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("@/components/wrappers/GlowWhenActive/GlowWhenActive", () => ({
  __esModule: true,
  default: jest.fn(({ isActive, children }) => (
    <div data-testid="glow-wrapper" data-isactive={String(isActive)}>
      {children}
    </div>
  )),
}));

jest.mock("@radix-ui/react-dialog", () => ({
  ...jest.requireActual("@radix-ui/react-dialog"),
  Close: jest.fn(({ children }) => <>{children}</>),
}));

describe("LinkSection", () => {
  const mockLinkItem: LinkSectionItem = {
    type: "link",
    label: "Home",
    content: "Home",
    href: "/home",
  };

  it("renders the link with correct href and label", () => {
    (usePathname as jest.Mock).mockReturnValue("/other");
    render(<LinkSection link={mockLinkItem} />);

    const linkElement = screen.getByRole("link", { name: "Home" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/home");
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("applies active styles and passes isActive=true to GlowWhenActive when path matches href", () => {
    (usePathname as jest.Mock).mockReturnValue("/home");
    render(<LinkSection link={mockLinkItem} />);

    const linkElement = screen.getByRole("link", { name: "Home" });
    expect(linkElement).toHaveClass("mobileNavLink");
    expect(linkElement).toHaveClass("active");

    const glowWrapper = screen.getByTestId("glow-wrapper");
    expect(glowWrapper).toHaveAttribute("data-isactive", "true");
  });

  it('applies active styles when path ends with href + "/"', () => {
    (usePathname as jest.Mock).mockReturnValue("/home/");
    render(<LinkSection link={mockLinkItem} />);

    const linkElement = screen.getByRole("link", { name: "Home" });
    expect(linkElement).toHaveClass("active");

    const glowWrapper = screen.getByTestId("glow-wrapper");
    expect(glowWrapper).toHaveAttribute("data-isactive", "true");
  });

  it("does not apply active styles and passes isActive=false when path does not match", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");
    render(<LinkSection link={mockLinkItem} />);

    const linkElement = screen.getByRole("link", { name: "Home" });
    expect(linkElement).not.toHaveClass("active");

    const glowWrapper = screen.getByTestId("glow-wrapper");
    expect(glowWrapper).toHaveAttribute("data-isactive", "false");
  });
});
