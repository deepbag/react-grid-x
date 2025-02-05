import { BottomNavigator, CodeBox } from "document/components";
import { LABELS, PATHS } from "document/config/path";
import React from "react";
import "./installation.css";

const Installation = () => {
  return (
    <div className="rgx-installation-container">
      <div className="rgx-installation-header">
        <h1 className="rgx-installation-title">Installation</h1>
        <p className="rgx-installation-description">
          To use{" "}
          <strong>
            <a
              href="https://www.npmjs.com/package/@deepbag/react-grid-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              @deepbag/react-grid-x
            </a>
          </strong>{" "}
          in your React project, follow these simple steps to install and set up
          the library.
        </p>
      </div>
      <section className="rgx-installation-usage">
        <h2 className="rgx-installation-section-title">Install the Package</h2>
        <p className="rgx-installation-usage-text">
          To get started, you need to install the package using npm and yarn and pnpm:
        </p>
        <CodeBox
          commands={{
            npm: {
              code: "npm install @deepbag/react-grid-x --force",
              language: "tsx",
              lineNumber: false,
            },
            yarn: {
              code: "yarn add @deepbag/react-grid-x",
              language: "tsx",
              lineNumber: false,
            },
            pnpm: {
              code: "pnpm add @deepbag/react-grid-x",
              language: "tsx",
              lineNumber: false,
            },
          }}
        />
      </section>
      <section className="rgx-installation-usage">
        <h2 className="rgx-installation-section-title">Import and Use</h2>
        <p className="rgx-installation-usage-text">
          Once installed, you can start using the GridTable component in your
          project.
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `import React from "react";
import { ReactGridX } from "@deepbag/react-grid-x";

// Import the CSS files for styling
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme.css"; // Import the default theme (Required)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-table-pagination.css"; // Import the table pagination CSS (Required if you use default pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination.css"; // Import the arrow pagination CSS (Required if you use arrow pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-tooltip.css"; // Import the tooltip CSS (Required if you use tooltip)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-loader.css"; // Import the tooltip CSS (Required for loading effect)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-popover.css"; // Import the popup CSS (Required if you use sorting enabled)

const App = () => {
  const columns = [
    { name: "Name", key: "name", sortable: true },
    {
      name: "Age",
      key: "age",
      sortable: true,
      render: (data) => <span>{data.age}</span>,
    },
    {
      name: "Country",
      key: "country",
      sortable: true,
      render: (data) => <span>{data.country}</span>,
    },
  ];

  const data = [
    { id: 1, name: "John", age: 28, country: "USA" },
    { id: 2, name: "Jane", age: 34, country: "Canada" },
    { id: 3, name: "Sam", age: 22, country: "Australia" },
    { id: 4, name: "Anna", age: 25, country: "UK" },
    { id: 5, name: "Peter", age: 30, country: "Germany" },
  ];

  return (
    <div>
      <h1>React Grid Example</h1>
      <ReactGridX
          columns={columns}
          data={data}
          rowsPerPageOptions={[5, 10, 15]}
          paginationType="rgx-table-pagination"
          paginationStyle={{
            "rgx-table-pagination": { backgroundColor: "#f5f5f5" },
          }}
          tableStyle={{
            "rgx-table": { width: "100%", borderCollapse: "collapse" },
            "rgx-table-head-tr": { backgroundColor: "#ddd" },
            "rgx-table-head-th": { padding: "8px", textAlign: "left" },
            "rgx-table-body-td": { padding: "8px" },
          }}
          loaderStyle={{
            "rgx-loader-containe": {},
          }}
          popupStyle={{ "rgx-popover-content": {} }}
          tooltipStyle={{ "rgx-tooltip-container": {} }}
      />
    </div>
  );
};

export default App;`,
              language: "tsx",
              lineNumber: true,
            },
          }}
          limitHeight={true}
        />
      </section>
      <section className="rgx-installation-usage">
        <h2 className="rgx-installation-section-title">Next Steps</h2>
        <p className="rgx-installation-usage-text">
          Now that you've installed @deepbag/react-grid-x, explore more features
          like sorting, pagination, column customization, and styling in the
          documentation.
        </p>
      </section>
      <BottomNavigator
        prev={{
          label: LABELS.OVERVIEW,
          url: PATHS.OVERVIEW,
        }}
        next={{
          label: LABELS.FAQ,
          url: PATHS.FAQ,
        }}
      />
    </div>
  );
};

export default Installation;
