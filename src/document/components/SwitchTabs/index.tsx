import React from "react";
import "./switch-tabs.css";

interface ToggleOptionsProps {
  name: string;
  id: string;
}

interface SwitchTabsProps {
  activeTab: string;
  onToggle: (tab: string) => void;
  options: ToggleOptionsProps[];
}

const SwitchTabs: React.FC<SwitchTabsProps> = ({
  activeTab,
  onToggle,
  options,
}) => {
  return (
    <div className="rgx-switch-tabs-container">
      {options.map((_: ToggleOptionsProps) => (
        <button
          key={_.id}
          className={
            activeTab === _.id
              ? "rgx-switch-tab rgx-switch-tab-active"
              : "rgx-switch-tab"
          }
          onClick={() => onToggle(_.id)}
        >
          {_.name}
        </button>
      ))}
    </div>
  );
};

export default SwitchTabs;
