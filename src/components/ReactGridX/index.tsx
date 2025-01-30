import React, { JSX, useState } from "react";
import "../../themes/rgx-theme.css";
import RGXArrowPagination from "components/Paginations/RGXArrowPagination";
import RGXTablePagination from "components/Paginations/RGXTablePagination";

// Define the column properties for the table
export interface ReactGridXColumnProps {
  name: string; // The column name to display
  render?: (data: any) => JSX.Element | string; // Optional custom render function for cell data
}

// Define the main props for the ReactGridX component
export interface ReactGridXProps {
  columns: ReactGridXColumnProps[]; // Array of column definitions
  data: any[]; // The dataset to display in the table
  theme?: string; // Optional CSS class for table styling
  rowsPerPageOptions?: number[]; // Options for rows per page in pagination
  paginationType?: "rgx-table-pagination" | "rgx-arrow-pagination"; // Type of pagination to use (e.g., custom or default)
  paginationStyle?: Record<string, React.CSSProperties>; // Styles for pagination components
  tableStyle?: Record<string, React.CSSProperties>; // Styles for table components
  serverSide?: boolean; // Flag to indicate server-side pagination
  onPaginationAndRowSizeChange?: (page: number, rowsPerPage: number) => void; // Callback for pagination and row size changes
  totalRows?: number; // total number of rows in database
}

// ReactGridX: A flexible, reusable table component with optional server-side pagination
const ReactGridX: React.FC<ReactGridXProps> = ({
  columns,
  data,
  theme = "rgx-theme",
  rowsPerPageOptions = [5, 10, 15],
  paginationType = "rgx-table-pagination",
  paginationStyle = {},
  tableStyle = {},
  serverSide = false,
  onPaginationAndRowSizeChange,
  totalRows,
}) => {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);

  // State to manage the number of rows per page
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  /**
   * Handle page change event
   * @param page - The new page number
   */
  const onPageChange = (page: number) => {
    setCurrentPage(page); // Update the current page state
    onPaginationAndRowSizeChange &&
      onPaginationAndRowSizeChange(page, rowsPerPage); // Trigger the callback with updated page and rows
  };

  /**
   * Handle rows per page change event
   * @param rows - The new number of rows per page
   */
  const onRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows); // Update the rows per page state
    setCurrentPage(1); // Reset to the first page
    onPaginationAndRowSizeChange && onPaginationAndRowSizeChange(1, rows); // Trigger the callback with the new rows and reset page
  };

  // Calculate the total number of pages for client-side pagination and server-side pagination
  const totalPages = serverSide
    ? Math.ceil((totalRows ?? 0) / rowsPerPage) // total number of rows in database
    : Math.ceil(data.length / rowsPerPage);

  // Slice the data for the current page (only for client-side pagination)
  const currentPageData = serverSide
    ? data // Use full data for server-side; parent handles slicing
    : data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Define pagination components based on the pagination type
  const pagination: Record<string, JSX.Element> = {
    "rgx-table-pagination": (
      <RGXTablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalRows={serverSide ? totalRows ?? 0 : data.length}
        onPageChange={onPageChange} // Trigger page change callback
        onRowsPerPageChange={onRowsPerPageChange} // Trigger rows per page change callback
        rowsPerPageOptions={rowsPerPageOptions}
        style={paginationStyle}
      />
    ),
    "rgx-arrow-pagination": (
      <RGXArrowPagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalRows={serverSide ? totalRows ?? 0 : data.length}
        onPageChange={onPageChange} // Trigger page change callback
        onRowsPerPageChange={onRowsPerPageChange} // Trigger rows per page change callback
        rowsPerPageOptions={rowsPerPageOptions}
        style={paginationStyle}
      />
    ),
  };

  return (
    <div>
      {/* Render the table */}
      <table className={theme} style={tableStyle["table"]}>
        <thead>
          <tr style={tableStyle["thead-tr"]}>
            {/* Render table headers based on column definitions */}
            {columns?.map((column, index) => (
              <th
                key={index}
                style={{
                  textAlign: "left",
                  ...tableStyle["th"],
                }}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={tableStyle["tbody"]}>
          {/* Render table rows for the current page */}
          {currentPageData.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex} // Use a unique key for each row
              className="rgx-row"
              style={tableStyle["row"]}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} style={tableStyle["td"]}>
                  {/* Render cell data using custom render function if provided */}
                  {column.render ? column.render(row) : row[column.name] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render the pagination component */}
      {pagination[paginationType as keyof typeof pagination]}
    </div>
  );
};

export default ReactGridX;
