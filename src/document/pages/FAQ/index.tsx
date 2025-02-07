import { BottomNavigator, CodeBox } from "document/components";
import { LABELS, PATHS } from "document/config/path";
import React from "react";
import "./faq.css";

const FAQ = () => {
  return (
    <div className="rgx-faq-container">
      <div className="rgx-faq-header">
        <h1 className="rgx-faq-title">Frequently Asked Questions (FAQ)</h1>
        <p className="rgx-faq-description">
          Encountering an issue? Take a look at these frequently asked questions
          for quick fixes!
        </p>
      </div>
      <div className="rgx-faq-list">
        {[
          {
            question: "What is @deepbag/react-grid-x?",
            answer:
              "@deepbag/react-grid-x is a powerful and customizable React table component built with TypeScript. It helps developers efficiently display, sort, and manage tabular data.",
          },
          {
            question: "How do I install the library?",
            answer: "You can install it using npm, yarn, or pnpm:",
            code: {
              npm: {
                code: "npm install @deepbag/react-grid-x --force",
                language: "tsx",
                lineNumber: false,
              },
              yarn: {
                code: "yarn add @deepbag/react-grid-x",
                language: "tsx",
                lineNumber: false,
              },
              pnpm: {
                code: "pnpm add @deepbag/react-grid-x",
                language: "tsx",
                lineNumber: false,
              },
            },
          },
          {
            question: "Does it support TypeScript?",
            answer:
              "Yes! The library is built with TypeScript and offers full type support to enhance development experience.",
          },
          {
            question: "How do I use it in my React project?",
            answer: "Here's a simple example:",
            code: {
              Usage: {
                code: `import React from "react";
import { ReactGridX } from "@deepbag/react-grid-x";
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme-combined.css";

const App = () => {
  return (
    <div>
      <h1>React Grid Example</h1>
      <ReactGridX
        columns={[
          { name: "Name", key: "name", sortable: true },
          {
            name: "Age",
            key: "age",
            sortable: true,
            render: (data) => <span>{data.age}</span>,
          },
        ]}
        data={[
          { id: 1, name: "John", age: 28 },
          { id: 2, name: "Jane", age: 34 },
        ]}
        rowsPerPageOptions={[5, 10, 15]}
        paginationType="rgx-table-pagination"
        paginationStyle={{
          "rgx-table-pagination": { backgroundColor: "#f5f5f5" },
        }}
        tableStyle={{
          "rgx-table": { width: "100%", borderCollapse: "collapse" },
          "rgx-table-head-tr": { backgroundColor: "#ddd" },
          "rgx-table-head-th": { padding: "8px", textAlign: "left" },
          "rgx-table-body-td": { padding: "8px" },
        }}
        loaderStyle={{
          "rgx-loader-container": {},
        }}
        popupStyle={{ "rgx-popover-content": {} }}
        tooltipStyle={{ "rgx-tooltip-container": {} }}
      />
    </div>
  );
};

export default App;`,
                language: "tsx",
                lineNumber: true,
              },
            },
            limitHeight: true,
          },
          {
            question: "Does it support pagination and sorting?",
            answer:
              "Yes! The library provides built-in pagination and sorting, making it easy to manage large datasets.",
          },
          {
            question: "Can I customize column rendering?",
            answer:
              "Absolutely! You can define custom render functions for columns:",
            code: {
              Usage: {
                code: `const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name", render: (row) => <strong>{row.name}</strong> },
];`,
                language: "tsx",
                lineNumber: true,
              },
            },
          },
          {
            question: "How can I style the table?",
            answer:
              "You can apply custom CSS or pass inline styles using the className or style props.",
          },
          {
            question: "Does it support server-side data fetching?",
            answer:
              "Yes! You can manage data fetching and pass the required data dynamically for server-side pagination and sorting.",
          },
          {
            question: "Is this library open-source?",
            answer:
              "Yes! You can find the source code on GitHub and contribute to its development.",
          },
          {
            question: "Where can I report bugs or request features?",
            answer:
              "You can open an issue on the GitHub repository or reach out via the official documentation page.",
          },
        ].map(
          (
            _: {
              question: string;
              answer: string;
              [key: string]: any;
            },
            idx: number
          ) => {
            return (
              <section className="rgx-faq-usage">
                <h2 className="rgx-faq-section-title">
                  {idx + 1}. {_.question}
                </h2>
                <p className="rgx-faq-usage-text">{_.answer}</p>
                {_.code && (
                  <CodeBox commands={_.code} limitHeight={_.limitHeight} />
                )}
              </section>
            );
          }
        )}
      </div>
      <BottomNavigator
        // prev={{
        //   label: LABELS.INSTALLATION,
        //   url: PATHS.INSTALLATION,
        // }}
        // next={{
        //   label: LABELS.SUPPORT,
        //   url: PATHS.SUPPORT,
        // }}
      />
    </div>
  );
};

export default FAQ;
