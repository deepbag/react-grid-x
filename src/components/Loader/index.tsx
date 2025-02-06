import React from "react";
import "../../themes/rgx-theme/rgx-loader.css"; // Import the custom CSS for loader styling
import { RGXLoaderProps } from "types/loader-props"; // Import the type definition for the loader props

const RGXLoader: React.FC<RGXLoaderProps> = ({
  message = "Loading, please wait...", // Default message if no custom message is passed
  style = {},
}) => (
  <div
    className="rgx-loader-container"
    style={{
      ...style["rgx-loader-container"],
    }}
  >
    {/* Spinner element that represents the loading animation */}
    <div
      className="rgx-loader-spinner"
      style={{
        ...style["rgx-loader-spinner"],
      }}
    ></div>

    {/* Display the loading message (if any) */}
    <div
      className="rgx-loader-message"
      style={{
        ...style["rgx-loader-message"],
      }}
    >
      {message}
    </div>
  </div>
);

export default RGXLoader; // Export the Loader component to be used in other parts of the app
