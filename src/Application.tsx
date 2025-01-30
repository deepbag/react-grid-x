// import ReactGridX from "components/ReactGridX";
import { ReactGridX } from "@deepbag/react-grid-x";
import React from "react";
import "@deepbag/react-grid-x/dist/themes/rgx-theme.css";            // Import the default theme
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
              render: (_: { id: any }) => {
                return _.id;
              },
            },
            {
              name: "Supplier Name",
              render: (_: { name: any }) => {
                return _.name;
              },
            },
          ]}
          data={[
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
            {
              name: "Supplier Name",
              id: "cc95ef48-cff7-4824-b1b6-39a882f47db4",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Application;
