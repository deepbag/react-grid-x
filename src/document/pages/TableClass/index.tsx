import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./table-class.css";
import axios from "axios";
import { useConfig } from "document/context/ConfigContext";

const TableClass: React.FC = () => {
  const { lightMode } = useConfig();
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme.css"
      )
      .then((response) => {
        setCss(response.data);
      })
      .catch((error) => {
        console.error("Error fetching version:", error);
      });
  }, []);

  return (
    <div className="rgx-table-class-overview">
      <div className="rgx-table-class-header">
        <h1
          className={`rgx-table-class-title ${
            lightMode && "rgx-table-class-title-light"
          }`}
        >
          Table Class
        </h1>
        <p
          className={`rgx-table-class-description ${
            lightMode && "rgx-table-class-description-light"
          }`}
        >
          ReactGridX is a table component that allows you to display tabular
          data with advanced features like sorting, filtering, and pagination.
          When sorting is enabled, a popup appears with available actions,
          including a 'Clear Sort' option to reset the sorting state. The styles
          of ReactGridX can be customized by overriding the default CSS classes.
        </p>
      </div>

      <section
        className="rgx-table-class-section"
        id="rgx-table-class-section-customization"
      >
        <h2
          className={`rgx-table-class-section-title ${
            lightMode && "rgx-table-class-section-title-light"
          }`}
        >
          CSS
        </h2>
        <p
          className={`rgx-table-class-section-text ${
            lightMode && "rgx-table-class-section-text-light"
          }`}
        >
          Customize how tooltips are styled using CSS classes. This allows you
          to modify positioning, colors, and animations to match your design
          needs.
        </p>
        <CodeBox
          commands={{
            "rgx-theme.css": {
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

export default TableClass;
