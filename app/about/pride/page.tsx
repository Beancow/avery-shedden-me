import NavRoutes from "@/data/navRoutes";

export default function PridePage() {
  const navRoutes = new NavRoutes();
  return <div>{navRoutes.getPageTitle("/about/pride")}</div>;
}
