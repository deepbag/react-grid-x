import React from "react";
import "./tooltip.css";
import {
  CodeBox,
  CustomTable,
  ImportantBoldTypography,
} from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";

const Tooltip: React.FC = () => {
  return (
    <div className="rgx-tooltip-overview">
      <div className="rgx-tooltip-header">
        <h1 className="rgx-tooltip-title">Tooltip</h1>
        <p className="rgx-tooltip-description">
          ReactGridX allows you to enable tooltips on columns, providing
          additional information when a user hovers over a cell. You can control
          the visibility of the tooltip with the{" "}
          <ImportantBoldTypography>tooltip</ImportantBoldTypography> prop and
          provide custom content using the{" "}
          <ImportantBoldTypography>
            tooltipCustomContent
          </ImportantBoldTypography>{" "}
          prop.
        </p>
      </div>

      <section className="rgx-tooltip-section">
        <h2 className="rgx-tooltip-section-title">Contents</h2>
        <p className="rgx-tooltip-section-text">
          Explore the various sections and detailed information available on
          this page. Each section is designed to give you a comprehensive
          overview of how to use the tooltip functionality.
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
                "Controls the visibility and behavior of the tooltip, including custom content.",
              url: "rgx-tooltip-section-props",
            },
            {
              title: "Default Tooltip",
              description:
                "Enables a simple tooltip with default behavior, displaying column names on hover.",
              url: "rgx-tooltip-section-default-tooltip",
            },
            {
              title: "Custom Tooltip",
              description:
                "Customizes the tooltip content by passing a function to `tooltipCustomContent`.",
              url: "rgx-tooltip-section-custom-tooltip",
            },
            {
              title: "Explanation",
              description:
                "Detailed explanation of the tooltip functionality in ReactGridX.",
              url: "rgx-tooltip-section-explanation",
            },
            {
              title: "Tips for Customizing Tooltips",
              description:
                "Guidance on how to improve and optimize your tooltips for a better user experience.",
              url: "rgx-tooltip-section-tips",
            },
          ]}
        />
      </section>

      <section className="rgx-tooltip-section" id="rgx-tooltip-section-props">
        <h2 className="rgx-tooltip-section-title">Props</h2>
        <p className="rgx-tooltip-section-text">
          Learn about the available props that control the tooltip behavior.
        </p>
        <CustomTable
          columns={[
            { header: "Prop Name", accessor: "propName" },
            { header: "Type", accessor: "type" },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              propName: "tooltip",
              type: "boolean",
              description:
                "Controls whether the tooltip is shown when hovering over a cell. Set to true to display the tooltip.",
            },
            {
              propName: "tooltipCustomContent",
              type: "(rowData: any) => string | number",
              description:
                "A function that returns custom content for the tooltip based on the row data.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-tooltip-section"
        id="rgx-tooltip-section-default-tooltip"
      >
        <h2 className="rgx-tooltip-section-title">Default Tooltip</h2>
        <p className="rgx-tooltip-section-text">
          When the <ImportantBoldTypography>tooltip</ImportantBoldTypography>{" "}
          prop is set to true, ReactGridX will display a default tooltip with
          the column name when you hover over a cell. This provides a simple way
          to show additional information without the need for custom content.
        </p>
      </section>

      <section
        className="rgx-tooltip-section"
        id="rgx-tooltip-section-custom-tooltip"
      >
        <h2 className="rgx-tooltip-section-title">Custom Tooltip</h2>
        <p className="rgx-tooltip-section-text">
          You can customize the content of the tooltip by passing a function to
          the{" "}
          <ImportantBoldTypography>
            tooltipCustomContent
          </ImportantBoldTypography>{" "}
          prop. This function should return the content you want to display in
          the tooltip based on the row data.
        </p>
        <p className="rgx-tooltip-section-text">
          Here’s an example of how to use the{" "}
          <ImportantBoldTypography>tooltip</ImportantBoldTypography> and
          <ImportantBoldTypography>
            tooltipCustomContent
          </ImportantBoldTypography>{" "}
          props to display a custom tooltip:
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX
    columns={columns}
    data={data}
    tooltip={true} // Enable tooltips
    tooltipCustomContent={(rowData) => "write custom content"} // Custom tooltip content
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

export default Tooltip;
