import Link from "next/link";

type LinkSectionWithSlug = {
  type: "linkWithSlug";
  label: string;
  href: string;
  content: string;
  default?: boolean;
};

type LinkSectionWithHref = {
  type: "linkWithHref";
  label: string;
  href: string;
  mobileNavLabel?: string;
};

type LinkSectionWithIcon = {
  type: "linkWithIcon";
  value: string;
  icon: React.ReactNode;
};

export type LinkSectionItem =
  | LinkSectionWithSlug
  | LinkSectionWithHref
  | LinkSectionWithIcon;

export type TriggerSectionItem = {
  type: "trigger";
  label: string;
  mobileNavLabel?: string;
  sectionBaseHref: string;
  items: LinkSectionItem[];
};

export type NavSection = LinkSectionItem | TriggerSectionItem;
