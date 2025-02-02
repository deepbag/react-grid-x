import React, { JSX, useState } from "react";
import "../../themes/rgx-theme.css";
import RGXArrowPagination from "components/Paginations/RGXArrowPagination";
import RGXTablePagination from "components/Paginations/RGXTablePagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solidIcons } from "components/Icons/FontAwesome";
import Tooltip from "components/Tooltip";
import Loader from "components/Loader";

// Define the column properties for the table
export interface ReactGridXColumnProps {
  name: string; // The column name to display
  key: string; // key which match with data key
  render?: (data: any) => JSX.Element | string; // Optional custom render function for cell data
  sortable?: boolean; // Whether the column is sortable
  onSort?: (data: any[], order: "asc" | "desc") => any[]; // Custom sorting function
  tooltip?: boolean; // Tooltip property for columns
  tooltipCustomContent?: (rowData: any) => string; //  Tooltip custom content
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
  serverSidePagination?: boolean; // Flag to indicate server-side pagination
  onPaginationAndRowSizeChange?: (page: number, rowsPerPage: number) => void; // Callback for pagination and row size changes
  totalRows?: number; // total number of rows in database
  serverSideSorting?: boolean; // Whether sorting is handled on the server-side
  onSorting?: (column: string, order: "asc" | "desc") => void; // Callback for sorting columns
  onRowClick?: (rowData: any) => void; // Callback when a row is clicked
  expandedComponent?: (row: any) => JSX.Element; // Custom component to render when a row is expanded, passed the row data
  loading?: boolean; // Added loading prop
  loaderComponent?: () => JSX.Element; // Added loader component prop
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
  serverSidePagination = false,
  onPaginationAndRowSizeChange,
  totalRows,
  serverSideSorting = false,
  onSorting,
  onRowClick,
  expandedComponent,
  loading = false,
  loaderComponent = () => <Loader />,
}) => {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // data
  const [currentData, setCurrentData] = useState<any[]>(data);

  // State to track the currently sorted column and order
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // State to manage the number of rows per page
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0]);

  // State to track expanded row
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

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

  /**
   * Handle sorting event
   * @param columnName - The column name to sort by
   */
  const onSortingHandler = (key: string) => {
    const newSortOrder =
      sortColumn === key && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(key);
    setSortOrder(newSortOrder);

    if (serverSideSorting && onSorting) return onSorting(key, newSortOrder);

    const column = columns.find((col) => col.key === key);
    const sorted = column?.onSort
      ? column.onSort([...data], newSortOrder)
      : [...data].sort((a, b) =>
          !isNaN(a[key]) && !isNaN(b[key])
            ? newSortOrder === "asc"
              ? a[key] - b[key]
              : b[key] - a[key]
            : newSortOrder === "asc"
            ? String(a[key]).localeCompare(String(b[key]))
            : String(b[key]).localeCompare(String(a[key]))
        );

    setCurrentData(sorted);
  };

  // Calculate the total number of pages for client-side pagination and server-side pagination
  const totalPages = serverSidePagination
    ? Math.ceil((totalRows ?? 0) / rowsPerPage) // total number of rows in database
    : Math.ceil(currentData.length / rowsPerPage);

  // Slice the data for the current page (only for client-side pagination)
  const currentPageData = serverSidePagination
    ? currentData // Use full data for server-side; parent handles slicing
    : currentData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      );

  // Define pagination components based on the pagination type
  const pagination: Record<string, JSX.Element> = {
    "rgx-table-pagination": (
      <RGXTablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalRows={serverSidePagination ? totalRows ?? 0 : currentData.length}
        onPageChange={onPageChange} // Trigger page change callback
        onRowsPerPageChange={onRowsPerPageChange} // Trigger rows per page change callback
        rowsPerPageOptions={rowsPerPageOptions}
        style={paginationStyle}
        loading={loading}
      />
    ),
    "rgx-arrow-pagination": (
      <RGXArrowPagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalRows={serverSidePagination ? totalRows ?? 0 : currentData.length}
        onPageChange={onPageChange} // Trigger page change callback
        onRowsPerPageChange={onRowsPerPageChange} // Trigger rows per page change callback
        rowsPerPageOptions={rowsPerPageOptions}
        style={paginationStyle}
        loading={loading}
      />
    ),
  };

  return (
    <div>
      <div className={loading ? "rgx-table-container" : ""}>
        {/* Conditionally render the loader */}
        {loading && loaderComponent && loaderComponent()}
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
                    cursor: column.sortable ? "pointer" : "default",
                    ...tableStyle["th"],
                  }}
                  onClick={() =>
                    column.sortable && onSortingHandler(column.key)
                  }
                >
                  {column.name}
                  {column.sortable && (
                    <FontAwesomeIcon
                      icon={
                        sortColumn === column.key
                          ? sortOrder === "asc"
                            ? solidIcons.faSortUp
                            : solidIcons.faSortDown
                          : solidIcons.faSort
                      }
                      style={{ marginLeft: "8px" }}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            style={tableStyle["tbody"]}
            className={`${loading ? "rgx-tobody-loading" : ""}`}
          >
            {/* Render table rows for the current page */}
            {currentPageData.map((row, rowIndex) => (
              <>
                <tr
                  key={row.id || rowIndex} // Use a unique key for each row
                  className={`rgx-row ${
                    expandedRow === rowIndex ? "rgx-expanded" : ""
                  }`}
                  style={tableStyle["row"]}
                  onClick={() => {
                    expandedComponent &&
                      setExpandedRow(
                        expandedRow === rowIndex ? null : rowIndex
                      );
                    onRowClick && onRowClick(row);
                  }}
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} style={tableStyle["td"]}>
                      {/* Conditional rendering for the arrow icon if expandedComponent is passed */}
                      {expandedComponent && colIndex === 0 && (
                        <span
                          className="rgx-expanded-arrow"
                          style={tableStyle["rgx-expanded-arrow"]}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedRow(
                              expandedRow === rowIndex ? null : rowIndex
                            );
                          }}
                        >
                          <FontAwesomeIcon
                            icon={
                              expandedRow === rowIndex
                                ? solidIcons.faChevronDown
                                : solidIcons.faChevronRight
                            }
                            className="rgx-arrow-icon"
                            style={tableStyle["rgx-arrow-icon"]}
                          />
                        </span>
                      )}
                      {/* Render cell data using custom render function if provided */}
                      {column.tooltip ? (
                        <Tooltip
                          content={
                            column.tooltipCustomContent
                              ? column.tooltipCustomContent(row)
                              : row[column.key]
                          }
                        >
                          {column.render
                            ? column.render(row)
                            : row[column.key] ?? ""}
                        </Tooltip>
                      ) : column.render ? (
                        column.render(row)
                      ) : (
                        row[column.key] ?? ""
                      )}
                    </td>
                  ))}
                </tr>
                {/* Render expanded row content */}
                {expandedRow === rowIndex && expandedComponent && (
                  <tr
                    className="rgx-expanded-row"
                    style={tableStyle["rgx-expanded-row"]}
                  >
                    <td
                      colSpan={columns.length}
                      className="rgx-expanded-row-td"
                      style={tableStyle["rgx-expanded-row-td"]}
                    >
                      {/* Call the expanded component and pass the row data */}
                      {expandedComponent(row)}
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      {/* Render the pagination component */}
      {pagination[paginationType as keyof typeof pagination]}
    </div>
  );
};

export default ReactGridX;
