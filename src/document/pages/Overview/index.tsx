import React from "react";
import "./over-view.css";
import { BottomNavigator, CodeBox } from "document/components";
import { LABELS, PATHS } from "document/config/path";

const Overview: React.FC = () => {
  return (
    <div className="rgx-over-view-overview">
      <div className="rgx-over-view-header">
        <h1 className="rgx-over-view-title">Overview</h1>
        <p className="rgx-over-view-description">
          Welcome to the documentation site for{" "}
          <strong>
            <a
              href="https://www.npmjs.com/package/@deepbag/react-grid-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              @deepbag/react-grid-x
            </a>
          </strong>
          . This library offers a powerful and customizable table component
          built with React and TypeScript. Whether you're building a complex
          data grid or a simple table, this library will help you organize and
          present your data with ease.
        </p>
      </div>

      <section className="rgx-over-view-features">
        <h2 className="rgx-over-view-section-title">Key Features</h2>
        <ul className="rgx-over-view-feature-list">
          <li className="rgx-over-view-feature-item">
            <strong>Customizable Columns:</strong> Define columns with dynamic
            rendering of data using custom render functions.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Sorting Support:</strong> Supports sorting by multiple
            columns, including both numerical and alphabetical sorting and
            "Clear Sorting" popup is available when sorting is enabled.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Server-side Sorting:</strong> Optionally support server-side
            sorting for large datasets.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Pagination support:</strong> Choose from different
            pagination types (rgx-table-pagination or rgx-arrow-pagination) with
            configurable rows per page and pagination controls.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Customizable styling:</strong> Apply custom themes and
            styles to the table and pagination components.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Server-side pagination:</strong> Optionally support
            server-side pagination for large datasets.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Tooltip support:</strong> Enable tooltips for column headers
            with customizable content for better user guidance.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Row click event:</strong> Capture row clicks using the
            onRowClick callback to handle user interactions.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Expandable rows:</strong> Expand rows with a customizable
            expandedComponent to show additional details or content within the
            same row.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Loader support:</strong> Customize the loader displayed when
            the table is in a loading state using the loaderComponent prop. If
            not provided, the default loader will be used.
          </li>
          <li className="rgx-over-view-feature-item">
            <strong>Row selection:</strong> Supports row selection with
            checkboxes, allowing both single and select-all functionality.
          </li>
        </ul>
      </section>

      <BottomNavigator
        next={{
          label: LABELS.INSTALLATION,
          url: PATHS.INSTALLATION,
        }}
      />
    </div>
  );
};

export default Overview;
