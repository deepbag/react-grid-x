import React, { useEffect } from "react";
import "./loader.css";
import {
  CodeBox,
  CustomTable,
  ImportantBoldTypography,
} from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";

const Loader: React.FC = () => {
  return (
    <div className="rgx-loader-overview">
      <div className="rgx-loader-header">
        <h1 className="rgx-loader-title">Loader</h1>
        <p className="rgx-loader-description">
          The ReactGridX component allows you to customize the loader that
          appears when the table is in a loading state. By using the loading
          prop, you can control the visibility of the loader, and the 
          <ImportantBoldTypography>loaderComponent</ImportantBoldTypography> prop allows you to
          provide a custom loader.
        </p>
      </div>

      <section className="rgx-loader-section">
        <h2 className="rgx-loader-section-title">Contents</h2>
        <p className="rgx-loader-section-text">
          Explore the various sections and detailed information available on
          this page. Each section is carefully designed to provide you with a
          comprehensive overview of the topic at hand.
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
                "Controls whether the table is in a loading state. Set to true to show the loader, and false to show the table data.",
              url: "rgx-loader-section-props",
            },
            {
              title: "Default Loader",
              description:
                "A function returning a custom loader when the table is loading. The `style` prop is optional for custom",
              url: "rgx-loader-section-default-loader",
            },
            {
              title: "Custom Loader",
              description:
                "A function returning a custom loader when the table is loading. The `style` prop is optional for custom",
              url: "rgx-loader-section-custom-loader",
            },
            {
              title: "Explanation",
              description:
                "A function returning a custom loader when the table is loading. The `style` prop is optional for custom",
              url: "rgx-loader-section-explanation",
            },
            {
              title: "Tips for Customizing the Loader",
              description:
                "A function returning a custom loader when the table is loading. The `style` prop is optional for custom",
              url: "rgx-loader-section-tips",
            },
          ]}
        />
      </section>

      <section className="rgx-loader-section" id="rgx-loader-section-props">
        <h2 className="rgx-loader-section-title">Props</h2>
        <p className="rgx-loader-section-text">
          Learn about the available props that control the loader and table
          behavior.
        </p>
        <CustomTable
          columns={[
            { header: "Prop Name", accessor: "propName" },
            { header: "Type", accessor: "type" },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              propName: "loading",
              type: "boolean",
              description:
                "Controls whether the table is in a loading state. Set to true to show the loader, and false to show the table data.",
            },
            {
              propName: "loaderComponent",
              type: "() => JSX.Element",
              description:
                "A function returning a custom loader when the table is loading. The `style` prop is optional for custom",
            },
          ]}
        />
      </section>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-default-loader"
      >
        <h2 className="rgx-loader-section-title">Default Loader</h2>
        <p className="rgx-loader-section-text">
          If the{" "}
          <ImportantBoldTypography>loaderComponent</ImportantBoldTypography>{" "}
          prop is not specified, ReactGridX will use a default loading spinner
          or animation. This default loader provides a simple yet effective
          visual cue indicating that the table is in a loading state.
        </p>
      </section>

      <section
        className="rgx-loader-section"
        id="rgx-loader-section-custom-loader"
      >
        <h2 className="rgx-loader-section-title">Custom Loader</h2>
        <p className="rgx-loader-section-text">
          You can easily customize the loader by passing a custom React
          component to the{" "}
          <ImportantBoldTypography>loaderComponent</ImportantBoldTypography>{" "}
          prop. This allows you to control the look and feel of the loader,
          ensuring it aligns with your app's design and user experience.
        </p>
        <p className="rgx-loader-section-text">
          Here’s an example of how to use the loading and{" "}
          <ImportantBoldTypography>loaderComponent</ImportantBoldTypography>{" "}
          props to display a custom loader while the table is in a loading
          state:
        </p>
        <CodeBox
          commands={{
            Usage: {
              code: `<ReactGridX
    columns={columns}
    data={data}
    loading={true} // Table is in loading state
    loaderComponent={() => <Loader />} // Custom loader
/>`,
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
        <h2 className="rgx-loader-section-title">Explanation</h2>
        <ul className="rgx-loader-section-list">
          <li className="rgx-loader-section-item">
            In the example above, the ReactGridX component is configured with
            columns and data.
          </li>
          <li className="rgx-loader-section-item">
            The <ImportantBoldTypography>loading</ImportantBoldTypography> prop
            is set to true to indicate that the table is in a loading state.
          </li>
          <li className="rgx-loader-section-item">
            The{" "}
            <ImportantBoldTypography>loaderComponent</ImportantBoldTypography>{" "}
            prop is passed a custom Loader component. This component will be
            rendered in place of the default loader.
          </li>
          <li className="rgx-loader-section-item">
            If the{" "}
            <ImportantBoldTypography>loaderComponent</ImportantBoldTypography>{" "}
            prop is not specified, the default loader (usually a spinner or
            animated element) will be used.
          </li>
        </ul>
      </section>

      <section className="rgx-loader-section" id="rgx-loader-section-tips">
        <h2 className="rgx-loader-section-title">
          Tips for Customizing the Loader
        </h2>
        <ul className="rgx-loader-section-list">
          <li className="rgx-loader-section-item">
            You can pass additional props to your custom loader component, such
            as size, color, or other styles to make the loader fit your design
            requirements.
          </li>
          <li className="rgx-loader-section-item">
            Ensure that your custom loader is optimized for performance to avoid
            delays in the rendering of the table.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Loader;
