import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./table-pagination-class.css";
import axios from "axios";

const TablePaginationClass: React.FC = () => {
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
        <h1 className="rgx-table-pagination-class-title">
          Table Pagination Class
        </h1>
        <p className="rgx-table-pagination-class-description">
          The Table Pagination component in ReactGridX is used to navigate
          through pages of table data. It allows users to control how many rows
          are displayed per page and provides easy access to switch between
          pages. The styles of the pagination component can be customized by
          overriding the default CSS classes to match your application's design.
        </p>
      </div>

      <section className="rgx-table-pagination-class-section">
        <h2 className="rgx-table-pagination-class-section-title">
          CSS Classes
        </h2>
        <p className="rgx-table-pagination-class-section-text">
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
              className: "rgx-table-pagination",
              description:
                "The main container for the table pagination component, which wraps the pagination controls and display of current page information.",
            },
            {
              className: "rgx-table-pagination-info",
              description:
                "Displays information about the current page range and total number of rows in the table.",
            },
            {
              className: "rgx-table-pagination-row-per-page",
              description:
                "Container for the rows per page selector and its label.",
            },
            {
              className: "rgx-table-pagination-rows-per-page",
              description:
                "Wrapper for the rows per page dropdown, allowing users to select how many rows to display per page.",
            },
            {
              className: "rgx-table-pagination-rows-per-page-label",
              description: "The label for the rows per page dropdown.",
            },
            {
              className: "rgx-table-pagination-rows-per-page-select",
              description:
                "The dropdown selector that allows users to choose the number of rows to display per page.",
            },
            {
              className: "rgx-table-pagination-controls",
              description:
                "Container for pagination controls like previous page button, page number buttons, and next page button.",
            },
            {
              className: "rgx-table-pagination-button",
              description:
                "Style for each pagination button (previous, next, page numbers) in the pagination controls.",
            },
            {
              className: "rgx-table-pagination-active",
              description:
                "Applied to the active page number button to indicate the current page.",
            },
            {
              className: "rgx-table-pagination-ellipsis",
              description:
                "Style for pagination ellipses, used when there are skipped page numbers in the pagination controls.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-table-pagination-class-section"
        id="rgx-table-pagination-class-section-customization"
      >
        <h2 className="rgx-table-pagination-class-section-title">CSS</h2>
        <p className="rgx-table-pagination-class-section-text">
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
