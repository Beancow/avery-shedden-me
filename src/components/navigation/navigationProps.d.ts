export type LinkSectionItem = {
  type: "link";
  label: string;
  content: React.ReactNode;
  href: string;
};

export type TriggerSectionItem = {
  type: "trigger";
  label: string;
  sectionBaseHref: string;
  items: LinkSectionItem[];
};

export type DynamicSectionItem = {
  type: "dynamic";
  label: string;
  sectionBaseHref: string;
  pattern: string;
};
export type NavSection =
  | LinkSectionItem
  | TriggerSectionItem
  | DynamicSectionItem;
