"use client";
import { Moon, Sun } from "lucide-react";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function ThemeToggle({
  initialTheme,
}: {
  initialTheme: string;
}) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    Cookies.set("theme", newTheme, { path: "/", sameSite: "strict" });
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 bg-primary hover:bg-opacity-90"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-text" />
      ) : (
        <Moon className="w-5 h-5 text-text" />
      )}
    </button>
  );
}
