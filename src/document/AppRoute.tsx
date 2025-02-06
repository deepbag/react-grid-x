import React, { useEffect } from "react";
import {
  HashRouter as Router,
  useLocation,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import {
  ChangeLog,
  Column,
  Development,
  FAQ,
  Installation,
  Overview,
  Pagination,
  Row,
  Sorting,
  Support,
} from "./pages";
import { Header, Sidebar } from "./components";
import "./app-route.css";
import { PATHS } from "./config/path";
import Tooltip from "./pages/Tooltip";
import Loader from "./pages/Loader";

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
  ]);
};

const AppRoute: React.FC = () => {
  return (
    <Router>
      <div className="rgx-app-route">
        {/* Render Header first */}
        <Header />

        <div className="rgx-app-route-main-content">
          {/* Sidebar comes below the header */}
          <Sidebar />

          <div className="rgx-app-route-page-content">
            <RoutesItem />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppRoute;
