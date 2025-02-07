import React from "react";
import "./custom-theme.css";
import { CodeBox, ImportantBoldTypography } from "document/components";

const CustomTheme: React.FC = () => {
  return (
    <div className="rgx-custom-theme-overview">
      <div className="rgx-custom-theme-header">
        <h1 className="rgx-custom-theme-title">Custom Theme</h1>
        <p className="rgx-custom-theme-description">
          ReactGridX provides a built-in theme called{" "}
          <ImportantBoldTypography>rgx-theme</ImportantBoldTypography> to style
          the table components. However, you can easily create your own custom
          theme by defining your own CSS classes. To do this, follow these
          steps:
        </p>
      </div>

      <section
        className="rgx-custom-theme-section"
        id="rgx-custom-theme-section-custom-tooltip"
      >
        <h2 className="rgx-custom-theme-section-title">
          1. Creating Your Custom CSS
        </h2>
        <p className="rgx-custom-theme-section-text">
          You can create your own CSS file and follow the same structure used in
          the default{" "}
          <ImportantBoldTypography>rgx-theme</ImportantBoldTypography> to define
          your styles. For example, if you want to change the table pagination
          styles, you can create a custom CSS class that follows this naming
          convention:
        </p>

        <CodeBox
          commands={{
            css: {
              code: `.rgx-custom-theme .rgx-table-pagination {
  /* Your custom styles */
}`,
              language: "css",
              lineNumber: true,
            },
          }}
        />
        <p className="rgx-custom-theme-section-text">
          You can create your CSS files with the same class names used in the
          default theme (e.g., .rgx-table-pagination , .rgx-arrow-pagination
          ,.rgx-tooltip, .rgx-loader, .rgx-popover). The only difference is that
          you'll replace rgx-theme with your custom theme name, such as
          <ImportantBoldTypography>rgx-custom-theme</ImportantBoldTypography>.
        </p>
      </section>

      <section
        className="rgx-custom-theme-section"
        id="rgx-custom-theme-section-custom-tooltip"
      >
        <h2 className="rgx-custom-theme-section-title">
          2. Importing Your Custom CSS
        </h2>
        <p className="rgx-custom-theme-section-text">
          Once you've created your custom CSS file, import it into your project
          like this:
        </p>

        <CodeBox
          commands={{
            Usage: {
              code: `import "./path-to-your-custom-theme/rgx-custom-theme.css"; 
import "./path-to-your-custom-theme/rgx-table-pagination.css";
import "./path-to-your-custom-theme/rgx-arrow-pagination.css";
import "./path-to-your-custom-theme/rgx-tooltip.css";
import "./path-to-your-custom-theme/rgx-loader.css";
import "./path-to-your-custom-theme/rgx-popover.css";`,
              language: "tsx",
              lineNumber: true,
            },
          }}
        />
      </section>

      <section
        className="rgx-custom-theme-section"
        id="rgx-custom-theme-section-custom-tooltip"
      >
        <h2 className="rgx-custom-theme-section-title">
          3. Applying Your Custom Theme in the Table Component
        </h2>
        <p className="rgx-custom-theme-section-text">
          To apply your custom theme, use the theme prop in the ReactGridX Table
          component. For example, to use your custom theme{" "}
          <ImportantBoldTypography>rgx-custom-theme</ImportantBoldTypography>,
          pass the{" "}
          <ImportantBoldTypography>
            theme="rgx-custom-theme"
          </ImportantBoldTypography>{" "}
          prop:
        </p>

        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX theme="rgx-custom-theme" {...otherProps} />`,
              language: "tsx",
              lineNumber: true,
            },
          }}
        />
        <p className="rgx-custom-theme-section-text">
          This will tell the table to apply styles from the{" "}
          <ImportantBoldTypography>rgx-custom-theme</ImportantBoldTypography>
          class, and your custom CSS definitions will be used instead of the
          default <ImportantBoldTypography>rgx-theme</ImportantBoldTypography>.
        </p>
      </section>

      <section
        className="rgx-custom-theme-section"
        id="rgx-custom-theme-section-custom-tooltip"
      >
        <h2 className="rgx-custom-theme-section-title">Conclusion</h2>
        <p className="rgx-custom-theme-section-text">
          By following this structure, you can fully customize the look and feel
          of your ReactGridX Table component by creating your own theme. Just
          ensure that the class names in your custom CSS match the ones in the
          default <ImportantBoldTypography>rgx-theme</ImportantBoldTypography>, and pass the custom theme name via the theme prop.
        </p>
      </section>
    </div>
  );
};

export default CustomTheme;
