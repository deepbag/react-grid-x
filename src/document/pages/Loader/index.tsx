import React, { useEffect } from "react";
import "./loader.css";
import {
  CodeBox,
  CustomTable,
  ImportantBoldTypography,
} from "document/components";
import { scrollToSection } from "document/utils/scroll-to-section";
import { useConfig } from "document/context/ConfigContext";

const Loader: React.FC = () => {
  const { lightMode } = useConfig();
  return (
    <div className="rgx-loader-overview">
      <div className="rgx-loader-header">
        <h1 className={`rgx-loader-title ${lightMode && 'rgx-loader-title-light'}`}>Loader</h1>
        <p className={`rgx-loader-description ${lightMode && 'rgx-loader-description-light'}`}>
          The ReactGridX component allows you to customize the loader that
          appears when the table is in a loading state. By using the loading
          prop, you can control the visibility of the loader, and the 
          <ImportantBoldTypography>loaderComponent</ImportantBoldTypography> prop allows you to
          provide a custom loader.
        </p>
      </div>

      <section className="rgx-loader-section">
        <h2 className={`rgx-loader-section-title ${lightMode && 'rgx-loader-section-title-light'}`}>Contents</h2>
        <p className={`rgx-loader-section-text ${lightMode && 'rgx-loader-section-text-light'}`}>
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
        <h2 className={`rgx-loader-section-title ${lightMode && 'rgx-loader-section-title-light'}`}>Props</h2>
        <p className={`rgx-loader-section-text ${lightMode && 'rgx-loader-section-text-light'}`}>
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
        <h2 className={`rgx-loader-section-title ${lightMode && 'rgx-loader-section-title-light'}`}>Default Loader</h2>
        <p className={`rgx-loader-section-text ${lightMode && 'rgx-loader-section-text-light'}`}>
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
        <h2 className={`rgx-loader-section-title ${lightMode && 'rgx-loader-section-title-light'}`}>Custom Loader</h2>
        <p className={`rgx-loader-section-text ${lightMode && 'rgx-loader-section-text-light'}`}>
          You can easily customize the loader by passing a custom React
          component to the{" "}
          <ImportantBoldTypography>loaderComponent</ImportantBoldTypography>{" "}
          prop. This allows you to control the look and feel of the loader,
          ensuring it aligns with your app's design and user experience.
        </p>
        <p className={`rgx-loader-section-text ${lightMode && 'rgx-loader-section-text-light'}`}>
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

    </div>
  );
};

export default Loader;
