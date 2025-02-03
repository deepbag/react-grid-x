import ReactGridX from "components/ReactGridX";
// import { ReactGridX } from "@deepbag/react-grid-x";
import React from "react";
import "../../../themes/rgx-theme.css"; // Import the default theme
import "../../../themes/rgx-table-pagination.css"; // Import the table pagination CSS
import Loader from "components/Loader";

const Development = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
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
            sortable: true,
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
            score: 40,
          },
          {
            name: "C",
            id: 3,
            score: 50,
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
        // loading={true}
        // loaderComponent={() => <Loader />}
        // paginationType="rgx-arrow-pagination"
      />
    </div>
  );
};

export default Development;
