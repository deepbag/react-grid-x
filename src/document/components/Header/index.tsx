import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LABELS, PATHS } from "../../config/path";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brandIcons } from "document/assets/icons";
import axios from "axios";
import { headerMenu } from "document/config/menu";
import { FuzzySearchMock } from "document/@mock";
import SearchInputFuzzy from "../SearchInputFuzzy";

const Header: React.FC = () => {
  const location = useLocation();
  const [version, setVersion] = useState(null);

  const isActive = (path?: string) => path === location.pathname;

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
      <SearchInputFuzzy
        data={FuzzySearchMock}
        keys={["title", "description"]}
        threshold={0.3}
      />
      <div className="rgx-header-menu">
        <ul className="rgx-header-menu-items-ul">
          {headerMenu.map((_, idx) => (
            <li
              key={idx}
              className={
                isActive(_.path)
                  ? "rgx-header-menu-active rgx-header-menu-items-li"
                  : "rgx-header-menu-items-li"
              }
            >
              <Link to={_.path as string}>{_.label}</Link>
            </li>
          ))}
        </ul>
        <div className="rgx-header-icons">
          <div className="rgx-header-npm">
            <a
              href="https://www.npmjs.com/package/@deepbag/react-grid-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={brandIcons.faNpm}
                size="2x"
                color="white"
              />
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
      </div>
    </header>
  );
};
export default Header;
