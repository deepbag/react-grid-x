import React from "react";
import "./custom-table.css";

interface CustomTableProps {
  columns: {
    header: string;
    accessor: string;
    onClick?: (_: string) => void;
    width?: string;
  }[];
  data: { [key: string]: any }[];
  hideHeader?: boolean;
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  hideHeader = false,
}) => {
  return (
    <table className="rgx-custom-table-props-table">
      {!hideHeader && (
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                style={{
                  ...(column?.width && {
                    width: column?.width,
                  }),
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                <span
                  className={
                    column?.onClick ? "rgx-custom-table-link-text" : ""
                  }
                  onClick={() => column?.onClick && column?.onClick(row.url)}
                >
                  {row[column.accessor]}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
