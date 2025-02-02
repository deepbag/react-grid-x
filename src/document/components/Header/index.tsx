import React from "react";
import { Link } from "react-router-dom";
import { LABELS, PATHS } from "../../config/path";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brandIcons } from "document/assets/icons";

const Header: React.FC = () => {
  return (
    <header className="rgx-header">
      <div className="rgx-header-logo">
        <Link to={PATHS.OVERVIEW}>
          React-Grid-X <span>(0.1.3)</span>
        </Link>
      </div>
      <div className="rgx-header-github">
        <a
          href="https://github.com/deepbag/react-grid-x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={brandIcons.faGithub} size="2x" color="white" />
        </a>
      </div>
    </header>
  );
};
export default Header;
