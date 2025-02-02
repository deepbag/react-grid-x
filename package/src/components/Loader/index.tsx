import React from "react";
import "../../themes/rgx-loader.css";

export interface LoaderProps {
  message?: string; // Optional custom message
}

const Loader: React.FC<LoaderProps> = ({
  message = "Loading, please wait...",
}) => (
  <div className="rgx-loader-container">
    <div className="rgx-spinner"></div>
    <div className="rgx-loader-message">{message}</div>
  </div>
);

export default Loader;
