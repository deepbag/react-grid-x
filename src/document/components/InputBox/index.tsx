import React, { useState } from "react";
import "./input-box.css";

interface InputBoxProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  style?: Record<string, React.CSSProperties>;
}

const InputBox: React.FC<InputBoxProps> = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  label,
  style = {},
}) => {
  return (
    <div
      className="rgx-input-box-container"
      style={{
        ...style["rgx-input-box-container"],
      }}
    >
      {label && (
        <label
          htmlFor={id}
          className="rgx-input-box-label"
          style={{
            ...style["rgx-input-box-label"],
          }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="rgx-input-box-field"
        style={{
          ...style["rgx-input-box-field"],
        }}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputBox;
