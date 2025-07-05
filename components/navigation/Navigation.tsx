"use client";

import { NavigationMenuBar } from "./NavigationMenuBar/Menu";
import NavigationModal from "./NavigationModel/NavigationModal";
import NavRoutes from "@/data/navRoutes";

export function Navigation() {
  const nav = new NavRoutes();
  const navRoutes = nav.getRoutes();
  if (!navRoutes || navRoutes.length === 0) {
    return <div>No navigation routes available.</div>;
  }
  return (
    <>
      <NavigationMenuBar navRoutes={navRoutes} />
      <NavigationModal navRoutes={navRoutes} />
    </>
  );
}
