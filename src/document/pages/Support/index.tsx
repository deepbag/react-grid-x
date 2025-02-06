import React from "react";
import "./support.css";
import { BottomNavigator } from "document/components";
import { LABELS, PATHS } from "document/config/path";

const Support = () => {
  return (
    <div className="rgx-support-overview">
      <div className="rgx-support-header">
        <h1 className="rgx-support-title">Support</h1>
        <p className="rgx-support-description">
          We’re here to help! If you have any questions, issues, or suggestions
          regarding{" "}
          <strong>
            <a
              href="https://www.npmjs.com/package/@deepbag/react-grid-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              @deepbag/react-grid-x
            </a>
          </strong>
          . feel free to reach out through the following channels:
        </p>
      </div>
      <section className="rgx-support-usage">
        <h2 className="rgx-support-section-title">
          📌 GitHub Issues (Community Support)
        </h2>
        <p className="rgx-support-usage-text">
          For general discussions, bug reports, or feature requests, please use
          the  <strong>
            <a
              href="https://github.com/deepbag/react-grid-x/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="rgx-support-github-issues"
            >
              GitHub Issues
            </a>
          </strong> tab. This allows the community and maintainers to
          track and resolve issues transparently.
        </p>

        <section className="rgx-support-features">
          <h2 className="rgx-support-section-title">📝 New Issue Guidelines</h2>
          <p className="rgx-support-usage-text">
            Before creating a new issue, please follow these guidelines:
          </p>
          <ul className="rgx-support-feature-list">
            <li className="rgx-support-feature-item">
              <strong>Search for Existing Issues:</strong> Check if a similar
              issue has already been reported.
            </li>
            <li className="rgx-support-feature-item">
              <strong>Use a Clear Title:</strong> Summarize the issue concisely.
            </li>
            <li className="rgx-support-feature-item">
              <strong>Provide Detailed Information:</strong> Describe the issue,
              include logs, error messages, or screenshots.
            </li>
            <li className="rgx-support-feature-item">
              <strong>Steps to Reproduce (For Bugs):</strong> Share a
              step-by-step guide to reproduce the issue.
            </li>
            <li className="rgx-support-feature-item">
              <strong>Environment Details:</strong> Mention the React version,
              TypeScript version, and dependencies.
            </li>
            <li className="rgx-support-feature-item">
              <strong>Minimal Reproducible Example:</strong> If possible,
              provide a CodeSandbox or GitHub repo demonstrating the issue.
            </li>
          </ul>
        </section>
      </section>

      <section className="rgx-support-usage">
        <h2 className="rgx-support-section-title">📧 General Inquiries</h2>
        <p className="rgx-support-usage-text">
          For non-technical inquiries, partnerships, or collaborations, feel
          free to reach out via email: 📩{" "}
          <strong>
            <a
              href="mailto:deepbag92@gmail.com"
              className="rgx-support-email-general-inquiries"
            >
              deepbag92@gmail.com
            </a>
          </strong>
        </p>
      </section>

      <section className="rgx-support-usage">
        <h2 className="rgx-support-section-title">💼 LinkedIn</h2>
        <p className="rgx-support-usage-text">
          Connect with us on LinkedIn for updates, discussions, and networking
          opportunities: 📩{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/deepbag"
              target="_blank"
              rel="noopener noreferrer"
              className="rgx-support-linkedin-general-inquiries"
            >
              Linkedin
            </a>
          </strong>
        </p>
      </section>

      <div className="rgx-support-bottom-navigator">
        <BottomNavigator
          // next={{
          //   label: LABELS.INSTALLATION,
          //   url: PATHS.INSTALLATION,
          // }}
        />
      </div>
    </div>
  );
};

export default Support;
