import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "document/context/ConfigContext";
import AppRoute from "document/AppRoute";
import { HashRouter } from "react-router-dom";
import { DemoProvider } from "document/context/DemoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider
    defaultConfig={{
      theme: "light",
    }}
  >
    <DemoProvider>
      <HashRouter>
        <AppRoute />
      </HashRouter>
    </DemoProvider>
  </ConfigProvider>
);
