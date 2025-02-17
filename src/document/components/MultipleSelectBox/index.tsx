import React, { useEffect, useRef, useState } from "react";
import "./multiple-select-box.css";
import SvgIcon from "../SVGIcons";

interface MultipleSelectBoxProps {
  id: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: { label: string | number; value: any }[];
  placeholder?: string;
  label?: string;
  style?: Record<string, React.CSSProperties>;
}

const MultipleSelectBox: React.FC<MultipleSelectBoxProps> = ({
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

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const onSelection = (selectedValue: string): void => {
    const newValue = value.includes(selectedValue)
      ? value.filter((v) => v !== selectedValue)
      : [...value, selectedValue];
    onChange(newValue);
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
      className="rgx-multiple-select-box-container"
      style={{ ...style["rgx-multiple-select-box-container"] }}
    >
      {label && (
        <label
          htmlFor={id}
          className="rgx-multiple-select-box-label"
          style={{ ...style["rgx-multiple-select-box-label"] }}
        >
          {label}
        </label>
      )}
      <div className="rgx-multiple-select-custom-select">
        <div
          className="rgx-multiple-select-selected-options"
          onClick={() => {
            toggleDropdown();
          }}
        >
          {value.length > 0
            ? options
                ?.filter((_) => value?.includes(_.value))
                ?.map((__) => __.label)
                ?.join(", ")
            : placeholder || "Select Options"}
          <SvgIcon
            svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`}
            className={
              isOpen
                ? "rgx-multiple-select-dropdown-icon rgx-multiple-select-open"
                : "rgx-multiple-select-dropdown-icon"
            }
          />
        </div>

        {isOpen && (
          <ul
            className="rgx-multiple-select-dropdown"
            ref={menuRef}
            role="listbox"
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={
                  value.includes(option.value)
                    ? "rgx-multiple-select-selected"
                    : ""
                }
                onClick={() => onSelection(option.value)}
              >
                <input
                  type="checkbox"
                  className="rgx-multiple-select-checkbox"
                  checked={value.includes(option.value) ?? false}
                  onChange={(e) => onSelection(option.value)}
                />
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultipleSelectBox;
