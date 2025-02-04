import React from "react";
import "./over-view.css";

const Overview: React.FC = () => {
  return (
    <div className="rgx-ov-overview">
      <div className="rgx-ov-header">
        <h1 className="rgx-ov-title">Overview</h1>
        <p className="rgx-ov-description">
          Welcome to the documentation site for{" "}
          <strong>
            <a
              href="https://www.npmjs.com/package/@deepbag/react-grid-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              @deepbag/react-grid-x
            </a>
          </strong>
          . This library offers a powerful and customizable table component
          built with React and TypeScript. Whether you're building a complex
          data grid or a simple table, this library will help you organize and
          present your data with ease.
        </p>
      </div>

      <section className="rgx-ov-features">
        <h2 className="rgx-ov-section-title">Key Features</h2>
        <ul className="rgx-ov-feature-list">
          <li className="rgx-ov-feature-item">
            <strong>Customizable Columns:</strong> Define columns dynamically
            with custom rendering.
          </li>
          <li className="rgx-ov-feature-item">
            <strong>Pagination Support:</strong> Client-side and server-side
            pagination to handle large data sets.
          </li>
          <li className="rgx-ov-feature-item">
            <strong>Sorting:</strong> Supports both client-side and server-side
            sorting for data.
          </li>
          <li className="rgx-ov-feature-item">
            <strong>Flexible Layout:</strong> Responsive design for various
            screen sizes.
          </li>
          <li className="rgx-ov-feature-item">
            <strong>Easy Integration:</strong> Works seamlessly with React and
            TypeScript projects.
          </li>
        </ul>
      </section>

      <section className="rgx-ov-usage">
        <h2 className="rgx-ov-section-title">Usage</h2>
        <p className="rgx-ov-usage-text">
          To get started, you need to install the package using npm and yarn:
        </p>
        <pre className="rgx-ov-usage-code">
          npm install @deepbag/react-grid-x
        </pre>
        <pre className="rgx-ov-usage-code">
          yarn add @deepbag/react-grid-x
        </pre>
        <p className="rgx-ov-usage-text">
          After installation, import the component and use it in your project:
        </p>
        <pre className="rgx-ov-usage-code">
          import {"{ ReactGridX }"} from '@deepbag/react-grid-x';
        </pre>
      </section>
{/* 
      <section className="rgx-ov-installation">
        <h2 className="rgx-ov-section-title">Installation</h2>
        <p className="rgx-ov-installation-text">
          Install the package via npm to begin using the component:
        </p>
        <pre className="rgx-ov-installation-code">
          npm install @deepbag/react-grid-x
        </pre>
      </section> */}
    </div>
  );
};

export default Overview;
