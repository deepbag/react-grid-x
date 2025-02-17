import React, { useEffect, useRef, useState } from "react";
import "./select-box.css";
import SvgIcon from "../SVGIcons";

interface SelectBoxProps {
  id: string;
  value: string | number | boolean;
  onChange: (value: string) => void;
  options: { label: string | number; value: any }[];
  placeholder?: string;
  label?: string;
  style?: Record<string, React.CSSProperties>;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  id,
  value,
  onChange,
  options,
  placeholder,
  label,
  style = {},
}) => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => setIsOpen(!isOpen);

  const onSelection = (selectedValue: string): void => {
    onChange(selectedValue);
  };

  // const onOutside = (event: MouseEvent): void => {
  //   if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", onOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", onOutside);
  //   };
  // }, []);

  return (
    <div
      className="rgx-select-box-container"
      style={{ ...style["rgx-select-box-container"] }}
    >
      {label && (
        <label
          htmlFor={id}
          className="rgx-select-box-label"
          style={{ ...style["rgx-select-box-label"] }}
        >
          {label}
        </label>
      )}
      <div className="rgx-select-custom-select" onClick={toggleDropdown}>
        <div className="rgx-select-selected-options">
          {value
            ? options.find((_) => _.value === value)?.label
            : placeholder || "Select Option"}
          <SvgIcon
            svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`}
            className={
              isOpen
                ? "rgx-select-dropdown-icon rgx-select-open"
                : "rgx-select-dropdown-icon"
            }
          />
        </div>

        {isOpen && (
          <ul className="rgx-select-dropdown" ref={menuRef} role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className={value === option.value ? "rgx-select-selected" : ""}
                onClick={() => onSelection(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectBox;
