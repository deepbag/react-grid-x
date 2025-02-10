import ReactGridX from "module/components/ReactGridX";
// import { ReactGridX } from "@deepbag/react-grid-x";
import React from "react";
// import "module/themes/rgx-theme/rgx-theme.css"; // Import the default theme
// import "module/themes/rgx-theme/rgx-table-pagination.css"; // Import the table pagination CSS
import Loader from "module/components/Loader";

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
          // {
          //   name: "Description",
          //   key: "description",
          //   sortable: true,
          //   // render: (_: { description: any }) => {
          //   //   return _.description;
          //   // },
          //   width:'500px',
          //   tooltip:true
          // },
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
            description:
              "To add CSS for checkboxes, you can style both the checkbox input elements and their container (like the table cells) to match the design of the rest of the table. Heres how you can modify the existing CSS to include styles for checkboxes:",
          },
          {
            name: "B",
            id: 2,
            score: 40,
            description:
              "To add CSS for checkboxes, you can style both the checkbox input elements and their container (like the table cells) to match the design of the rest of the table. Heres how you can modify the existing CSS to include styles for checkboxes:",
          },
          {
            name: "C",
            id: 3,
            score: 50,
            description:
              "To add CSS for checkboxes, you can style both the checkbox input elements and their container (like the table cells) to match the design of the rest of the table. Heres how you can modify the existing CSS to include styles for checkboxes:",
          },
          {
            name: "D",
            id: 4,
            score: 30,
            description:
              "To add CSS for checkboxes, you can style both the checkbox input elements and their container (like the table cells) to match the design of the rest of the table. Heres how you can modify the existing CSS to include styles for checkboxes:",
          },
          {
            name: "E",
            id: 5,
            score: 30,
            description:
              "To add CSS for checkboxes, you can style both the checkbox input elements and their container (like the table cells) to match the design of the rest of the table. Heres how you can modify the existing CSS to include styles for checkboxes:",
          },
          {
            name: "F",
            id: 6,
            score: 30,
            description:
              "To add CSS for checkboxes, you can style both the checkbox input elements and their container (like the table cells) to match the design of the rest of the table. Heres how you can modify the existing CSS to include styles for checkboxes:",
          },
        ]}
        // expandedComponent={(row) => <div>{JSON.stringify(row)}</div>}
        // loading={true}
        // loaderComponent={() => <Loader />}
        // paginationType="rgx-arrow-pagination"
        selectionCheckbox={true}
        onSelectionCheck={(a, b) => console.log(a, b)}
        // theme=""
        paginationType="rgx-arrow-pagination"
      />
    </div>
  );
};

export default Development;
