import { CodeBox, CustomTable } from "document/components";
import React from "react";
import "./table-class.css";

const TableClass: React.FC = () => {
  return (
    <div className="rgx-popover-class-overview">
      <div className="rgx-popover-class-header">
        <h1 className="rgx-popover-class-title">Table Class</h1>
        <p className="rgx-popover-class-description">
          ReactGridX is a table component that allows you to display tabular
          data with advanced features like sorting, filtering, and pagination.
          When sorting is enabled, a popup appears with available actions,
          including a 'Clear Sort' option to reset the sorting state. The styles
          of ReactGridX can be customized by overriding the default CSS classes.
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
              className: "rgx-theme",
              description:
                "The main wrapper class for the entire ReactGridX table, allowing customization of the table's theme and layout.",
            },
            {
              className: "rgx-table-container",
              description:
                "The container that wraps the entire table, which can display a loading state and loader component when data is being fetched.",
            },
            {
              className: "rgx-table",
              description:
                "The main class for the table element, which holds the rows, columns, and table structure.",
            },
            {
              className: "rgx-table-head",
              description:
                "The header section of the table that contains the column headings.",
            },
            {
              className: "rgx-table-head-tr",
              description:
                "The table row within the table header that contains the individual column headers.",
            },
            {
              className: "rgx-table-head-th",
              description:
                "The table header cell, representing an individual column in the header row.",
            },
            {
              className: "rgx-table-header-checkbox",
              description:
                "The checkbox in the table header used to select or deselect all rows if selection is enabled.",
            },
            {
              className: "rgx-table-sort-icon",
              description:
                "The icon displayed in the table header to indicate the sorting direction of the column.",
            },
            {
              className: "rgx-table-ellipsis-vertical-icon",
              description:
                "The vertical ellipsis icon used for triggering the actions menu, such as sorting or clearing sort.",
            },
            {
              className: "rgx-table-popup-items",
              description:
                "The individual action items within the popover menu, such as options for sorting ascending, descending, or clearing sort.",
            },
            {
              className: "rgx-table-asc-sort-icon",
              description:
                "The icon indicating ascending sort order in the column, displayed inside the popover menu.",
            },
            {
              className: "rgx-table-desc-sort-icon",
              description:
                "The icon indicating descending sort order in the column, displayed inside the popover menu.",
            },
            {
              className: "rgx-table-asc-desc-sort-icon",
              description:
                "The icon used for clearing the current sort state of the column, displayed inside the popover menu.",
            },
            {
              className: "rgx-table-body",
              description:
                "The body section of the table that contains the table rows.",
            },
            {
              className: "rgx-table-tobody-loading",
              description:
                "A class added to the table body when the data is loading, indicating a loading state.",
            },
            {
              className: "rgx-table-body-tr",
              description:
                "The individual row in the table body that contains data cells for each column.",
            },
            {
              className: "rgx-table-body-td-checkbox",
              description:
                "The checkbox in each row for selecting or deselecting individual rows when row selection is enabled.",
            },
            {
              className: "rgx-table-row-checkbox",
              description:
                "The checkbox inside each row for marking individual rows as selected.",
            },
            {
              className: "rgx-table-expanded-arrow",
              description:
                "The arrow icon displayed in the row to indicate whether it is expanded or collapsed.",
            },
            {
              className: "rgx-table-expanded-arrow-icon",
              description:
                "The actual icon used inside the expanded arrow, which toggles the row's expanded state.",
            },
            {
              className: "rgx-table-body-td",
              description:
                "The individual cell in the table body that holds the data for each column.",
            },
            {
              className: "rgx-table-expanded-row-tr",
              description:
                "The table row for displaying expanded content when a row is expanded.",
            },
            {
              className: "rgx-table-expanded-row-td",
              description:
                "The table cell for displaying expanded content when a row is expanded, spanning all columns.",
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
            "rgx-theme.css": {
              code: `/* Table theme styles, including table structure, borders, and font styling. */
.rgx-theme {
    width: 100%;
}

/* Container for the table, allows for relative positioning of table elements. */
.rgx-theme .rgx-table-container {
    position: relative;
}

.rgx-theme .rgx-table {
    width: 100%;
    border-collapse: collapse;
}

/* Loader effect for table body while loading, applies blur and disables pointer events. */
.rgx-theme .rgx-table-tobody-loading {
    filter: blur(0.8px);
    pointer-events: none;
}

/* Styling for table header (th) and table data cells (td) with padding and borders. */
.rgx-theme .rgx-table-head-th,
.rgx-theme .rgx-table-head-th-checkbox {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

.rgx-theme .rgx-table-body-td,
.rgx-theme .rgx-table-body-td-checkbox {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

/* Alternating row colors for even rows, giving a light gray background. */
.rgx-theme .rgx-table-body-tr:nth-child(even) {
    background-color: #f2f2f2;
}

/* Row cursor changes to pointer for better UX, indicating that it's clickable. */
.rgx-theme .rgx-table-body-tr {
    cursor: pointer;
}

.rgx-theme .rgx-table-body-tr:hover {
    background-color: #ebf0f6;
}

/* Header row with a light background color and default cursor. */
.rgx-theme .rgx-table-head {
    background-color: #ebf0f6;
    cursor: default;
}

/* Styling for an expanded row with a smooth background transition. */
.rgx-theme .rgx-table-body-tr-expanded {
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
}

/* Expanded row with extra padding on the left side for content clarity. */
.rgx-theme .rgx-table-expanded-row-tr {
    background-color: #f9f9f9;
    padding-left: 20px;
}

/* Styling for expanded row cells, with additional padding and no top border. */
.rgx-theme .rgx-table-expanded-row-tr .rgx-table-expanded-row-td {
    padding: 20px;
    border-top: 0;
}

/* Styling for the expanded arrow icon, aligning it with the text. */
.rgx-theme .rgx-table-expanded-arrow {
    cursor: pointer;
    margin-right: 10px;
    text-align: center;
}

/* Additional padding for expanded row table data cells. */
.rgx-theme .rgx-table-expanded-row-td {
    padding: 20px;
}

/* Font size for the arrow icon used in expanded rows. */
.rgx-theme .rgx-table-expanded-arrow-icon {
    font-size: 14px;
}

/* Popup items in the table with font styling, padding, and hover effects. */
.rgx-theme .rgx-table-popup-items {
    font-weight: 400;
    padding: 8px;
    font-size: 15px;
    border-radius: 5px;
}

/* Hover effect for popup items, with a light background color. */
.rgx-theme .rgx-table-popup-items:hover {
    background-color: #ededed;
}

/* Checkbox style for the header cell in the table, with size and cursor styling. */
.rgx-theme .rgx-table-head-th-checkbox input[type="checkbox"] {
    width: 17px;
    height: 17px;
    cursor: pointer;
    margin: 0;
    transition: background-color 0.2s ease;
    margin-bottom: -2px;
}

/* Checkbox style for table rows, similar to header checkbox. */
.rgx-theme .rgx-table-body-td-checkbox input[type="checkbox"] {
    width: 17px;
    height: 17px;
    cursor: pointer;
    margin: 0;
    transition: background-color 0.2s ease;
    margin-bottom: -2px;
}

/* Style for checked checkboxes, turning the background green. */
.rgx-theme .rgx-table-body-td-checkbox input[type="checkbox"]:checked,
.rgx-theme .rgx-table-head-th-checkbox input[type="checkbox"]:checked {
    background-color: #4caf50;
    border-color: #4caf50;
    margin-bottom: -2px;
}

/* Checkbox hover effect, light green background when hovered. */
.rgx-theme .rgx-table-body-td-checkbox input[type="checkbox"]:hover,
.rgx-theme .rgx-table-head-th-checkbox input[type="checkbox"]:hover {
    background-color: #4caf4f55;
}

/* Custom checkbox appearance (optional) with no default appearance styles. */
.rgx-theme .rgx-table-body-td-checkbox input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #ddd;
    border-radius: 3px;
    position: relative;
    width: 17px;
    height: 17px;
}

/* Custom checkbox style for header cells, similar to row checkboxes. */
.rgx-theme .rgx-table-head-th-checkbox input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #ddd;
    border-radius: 3px;
    position: relative;
    width: 17px;
    height: 17px;
}

/* Checked state style for checkboxes with a green background. */
.rgx-theme .rgx-table-body-td-checkbox input[type="checkbox"]:checked,
.rgx-theme .rgx-table-head-th-checkbox input[type="checkbox"]:checked {
    background-color: #4caf50;
}

/* Style for the checkmark inside the checkbox when it's checked. */
.rgx-theme .rgx-table-body-td-checkbox input[type="checkbox"]:checked::before,
.rgx-theme .rgx-table-head-th-checkbox input[type="checkbox"]:checked::before {
    content: "✔";
    position: absolute;
    top: 0;
    left: 3px;
    color: white;
    font-size: 12px;
    line-height: 16px;
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

export default TableClass;
