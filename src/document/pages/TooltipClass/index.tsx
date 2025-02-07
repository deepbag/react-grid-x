import { CodeBox, CustomTable } from "document/components";
import React from "react";
import "./tooltip-class.css";

const TooltipClass: React.FC = () => {
  return (
    <div className="rgx-tooltip-class-overview">
      <div className="rgx-tooltip-class-header">
        <h1 className="rgx-tooltip-class-title">Tooltip Class</h1>
        <p className="rgx-tooltip-class-description">
          The Tooltip component in ReactGridX allows you to display additional
          information when users hover over an element. The styles can be
          customized by overriding the default CSS classes.
        </p>
      </div>

      <section className="rgx-tooltip-class-section">
        <h2 className="rgx-tooltip-class-section-title">CSS Classes</h2>
        <p className="rgx-tooltip-class-section-text">
          Below are the CSS classes used in the Tooltip component. You can
          override these styles to customize the tooltip's appearance.
        </p>
        <CustomTable
          hideHeader={true}
          columns={[
            { header: "Class Name", accessor: "className" },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              className: "rgx-tooltip-container",
              description:
                "The main container for the tooltip component, which wraps the element and tooltip text.",
            },
            {
              className: "rgx-tooltip-text",
              description:
                "The tooltip text that appears when the user hovers over the element.",
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
            "rgx-tooltip.css": {
              code: `/* Tooltip container for elements with tooltips */
.rgx-theme .rgx-tooltip-container {
    position: relative;
    display: inline-block;
}

/* Tooltip text container */
.rgx-theme .rgx-tooltip-text {
    visibility: hidden;
    width: fit-content;
    max-width: 200px;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: wrap;
    margin-bottom: 8px;
    font-size: 14px;
}

/* Tooltip arrow */
.rgx-theme .rgx-tooltip-text::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.75) transparent transparent transparent;
}

/* Show the tooltip on hover */
.rgx-theme .rgx-tooltip-container:hover .rgx-tooltip-text {
    visibility: visible;
    opacity: 1;
}
`,
              language: "css",
              lineNumber: true,
            },
          }}
        />
      </section>
    </div>
  );
};

export default TooltipClass;
