import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LABELS, PATHS } from "../../config/path";
import "./header.css";
import axios from "axios";
import { headerMenu } from "document/config/menu";
import SvgIcon from "../SVGIcons";
import ThemeToggle from "../ThemeToggle";
import { useConfig } from "document/context/ConfigContext";
// import { FuzzySearchMock } from "document/@mock";
// import SearchInputFuzzy from "../SearchInputFuzzy";

const Header: React.FC = () => {
  const { lightMode } = useConfig();
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
    <header className={`rgx-header ${lightMode && "rgx-header-light"}`}>
      <div
        className={`rgx-header-logo ${lightMode && "rgx-header-logo-light"}`}
      >
        <Link to={PATHS.OVERVIEW}>
          React-Grid-X {version && <span>({version})</span>}
        </Link>
      </div>
      {/* <SearchInputFuzzy
        data={FuzzySearchMock}
        keys={["title", "description"]}
        threshold={0.3}
      /> */}
      <div className="rgx-header-menu">
        <ul className="rgx-header-menu-items-ul">
          {headerMenu.map((_, idx) => (
            <li
              key={idx}
              className={`rgx-header-menu-items-li ${
                isActive(_.path) && "rgx-header-menu-active"
              } ${lightMode && "rgx-header-menu-items-li-light"}`}
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
              <SvgIcon
                svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 256 60" id="npm"><path fill="#CB3837" d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z"></path><path fill="#FFF" d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z"></path></svg>`}
              />
            </a>
          </div>
          <div className="rgx-header-github">
            <a
              href="https://github.com/deepbag/react-grid-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                svgPath={`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" id="github"><path fill=${
                  lightMode ? "#101314" : "#f6f8fa"
                } d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>`}
              />
            </a>
          </div>
          <div className="rgx-header-mode-button">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
