import ReactGridX from "components/ReactGridX";
// import { ReactGridX } from "@deepbag/react-grid-x";
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
              tooltip: true,
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
            {
              name: "Score",
              key: "score",
              render: (_: { score: any }) => {
                return _.score;
              },
            },
          ]}
          data={[
            {
              name: "A",
              id: 1,
              score: 30,
            },
            {
              name: "B",
              id: 2,
              score: 30,
            },
            {
              name: "C",
              id: 3,
              score: 30,
            },
            {
              name: "D",
              id: 4,
              score: 30,
            },
            {
              name: "E",
              id: 5,
              score: 30,
            },
            {
              name: "F",
              id: 6,
              score: 30,
            },
          ]}
          // expandedComponent={(row) => <div>{JSON.stringify(row)}</div>}
        />
      </div>
    </>
  );
};

export default Application;
