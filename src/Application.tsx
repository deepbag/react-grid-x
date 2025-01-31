// import ReactGridX from "components/ReactGridX";
import { ReactGridX } from "@deepbag/react-grid-x";
import React from "react";
import "@deepbag/react-grid-x/dist/themes/rgx-theme.css"; // Import the default theme
import "@deepbag/react-grid-x/dist/themes/rgx-table-pagination.css"; // Import the table pagination CSS

const Application = () => {
  return (
    <>
      <div
        style={{
          padding: "20px",
        }}
      >
        <ReactGridX
          columns={[
            {
              name: "Supplier Id",
              key: "id",
              // sortable: true,
              render: (_: { id: any }) => {
                return _.id;
              },
            },
            {
              name: "Supplier Name",
              sortable: true,
              key: "name",
              render: (_: { name: any }) => {
                return _.name;
              },
              // onSort: (data, order) => {
              //   return data.sort((a, b) => {
              //     return order === "asc"
              //       ? a.name.localeCompare(b.name)
              //       : b.name.localeCompare(a.name);
              //   });
              // },
            },
          ]}
          data={[
            {
              name: "A",
              id: 1,
            },
            {
              name: "B",
              id: 2,
            },
            {
              name: "C",
              id: 3,
            },
            {
              name: "D",
              id: 4,
            },
            {
              name: "E",
              id: 5,
            },
            {
              name: "F",
              id: 6,
            },
          ]}
        />
      </div>
    </>
  );
};

export default Application;
