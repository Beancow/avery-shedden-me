"use client";
import { Button, ThemePanel, useThemeContext } from "@radix-ui/themes";
import { useState } from "react";

export default function ThemePanelToggle() {
  const [isPanelOpen, setPanelOpenState] = useState(false);

  const togglePanel = () => {
    setPanelOpenState((prev) => !prev);
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
