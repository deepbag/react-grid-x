import React from "react";
import "./contribution.css";

const Contribution = () => {
  return (
    <div className="rgx-contribution-overview">
      <div className="rgx-contribution-header">
        <h1 className="rgx-contribution-title">Contribution</h1>
        <p className="rgx-contribution-description">
          Thank you for your interest in contributing to this project! We
          welcome all contributions, whether it's reporting a bug, suggesting a
          feature, improving documentation, or submitting code.
        </p>
      </div>

      <section className="rgx-contribution-features">
        <h2 className="rgx-contribution-section-title">📝 How to Contribute</h2>
        <ul className="rgx-contribution-feature-list">
          <li className="rgx-contribution-feature-item">
            <strong>Fork the Repository:</strong> Start by forking the
            repository to your GitHub account.
          </li>
          <li className="rgx-contribution-feature-item">
            <strong>Create a Branch:</strong> Use a descriptive branch name
            (e.g., feature-new-theme, fix-bug-123).
          </li>
          <li className="rgx-contribution-feature-item">
            <strong>Make Changes:</strong> Implement your changes, following
            best practices and coding standards.
          </li>
          <li className="rgx-contribution-feature-item">
            <strong>Write Tests:</strong> If applicable, include tests to ensure
            stability.
          </li>
          <li className="rgx-contribution-feature-item">
            <strong>Commit Changes:</strong> Write meaningful commit messages to
            describe your changes.
          </li>
          <li className="rgx-contribution-feature-item">
            <strong>Push & Create a Pull Request:</strong> Push your branch and
            open a pull request, describing your modifications.
          </li>
        </ul>
      </section>

      <section className="rgx-contribution-features">
        <h2 className="rgx-contribution-section-title">Contribution Guidelines</h2>
        <ul className="rgx-contribution-feature-list">
          <li className="rgx-contribution-feature-item">
            Ensure code follows the project’s coding standards.
          </li>
          <li className="rgx-contribution-feature-item">
            Keep changes focused and minimal.
          </li>
          <li className="rgx-contribution-feature-item">
            Provide clear and concise documentation.
          </li>
          <li className="rgx-contribution-feature-item">
            Be respectful and collaborate positively.
          </li>
        </ul>
      </section>

      <section className="rgx-contribution-features">
        <h2 className="rgx-contribution-section-title">Reporting Issues</h2>
        <p className="rgx-contribution-usage-text">
          If you find a bug or have a suggestion, please open an issue with the
          following details:
        </p>
        <ul className="rgx-contribution-feature-list">
          <li className="rgx-contribution-feature-item">
            A clear description of the problem or feature request.
          </li>
          <li className="rgx-contribution-feature-item">
            Steps to reproduce (if applicable).
          </li>
          <li className="rgx-contribution-feature-item">
            Expected behavior and actual results.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contribution;
