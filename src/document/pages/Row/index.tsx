import React from "react";
import "./row.css";
import { CodeBox, CustomTable } from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";

const Row: React.FC = () => {
  return (
    <div className="rgx-row-overview">
      <div className="rgx-row-header">
        <h1 className="rgx-row-title">Row</h1>
        <p className="rgx-row-description">
          The ReactGridX component allows you to manage row interactions,
          including handling row clicks, expandable rows, and row selection. By
          using the <code>onRowClick</code>, <code>expandedComponent</code>, and{" "}
          <code>selectionCheckbox</code>
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
          Capture row clicks using the <code>onRowClick</code> callback to
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
          <code>expandedComponent</code> prop receives the clicked row data and
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
          select-all functionality. Use the <code>selectionCheckbox</code> prop
          to enable selection and handle changes with the{" "}
          <code>onSelectionCheck</code> callback.
        </p>
        <p className="rgx-row-section-text">
          The <code>onSelectionCheck</code> callback provides the selected rows
          and the
          <code>isAllChecked</code> flag to determine if all rows are selected.
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

      <section className="rgx-row-section" id="rgx-row-section-explanation">
        <h2 className="rgx-row-section-title">Explanation</h2>
        <ul className="rgx-row-section-list">
          <li className="rgx-row-section-item">
            In the example above, the ReactGridX component is configured with
            columns and data.
          </li>
          <li className="rgx-row-section-item">
            The <code>onRowClick</code> prop is used to handle row clicks. This
            callback receives the clicked row data, allowing you to process or
            display additional information when a row is clicked.
          </li>
          <li className="rgx-row-section-item">
            The <code>expandedComponent</code> prop allows you to define a
            component to be displayed when a row is expanded. This enables you
            to show more details within the same row.
          </li>
          <li className="rgx-row-section-item">
            The <code>selectionCheckbox</code> prop enables row selection with
            checkboxes. You can select individual rows or select all rows at
            once using the <code>onSelectionCheck</code> callback to handle the
            selected rows.
          </li>
        </ul>
      </section>

      <section className="rgx-row-section" id="rgx-row-section-tips">
        <h2 className="rgx-row-section-title">Tips for Customizing Rows</h2>
        <ul className="rgx-row-section-list">
          <li className="rgx-row-section-item">
            When using the <code>onRowClick</code> prop, ensure that you handle
            the row data appropriately, such as displaying it in a modal or
            passing it to another component for further processing.
          </li>
          <li className="rgx-row-section-item">
            Use the <code>expandedComponent</code> to show related or additional
            content when a row is expanded. This feature is ideal for displaying
            nested data, such as detailed user information or additional
            options.
          </li>
          <li className="rgx-row-section-item">
            If you're implementing row selection, ensure that the{" "}
            <code>onSelectionCheck</code> callback is used to capture the
            selected rows and apply any desired behavior, such as enabling bulk
            actions.
          </li>
          <li className="rgx-row-section-item">
            For performance optimization, avoid unnecessary re-renders when
            expanding rows or selecting rows. Use memoization or React's{" "}
            <code>React.memo</code> to optimize rendering.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Row;
