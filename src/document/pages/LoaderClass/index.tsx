import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./loader-class.css";
import axios from "axios";

const LoaderClass: React.FC = () => {
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-loader.css"
      )
      .then((response) => {
        setCss(response.data);
      })
      .catch((error) => {
        console.error("Error fetching version:", error);
      });
  }, []);

  return (
    <div className="rgx-tooltip-class-overview">
      <div className="rgx-tooltip-class-header">
        <h1 className="rgx-tooltip-class-title">Loader Class</h1>
        <p className="rgx-tooltip-class-description">
          The Loader component in ReactGridX allows you to display a loading
          indicator while content is being fetched or processed. The styles can
          be customized by overriding the default CSS classes.
        </p>
      </div>

      <section className="rgx-tooltip-class-section">
        <h2 className="rgx-tooltip-class-section-title">CSS Classes</h2>
        <p className="rgx-tooltip-class-section-text">
          Below are the CSS classes used in the Loader component. You can
          override these styles to customize the Loader's appearance.
        </p>
        <CustomTable
          hideHeader={true}
          columns={[
            { header: "Class Name", accessor: "className" },
            { header: "Description", accessor: "description" },
          ]}
          data={[
            {
              className: "rgx-loader-container",
              description:
                "The main container for the loader component, positioning it appropriately.",
            },
            {
              className: "rgx-loader-spinner",
              description:
                "The spinning animation element representing the loader.",
            },
            {
              className: "rgx-loader-message",
              description: "Displays a loading message next to the spinner.",
            },
          ]}
        />
      </section>

      <section
        className="rgx-tooltip-class-section"
        id="rgx-tooltip-class-section-customization"
      >
        <h2 className="rgx-tooltip-class-section-title">CSS</h2>
        <p className="rgx-tooltip-class-section-text">
          Customize how tooltips are styled using CSS classes. This allows you
          to modify positioning, colors, and animations to match your design
          needs.
        </p>
        <CodeBox
          commands={{
            "rgx-loader.css": {
              code: css,
              language: "css",
              lineNumber: true,
            },
          }}
        />
      </section>
    </div>
  );
};

export default LoaderClass;
