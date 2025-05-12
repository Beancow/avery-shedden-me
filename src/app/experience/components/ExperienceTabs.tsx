"use client";
import { useCallback, useState, useEffect } from "react"; // Added useEffect
import { useRouter, usePathname } from "next/navigation"; // Added Next.js navigation hooks

import * as TabsPrimitive from "@radix-ui/react-tabs";

interface ExperienceTabsProps {
  value: string;
  onValueChange: (value: string) => void;
}

const tabs = [
  { value: "Tab1", label: "Tab 1" },
  { value: "Tab2", label: "Tab 2" },
  { value: "Tab3", label: "Tab 3" },
];

export function ExperienceTabs() {
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

  return (
    <TabsPrimitive.Root value={activeTab} onValueChange={handleTabChange}>
      <TabsPrimitive.List aria-label="Experience sections">
        {tabs.map((tab) => (
          <div key={tab.value}>
            <TabsPrimitive.Trigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsPrimitive.Trigger>
          </div>
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
