import React, { JSX } from "react";
import "../../themes/rgx-tooltip.css"

interface TooltipProps {
  content: string | JSX.Element; // The content of the tooltip
  children: React.ReactNode; // The element that will trigger the tooltip
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div className="rgx-tooltip-container">
      {children}
      <span className="rgx-tooltip-text">{content}</span>
    </div>
  );
};

export default Tooltip;
