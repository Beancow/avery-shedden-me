"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { NavigationMenuBar } from "./NavigationMenuBar/NavigationMenuBar";
import NavigationModal from "./NavigationModel/NavigationModal";
import { NavSection } from "./navigationProps";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navItems: NavSection[] = [
    {
      type: "trigger",
      title: "Projects",
      content: "My projects",
      items: [
        {
          type: "link",
          label: "Got to experience Tab2",
          content: "About this project",
          href: "/experience/Tab2",
        },
      ],
    },
    {
      type: "link",
      label: "About Me",
      content: "About me",
      href: "/about",
    },
  ];

  return (
    <>
      <NavigationMenuBar navItems={navItems} checkActive={isActive} />
      {/* <NavigationModal navItems={navItems} checkActive={isActive} /> */}
    </>
  );
}
