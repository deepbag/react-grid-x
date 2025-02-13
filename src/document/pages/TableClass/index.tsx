import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./table-class.css";
import axios from "axios";

const TableClass: React.FC = () => {
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
            {
              className: "rgx-table-container-loading",
              description:
                "The class styles the table container during data loading, typically showing a loading indicator.",
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
