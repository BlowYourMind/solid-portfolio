"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      className="size-9 p-0"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <SunIcon className="size-5 dark:hidden" />
      <MoonIcon className="hidden size-5 dark:block" />
    </Button>
  );
};

export default ThemeToggle;
