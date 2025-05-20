"use client";
import { Button, ThemePanel, useThemeContext } from "@radix-ui/themes";
import { useState } from "react";

export default function ThemePanelToggle() {
  const [isPanelOpen, setPanelOpenState] = useState(false);

  const togglePanel = () => {
    setPanelOpenState((prev) => !prev);
  };

  return (
    <div
      style={{ position: "fixed", bottom: "4rem", left: "16px", zIndex: 1000 }}
    >
      <Button onClick={togglePanel} typeof="toggle">
        {isPanelOpen ? "Close" : "Open"} Theme Panel
      </Button>
      {isPanelOpen && <ThemePanel />}
    </div>
  );
}
