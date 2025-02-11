import React from "react";
import { RGXTooltipProps } from "../../types/tooltip-props";

const RGXTooltip: React.FC<RGXTooltipProps> = ({
  content,
  children,
  style = {},
}) => {
  return (
    <div
      className="rgx-tooltip-container"
      style={{
        ...style["rgx-tooltip-container"],
      }}
    >
      {/* The element the tooltip is attached to */}
      {children}

      {/* The tooltip text, shown on hover */}
      <span
        className="rgx-tooltip-text"
        style={{
          minWidth: String(content)?.length * 5,
          ...style["rgx-tooltip-text"],
        }}
      >
        {content}
      </span>
    </div>
  );
};

export default RGXTooltip; // Export the Tooltip component to be used in other parts of the app
