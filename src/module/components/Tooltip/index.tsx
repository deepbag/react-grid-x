import React from "react";
import "module/themes/rgx-theme/rgx-tooltip.css"; // Import the custom CSS for tooltip styling
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
      <span
        className="rgx-tooltip-text"
        style={{
          ...style["rgx-tooltip-text"],
        }}
      >
        {content}
      </span>
    </div>
  );
};

export default RGXTooltip; // Export the Tooltip component to be used in other parts of the app
