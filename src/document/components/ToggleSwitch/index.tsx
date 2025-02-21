import React, { useState, useEffect } from "react";
import "./toggle-switch.css";
import { useConfig } from "document/context/ConfigContext";

const ToggleSwitch: React.FC = () => {
  const { config, setConfigKey } = useConfig();

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${config.theme}-mode`);
  }, [config]);

  const toggleTheme = () => {
    setConfigKey("theme", config.theme === "light" ? "dark" : "light");
  };

  return (
    <div className="rgx-toggle-switch-container">
      <label className="rgx-toggle-switch">
        <input
          type="checkbox"
          checked={config.theme === "dark"}
          onChange={() => toggleTheme()}
        />
        <span className="rgx-toggle-switch-slider">
          <span className="rgx-toggle-switch-sun">☀️</span>
          <span className="rgx-toggle-switch-moon">🌙</span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
