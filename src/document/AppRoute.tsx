import React from "react";
import { HashRouter as Router, useRoutes } from "react-router-dom";
import {
  ChangeLog,
  Development,
  Installation,
  Overview,
  Support,
} from "./pages";
import { Header, Sidebar } from "./components";
import "./app-route.css";
import { PATHS } from "./config/path";

const RoutesItem: React.FC = () => {
  return useRoutes([
    { path: PATHS.OVERVIEW, element: <Overview /> },
    { path: PATHS.INSTALLATION, element: <Installation /> },
    { path: PATHS.SUPPORT, element: <Support /> },
    { path: PATHS.CHANGE_LOG, element: <ChangeLog /> },
    { path: PATHS.DEVELOPMENT, element: <Development /> },
  ]);
};

const AppRoute: React.FC = () => {
  return (
    <Router>
      <div className="rgx-app">
        {/* Render Header first */}
        <Header />

        <div className="rgx-main-content">
          {/* Sidebar comes below the header */}
          <Sidebar />

          <div className="rgx-page-content">
            <RoutesItem />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppRoute;
