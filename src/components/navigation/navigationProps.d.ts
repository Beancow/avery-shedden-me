export type LinkSectionItem = {
  type: "link";
  label: string;
  content: React.ReactNode;
  href: string;
};

export type TriggerSectionItem = {
  type: "trigger";
  title: string;
  content: React.ReactNode;
  items: LinkSectionItem[];
};

export type NavSection = TriggerSectionItem | LinkSectionItem;

export type NavigationProps = {
  navItems: NavSection[];
  checkActive: (x: string) => boolean;
};
