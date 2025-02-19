import React from "react";
import { CodeBox, ImportantBoldTypography } from "document/components";
import "./dark-light-mode.css";

const DarkLightMode: React.FC = () => {
  return (
    <div className="rgx-dark-light-mode-overview">
      <div className="rgx-dark-light-mode-header">
        <h1 className="rgx-dark-light-mode-title">
          Mode Support (Dark & Light Mode)
        </h1>
        <p className="rgx-dark-light-mode-description">
          ReactGridX supports both light and dark modes, allowing seamless
          integration into different UI themes. You can configure the table’s
          appearance based on your application’s theme or user preferences.
        </p>
      </div>

      <section
        className="rgx-dark-light-mode-section"
        id="rgx-dark-light-mode-section-default-dark-light-mode"
      >
        <h2 className="rgx-dark-light-mode-section-title">How to Use</h2>
        <p className="rgx-dark-light-mode-section-text">
          The <ImportantBoldTypography>mode</ImportantBoldTypography> prop lets
          you specify whether the table should use light or dark mode:
        </p>
        <CodeBox
          commands={{
            tsx: {
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
        ]}
        data={[
          { id: 1, name: "John", age: 28 },
        ]}
        mode="dark"
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
    </div>
  );
};

export default DarkLightMode;
