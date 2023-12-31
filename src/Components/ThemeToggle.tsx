import React from "react";
import { useTheme } from "./ThemeProvider ";
import { t } from "i18next";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-slate-200 dark:bg-slate-600 rounded-md p-2 my-3 text-blue-900 dark:text-white "
        onClick={toggleTheme}
      >
        {theme === "light" ?t("dark")  :t("light") }
      </button>
    </div>
  );
};

export default ThemeToggle;
