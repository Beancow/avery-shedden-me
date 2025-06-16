"use client";

import { NavigationMenuBar } from "./NavigationMenuBar/Menu";
import NavigationModal from "./NavigationModel/NavigationModal";
import { navRoutes } from "@/data/navRoutes";

export function Navigation() {
  return (
    <>
      <NavigationMenuBar navRoutes={navRoutes} />
      <NavigationModal navRoutes={navRoutes} />
    </>
  );
}
