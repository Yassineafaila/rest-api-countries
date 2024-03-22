"use client";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTheme } from "@/context/ThemeProvider";
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    }
  };
  return (
    <button
      className="flex items-center gap-2 font-bold"
      onClick={() => switchTheme()}
    >
      {theme === "dark" ? (
        <>
          {" "}
          <FaSun />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          {" "}
          <FaMoon />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}

export default ThemeSwitcher;
