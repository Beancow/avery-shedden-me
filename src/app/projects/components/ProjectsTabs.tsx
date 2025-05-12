"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const tabs = [
  { value: "Tab1", label: "Tab 1" },
  { value: "Tab2", label: "Tab 2" },
  { value: "Tab3", label: "Tab 3" },
];

export function ProjectTabs() {
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
        router.replace(`/projects/Tab1`);
      }
    }
  }, [pathname, router]);
  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value);
    router.replace(`/projects/${value}`);
  }, []);
  return (
    <TabsPrimitive.Root value={activeTab} onValueChange={handleTabChange}>
      <TabsPrimitive.List aria-label="Experience sections">
        {tabs.map((tab) => (
          <>
            <TabsPrimitive.Trigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsPrimitive.Trigger>
          </>
        ))}
      </TabsPrimitive.List>
      <TabsPrimitive.Content value={activeTab}>
        <div>
          <h2>{activeTab}</h2>
          <p>Content for {activeTab}</p>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
