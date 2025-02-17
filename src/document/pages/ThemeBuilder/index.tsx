import React, { useEffect, useMemo, useState } from "react";
// import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme-combined.css";
// import "module/themes/rgx-theme/rgx-theme.css";
import { ReactGridX } from "@deepbag/react-grid-x";
import { _paginatedResponse } from "document/utils/paginated-response";
import { UsersRandom } from "document/@mock";
import moment from "moment-timezone";
import CustomImage from "document/components/CustomImage";
// import ReactGridX from "module/components/ReactGridX";
import { useDemoContext } from "document/context/DemoContext";

const ThemeBuilder = () => {
  const { demoConfig, onUpdateDemoConfig } = useDemoContext();

  const onPaginationResponse = (page: number, pageSize: number) => {
    onUpdateDemoConfig("loading", true);
    onUpdateDemoConfig("pageNumber", page);
    onUpdateDemoConfig("rowPerPage", pageSize);
    _paginatedResponse(UsersRandom, page, pageSize, true).then((_data) => {
      onUpdateDemoConfig("loading", false);
      onUpdateDemoConfig("data", _data.data);
      onUpdateDemoConfig("totalRows", _data.totalRows);
    });
  };

  useEffect(() => {
    onPaginationResponse(demoConfig.pageNumber, demoConfig.rowPerPage);
  }, [demoConfig.serverPagination]);

  return (
    <>
      <style>
        {`
          .rgx-custom {
           
          }
        `}
      </style>
      <div
        style={{
          marginTop: "5px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "12px",
          }}
        >
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
                tooltipCustomContent: (_: { name: any; company: any }) =>
                  `${_.name} Working in ${_.company}`,
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
            ]}
            data={demoConfig.data}
            tableStyle={{
              "rgx-table-container": {
                height: "80vh",
              },
            }}
            multiColumnSort={false}
            loading={demoConfig.loading}
            paginationType={demoConfig.paginationType}
            onRowClick={(_) => alert(JSON.stringify(_.name))}
            selectionCheckbox={true}
            expandedComponent={(rowData) => (
              <div>{JSON.stringify(rowData)}</div>
            )}
            serverSidePagination={true}
            onPaginationAndRowSizeChange={(page, rowsPerPage) => {
              console.log(page, rowsPerPage);
              onPaginationResponse(page, rowsPerPage);
            }}
            rowPerPage={demoConfig.rowPerPage}
            totalRows={demoConfig.totalRows}
            page={demoConfig.pageNumber}
            theme="rgx-custom"
          />
        </div>
      </div>
    </>
  );
};

export default ThemeBuilder;
