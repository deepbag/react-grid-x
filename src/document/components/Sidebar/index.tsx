/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./side-bar.css";
import { menu } from "document/config/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solidIcons } from "document/assets/icons";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (path?: string) => path === location.pathname;

  return (
    <nav className="rgx-sidebar">
      <ul>
        {menu.map((item) => (
          <li key={item.label} className={isActive(item.path) ? "active" : ""}>
            {item.path ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <button
                onClick={() => toggleMenu(item.label)}
                className="rgx-menu-button"
              >
                {item.label}{" "}
                {openMenus[item.label] ? (
                  <FontAwesomeIcon
                    icon={solidIcons.faCircleArrowUp}
                    style={{
                      marginLeft: "4px",
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={solidIcons.faCircleArrowDown}
                    style={{
                      marginLeft: "4px",
                    }}
                  />
                )}
              </button>
            )}
            {item.children && openMenus[item.label] && (
              <ul className="rgx-submenu">
                {item.children.map((child) => (
                  <li
                    key={child.label}
                    className={isActive(child.path) ? "active" : ""}
                  >
                    <Link to={child.path as string}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
