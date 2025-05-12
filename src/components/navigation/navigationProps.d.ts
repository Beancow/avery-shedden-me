export type LinkSectionItem = {
  type: "link";
  label: string;
  content: React.ReactNode;
  href: string;
};

export type TriggerSectionItem = {
  type: "trigger";
  sectionBaseHref: string;
  title: string;
  content: React.ReactNode;
  items: LinkSectionItem[];
};

export type NavSection = TriggerSectionItem | LinkSectionItem;
