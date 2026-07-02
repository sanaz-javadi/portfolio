import { useEffect, useState } from "react";
import { Theme } from "@/constants";

const getInitialTheme = (): Theme => {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === Theme.Light || stored === Theme.Dark) return stored;
  } catch {
    // localStorage unavailable (e.g. private browsing)
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === Theme.Light ? Theme.Dark : Theme.Light));

  return { theme, toggle };
};
