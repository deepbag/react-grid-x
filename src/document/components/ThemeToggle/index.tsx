import React, { useEffect, useState } from "react";
import "./theme-toggle.css";
import { useConfig } from "document/context/ConfigContext";

const ThemeToggle: React.FC = () => {
  const { config, setConfigKey } = useConfig();

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${config.theme}-mode`);
  }, [config]);

  const toggleTheme = () => {
    setConfigKey("theme", config.theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className={`rgx-theme-toggle-button rgx-theme-mode-${config.theme}`}
      onClick={toggleTheme}
    >
      {config.theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
