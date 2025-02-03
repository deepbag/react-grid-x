import React, { useRef, useEffect, useState } from "react";
import { PopoverProps } from "types/pop-over-props";
import "../../themes/rgx-popover.css";

/**
 * Reusable Popover Component
 *
 * This component provides a floating UI element that appears relative to its trigger.
 * It supports automatic closing when clicking outside.
 */
const RGXPopover: React.FC<PopoverProps> = ({
  children,
  isOpen,
  onClose
}) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);
  // const [position, setPosition] = useState<{ top: number; left: number }>({
  //   top: 0,
  //   left: 0,
  // });

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
      className="popover-content show"
      ref={popoverRef}
      // style={{
      //   top: `${position.top}px`,
      //   left: `${position.left}px`,
      //   transform: "translateX(-50%)",
      // }}
    >
      <div className="popover-arrow"></div>
      {children} {/* Dynamic content inside the popover */}
    </div>
  );
};

export default RGXPopover;
