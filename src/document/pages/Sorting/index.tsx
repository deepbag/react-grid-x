import React from "react";
import "./sorting.css";
import {
  CodeBox,
  CustomTable,
  ImportantBoldTypography,
} from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";

const Sorting: React.FC = () => {
  return (
    <div className="rgx-sorting-overview">
      <div className="rgx-sorting-header">
        <h1 className="rgx-sorting-title">Sorting</h1>
        <p className="rgx-sorting-description">
          ReactGridX supports multi-column sorting for both numeric and
          alphabetical data. You can enable sorting on multiple columns by
          setting the{" "}
          <ImportantBoldTypography>sortable</ImportantBoldTypography> property
          to true. Users can sort by multiple columns by holding the Shift key
          while clicking on column headers.
        </p>
      </div>

      <section className="rgx-sorting-section">
        <h2 className="rgx-sorting-section-title">Contents</h2>
        <p className="rgx-sorting-section-text">
          Explore the sections and detailed information available on sorting in
          ReactGridX. This guide covers how to enable sorting, custom sorting
          logic, and server-side sorting for large datasets.
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
              title: "Column Props",
              description: "Controls sorting behavior at the column level.",
              url: "rgx-sorting-section-column-props",
            },
            {
              title: "Table Props",
              description: "Controls sorting behavior at the table level.",
              url: "rgx-sorting-section-table-props",
            },
            {
              title: "Default Sorting",
              description:
                "Enable multi-column sorting by setting the sortable property to true.",
              url: "rgx-sorting-section-default-sorting",
            },
            {
              title: "Custom Sorting",
              description:
                "Define a custom sorting function using the `onSort` prop to control sorting behavior.",
              url: "rgx-sorting-section-custom-sorting",
            },
            {
              title: "Server-Side Sorting",
              description:
                "Enable server-side sorting for large datasets by setting `serverSideSorting` to true.",
              url: "rgx-sorting-section-server-side-sorting",
            },
            {
              title: "Multi-Column Sort",
              description:
                "Allow users to sort by multiple columns by enabling `multiColumnSort`.",
              url: "rgx-sorting-section-multi-column-sort",
            },
          ]}
        />
      </section>

      <section
        className="rgx-sorting-section"
        id="rgx-sorting-section-column-props"
      >
        <h2 className="rgx-sorting-section-title">Column Props</h2>
        <p className="rgx-sorting-section-text">
          These props are used to control sorting behavior at the column level.
          You can specify whether a column is sortable and define custom sorting
          logic for individual columns.
        </p>
        <CustomTable
          columns={[
            { header: "Prop Name", accessor: "propName", width: "100px" },
            { header: "Type", accessor: "type" },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              propName: "sortable",
              type: "boolean",
              description:
                "Enables sorting for a column. Set to true to make the column sortable.",
            },
            {
              propName: "onSort",
              type: "(a: any, b: any, direction: 'asc' | 'desc') => number",
              description:
                "A custom function to define how rows should be sorted when clicking the column header. It receives the data for the two rows being compared and the sort direction.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-sorting-section"
        id="rgx-sorting-section-table-props"
      >
        <h2 className="rgx-sorting-section-title">Table Props</h2>
        <p className="rgx-sorting-section-text">
          These props control sorting behavior at the table level, including
          enabling server-side sorting and handling the sorting logic
          externally.
        </p>
        <CustomTable
          columns={[
            { header: "Prop Name", accessor: "propName", width: "100px" },
            { header: "Type", accessor: "type" },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              propName: "serverSideSorting",
              type: "boolean",
              description:
                "Enables server-side sorting for large datasets. When true, sorting logic is handled externally.",
            },
            {
              propName: "onSorting",
              type: "(column: { key: string; direction: 'asc' | 'desc' }[]) => void",
              description:
                "A callback function that is triggered when sorting occurs. It receives the column and sort direction, allowing you to handle sorting logic externally.",
            },
            {
              propName: "multiColumnSort",
              type: "boolean",
              description:
                "When true, users can sort by multiple columns at the same time. By default, this is false.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-sorting-section"
        id="rgx-sorting-section-default-sorting"
      >
        <h2 className="rgx-sorting-section-title">Default Sorting</h2>
        <p className="rgx-sorting-section-text">
          To enable sorting on a column, set the{" "}
          <ImportantBoldTypography>sortable</ImportantBoldTypography> prop to
          true. Users can click on the column headers to toggle sorting between
          ascending and descending order. Multi-column sorting can be done by
          holding the Shift key while clicking on additional columns.
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `const columns = [
  { name: "Name", key: "name", sortable: true },
  { name: "Age", key: "age", sortable: true },
  { name: "Country", key: "country", sortable: true },
];`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-sorting-section"
        id="rgx-sorting-section-custom-sorting"
      >
        <h2 className="rgx-sorting-section-title">Custom Sorting</h2>
        <p className="rgx-sorting-section-text">
          You can provide a custom sorting function using the{" "}
          <ImportantBoldTypography>onSort</ImportantBoldTypography> prop for
          finer control over sorting behavior. The function receives the two
          values to be compared (
          <ImportantBoldTypography>a</ImportantBoldTypography> and{" "}
          <ImportantBoldTypography>b</ImportantBoldTypography>), and the sorting
          direction (<ImportantBoldTypography>asc</ImportantBoldTypography> or{" "}
          <ImportantBoldTypography>desc</ImportantBoldTypography>), allowing you
          to customize the sorting logic.
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `const columns = [
    {
      name: "Name",
      key: "name",
      sortable: true,
      onSort: (a, b, direction) => a.localeCompare(b),
    },
    {
      name: "Age",
      key: "age",
      sortable: true,
      onSort: (a, b, direction) => a - b,
    },
    {
      name: "Country",
      key: "country",
      sortable: true,
      onSort: (a, b, direction) => {
        const order = ["USA", "Canada", "Mexico"];
        return direction === "asc"
          ? order.indexOf(a) - order.indexOf(b)
          : order.indexOf(b) - order.indexOf(a);
      },
    },
];
`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-sorting-section"
        id="rgx-sorting-section-server-side-sorting"
      >
        <h2 className="rgx-sorting-section-title">Server-Side Sorting</h2>
        <p className="rgx-sorting-section-text">
          For large datasets, you may want to handle sorting on the server-side.
          You can enable server-side sorting by setting the{" "}
          <ImportantBoldTypography>serverSideSorting</ImportantBoldTypography>
          prop to true. The sorting logic can be handled externally, for
          example, by making an API request to fetch the sorted data.
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX
  columns={columns}
  data={data}
  serverSideSorting={true}
  onSorting={(column) => fetchSortedData(column)}
/>`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-sorting-section"
        id="rgx-sorting-section-multi-column-sort"
      >
        <h2 className="rgx-sorting-section-title">Multi-Column Sort</h2>
        <p className="rgx-sorting-section-text">
          When{" "}
          <ImportantBoldTypography>multiColumnSort</ImportantBoldTypography> is
          enabled (default: true), users can sort by multiple columns at the
          same time. To do this, hold down the Shift key while clicking on
          additional column headers. This allows sorting to be applied to
          multiple columns sequentially.
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX
  columns={columns}
  data={data}
  multiColumnSort={true}
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

export default Sorting;
