import React, { useEffect } from "react";
import { _paginatedResponse } from "document/utils/paginated-response";
import { UsersRandom } from "document/@mock";
import moment from "moment-timezone";
import CustomImage from "document/components/CustomImage";
import { useDemoContext } from "document/context/DemoContext";

import { ReactGridX } from "@deepbag/react-grid-x";
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme-combined.css";
import "@deepbag/react-grid-x/dist/themes/rgx-theme/dark/rgx-theme-dark-combined.css";

// import ReactGridX from "module/components/ReactGridX";
// import "module/themes/rgx-theme/rgx-theme-combined.css";

// import "module/themes/rgx-theme/rgx-theme.css";
// import "module/themes/rgx-theme/rgx-table-pagination.css";
// import "module/themes/rgx-theme/rgx-arrow-pagination.css";
// import "module/themes/rgx-theme/rgx-popover.css";
// import "module/themes/rgx-theme/rgx-tooltip.css";
// import "module/themes/rgx-theme/rgx-loader.css";

// import "module/themes/rgx-theme/dark/rgx-theme-dark.css";
// import "module/themes/rgx-theme/dark/rgx-table-pagination-dark.css";
// import "module/themes/rgx-theme/dark/rgx-arrow-pagination-dark.css";
// import "module/themes/rgx-theme/dark/rgx-popover-dark.css";

import { useConfig } from "document/context/ConfigContext";

const Demo = () => {
  const { config } = useConfig();
  const { demoConfig, onUpdateDemoConfig } = useDemoContext();

  const onPaginationResponse = (page: number, pageSize: number) => {
    onUpdateDemoConfig("loading", true);
    onUpdateDemoConfig("pageNumber", page);
    onUpdateDemoConfig("rowPerPage", pageSize);
    if (Boolean(demoConfig.serverPagination === "enabled")) {
      _paginatedResponse(
        UsersRandom,
        page,
        pageSize,
        Boolean(demoConfig.serverPagination === "enabled")
      ).then((_data) => {
        onUpdateDemoConfig("loading", false);
        onUpdateDemoConfig("data", _data.data);
        onUpdateDemoConfig("totalRows", _data.totalRows);
      });
    } else {
      _paginatedResponse(UsersRandom).then((_data) => {
        onUpdateDemoConfig("loading", false);
        onUpdateDemoConfig("data", _data.data);
        onUpdateDemoConfig("totalRows", _data.totalRows);
      });
    }
  };

  useEffect(() => {
    onPaginationResponse(demoConfig.pageNumber, demoConfig.rowPerPage);
  }, [demoConfig.serverPagination]);

  return (
    <div>
      <ReactGridX
        columns={[
          {
            name: "Avatar",
            key: "avatar",
            render: (_: { avatar: string }) => (
              <CustomImage src={_.avatar} width={40} />
            ),
            width: 100,
          },
          {
            name: "Name",
            key: "name",
            width: 150,
            tooltip: true,
          },
          {
            name: "Date Of Birth",
            key: "dateOfBirth",
            render: (_: { dateOfBirth: moment.MomentInput }) =>
              moment(_.dateOfBirth).format("DD-MMM-YYYY"),
            width: 180,
            onSort: (
              a: moment.MomentInput,
              b: moment.MomentInput,
              direction: string
            ) => {
              const dateA = moment(a);
              const dateB = moment(b);
              if (direction === "asc") {
                return dateA.isBefore(dateB)
                  ? -1
                  : dateA.isAfter(dateB)
                  ? 1
                  : 0;
              } else {
                return dateB.isBefore(dateA)
                  ? -1
                  : dateB.isAfter(dateA)
                  ? 1
                  : 0;
              }
            },
          },
          {
            name: "Age",
            key: "age",
            render: (_: { dateOfBirth: moment.MomentInput }) =>
              Number(moment().diff(_.dateOfBirth, "years")),
            width: 40,
          },
          { name: "Job Title", key: "jobTitle", width: 230, tooltip: true },
          {
            name: "Company",
            key: "company",
            width: 240,
            tooltip: true,
            tooltipCustomContent: (_: {
              country: any;
              name: any;
              company: any;
            }) =>
              `${_.name} Working in ${_.company} ${_.country} ${_.name} Working in ${_.company} ${_.country}`,
          },
          {
            name: "Address",
            key: "address",
            render: (_: { address: any; city: any; country: any }) =>
              `${_.address}, ${_.city}, ${_.country}`,
            width: 300,
          },
          { name: "Email", key: "email", width: 230 },
          { name: "Country", key: "country", width: 150 },
        ].map((_) => ({
          ..._,
          sortable: demoConfig?.sortBy?.includes(_.key),
          tooltip: demoConfig?.tooltip?.includes(_.key),
        }))}
        data={demoConfig.data}
        tableStyle={{
          "rgx-table-container": {
            height: "80vh",
          },
        }}
        paginationStyle={{}}
        multiColumnSort={Boolean(demoConfig.mulitpleSort === "enabled")}
        loading={Boolean(demoConfig.loader === "enabled") && demoConfig.loading}
        paginationType={demoConfig.paginationType}
        onRowClick={(_) =>
          Boolean(demoConfig.rowClickEvent === "enabled") &&
          alert(JSON.stringify(_.name))
        }
        selectionCheckbox={Boolean(demoConfig.rowSelection === "enabled")}
        expandedComponent={
          Boolean(demoConfig.rowExpand === "enabled")
            ? (rowData) => <div>{JSON.stringify(rowData)}</div>
            : undefined
        }
        serverSidePagination={Boolean(
          demoConfig.serverPagination === "enabled"
        )}
        onPaginationAndRowSizeChange={(page, rowsPerPage) => {
          if (Boolean(demoConfig.serverPagination === "enabled")) {
            onPaginationResponse(page, rowsPerPage);
          }
        }}
        rowPerPage={demoConfig.rowPerPage}
        totalRows={demoConfig.totalRows}
        page={demoConfig.pageNumber}
        mode={config.theme}
      />
    </div>
  );
};

export default Demo;
