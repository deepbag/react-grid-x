import React from "react";
import { RGXTooltipProps } from "module/types/tooltip-props"; // Import the type definition for the tooltip props

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
      <div
        className="rgx-tooltip-text"
        style={{
          minWidth: String(content)?.length * 4,
          ...style["rgx-tooltip-text"],
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default RGXTooltip; // Export the Tooltip component to be used in other parts of the app
