import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./arrow-pagination-class.css";
import axios from "axios";

const ArrowPaginationClass: React.FC = () => {
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
        <h1 className="rgx-arrow-pagination-class-title">
          Arrow Pagination Class
        </h1>
        <p className="rgx-arrow-pagination-class-description">
          The Arrow Pagination component in ReactGridX is used to navigate
          through pages of table data. It allows users to control how many rows
          are displayed per page and provides easy access to switch between
          pages. The styles of the pagination component can be customized by
          overriding the default CSS classes to match your application's design.
        </p>
      </div>

      <section className="rgx-arrow-pagination-class-section">
        <h2 className="rgx-arrow-pagination-class-section-title">
          CSS Classes
        </h2>
        <p className="rgx-arrow-pagination-class-section-text">
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
              className: "rgx-arrow-pagination",
              description:
                "The main container for the arrow pagination component, which wraps the pagination controls and display of current page information.",
            },
            {
              className: "rgx-arrow-pagination-info",
              description:
                "Displays information about the current page range and total number of rows in the table.",
            },
            {
              className: "rgx-arrow-pagination-row-per-page",
              description:
                "Container for the rows per page selector and its label.",
            },
            {
              className: "rgx-arrow-pagination-rows-per-page",
              description:
                "Wrapper for the rows per page dropdown, allowing users to select how many rows to display per page.",
            },
            {
              className: "rgx-arrow-pagination-rows-per-page-label",
              description: "The label for the rows per page dropdown.",
            },
            {
              className: "rgx-arrow-pagination-rows-per-page-select",
              description:
                "The dropdown selector that allows users to choose the number of rows to display per page.",
            },
            {
              className: "rgx-arrow-pagination-controls",
              description:
                "Container for pagination controls like first page, previous page, next page, and last page buttons.",
            },
            {
              className: "rgx-arrow-pagination-button",
              description:
                "Style for each pagination button (first, previous, next, last, and page buttons) in the pagination controls.",
            },
            {
              className: "rgx-arrow-pagination-page-of",
              description:
                "Displays the current page and the total number of pages in the pagination controls.",
            },
            {
              className: "rgx-arrow-pagination-ellipsis",
              description:
                "Style for pagination ellipses, used when there are skipped page numbers in the pagination controls.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-arrow-pagination-class-section"
        id="rgx-arrow-pagination-class-section-customization"
      >
        <h2 className="rgx-arrow-pagination-class-section-title">CSS</h2>
        <p className="rgx-arrow-pagination-class-section-text">
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
