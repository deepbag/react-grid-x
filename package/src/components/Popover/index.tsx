import React, { useRef, useEffect } from "react";
import { RGXPopoverProps } from "../../types/pop-over-props";

const RGXPopover: React.FC<RGXPopoverProps> = ({
  children,
  isOpen,
  onClose,
  style = {},
  mode = "light",
}) => {
  const darkMode = mode === "dark";
  const popoverRef = useRef<HTMLDivElement | null>(null);
  /**
   * Detects clicks outside the popover and triggers the `onClose` function.
   * This ensures the popover closes when the user clicks anywhere outside of it.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Prevent rendering when popover is closed

  return (
    <div
      className={`rgx-popover-content rgx-popover-show ${
        darkMode && "rgx-popover-content-dark"
      }`}
      ref={popoverRef}
      style={{
        ...style["rgx-popover-content"],
        ...style["rgx-popover-show"],
        ...(darkMode && {
          ...style["rgx-popover-content-dark"],
        }),
      }}
    >
      <div
        className={`rgx-popover-arrow ${darkMode && "rgx-popover-arrow-dark"}`}
        style={{
          ...style["rgx-popover-arrow"],
          ...(darkMode && {
            ...style["rgx-popover-arrow-dark"],
          }),
        }}
      ></div>
      {children} {/* Dynamic content inside the popover */}
    </div>
  );
};

export default RGXPopover;
