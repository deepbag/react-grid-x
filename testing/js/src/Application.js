import { UsersRandom } from "./@mock";
import React, { useEffect, useState } from "react";
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme-combined.css";
import { ReactGridX } from "@deepbag/react-grid-x";
import moment from "moment-timezone";
import { _paginatedResponse } from "./utils/paginated-response";

const Application = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  const onPaginationResponse = (page, pageSize) => {
    setLoading(true);
    setPage(page);
    setSize(pageSize);
    _paginatedResponse(UsersRandom, page, pageSize, true).then((_data) => {
      setLoading(false);
      setData(_data.data);
      setTotalRows(_data.totalRows);
    });
  };

  useEffect(() => {
    onPaginationResponse(page, size);
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
              name: "Name",
              key: "name",
              width: 150,
              tooltip: true,
            },
            {
              name: "Date Of Birth",
              key: "dateOfBirth",
              render: (_) => moment(_.dateOfBirth).format("DD-MMM-YYYY"),
              width: 180,
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
              width: 40,
            },
            { name: "Job Title", key: "jobTitle", width: 230, tooltip: true },
            {
              name: "Company",
              key: "company",
              width: 240,
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
          data={data}
          tableStyle={{
            "rgx-table-container": {
              height: "80vh",
            },
          }}
          paginationStyle={{}}
          multiColumnSort={true}
          loading={loading}
          onRowClick={(_) => alert(JSON.stringify(_.name))}
          selectionCheckbox={true}
          expandedComponent={(rowData) => <div>{JSON.stringify(rowData)}</div>}
          serverSidePagination={true}
          onPaginationAndRowSizeChange={(page, rowsPerPage) => {
            onPaginationResponse(page, rowsPerPage);
          }}
          rowPerPage={size}
          totalRows={totalRows}
          page={page}
        />
      </div>
    </div>
  );
};

export default Application;
