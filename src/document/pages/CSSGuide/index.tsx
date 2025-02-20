import React from "react";
import "./css-guide.css";
import { CodeBox } from "document/components";
import { useConfig } from "document/context/ConfigContext";

const CSSGuide: React.FC = () => {
  const { lightMode } = useConfig();
  return (
    <div className="rgx-css-guide-overview">
      <div className="rgx-css-guide-header">
        <h1
          className={`rgx-css-guide-title ${
            lightMode && "rgx-css-guide-title-light"
          }`}
        >
          CSS Guide
        </h1>
        <p
          className={`rgx-css-guide-description ${
            lightMode && "rgx-css-guide-description-light"
          }`}
        >
          ReactGridX provides several prebuilt themes and styles to enhance the
          appearance of tables, pagination, tooltips, loaders, and popovers.
          These styles can be included in your project by importing the
          respective CSS files.
        </p>
      </div>

      <section
        className="rgx-css-guide-section"
        id="rgx-loader-section-default-loader"
      >
        <h2
          className={`rgx-css-guide-section-title ${
            lightMode && "rgx-css-guide-section-title-light"
          }`}
        >
          Full Theme Import
        </h2>
        <p
          className={`rgx-css-guide-section-text ${
            lightMode && "rgx-css-guide-section-text-light"
          }`}
        >
          To apply styles for all components in one file, import the combined
          theme. The minified version is optimized for performance and
          recommended for production use.
        </p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme-combined.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-theme-combined-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-css-guide-section"
        id="rgx-loader-section-default-loader"
      >
        <h2
          className={`rgx-css-guide-section-title ${
            lightMode && "rgx-css-guide-section-title-light"
          }`}
        >
          Dark Mode
        </h2>
        <p
          className={`rgx-css-guide-section-text ${
            lightMode && "rgx-css-guide-section-text-light"
          }`}
        >
          To apply styles for all components in dark mode, import the combined
          dark theme. The minified version is optimized for performance and
          recommended for production use.
        </p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version (Dark Theme)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/dark/rgx-theme-dark-combined.css";
// Minified combined version (Dark Theme)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/dark/minified/rgx-theme-dark-combined-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-css-guide-section"
        id="rgx-loader-section-default-loader"
      >
        <h2
          className={`rgx-css-guide-section-title ${
            lightMode && "rgx-css-guide-section-title-light"
          }`}
        >
          Table
        </h2>
        <p
          className={`rgx-css-guide-section-text ${
            lightMode && "rgx-css-guide-section-text-light"
          }`}
        >
          For table:
        </p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal version:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme.css";
// Minified Version:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-theme-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-css-guide-section"
        id="rgx-loader-section-default-loader"
      >
        <h2
          className={`rgx-css-guide-section-title ${
            lightMode && "rgx-css-guide-section-title-light"
          }`}
        >
          Pagination
        </h2>
        <p
          className={`rgx-css-guide-section-text ${
            lightMode && "rgx-css-guide-section-text-light"
          }`}
        >
          For table pagination:
        </p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-table-pagination.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-table-pagination-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
        <p
          className={`rgx-css-guide-section-text ${
            lightMode && "rgx-css-guide-section-text-light"
          }`}
        >
          For arrow pagination:
        </p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-css-guide-section"
        id="rgx-loader-section-default-loader"
      >
        <h2
          className={`rgx-css-guide-section-title ${
            lightMode && "rgx-css-guide-section-title-light"
          }`}
        >
          Tooltip
        </h2>
        <p
          className={`rgx-css-guide-section-text ${
            lightMode && "rgx-css-guide-section-text-light"
          }`}
        >
          For tooltips:
        </p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-tooltip.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-tooltip-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-css-guide-section"
        id="rgx-loader-section-default-loader"
      >
        <h2
          className={`rgx-css-guide-section-title ${
            lightMode && "rgx-css-guide-section-title-light"
          }`}
        >
          Loader
        </h2>
        <p
          className={`rgx-css-guide-section-text ${
            lightMode && "rgx-css-guide-section-text-light"
          }`}
        >
          For loaders:
        </p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-loader.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-loader-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-css-guide-section"
        id="rgx-loader-section-default-loader"
      >
        <h2
          className={`rgx-css-guide-section-title ${
            lightMode && "rgx-css-guide-section-title-light"
          }`}
        >
          Popover
        </h2>
        <p
          className={`rgx-css-guide-section-text ${
            lightMode && "rgx-css-guide-section-text-light"
          }`}
        >
          For popovers:
        </p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-popover.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-popover-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-css-guide-section"
        id="rgx-loader-section-explanation"
      >
        <h2
          className={`rgx-css-guide-section-title ${
            lightMode && "rgx-css-guide-section-title-light"
          }`}
        >
          Minified vs. Unminified Styles
        </h2>
        <ul className="rgx-css-guide-section-list">
          <li
            className={`rgx-css-guide-section-item ${
              lightMode && "rgx-css-guide-section-item-light"
            }`}
          >
            Minified CSS: Smaller file size, better performance, recommended for
            production.
          </li>
          <li
            className={`rgx-css-guide-section-item ${
              lightMode && "rgx-css-guide-section-item-light"
            }`}
          >
            Unminified CSS: Easier for debugging, better for development and
            customization.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CSSGuide;
