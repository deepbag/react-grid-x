import React, { useState, useEffect } from "react";
import "./toggle-switch-bird.css";
import { useConfig } from "document/context/ConfigContext";

const ToggleSwitchBird: React.FC = () => {
  const { config, setConfigKey } = useConfig();

  const toggleBird = () => {
    setConfigKey("bird", config.bird === "enabled" ? "disabled" : "enabled");
  };

  return (
    <div className="rgx-toggle-switch-bird-container">
      <label className="rgx-toggle-switch-bird">
        <input
          type="checkbox"
          checked={config.bird === "disabled"}
          onChange={() => toggleBird()}
        />
        <span className="rgx-toggle-switch-slider-bird">
          <span className="rgx-toggle-switch-bird-enabled">🐦</span>
          <span className="rgx-toggle-switch-bird-disabled">🚫</span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitchBird;
