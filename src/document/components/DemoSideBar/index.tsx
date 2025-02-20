import React, { useState } from "react";
import "./demo-side-bar.css";
import SwitchTabs from "document/components/SwitchTabs";
import InputBox from "document/components/InputBox";
import SelectBox from "../SelectBox";
import MultipleSelectBox from "../MultipleSelectBox";
import { useDemoContext } from "document/context/DemoContext";
import { useConfig } from "document/context/ConfigContext";

const DemoSideBar: React.FC = () => {
  const { lightMode } = useConfig();
  const { demoConfig, onUpdateDemoConfig } = useDemoContext();
  const [activeTab, setActiveTab] = useState<string>("table");

  return (
    <nav
      className={`rgx-demo-sidebar ${lightMode && "rgx-demo-sidebar-light"}`}
    >
      <SwitchTabs
        options={[
          { name: "Table", id: "table" },
        ]}
        activeTab={activeTab}
        onToggle={(tabId: string) => {
          setActiveTab(tabId);
        }}
      />
      <div className="rgx-demo-input-items">
        <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Pagination Type</p>
          <SelectBox
            id="rgx-demo-select-pagination"
            options={demoConfig?.options?.paginationType || []}
            value={demoConfig?.paginationType}
            onChange={(e) => {
              onUpdateDemoConfig("paginationType", e);
            }}
            style={{
              "rgx-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Sort By</p>
          <MultipleSelectBox
            id="rgx-demo-select-sort-by"
            options={demoConfig?.options?.sortBy || []}
            value={demoConfig?.sortBy}
            onChange={(e) => {
              onUpdateDemoConfig("sortBy", e);
            }}
            style={{
              "rgx-multiple-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Multiple Sort</p>
          <SelectBox
            id="rgx-demo-select-multiple-sort"
            options={demoConfig?.options?.sortMultiple || []}
            value={demoConfig?.mulitpleSort}
            onChange={(e) => {
              onUpdateDemoConfig("mulitpleSort", e);
            }}
            style={{
              "rgx-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Tooltip</p>
          <MultipleSelectBox
            id="rgx-demo-select-tooltip"
            options={demoConfig?.options?.tooltip || []}
            value={demoConfig?.tooltip}
            onChange={(e) => {
              onUpdateDemoConfig("tooltip", e);
            }}
            style={{
              "rgx-multiple-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Row Click Event</p>
          <SelectBox
            id="rgx-demo-select-row-press-event"
            options={demoConfig?.options?.rowClickEvent || []}
            value={demoConfig?.rowClickEvent}
            onChange={(e) => {
              onUpdateDemoConfig("rowClickEvent", e);
            }}
            style={{
              "rgx-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Row Selection</p>
          <SelectBox
            id="rgx-demo-select-row-selection"
            options={demoConfig?.options?.rowSelection || []}
            value={demoConfig?.rowSelection}
            onChange={(e) => {
              onUpdateDemoConfig("rowSelection", e);
            }}
            style={{
              "rgx-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div>
        <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Row Expand</p>
          <SelectBox
            id="rgx-demo-select-row-expand"
            options={demoConfig?.options?.rowExpand || []}
            value={demoConfig?.rowExpand}
            onChange={(e) => {
              onUpdateDemoConfig("rowExpand", e);
            }}
            style={{
              "rgx-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div>
        {/* <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Loader</p>
          <SelectBox
            id="rgx-demo-select-loader"
            options={demoConfig?.options?.loader || []}
            value={demoConfig?.loader}
            onChange={(e) => {
              onUpdateDemoConfig("loader", e);
              if (demoConfig.serverPagination === "enabled") {
                onUpdateDemoConfig("loader", "enabled");
              } else {
                onUpdateDemoConfig("loader", "disabled");
              }
            }}
            style={{
              "rgx-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div> */}
        <div className="rgx-demo-input-item">
          <p className={`rgx-demo-input-item-label ${lightMode && 'rgx-demo-input-item-label-light'}`}>Server Pagination</p>
          <SelectBox
            id="rgx-demo-select-server-pagination"
            options={demoConfig?.options?.serverPagination || []}
            value={demoConfig?.serverPagination}
            onChange={(e) => {
              onUpdateDemoConfig("serverPagination", e);
              if (e === "enabled") {
                onUpdateDemoConfig("loader", "enabled");
              } else {
                onUpdateDemoConfig("loader", "disabled");
              }
            }}
            style={{
              "rgx-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default DemoSideBar;
