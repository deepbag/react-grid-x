import React from "react";
import { useConfig } from "document/context/ConfigContext";
import "./news-bar.css";

const NewsBar: React.FC = () => {
  const { config } = useConfig();

  return (
    <header className="rgx-news-bar">
      <p className="rgx-news-bar-content">
        🚀{" "}
        <strong>
          <a
            href="https://www.npmjs.com/package/@deepbag/react-grid-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            @deepbag/react-grid-x
          </a>
        </strong>{" "}
        is open for contributions! Join us on GitHub and help improve the
        package. 💡{" "}
        <strong>
          <a
            href="https://github.com/deepbag/react-grid-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute Now
          </a>
        </strong>
      </p>
    </header>
  );
};
export default NewsBar;
