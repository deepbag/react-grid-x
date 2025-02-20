import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./side-bar.css";
import { menu } from "document/config/menu";
import SvgIcon from "../SVGIcons";
import { useConfig } from "document/context/ConfigContext";

const Sidebar: React.FC = () => {
  const { lightMode } = useConfig();
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
    if (label?.parentLabel !== Object.keys(openMenus)[0]) {
      toggleMenu(label?.parentLabel);
    }
  }, []);

  return (
    <nav className={`rgx-sidebar ${lightMode && "rgx-sidebar-light"}`}>
      <ul>
        {Object.entries(groupedMenus).map(([keyLabel, items]) => (
          <li key={keyLabel}>
            <div
              className={`rgx-sidebar-keyLabel ${
                lightMode && "rgx-sidebar-keyLabel-light"
              }`}
            >
              {keyLabel}
            </div>{" "}
            {/* KeyLabel Header */}
            <ul className="rgx-sidebar-menu-items">
              {items.map((item) => (
                <li
                  key={item.label}
                  className={isActive(item.path) ? "rgx-sidebar-active" : ""}
                >
                  {item.path ? (
                    <Link to={item.path} onClick={() => toggleMenu()}>
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleMenu(item.label)}
                      className={`rgx-sidebar-menu-button ${
                        lightMode && "rgx-sidebar-menu-button-light"
                      }`}
                    >
                      {item.label}{" "}
                      {openMenus[item.label] ? (
                        <SvgIcon
                          svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-up"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>`}
                          style={{ marginLeft: "4px" }}
                        />
                      ) : (
                        <SvgIcon
                          svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-down"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/></svg>`}
                          style={{ marginLeft: "4px" }}
                        />
                      )}
                    </button>
                  )}
                  {item.children && openMenus[item.label] && (
                    <ul className="rgx-sidebar-submenu">
                      {item.children.map((child) => (
                        <li
                          key={child.label}
                          className={
                            isActive(child.path) ? "rgx-sidebar-active" : ""
                          }
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
