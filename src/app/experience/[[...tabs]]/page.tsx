"use client";
import { useCallback, useState, useEffect } from "react"; // Added useEffect
import { useRouter, usePathname } from "next/navigation"; // Added Next.js navigation hooks
import { ExperienceTabs } from "../components/ExperienceTabs";

export function generateStaticParams() {
  return [
    { experience: "Tab1" },
    { experience: "Tab2" },
    { experience: "Tab3" },
  ];
}

export default function Experience() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("Tab1"); // Default tab

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    if (
      lastSegment &&
      lastSegment !== "experience" &&
      lastSegment.trim() !== ""
    ) {
      setActiveTab(lastSegment);
    } else {
      setActiveTab("Tab1");
      if (pathname !== `/experience/Tab1`) {
        router.replace(`/experience/Tab1`, { scroll: false });
      }
    }
  }, [pathname, router]);

  const handleTabChange = useCallback(
    (value: string) => {
      setActiveTab(value);
      router.replace(`/experience/${value}`, { scroll: false });
    },
    [router]
  );

  return <ExperienceTabs value={activeTab} onValueChange={handleTabChange} />;
}
