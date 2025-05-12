import { useCallback, useState, useEffect } from "react"; // Added useEffect
import { useRouter, usePathname } from "next/navigation"; // Added Next.js navigation hooks
import { ProjectTabs } from "../components/ProjectsTabs";

export function generateStaticParams() {
  return [
    { experience: "Tab1" },
    { experience: "Tab2" },
    { experience: "Tab3" },
  ];
}

export default function Projects() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("Tab1"); // Default tab

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    if (
      lastSegment &&
      lastSegment !== "projects" &&
      lastSegment.trim() !== ""
    ) {
      setActiveTab(lastSegment);
    } else {
      setActiveTab("Tab1");
      if (pathname !== `/projects/Tab1`) {
        router.replace(`/projects/Tab1`, { scroll: false });
      }
    }
  }, [pathname, router]);

  const handleTabChange = useCallback(
    (value: string) => {
      setActiveTab(value);
      router.replace(`/projects/${value}`, { scroll: false });
    },
    [router]
  );

  return <ProjectTabs value={activeTab} onValueChange={handleTabChange} />;
}
