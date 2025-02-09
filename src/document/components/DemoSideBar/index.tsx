import React, { useState } from "react";
import "./demo-side-bar.css";
import SwitchTabs from "document/components/SwitchTabs";
import InputBox from "document/components/InputBox";

const DemoSideBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("table");

  return (
    <nav className="rgx-demo-sidebar">
      <SwitchTabs
        options={[
          { name: "Table", id: "table" },
          // { name: "Columns", id: "column" },
        ]}
        activeTab={activeTab}
        onToggle={(tabId: string) => {
          setActiveTab(tabId);
        }}
      />
      <div className="rgx-demo-input-items">
        <div className="rgx-demo-input-item">
          <p className="rgx-demo-input-item-label">Page</p>
          <InputBox
            id="rgx-demo-input-page"
            type="text"
            value={""}
            onChange={() => {}}
            style={{
              "rgx-input-box-container": {
                width: "125px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className="rgx-demo-input-item-label">Row Per Page</p>
          <InputBox
            id="rgx-demo-input-page-size"
            type="text"
            value={""}
            onChange={() => {}}
            style={{
              "rgx-input-box-container": {
                width: "125px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className="rgx-demo-input-item-label">Sort</p>
          <InputBox
            id="rgx-demo-input-page-size"
            type="text"
            value={""}
            onChange={() => {}}
            style={{
              "rgx-input-box-container": {
                width: "125px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className="rgx-demo-input-item-label">Sort By</p>
          <InputBox
            id="rgx-demo-input-page-size"
            type="text"
            value={""}
            onChange={() => {}}
            style={{
              "rgx-input-box-container": {
                width: "125px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className="rgx-demo-input-item-label">Sort Direction</p>
          <InputBox
            id="rgx-demo-input-page-size"
            type="text"
            value={""}
            onChange={() => {}}
            style={{
              "rgx-input-box-container": {
                width: "125px",
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default DemoSideBar;
