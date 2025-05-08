export type NavigationProps = {
  navLinks: { href: string; label: string; replace: boolean }[];
  checkActive: (x: string) => boolean;
};
