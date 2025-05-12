"use client";
import React from "react";

import { NavigationMenuBar } from "./NavigationMenuBar/Menu";
import NavigationModal from "./NavigationModel/NavigationModal";
import { NavSection } from "./navigationProps";

export function Navigation() {
  const navItems: NavSection[] = [
    {
      type: "link",
      label: "Home",
      content: "Home",
      href: "/",
    },
    {
      type: "trigger",
      title: "Experience",
      sectionBaseHref: "/experience",
      content: "Work experience",
      items: [
        {
          type: "link",
          label: "Got to experience Tab2",
          content: "About this piece of work",
          href: "/experience/Tab2",
        },
      ],
    },
    {
      type: "trigger",
      title: "Projects",
      sectionBaseHref: "/projects",
      content: "Projects",
      items: [
        {
          type: "link",
          label: "Got to projects Tab2",
          content: "About this piece of work",
          href: "/projects/Tab2",
        },
      ],
    },
    {
      type: "link",
      label: "Connect",
      content: "Contact me",
      href: "/connect",
    },
  ];

  return (
    <>
      <NavigationMenuBar navItems={navItems} />
      <NavigationModal navItems={navItems} />
    </>
  );
}
