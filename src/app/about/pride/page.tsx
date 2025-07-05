import NavRoutes from "@/data/navRoutes";
import { usePathname } from "next/navigation";

export default function PridePage() {
  const pathname = usePathname();
  const navRoutes = new NavRoutes();
  return <div>{navRoutes.getPageTitle(pathname)}</div>;
}
