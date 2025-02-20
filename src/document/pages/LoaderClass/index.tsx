import { CodeBox, CustomTable } from "document/components";
import React, { useEffect, useState } from "react";
import "./loader-class.css";
import axios from "axios";
import { useConfig } from "document/context/ConfigContext";

const LoaderClass: React.FC = () => {
  const { lightMode } = useConfig();
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
    <div className="rgx-loader-class-overview">
      <div className="rgx-loader-class-header">
        <h1
          className={`rgx-loader-class-title ${
            lightMode && "rgx-loader-class-title-light"
          }`}
        >
          Loader Class
        </h1>
        <p
          className={`rgx-loader-class-description ${
            lightMode && "rgx-loader-class-description-light"
          }`}
        >
          The Loader component in ReactGridX allows you to display a loading
          indicator while content is being fetched or processed. The styles can
          be customized by overriding the default CSS classes.
        </p>
      </div>

      <section
        className="rgx-loader-class-section"
        id="rgx-loader-class-section-customization"
      >
        <h2
          className={`rgx-loader-class-section-title ${
            lightMode && "rgx-loader-class-section-title-light"
          }`}
        >
          CSS
        </h2>
        <p
          className={`rgx-loader-class-section-text ${
            lightMode && "rgx-loader-class-section-text-light"
          }`}
        >
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
