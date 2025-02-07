import React, { useEffect } from "react";
import "./css-guide.css";
import {
  CodeBox,
  CustomTable,
  ImportantBoldTypography,
} from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";

const CSSGuide: React.FC = () => {
  return (
    <div className="rgx-loader-overview">
      <div className="rgx-loader-header">
        <h1 className="rgx-loader-title">CSS Guide</h1>
        <p className="rgx-loader-description">
          ReactGridX provides several prebuilt themes and styles to enhance the
          appearance of tables, pagination, tooltips, loaders, and popovers.
          These styles can be included in your project by importing the
          respective CSS files.
        </p>
      </div>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-default-loader"
      >
        <h2 className="rgx-loader-section-title">Full Theme Import</h2>
        <p className="rgx-loader-section-text">
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
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-theme-combined-minified.css";
// CDN combined version:
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme-combined.css";
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-theme-combined-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-default-loader"
      >
        <h2 className="rgx-loader-section-title">Table</h2>
        <p className="rgx-loader-section-text">For table:</p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal version:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme.css";
// Minified Version:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-theme-minified.css";
// CDN Version:
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme.css";
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-theme-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-default-loader"
      >
        <h2 className="rgx-loader-section-title">Pagination</h2>
        <p className="rgx-loader-section-text">For table pagination:</p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-table-pagination.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-table-pagination-minified.css";
// CDN combined version:
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-table-pagination.css";
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-table-pagination-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
        <p className="rgx-loader-section-text">For arrow pagination:</p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination-minified.css";
// CDN combined version:
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination.css";
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-default-loader"
      >
        <h2 className="rgx-loader-section-title">Tooltip</h2>
        <p className="rgx-loader-section-text">For tooltips:</p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-tooltip.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-tooltip-minified.css";
// CDN combined version:
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-tooltip.css";
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-tooltip-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-default-loader"
      >
        <h2 className="rgx-loader-section-title">Loader</h2>
        <p className="rgx-loader-section-text">For loaders:</p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-loader.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-loader-minified.css";
// CDN combined version:
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-loader.css";
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-loader-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-default-loader"
      >
        <h2 className="rgx-loader-section-title">Popover</h2>
        <p className="rgx-loader-section-text">For popovers:</p>
        <CodeBox
          commands={{
            tsx: {
              code: `// Normal combined version
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-popover.css";
// Minified combined versions:
import "@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-popover-minified.css";
// CDN combined version:
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-popover.css";
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/minified/rgx-popover-minified.css";`,
              language: "jsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-explanation"
      >
        <h2 className="rgx-loader-section-title">
          Minified vs. Unminified Styles
        </h2>
        <ul className="rgx-loader-section-list">
          <li className="rgx-loader-section-item">
            Minified CSS: Smaller file size, better performance, recommended for
            production.
          </li>
          <li className="rgx-loader-section-item">
            Unminified CSS: Easier for debugging, better for development and
            customization.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CSSGuide;
