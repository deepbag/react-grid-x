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
          To get started, you need to install the package using npm and yarn and
          pnpm:
        </p>
        <CodeBox
          commands={{
            npm: {
              code: "npm install @deepbag/react-grid-x --force",
              language: "jsx",
              lineNumber: false,
            },
            yarn: {
              code: "yarn add @deepbag/react-grid-x",
              language: "jsx",
              lineNumber: false,
            },
            pnpm: {
              code: "pnpm add @deepbag/react-grid-x",
              language: "jsx",
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
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme-combined.css";
import "@deepbag/react-grid-x/dist/themes/rgx-theme/dark/rgx-theme-dark-combined.css";

const App = () => {
  return (
    <div>
      <h1>React Grid Example</h1>
      <ReactGridX
        columns={[
          { name: "Name", key: "name", sortable: true },
          {
            name: "Age",
            key: "age",
            sortable: true,
            render: (data) => <span>{data.age}</span>,
          },
        ]}
        data={[
          { id: 1, name: "John", age: 28 },
          { id: 2, name: "Jane", age: 34 },
        ]}
        rowsPerPageOptions={[5, 10, 15]}
        paginationType="rgx-table-pagination"
      />
    </div>
  );
};

export default App;`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>
      <section className="rgx-installation-usage">
        <h2 className="rgx-installation-section-title">Next Steps</h2>
        <p className="rgx-installation-usage-text">
          Now that you've installed{" "}
          <strong>
            <a
              href="https://www.npmjs.com/package/@deepbag/react-grid-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              @deepbag/react-grid-x
            </a>
          </strong>
          , explore more features like sorting, pagination, column
          customization, and styling in the documentation.
        </p>
      </section>
      <BottomNavigator
      // prev={{
      //   label: LABELS.OVERVIEW,
      //   url: PATHS.OVERVIEW,
      // }}
      // next={{
      //   label: LABELS.FAQ,
      //   url: PATHS.FAQ,
      // }}
      />
    </div>
  );
};

export default Installation;
