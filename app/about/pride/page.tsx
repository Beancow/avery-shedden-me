import NavRoutes from "@/navRoutes/navRoutes";

export default function PridePage() {
  const navRoutes = new NavRoutes();
  return <div>{navRoutes.getPageTitle("/about/pride")}</div>;
}
