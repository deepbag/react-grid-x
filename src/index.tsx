import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoute from "document/AppRoute";
import { ConfigProvider } from "document/context/ConfigContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider>
    <AppRoute />
  </ConfigProvider>
);
