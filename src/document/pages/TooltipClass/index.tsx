import { CodeBox } from "document/components";
import React, { useEffect, useState } from "react";
import "./tooltip-class.css";
import axios from "axios";
import { useConfig } from "document/context/ConfigContext";

const TooltipClass: React.FC = () => {
  const { lightMode } = useConfig();
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-tooltip.css"
      )
      .then((response) => {
        setCss(response.data);
      })
      .catch((error) => {
        console.error("Error fetching version:", error);
      });
  }, []);

  return (
    <div className="rgx-tooltip-class-overview">
      <div className="rgx-tooltip-class-header">
        <h1
          className={`rgx-tooltip-class-title ${
            lightMode && "rgx-tooltip-class-title-light"
          }`}
        >
          Tooltip Class
        </h1>
        <p
          className={`rgx-tooltip-class-description ${
            lightMode && "rgx-tooltip-class-description-light"
          }`}
        >
          The Tooltip component in ReactGridX allows you to display additional
          information when users hover over an element. The styles can be
          customized by overriding the default CSS classes.
        </p>
      </div>

      <section
        className="rgx-tooltip-class-section"
        id="rgx-tooltip-class-section-customization"
      >
        <h2
          className={`rgx-tooltip-class-section-title ${
            lightMode && "rgx-tooltip-class-section-title-light"
          }`}
        >
          CSS
        </h2>
        <p
          className={`rgx-tooltip-class-section-text ${
            lightMode && "rgx-tooltip-class-section-text-light"
          }`}
        >
          Customize how tooltips are styled using CSS classes. This allows you
          to modify positioning, colors, and animations to match your design
          needs.
        </p>
        <CodeBox
          commands={{
            "rgx-tooltip.css": {
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

export default TooltipClass;
