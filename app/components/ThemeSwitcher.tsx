"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("theme-transition");
    return () => {
      document.body.classList.remove("theme-transition");
    };
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="h-4 w-4 rounded-full transition-all duration-50 dark:bg-white bg-dark"
        aria-label="Change theme"
      ></button>
      <style jsx global>{`
        .theme-transition,
        .theme-transition * {
          transition: background-color 0.3s ease-out !important;
        }
      `}</style>
    </>
  );
}
