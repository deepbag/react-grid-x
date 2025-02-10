import React, { useEffect, useState } from "react";
// import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme-combined.css";
import "module/themes/rgx-theme/rgx-theme.css";
// import { ReactGridX } from "@deepbag/react-grid-x";
import { _paginatedResponse } from "document/utils/paginated-response";
import { UsersRandom } from "document/@mock";
import moment from "moment-timezone";
import CustomImage from "document/components/CustomImage";
import ReactGridX from "module/components/ReactGridX";

const Demo = () => {
  const [_demoData, _setDemoData] = useState<{ [key: string]: any }[]>([]);
  const [_totalRows, _setTotalRows] = useState<number>(0);

  useEffect(() => {
    const _data = _paginatedResponse(UsersRandom, 1, 15);
    _setDemoData(_data.data);
    _setTotalRows(_data.totalRows);
  }, []);

  return (
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
              render: (_) => <CustomImage src={_.avatar} width={40} />,
              width: 40,
            },
            {
              name: "Name",
              key: "name",
              width: 150,
              sortable: true,
              tooltip: true,
            },
            {
              name: "Date Of Birth",
              key: "dateOfBirth",
              render: (_) => moment(_.dateOfBirth).format("DD-MMM-YYYY"),
              width: 180,
              sortable: true,
              onSort: (a, b, direction) => {
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
              render: (_) => Number(moment().diff(_.dateOfBirth, "years")),
              width: 40
            },
            { name: "Job Title", key: "jobTitle", width: 230, tooltip: true },
            {
              name: "Company",
              key: "company",
              width: 240,
              sortable: true,
              tooltip: true,
              tooltipCustomContent: (_) => `${_.name} Working in ${_.company}`,
            },
            {
              name: "Address",
              key: "address",
              render: (_) => `${_.address}, ${_.city}, ${_.country}`,
              width: 300,
            },
            { name: "Email", key: "email", width: 230 },
            { name: "Country", key: "country", width: 150 },
          ]}
          data={_demoData}
          tableStyle={{
            "rgx-table-container": {
              height: "80vh",
            },
            "rgx-table-head-th": {
              fontSize: "14px",
            },
            "rgx-table-body-td": {
              fontSize: "14px",
            },
          }}
          paginationStyle={{
            "rgx-table-pagination-info": {
              fontSize: "14px",
            },
            "rgx-table-pagination-rows-per-page-label": {
              fontSize: "14px",
            },
            "rgx-table-pagination-rows-per-page-select": {
              fontSize: "14px",
            },
            "rgx-table-pagination-button": {
              fontSize: "14px",
            },
          }}
          multiColumnSort={false}
          rowPerPage={10}
          loading={false}
        />
      </div>
    </div>
  );
};

export default Demo;
