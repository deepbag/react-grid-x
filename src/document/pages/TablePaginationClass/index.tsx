import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./table-pagination-class.css";
import axios from "axios";
import { useConfig } from "document/context/ConfigContext";

const TablePaginationClass: React.FC = () => {
  const { lightMode } = useConfig();
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-table-pagination.css"
      )
      .then((response) => {
        setCss(response.data);
      })
      .catch((error) => {
        console.error("Error fetching version:", error);
      });
  }, []);

  return (
    <div className="rgx-table-pagination-class-overview">
      <div className="rgx-table-pagination-class-header">
        <h1
          className={`rgx-table-pagination-class-title ${
            lightMode && "rgx-table-pagination-class-title-light"
          }`}
        >
          Table Pagination Class
        </h1>
        <p
          className={`rgx-table-pagination-class-description ${
            lightMode && "rgx-table-pagination-class-description-light"
          }`}
        >
          The Table Pagination component in ReactGridX is used to navigate
          through pages of table data. It allows users to control how many rows
          are displayed per page and provides easy access to switch between
          pages. The styles of the pagination component can be customized by
          overriding the default CSS classes to match your application's design.
        </p>
      </div>

      <section
        className="rgx-table-pagination-class-section"
        id="rgx-table-pagination-class-section-customization"
      >
        <h2
          className={`rgx-table-pagination-class-section-title ${
            lightMode && "rgx-table-pagination-class-section-title-light"
          }`}
        >
          CSS
        </h2>
        <p
          className={`rgx-table-pagination-class-section-text ${
            lightMode && "rgx-table-pagination-class-section-text-light"
          }`}
        >
          Customize how tooltips are styled using CSS classes. This allows you
          to modify positioning, colors, and animations to match your design
          needs.
        </p>
        <CodeBox
          commands={{
            "rgx-table-pagination.css": {
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

export default TablePaginationClass;
