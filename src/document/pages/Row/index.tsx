import React from "react";
import "./row.css";
import {
  CodeBox,
  CustomTable,
  ImportantBoldTypography,
} from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";

const Row: React.FC = () => {
  return (
    <div className="rgx-row-overview">
      <div className="rgx-row-header">
        <h1 className="rgx-row-title">Row</h1>
        <p className="rgx-row-description">
          The ReactGridX component allows you to manage row interactions,
          including handling row clicks, expandable rows, and row selection. By
          using the{" "}
          <ImportantBoldTypography>onRowClick</ImportantBoldTypography>,{" "}
          <ImportantBoldTypography>expandedComponent</ImportantBoldTypography>,
          and{" "}
          <ImportantBoldTypography>selectionCheckbox</ImportantBoldTypography>
          props, you can enhance user interaction with rows.
        </p>
      </div>

      <section className="rgx-row-section">
        <h2 className="rgx-row-section-title">Contents</h2>
        <p className="rgx-row-section-text">
          Explore the various sections and detailed information available on
          this page. Each section is designed to provide you with a
          comprehensive overview of row configuration.
        </p>
        <CustomTable
          hideHeader={true}
          columns={[
            {
              header: "Title",
              accessor: "title",
              onClick: (_) => {
                scrollToSection(_);
              },
            },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              title: "Row Click Event",
              description:
                "Capture row clicks using the `onRowClick` callback to handle user interactions.",
              url: "rgx-row-section-click",
            },
            {
              title: "Expandable Rows",
              description:
                "Expand rows to show additional content within the same row using the `expandedComponent` prop.",
              url: "rgx-row-section-expandable",
            },
            {
              title: "Row Selection",
              description:
                "Enable row selection with checkboxes for single and select-all functionality using the `selectionCheckbox` prop.",
              url: "rgx-row-section-selection",
            },
          ]}
        />
      </section>

      <section className="rgx-row-section" id="rgx-row-section-click">
        <h2 className="rgx-row-section-title">Row Click Event</h2>
        <p className="rgx-row-section-text">
          Capture row clicks using the <ImportantBoldTypography>onRowClick</ImportantBoldTypography> callback to
          handle user interactions. This allows you to respond to row selections
          or trigger actions based on the clicked row.
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX
    columns={columns}
    data={data}
    onRowClick={(rowData) => console.log(rowData)} // Log clicked row data
  />`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section className="rgx-row-section" id="rgx-row-section-expandable">
        <h2 className="rgx-row-section-title">Expandable Rows</h2>
        <p className="rgx-row-section-text">
          Expand rows to display additional content within the same row. The
          <ImportantBoldTypography>expandedComponent</ImportantBoldTypography> prop receives the clicked row data and
          returns a JSX component to be rendered.
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX
    columns={columns}
    data={data}
    expandedComponent={(rowData) => <div>{JSON.stringify(rowData)}</div>} // Display additional row data
  />`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section className="rgx-row-section" id="rgx-row-section-selection">
        <h2 className="rgx-row-section-title">Row Selection</h2>
        <p className="rgx-row-section-text">
          Enable row selection with checkboxes for both individual and
          select-all functionality. Use the <ImportantBoldTypography>selectionCheckbox</ImportantBoldTypography> prop
          to enable selection and handle changes with the{" "}
          <ImportantBoldTypography>onSelectionCheck</ImportantBoldTypography> callback.
        </p>
        <p className="rgx-row-section-text">
          The <ImportantBoldTypography>onSelectionCheck</ImportantBoldTypography> callback provides the selected rows
          and the
          <ImportantBoldTypography>isAllChecked</ImportantBoldTypography> flag to determine if all rows are selected.
        </p>

        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX
    columns={columns}
    data={data}
    selectionCheckbox={true} // Enable row selection
    onSelectionCheck={(selectedRows, isAllChecked) => {
      console.log("Selected Rows:", selectedRows);
      console.log("Is All Checked:", isAllChecked);
    }}
  />`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>
    </div>
  );
};

export default Row;
