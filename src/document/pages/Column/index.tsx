import React from "react";
import "./column.css";
import { CodeBox, CustomTable, ImportantBoldTypography } from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";

const Column: React.FC = () => {
  return (
    <>
      <div className="rgx-column-overview">
        <div className="rgx-column-header">
          <h1 className="rgx-column-title">Column</h1>
          <p className="rgx-column-description">
            The ReactGridX component allows you to define and customize columns.
            By using the `name`, `key`, and other props, you can control how
            each column behaves, including sorting, rendering custom content,
            and more.
          </p>
        </div>

        <section className="rgx-column-section">
          <h2 className="rgx-column-section-title">Contents</h2>
          <p className="rgx-column-section-text">
            Explore the various sections and detailed information available on
            this page. Each section is designed to provide you with a
            comprehensive overview of column configuration.
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
                title: "Props",
                description:
                  "Controls the configuration of each column, including its name, key, sorting, and custom rendering.",
                url: "rgx-column-section-props",
              },
              {
                title: "Column Customization",
                description:
                  "Customizing columns with render functions, sorting, and tooltips for better user interaction.",
                url: "rgx-column-section-customization",
              },
              {
                title: "Sorting Columns",
                description:
                  "Configure how columns can be sorted, including custom sorting logic.",
                url: "rgx-column-section-sorting",
              },
              {
                title: "Tooltips",
                description:
                  "Enhance column headers with tooltips for additional context and details.",
                url: "rgx-column-section-tooltips",
              },
              {
                title: "Width and Layout",
                description:
                  "Control the column's width and layout for better presentation and responsiveness.",
                url: "rgx-column-section-width",
              },
            ]}
          />
        </section>

        <section className="rgx-column-section" id="rgx-column-section-props">
          <h2 className="rgx-column-section-title">Props</h2>
          <p className="rgx-column-section-text">
            Learn about the available props for customizing columns in
            ReactGridX.
          </p>
          <CustomTable
            columns={[
              { header: "Prop Name", accessor: "propName" },
              { header: "Type", accessor: "type" },
              { header: "Description", accessor: "description" },
            ]}
            data={[
              {
                propName: "name",
                type: "string",
                description:
                  "The display name of the column, which will be shown in the header.",
              },
              {
                propName: "key",
                type: "string",
                description:
                  "A unique key corresponding to the data field this column will display.",
              },
              {
                propName: "render",
                type: "() => JSX.Element | string",
                description:
                  "A custom render function for modifying how cell data is displayed.",
              },
              {
                propName: "sortable",
                type: "boolean",
                description:
                  "A flag to enable sorting behavior for the column. Defaults to false.",
              },
              {
                propName: "onSort",
                type: "(a, b, direction) => number",
                description:
                  "A custom sorting function for controlling how data in the column is sorted.",
              },
              {
                propName: "tooltip",
                type: "boolean",
                description:
                  "A flag to enable tooltips for column headers. Defaults to false.",
              },
              {
                propName: "tooltipCustomContent",
                type: "(rowData) => string",
                description:
                  "A function to return custom content for tooltips based on row data.",
              },
              {
                propName: "width",
                type: "string",
                description:
                  "The width of the column, specified as a string with 'px' unit.",
              },
            ]}
          />
        </section>

        <section
          className="rgx-column-section"
          id="rgx-column-section-customization"
        >
          <h2 className="rgx-column-section-title">Column Customization</h2>
          <p className="rgx-column-section-text">
            Customize how columns are rendered with the <ImportantBoldTypography>render</ImportantBoldTypography> function. This
            allows you to apply custom formatting or use additional components
            inside the column cells.
          </p>
          <CodeBox
            commands={{
              Usage: {
                code: `<ReactGridX
    columns={[
      { name: 'Name', key: 'name', render: (data) => <span style={{ color: 'red' }}>{data}</span> },
    ]}
    data={data}
/>`,
                language: "jsx",
                lineNumber: true,
              },
            }}
          />
        </section>

        <section className="rgx-column-section" id="rgx-column-section-sorting">
          <h2 className="rgx-column-section-title">Sorting Columns</h2>
          <p className="rgx-column-section-text">
            Sorting functionality allows users to click on the column headers to
            reorder the data. You can also provide a custom sorting function to
            control the sorting behavior based on specific requirements.
          </p>
          <p className="rgx-column-section-text">
            You can enable sorting for columns by setting the{" "}
            <ImportantBoldTypography>sortable</ImportantBoldTypography> prop to <ImportantBoldTypography>true</ImportantBoldTypography>. Additionally, you
            can customize the sorting behavior using the <ImportantBoldTypography>onSort</ImportantBoldTypography>{" "}
            prop, which accepts a custom sorting function.
          </p>

          <CodeBox
            commands={{
              Usage: {
                code: `<ReactGridX
      columns={[
        {
          name: "Name",
          key: "name",
          sortable: true,
          onSort: (a, b, direction) => a.localeCompare(b), // Sorting by name in alphabetical order
        },
        {
          name: "Age",
          key: "age",
          sortable: true,
          onSort: (a, b, direction) => a - b, // Sorting by age in ascending numerical order
        },
        {
          name: "Country",
          key: "country",
          sortable: true,
          onSort: (a, b, direction) => {
            const order = ["USA", "Canada", "Mexico"];
            return direction === "asc"
              ? order.indexOf(a) - order.indexOf(b)
              : order.indexOf(b) - order.indexOf(a); // Sorting by predefined country order
          },
        },
      ]}
      data={data}
/>`,
                language: "jsx",
                lineNumber: true,
              },
            }}
          />
        </section>

        <section
          className="rgx-column-section"
          id="rgx-column-section-tooltips"
        >
          <h2 className="rgx-column-section-title">Tooltips</h2>
          <p className="rgx-column-section-text">
            Add tooltips to your column headers to provide more information to
            users when they hover over the headers. You can customize the
            tooltip content dynamically based on row data.
          </p>
          <CodeBox
            commands={{
              Usage: {
                code: `<ReactGridX
    columns={[
      { name: 'Name', key: 'name', tooltip: true, tooltipCustomContent: (rowData) => \`Details about \${rowData.name}\` },
    ]}
    data={data}
/>`,
                language: "jsx",
                lineNumber: true,
              },
            }}
          />
        </section>

        <section className="rgx-column-section" id="rgx-column-section-width">
          <h2 className="rgx-column-section-title">Width and Layout</h2>
          <p className="rgx-column-section-text">
            Define the width of your columns using the <ImportantBoldTypography>width</ImportantBoldTypography> prop.
            This allows for precise control over how the table is laid out,
            ensuring a better user experience.
          </p>

          <p className="rgx-column-section-text">
            You can specify the width of individual columns by passing a string
            value with a <ImportantBoldTypography>"px"</ImportantBoldTypography> unit. For example, setting the width of a column
            to <ImportantBoldTypography>"200px"</ImportantBoldTypography> will ensure that the column is 200px wide.
          </p>

          <CodeBox
            commands={{
              Usage: {
                code: `<ReactGridX
      columns={[
        { name: "Name", key: "name", width: "200px" },
        { name: "Age", key: "age", width: "100px" }
      ]}
      data={data}
/>`,
                language: "jsx",
                lineNumber: true,
              },
            }}
          />
        </section>
      </div>
    </>
  );
};

export default Column;
