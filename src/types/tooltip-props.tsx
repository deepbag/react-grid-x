import React, { JSX } from "react";

/**
 * Props interface for the Tooltip component.
 *
 * This interface defines the properties required to display a tooltip. The tooltip
 * content is customizable, and the element that triggers the tooltip is provided
 * as children.
 */
export interface RGXTooltipProps {
  /**
   * The content of the tooltip.
   * This can either be a string or a JSX element, which will be displayed when
   * the user hovers over the tooltip trigger element.
   *
   * @example "This is a tooltip"
   * @example <span>Custom Tooltip Content</span>
   */
  content: string | JSX.Element;

  /**
   * The element that will trigger the tooltip.
   * This represents the child element that, when hovered over or focused, will
   * show the tooltip content.
   *
   * @example <button>Hover me</button>
   */
  children: React.ReactNode;
}
