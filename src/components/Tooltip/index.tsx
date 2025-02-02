import React from "react";
import "../../themes/rgx-tooltip.css"; // Import the custom CSS for tooltip styling
import { TooltipProps } from "components/types/tooltip-props"; // Import the type definition for the tooltip props

/**
 * Tooltip Component:
 * A reusable component for displaying tooltips when hovering over an element.
 * It shows a text message when the user hovers over the children element.
 *
 * @param {string} content - The text message to display in the tooltip.
 * @param {React.ReactNode} children - The element to which the tooltip is attached.
 *                                     The tooltip will appear when hovering over this element.
 *
 * @returns {JSX.Element} - Returns the tooltip component wrapped around the children with a visible tooltip text.
 */
const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div className="rgx-tooltip-container">
      {/* The element the tooltip is attached to */}
      {children}

      {/* The tooltip text, shown on hover */}
      <span className="rgx-tooltip-text">{content}</span>
    </div>
  );
};

export default Tooltip; // Export the Tooltip component to be used in other parts of the app
