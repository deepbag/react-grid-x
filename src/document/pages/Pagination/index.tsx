import React from "react";
import "./pagination.css";
import {
  CodeBox,
  CustomTable,
  ImportantBoldTypography,
} from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";
import { useConfig } from "document/context/ConfigContext";

const Pagination: React.FC = () => {
  const { lightMode } = useConfig();
  return (
    <div className="rgx-pagination-overview">
      <div className="rgx-pagination-header">
        <h1
          className={`rgx-pagination-title ${
            lightMode && "rgx-pagination-title-light"
          }`}
        >
          Pagination
        </h1>
        <p
          className={`rgx-pagination-description ${
            lightMode && "rgx-pagination-description-light"
          }`}
        >
          ReactGridX provides flexible pagination options to manage large
          datasets efficiently. Choose from different pagination types and
          configure rows per page as needed. Server-side pagination is also
          supported for better performance.
        </p>
      </div>

      <section className="rgx-pagination-section">
        <h2
          className={`rgx-pagination-section-title ${
            lightMode && "rgx-pagination-section-title-light"
          }`}
        >
          Contents
        </h2>
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
              description: "Controls pagination behavior and settings.",
              url: "rgx-pagination-section-props",
            },
            {
              title: "Pagination Types",
              description:
                "Choose between rgx-table-pagination and rgx-arrow-pagination.",
              url: "rgx-pagination-section-types",
            },
            {
              title: "Server-Side Pagination",
              description:
                "Enable pagination on the server for large datasets.",
              url: "rgx-pagination-section-server-pagination",
            },
            {
              title: "Explanation",
              description: "Detailed explanation of how pagination works.",
              url: "rgx-pagination-section-explanation",
            },
            {
              title: "Tips for Optimizing Pagination",
              description:
                "Best practices for implementing pagination efficiently.",
              url: "rgx-pagination-section-tips",
            },
          ]}
        />
      </section>

      <section
        className="rgx-pagination-section"
        id="rgx-pagination-section-props"
      >
        <h2
          className={`rgx-pagination-section-title ${
            lightMode && "rgx-pagination-section-title-light"
          }`}
        >
          Props
        </h2>
        <CustomTable
          columns={[
            { header: "Prop Name", accessor: "propName" },
            { header: "Type", accessor: "type" },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              propName: "paginationType",
              type: "'rgx-table-pagination' | 'rgx-arrow-pagination'",
              description:
                "Selects the pagination type: standard table pagination or arrow-based pagination.",
            },
            {
              propName: "rowPerPage",
              type: "number",
              description: "Number of rows displayed per page.",
            },
            {
              propName: "serverSidePagination",
              type: "boolean",
              description:
                "Flag to indicate if server-side pagination should be used (default is false).",
            },
            {
              propName: "onPaginationAndRowSizeChange",
              type: "(page: number, rowsPerPage: number) => void",
              description:
                "Callback function triggered when page or rows per page change.",
            },
            {
              propName: "rowsPerPageOptions",
              type: "number[]",
              description:
                "Options for rows per page (default is [5, 10, 15]).",
            },
            {
              propName: "totalRows",
              type: "number",
              description:
                "Total number of rows in the dataset, used for server-side pagination.",
            },
            {
              propName: "page",
              type: "number",
              description:
                "The current page number, used for managing server-side pagination.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-pagination-section"
        id="rgx-pagination-section-types"
      >
        <h2
          className={`rgx-pagination-section-title ${
            lightMode && "rgx-pagination-section-title-light"
          }`}
        >
          Pagination Types
        </h2>
        <p
          className={`rgx-pagination-section-text ${
            lightMode && "rgx-pagination-section-text-light"
          }`}
        >
          ReactGridX supports two types of pagination:
        </p>
        <ul className="rgx-pagination-type-list">
          <li
            className={`rgx-pagination-type-item ${
              lightMode && "rgx-pagination-type-item-light"
            }`}
          >
            <strong>rgx-table-pagination:</strong> Displays numbered pages with
            navigation buttons.
          </li>
          <li
            className={`rgx-pagination-type-item ${
              lightMode && "rgx-pagination-type-item-light"
            }`}
          >
            <strong>rgx-arrow-pagination:</strong> Uses previous and next arrows
            for simpler navigation.
          </li>
        </ul>
      </section>

      <section
        className="rgx-pagination-section"
        id="rgx-pagination-section-server-pagination"
      >
        <h2
          className={`rgx-pagination-section-title ${
            lightMode && "rgx-pagination-section-title-light"
          }`}
        >
          Server-Side Pagination
        </h2>
        <p
          className={`rgx-pagination-section-text ${
            lightMode && "rgx-pagination-section-text-light"
          }`}
        >
          For large datasets, enable server-side pagination by setting{" "}
          <ImportantBoldTypography>
            serverSidePagination
          </ImportantBoldTypography>{" "}
          to true. This allows efficient handling of paginated data.
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX
    columns={columns}
    data={data}
    paginationType="rgx-table-pagination"
    rowPerPage={10} // Set number of rows per page
    serverSidePagination={true} // Enable server-side pagination
    onPaginationAndRowSizeChange={(page, rowsPerPage) => console.log(page, rowsPerPage)}
    rowsPerPageOptions={[5,10,15]}
    totalRows={100}
    page={1}
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

export default Pagination;
