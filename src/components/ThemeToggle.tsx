"use client";

import { DarkMode, LightMode } from "@/utils";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <button onClick={toggleTheme} className="">
      {darkMode ? (
        <LightMode className="text-customOrange" />
      ) : (
        <DarkMode className="text-customOrange" />
      )}
    </button>
  );
};

export default ThemeToggle;
