"use client";
import { Button, ThemePanel, useThemeContext } from "@radix-ui/themes";
import { useState } from "react";

export default function ThemePanelToggle() {
  const panelOpen = useState(() => {
    const storedValue = localStorage.getItem("themePanelOpen");
    return storedValue === "true" ? true : false;
  });
  const [isPanelOpen, setIsPanelOpen] = panelOpen;

  const themeContext = useThemeContext();

  themeContext;

  const togglePanel = () => {
    const currentState = localStorage.getItem("themePanelOpen") === "true";
    localStorage.setItem("themePanelOpen", (!currentState).toString());
    window.dispatchEvent(new Event("storage"));
    setIsPanelOpen(!currentState);
  };

  return (
    <div className="theme-panel-toggle">
      <Button onClick={togglePanel} typeof="toggle">
        Toggle {isPanelOpen ? "Close" : "Open"} Theme Panel
      </Button>
      {isPanelOpen && <ThemePanel />}
    </div>
  );
}
