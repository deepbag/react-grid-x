import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./popover-class.css";
import axios from "axios";
import { useConfig } from "document/context/ConfigContext";

const PopoverClass: React.FC = () => {
  const { lightMode } = useConfig();
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
        <h1
          className={`rgx-popover-class-title ${
            lightMode && "rgx-popover-class-title-light"
          }`}
        >
          Popover Class
        </h1>
        <p
          className={`rgx-popover-class-description ${
            lightMode && "rgx-popover-class-description-light"
          }`}
        >
          The Popover component in ReactGridX is used to display additional
          options when users interact with a column, such as enabling sorting.
          It shows a popup with the available actions, including a 'Clear Sort'
          option to reset the sorting state. The styles of the popover can be
          customized by overriding the default CSS classes.
        </p>
      </div>

      <section
        className="rgx-popover-class-section"
        id="rgx-popover-class-section-customization"
      >
        <h2
          className={`rgx-popover-class-section-title ${
            lightMode && "rgx-popover-class-section-title-light"
          }`}
        >
          CSS
        </h2>
        <p
          className={`rgx-popover-class-section-text ${
            lightMode && "rgx-popover-class-section-text-light"
          }`}
        >
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
