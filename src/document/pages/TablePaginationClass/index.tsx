import { CodeBox, CustomTable } from "document/components";
import React from "react";
import "./table-pagination-class.css";

const TablePaginationClass: React.FC = () => {
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
              code: `/* Main pagination container, aligned with space between elements, wraps on smaller screens. */
.rgx-theme .rgx-table-pagination {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

/* Pagination info section, styled with font size, color, and weight. */
.rgx-theme .rgx-table-pagination-info {
    font-size: 16px;
    color: #555;
    font-weight: 500;
}

/* Rows per page section with label and select element aligned horizontally. */
.rgx-theme .rgx-table-pagination-row-per-page {
    display: flex;
    align-items: center;
}

/* Styling for rows per page select dropdown. */
.rgx-theme .rgx-table-pagination-rows-per-page-select {
    height: 30px;
}

/* Disabled select element appearance, with a "not-allowed" cursor. */
.rgx-theme .rgx-table-pagination-rows-per-page-select:disabled {
    cursor: not-allowed;
}

/* Rows per page section label and select element, styled with margins and font weight. */
.rgx-theme .rgx-table-pagination-rows-per-page {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-weight: 500;
}

/* Label within rows per page section, with spacing and font styling. */
.rgx-theme .rgx-table-pagination-rows-per-page label {
    font-size: 16px;
    color: #202020;
    margin-right: 10px;
}

/* Styling for the select dropdown within rows per page section. */
.rgx-theme .rgx-table-pagination-rows-per-page select {
    padding: 5px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
}

/* Pagination control buttons container with flexible wrapping and spacing. */
.rgx-theme .rgx-table-pagination-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

/* Individual pagination button styling, including padding, background, and hover effects. */
.rgx-theme .rgx-table-pagination-button {
    padding: 5px 10px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
    font-weight: 500;
}

/* Hover effect for pagination buttons, changing background color. */
.rgx-theme .rgx-table-pagination-button:hover {
    background-color: #ddd;
}

/* Disabled pagination button styling with light background and "not-allowed" cursor. */
.rgx-theme .rgx-table-pagination-button:disabled {
    background-color: #eee;
    cursor: not-allowed;
}

/* Active pagination button styling with custom background and border color. */
.rgx-theme .rgx-table-pagination-button.rgx-table-pagination-active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
}

/* Ellipsis button for pagination, styled to be transparent with a gray color. */
.rgx-theme .rgx-table-pagination-ellipsis {
    background-color: transparent;
    color: #888;
    cursor: not-allowed;
}
`,
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
