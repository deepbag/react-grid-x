import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./arrow-pagination-class.css";
import axios from "axios";
import { useConfig } from "document/context/ConfigContext";

const ArrowPaginationClass: React.FC = () => {
  const { lightMode } = useConfig();
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination.css"
      )
      .then((response) => {
        setCss(response.data);
      })
      .catch((error) => {
        console.error("Error fetching version:", error);
      });
  }, []);

  return (
    <div className="rgx-arrow-pagination-class-overview">
      <div className="rgx-arrow-pagination-class-header">
        <h1
          className={`rgx-arrow-pagination-class-title ${
            lightMode && "rgx-arrow-pagination-class-title-light"
          }`}
        >
          Arrow Pagination Class
        </h1>
        <p
          className={`rgx-arrow-pagination-class-description ${
            lightMode && "rgx-arrow-pagination-class-description-light"
          }`}
        >
          The Arrow Pagination component in ReactGridX is used to navigate
          through pages of table data. It allows users to control how many rows
          are displayed per page and provides easy access to switch between
          pages. The styles of the pagination component can be customized by
          overriding the default CSS classes to match your application's design.
        </p>
      </div>

      <section
        className="rgx-arrow-pagination-class-section"
        id="rgx-arrow-pagination-class-section-customization"
      >
        <h2
          className={`rgx-arrow-pagination-class-section-title ${
            lightMode && "rgx-arrow-pagination-class-section-title-light"
          }`}
        >
          CSS
        </h2>
        <p
          className={`rgx-arrow-pagination-class-section-text ${
            lightMode && "rgx-arrow-pagination-class-section-text-light"
          }`}
        >
          Customize how tooltips are styled using CSS classes. This allows you
          to modify positioning, colors, and animations to match your design
          needs.
        </p>
        <CodeBox
          commands={{
            "rgx-arrow-pagination.css": {
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

export default ArrowPaginationClass;
