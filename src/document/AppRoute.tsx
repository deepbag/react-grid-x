import React, { useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import {
  ChangeLog,
  Column,
  TooltipClass,
  Development,
  FAQ,
  Installation,
  Overview,
  Pagination,
  Row,
  Sorting,
  Support,
  LoaderClass,
  PopoverClass,
  TableClass,
  TablePaginationClass,
  ArrowPaginationClass,
  CustomTheme,
  CSSGuide,
  Demo,
  Tooltip,
  Loader,
} from "document/pages";
import { DemoSideBar, Header, Sidebar } from "document/components";
import "document/app-route.css";
import { PATHS } from "document/config/path";
import useCurrentRoute from "document/hooks/useCurrentRoute";

const RoutesItem: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname && location.pathname !== "/") {
      navigate(location.pathname);
    } else {
      navigate(PATHS.OVERVIEW);
    }
  }, []);

  return useRoutes([
    { path: PATHS.OVERVIEW, element: <Overview /> },
    { path: PATHS.INSTALLATION, element: <Installation /> },
    { path: PATHS.SUPPORT, element: <Support /> },
    { path: PATHS.CHANGE_LOG, element: <ChangeLog /> },
    { path: PATHS.DEVELOPMENT, element: <Development /> },
    { path: PATHS.FAQ, element: <FAQ /> },
    { path: PATHS.COLUMNS, element: <Column /> },
    { path: PATHS.ROW, element: <Row /> },
    { path: PATHS.SORTING, element: <Sorting /> },
    { path: PATHS.PAGINATION, element: <Pagination /> },
    { path: PATHS.TOOLTIP, element: <Tooltip /> },
    { path: PATHS.LOADER, element: <Loader /> },
    { path: PATHS.TOOLTIP_CLASS, element: <TooltipClass /> },
    { path: PATHS.LOADER_CLASS, element: <LoaderClass /> },
    { path: PATHS.POPOVER_CLASS, element: <PopoverClass /> },
    { path: PATHS.TABLE_CLASS, element: <TableClass /> },
    { path: PATHS.TABLE_PAGINATION_CLASS, element: <TablePaginationClass /> },
    { path: PATHS.ARROW_PAGINATION_CLASS, element: <ArrowPaginationClass /> },
    { path: PATHS.CUSTOM_THEME, element: <CustomTheme /> },
    { path: PATHS.CSS_GUIDE, element: <CSSGuide /> },
    { path: PATHS.DEMO, element: <Demo /> },
  ]);
};

interface SideBarType {
  [key: string]: React.ReactNode;
}

const AppRoute: React.FC = () => {
  const { label, pathWithoutSlash } = useCurrentRoute();
  console.log(label, pathWithoutSlash);

  const SideBar: SideBarType = {
    demo: <DemoSideBar />,
  };

  return (
    <div className="rgx-app-route">
      <Header />

      <div className="rgx-app-route-main-content">
        {SideBar[pathWithoutSlash] && SideBar[pathWithoutSlash]}
        {!SideBar[pathWithoutSlash] && <Sidebar />}

        <div
          className={
            SideBar[pathWithoutSlash]
              ? "rgx-app-route-page-content-demo"
              : "rgx-app-route-page-content"
          }
        >
          <RoutesItem />
        </div>
      </div>
    </div>
  );
};

export default AppRoute;
