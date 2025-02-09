import React from "react";
import "https://cdn.jsdelivr.net/npm/@deepbag/react-grid-x@0.1.8/dist/themes/rgx-theme/minified/rgx-theme-combined-minified.css";
import { ReactGridX } from "@deepbag/react-grid-x";

const Demo = () => {
  return (
    <div>
      <ReactGridX
        columns={[
          { name: "Name", key: "name", sortable: true },
          {
            name: "Age",
            key: "age",
            sortable: true,
            render: (data) => <span>{data.age}</span>,
          },
        ]}
        data={[
          { id: 1, name: "John", age: 28 },
          { id: 2, name: "Jane", age: 34 },
        ]}
      />
    </div>
  );
};

export default Demo;
