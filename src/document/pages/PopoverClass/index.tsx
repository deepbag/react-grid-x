import { CodeBox, CustomTable } from "document/components";
import React from "react";
import "./popover-class.css";

const PopoverClass: React.FC = () => {
  return (
    <div className="rgx-popover-class-overview">
      <div className="rgx-popover-class-header">
        <h1 className="rgx-popover-class-title">Popover Class</h1>
        <p className="rgx-popover-class-description">
          The Popover component in ReactGridX is used to display additional
          options when users interact with a column, such as enabling sorting.
          It shows a popup with the available actions, including a 'Clear Sort'
          option to reset the sorting state. The styles of the popover can be
          customized by overriding the default CSS classes.
        </p>
      </div>

      <section className="rgx-popover-class-section">
        <h2 className="rgx-popover-class-section-title">CSS Classes</h2>
        <p className="rgx-popover-class-section-text">
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
              className: "rgx-popover-content",
              description:
                "The main container for the popover component, which wraps the dynamic content inside the popover.",
            },
            {
              className: "rgx-popover-arrow",
              description:
                "The arrow that points to the element triggering the popover, indicating its position.",
            },
            {
              className: "rgx-popover-show",
              description:
                "A class applied when the popover is visible, indicating the popover is shown to the user.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-popover-class-section"
        id="rgx-popover-class-section-customization"
      >
        <h2 className="rgx-popover-class-section-title">CSS</h2>
        <p className="rgx-popover-class-section-text">
          Customize how tooltips are styled using CSS classes. This allows you
          to modify positioning, colors, and animations to match your design
          needs.
        </p>
        <CodeBox
          commands={{
            "rgx-popover.css": {
              code: `/* Popover container, styled with background, border, shadow, padding, and positioning. */
.rgx-theme .rgx-popover-content {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
    min-width: 150px;
    z-index: 1000;
    display: block;
    margin-left: -152px;
    margin-top: 6px;
}

/* Show popover when the "show" class is applied. */
.rgx-theme .rgx-popover-content.rgx-popover-show {
    display: block;
}

/* Small arrow pointing to the trigger element, created with a rotated square. */
.rgx-theme .rgx-popover-arrow {
    position: absolute;
    top: -5px;
    left: 90%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: white;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
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

export default PopoverClass;
