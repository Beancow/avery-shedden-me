"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { NavigationMenuBar } from "./NavigationMenuBar/NavigationMenuBar";
import NavigationModal from "./NavigationModel/NavigationModal";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navLinks = [
    { href: "/", label: "Home", replace: false },
    { href: "/work-history", label: "Work History", replace: true },
    { href: "/projects", label: "Projects", replace: true },
    { href: "/contact", label: "Contact", replace: true },
  ];

  return (
    <>
      <NavigationMenuBar navLinks={navLinks} checkActive={isActive} />
      <NavigationModal navLinks={navLinks} checkActive={isActive} />
    </>
  );
}
