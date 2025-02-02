import React from "react";
import "../../themes/rgx-loader.css"; // Import the custom CSS for loader styling
import { LoaderProps } from "components/types/loader-props"; // Import the type definition for the loader props

/**
 * Loader Component:
 * A simple, reusable loading spinner with an optional message.
 * Displays a spinner animation while content is loading.
 *
 * @param {string} message - The message to display alongside the spinner. Defaults to "Loading, please wait...".
 *
 * @returns {JSX.Element} - Returns the loader component with a spinner and an optional message.
 */
const Loader: React.FC<LoaderProps> = ({
  message = "Loading, please wait...", // Default message if no custom message is passed
}) => (
  <div className="rgx-loader-container">
    {/* Spinner element that represents the loading animation */}
    <div className="rgx-spinner"></div>

    {/* Display the loading message (if any) */}
    <div className="rgx-loader-message">{message}</div>
  </div>
);

export default Loader; // Export the Loader component to be used in other parts of the app
