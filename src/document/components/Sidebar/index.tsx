import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./side-bar.css";
import { menu } from "document/config/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solidIcons } from "document/assets/icons";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const findActiveMenuLabel = (
    inputPath: string
  ): { label: string; parentLabel?: string } | null => {
    const parent = menu.find(
      (item) =>
        item.path === inputPath ||
        (item.children &&
          item.children.some((child) => child.path === inputPath))
    );

    if (!parent) return null;

    const child = parent.children?.find((child) => child.path === inputPath);
    return child
      ? { label: parent.label, parentLabel: parent.label }
      : { label: parent.label };
  };

  const toggleMenu = (label?: string) => {
    if (label) {
      setOpenMenus((prev) => {
        const updatedMenus = { ...prev, [label]: !prev[label] };
        return updatedMenus;
      });
    } else {
      setOpenMenus({});
    }
  };

  const isActive = (path?: string) => path === location.pathname;

  const groupedMenus = menu.reduce<Record<string, typeof menu>>((acc, item) => {
    if (!acc[item.keyLabel as string]) {
      acc[item.keyLabel as string] = [];
    }
    acc[item.keyLabel as string].push(item);
    return acc;
  }, {});

  useEffect(() => {
    const label = findActiveMenuLabel(location.pathname);
    if (label?.parentLabel) {
      toggleMenu(label?.parentLabel);
    }
  }, []);

  return (
    <nav className="rgx-sidebar">
      <ul>
        {Object.entries(groupedMenus).map(([keyLabel, items]) => (
          <li key={keyLabel}>
            <div className="rgx-keyLabel">{keyLabel}</div>{" "}
            {/* KeyLabel Header */}
            <ul className="rgx-menu-items">
              {items.map((item) => (
                <li
                  key={item.label}
                  className={isActive(item.path) ? "active" : ""}
                >
                  {item.path ? (
                    <Link to={item.path} onClick={() => toggleMenu()}>
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleMenu(item.label)}
                      className="rgx-menu-button"
                    >
                      {item.label}{" "}
                      {openMenus[item.label] ? (
                        <FontAwesomeIcon
                          icon={solidIcons.faCircleArrowUp}
                          style={{ marginLeft: "4px" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={solidIcons.faCircleArrowDown}
                          style={{ marginLeft: "4px" }}
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
