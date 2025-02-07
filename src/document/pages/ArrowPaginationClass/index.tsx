import { CodeBox, CustomTable } from "document/components";
import React from "react";
import "./arrow-pagination-class.css";

const ArrowPaginationClass: React.FC = () => {
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
              code: `/* Pagination container styling */
.rgx-theme .rgx-arrow-pagination {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

/* Information section in pagination (like current page and total pages) */
.rgx-theme .rgx-arrow-pagination-info {
    font-size: 16px;
    color: #555;
    font-weight: 500;
}

/* Page number display, including "Page x of y" format */
.rgx-theme .rgx-arrow-pagination-page-of {
    font-size: 16px;
    color: #555;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin: 0 7px;
}

/* Row-per-page section styling */
.rgx-theme .rgx-arrow-pagination-row-per-page {
    display: flex;
    align-items: center;
}

/* Styling for the select dropdown that controls rows per page */
.rgx-theme .rgx-arrow-pagination-rows-per-page-select {
    height: 30px;
}

/* Disabled select dropdown style */
.rgx-theme .rgx-arrow-pagination-rows-per-page-select:disabled {
    cursor: not-allowed;
}

/* Rows-per-page label and select container */
.rgx-theme .rgx-arrow-pagination-rows-per-page {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-weight: 500;
}

/* Styling for the label inside the rows-per-page section */
.rgx-theme .rgx-theme.rgx-arrow-pagination-rows-per-page label {
    font-size: 16px;
    color: #202020;
    margin-right: 10px;
}

/* Style for the rows-per-page select dropdown */
.rgx-theme .rgx-arrow-pagination-rows-per-page select {
    padding: 5px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
}

/* Pagination button container for navigation buttons (Previous, Next, etc.) */
.rgx-theme .rgx-arrow-pagination-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

/* Style for pagination buttons */
.rgx-theme .rgx-arrow-pagination-button {
    padding: 5px 10px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
    font-weight: 500;
}

/* Hover effect for pagination buttons */
.rgx-theme .rgx-arrow-pagination-button:hover {
    background-color: #ddd;
}

/* Style for disabled pagination buttons */
.rgx-theme .rgx-arrow-pagination-button:disabled {
    background-color: #eee;
    cursor: not-allowed;
}

/* Style for the active pagination button */
.rgx-theme .rgx-arrow-pagination-button.rgx-active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
}

/* Styling for the ellipsis (e.g., "..." for skipped page numbers) */
.rgx-theme .rgx-arrow-pagination-ellipsis {
    background-color: transparent;
    color: #888;
    cursor: not-allowed;
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

export default ArrowPaginationClass;
