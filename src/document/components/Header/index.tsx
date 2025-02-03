import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LABELS, PATHS } from "../../config/path";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brandIcons } from "document/assets/icons";
import axios from "axios";

const Header: React.FC = () => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    axios
      .get("https://registry.npmjs.org/@deepbag/react-grid-x")
      .then((response) => {
        if (response?.data?.["dist-tags"]?.latest) {
          setVersion(response?.data?.["dist-tags"]?.latest);
        }
      })
      .catch((error) => {
        console.error("Error fetching version:", error);
      });
  }, []);

  return (
    <header className="rgx-header">
      <div className="rgx-header-logo">
        <Link to={PATHS.OVERVIEW}>
          React-Grid-X {version && <span>({version})</span>}
        </Link>
      </div>
      <div className="rgx-icons">
        <div className="rgx-header-npm">
          <a
            href="https://www.npmjs.com/package/@deepbag/react-grid-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={brandIcons.faNpm} size="2x" color="white" />
          </a>
        </div>
        <div className="rgx-header-github">
          <a
            href="https://github.com/deepbag/react-grid-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={brandIcons.faGithub}
              size="2x"
              color="white"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
