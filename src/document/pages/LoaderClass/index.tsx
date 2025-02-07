import { CodeBox, CustomTable } from "document/components";
import React from "react";
import "./loader-class.css";

const LoaderClass: React.FC = () => {
  return (
    <div className="rgx-tooltip-class-overview">
      <div className="rgx-tooltip-class-header">
        <h1 className="rgx-tooltip-class-title">Loader Class</h1>
        <p className="rgx-tooltip-class-description">
          The Loader component in ReactGridX allows you to display a loading
          indicator while content is being fetched or processed. The styles can
          be customized by overriding the default CSS classes.
        </p>
      </div>

      <section className="rgx-tooltip-class-section">
        <h2 className="rgx-tooltip-class-section-title">CSS Classes</h2>
        <p className="rgx-tooltip-class-section-text">
          Below are the CSS classes used in the Loader component. You can
          override these styles to customize the Loader's appearance.
        </p>
        <CustomTable
          hideHeader={true}
          columns={[
            { header: "Class Name", accessor: "className" },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              className: "rgx-loader-container",
              description:
                "The main container for the loader component, positioning it appropriately.",
            },
            {
              className: "rgx-loader-spinner",
              description:
                "The spinning animation element representing the loader.",
            },
            {
              className: "rgx-loader-message",
              description: "Displays a loading message next to the spinner.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-tooltip-class-section"
        id="rgx-tooltip-class-section-customization"
      >
        <h2 className="rgx-tooltip-class-section-title">CSS</h2>
        <p className="rgx-tooltip-class-section-text">
          Customize how tooltips are styled using CSS classes. This allows you
          to modify positioning, colors, and animations to match your design
          needs.
        </p>
        <CodeBox
          commands={{
            "rgx-loader.css": {
              code: `/* Loader container styling */
.rgx-theme .rgx-loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 9999;
    display: flex;
    align-items: center;
    background-color: #e2e2e2;
    padding: 8px 10px;
    border-radius: 4px;
}

/* Loader spinner styling */
.rgx-theme .rgx-loader-spinner {
    border: 4px solid #ddd;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    animation: spin 2s linear infinite;
}

/* Loader message styling */
.rgx-theme .rgx-loader-message {
    font-size: 14px;
    color: #333;
    margin-left: 10px;
}

/* Spinner animation */
@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
}`,
              language: "css",
              lineNumber: true,
            },
          }}
        />
      </section>
    </div>
  );
};

export default LoaderClass;
