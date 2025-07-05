import Link from "next/link";
import React from "react";

export type Info = {
  title: string;
  content?: React.ReactNode;
  meta: {
    description: string;
    keywords: string[];
  };
};

export type LinkSectionWithSlug = {
  type: "linkWithSlug";
  href: string;
  info: Info;
  default?: boolean;
};

export type LinkSectionWithHref = {
  type: "linkWithHref";
  label: string;
  href: string;
  info: Info;
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
