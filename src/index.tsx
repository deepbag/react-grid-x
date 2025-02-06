import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "document/context/ConfigContext";
import AppRoute from "document/AppRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider>
    <AppRoute />
  </ConfigProvider>
);
