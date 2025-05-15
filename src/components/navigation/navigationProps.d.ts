export type LinkSectionItem = {
  type: "link";
  label: string;
  content: React.ReactNode;
  href: string;
};
export type Replace<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] : T[K];
};

export type SubSectionItem = Replace<TriggerSectionItem, type["trigger"]> & {
  type: "subsection";
};

export type TriggerSectionItem = {
  type: "trigger";
  label: string;
  sectionBaseHref: string;
  items: LinkSectionItem[];
};

export type NavSection = LinkSectionItem | TriggerSectionItem;
