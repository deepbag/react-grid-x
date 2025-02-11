import React, { useState } from "react";
import "./demo-side-bar.css";
import SwitchTabs from "document/components/SwitchTabs";
import InputBox from "document/components/InputBox";
import SelectBox from "../SelectBox";
import MultipleSelectBox from "../MultipleSelectBox";
import { useDemoContext } from "document/context/DemoContext";

const DemoSideBar: React.FC = () => {
  const { demoConfig, onUpdateDemoConfig } = useDemoContext();
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
          <p className="rgx-demo-input-item-label">Pagination Type</p>
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
        {/* <div className="rgx-demo-input-item">
          <p className="rgx-demo-input-item-label">Row Per Page</p>
          <SelectBox
            id="rgx-demo-select-row-per-page"
            options={
              demoConfig?.options?.rowPerPage?.map((_) => ({
                label: _,
                value: _,
              })) || []
            }
            value={demoConfig?.rowPerPage}
            onChange={(e) => {
              onUpdateDemoConfig("rowPerPage", e);
            }}
            style={{
              "rgx-select-box-container": {
                width: "180px",
              },
            }}
          />
        </div> */}
        <div className="rgx-demo-input-item">
          <p className="rgx-demo-input-item-label">Sort By</p>
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
          <p className="rgx-demo-input-item-label">Multiple Sort</p>
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
          <p className="rgx-demo-input-item-label">Tooltip</p>
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
          <p className="rgx-demo-input-item-label">Row Click Event</p>
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
          <p className="rgx-demo-input-item-label">Row Selection</p>
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
          <p className="rgx-demo-input-item-label">Row Expand</p>
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
          <p className="rgx-demo-input-item-label">Loader</p>
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
          <p className="rgx-demo-input-item-label">Server Pagination</p>
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
