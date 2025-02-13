import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./popover-class.css";
import axios from "axios";

const PopoverClass: React.FC = () => {
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-popover.css"
      )
      .then((response) => {
        setCss(response.data);
      })
      .catch((error) => {
        console.error("Error fetching version:", error);
      });
  }, []);

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
              code: css,
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
