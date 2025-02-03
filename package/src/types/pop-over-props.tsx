import { ReactNode } from "react";

/**
 * Props for the Popover component
 */
export interface RGXPopoverProps {
  /**
   * Content to be displayed inside the popover.
   * This can be text, JSX elements, or any ReactNode.
   */
  children: ReactNode;

  /**
   * Controls whether the popover is visible or not.
   * If `true`, the popover will be shown.
   * If `false`, it will be hidden.
   */
  isOpen: boolean;

  /**
   * Function to close the popover.
   * This should be triggered when clicking outside the popover.
   */
  onClose: () => void;
}
