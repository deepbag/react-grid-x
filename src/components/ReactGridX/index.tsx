import React, { JSX, useEffect, useMemo, useState } from "react";
import "../../themes/rgx-theme.css";
import RGXArrowPagination from "components/Paginations/RGXArrowPagination";
import RGXTablePagination from "components/Paginations/RGXTablePagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solidIcons } from "components/Icons/FontAwesome";
import Tooltip from "components/Tooltip";
import Loader from "components/Loader";
import { ReactGridXProps } from "components/types/react-grid-x-props";

/**
 * ReactGridX: A flexible, reusable table component with optional server-side pagination and sorting.
 *
 * server-side pagination, sorting, multi-column sorting, customizable row rendering, and more.
 * It can handle large datasets by enabling server-side handling for pagination and sorting,
 * while also allowing for client-side customization and performance optimization.
 *
 * @param {ReactGridXColumnProps[]} columns - The column definitions that specify how each column should be rendered, including sorting behavior.
 * @param {any[]} data - The data to be displayed in the table, typically an array of objects where each object represents a row.
 * @param {string} [theme="rgx-theme"] - The CSS class to apply for custom table styling. Defaults to `"rgx-theme"`.
 * @param {number[]} [rowsPerPageOptions=[5, 10, 15]] - The available options for rows per page in pagination. Defaults to `[5, 10, 15]`.
 * @param {string} [paginationType="rgx-table-pagination"] - The type of pagination to use. Can be `"rgx-table-pagination"` (custom) or `"rgx-arrow-pagination"` (default).
 * @param {Record<string, React.CSSProperties>} [paginationStyle={}] - Custom styles for the pagination components.
 * @param {Record<string, React.CSSProperties>} [tableStyle={}] - Custom styles for the table itself.
 * @param {boolean} [serverSidePagination=false] - Flag indicating if pagination is handled server-side. Defaults to `false`.
 * @param {function} [onPaginationAndRowSizeChange] - Callback for handling changes in the page number or rows per page. Receives the new page and row size.
 * @param {number} [totalRows] - The total number of rows in the dataset, typically used with server-side pagination.
 * @param {boolean} [serverSideSorting=false] - Flag indicating whether sorting is handled server-side. Defaults to `false`.
 * @param {function} [onSorting] - Callback triggered when columns are sorted, providing the sorting configuration.
 * @param {function} [onRowClick] - Callback triggered when a row is clicked, providing the row data.
 * @param {function} [expandedComponent] - Custom component rendered when a row is expanded. Receives the row data as input.
 * @param {boolean} [loading=false] - Flag indicating whether the table is in a loading state. If `true`, a loader will be displayed.
 * @param {function} [loaderComponent=() => <Loader />] - Custom loader component to display when the table is in a loading state.
 * @param {boolean} [multiColumnSort=true] - Flag indicating whether multi-column sorting is enabled. Defaults to `true`.
 */
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
  multiColumnSort = true,
}) => {
  // State to manage the current page of the table.
  // Tracks the active page number for pagination purposes.
  // Default is set to the first page (1).
  const [currentPage, setCurrentPage] = useState<number>(1);

  // State to store the current dataset to display in the table.
  // This can be updated when data is filtered, sorted, or paginated.
  // Initially, it holds the full `data` passed as a prop.
  const [currentData, setCurrentData] = useState<any[]>(data);

  // State to manage the sorting configuration for multiple columns.
  // It holds an array where each item is an object with a `key` (column name)
  // and a `direction` (either "asc" or "desc"). It allows multi-column sorting.
  const [sortConfig, setSortConfig] = useState<
    { key: string; direction: "asc" | "desc" }[]
  >([]);

  // State to manage the number of rows per page for pagination.
  // It tracks the number of rows displayed per page, which can be adjusted by the user.
  // The default value is taken from the first option in the `rowsPerPageOptions` array.
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0]);

  // State to track which row is currently expanded.
  // When a row is expanded, it holds the index of the expanded row.
  // If no row is expanded, it holds `null`.
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  /**
   * Handle page change event for pagination.
   * This function updates the current page and triggers the callback to inform the parent component
   * of the new page number and the number of rows per page.
   *
   * @param page - The new page number to navigate to.
   */
  const onPageChange = (page: number) => {
    setCurrentPage(page); // Update the current page state with the new page number
    onPaginationAndRowSizeChange &&
      onPaginationAndRowSizeChange(page, rowsPerPage); // Trigger the callback with the updated page and rows per page, if provided
  };

  /**
   * Handle rows per page change event for pagination.
   * This function updates the number of rows per page, resets the current page to 1,
   * and triggers the callback to inform the parent component about the new rows per page and the reset page number.
   *
   * @param rows - The new number of rows per page to display.
   */
  const onRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows); // Update the rows per page state with the new number of rows
    setCurrentPage(1); // Reset to the first page as the rows per page changed
    onPaginationAndRowSizeChange && onPaginationAndRowSizeChange(1, rows); // Trigger the callback with page 1 and the updated rows per page
  };

  /**
   * Handles the event when the user changes the sorting configuration
   * for multiple columns (ascending or descending).
   *
   * This function manages the sorting state, toggles the sorting direction
   * when the same column is clicked, or adds a new column to the sort order
   * if it's not already included. It also handles multi-column sorting based
   * on the `multiColumnSort` flag.
   *
   * @param column - The column for which the sorting needs to be changed.
   */
  const onSortingMultipleSupportHandler = (column: { key: string }) => {
    setSortConfig((prev) => {
      if (!multiColumnSort) {
        // If multiSort is false, reset sorting to only one column (single-column sorting)
        return [
          {
            key: column.key,
            direction:
              prev[0]?.key === column.key && prev[0].direction === "asc"
                ? "desc"
                : ("asc" as "asc" | "desc"), // Toggle direction between 'asc' and 'desc'
          },
        ];
      }

      // Check if the column is already in the sorting configuration
      const existingSort = prev.find((s) => s.key === column.key);
      let newSortConfig;

      if (existingSort) {
        // If the column is already in the sort config, toggle the sorting direction
        newSortConfig = prev.map((s) =>
          s.key === column.key
            ? {
                key: s.key,
                direction:
                  s.direction === "asc" ? "desc" : ("asc" as "asc" | "desc"),
              }
            : s
        );
      } else {
        // If the column is not in the sort config, add it with the default sorting direction of 'asc'
        newSortConfig = [
          ...prev,
          { key: column.key, direction: "asc" as "asc" | "desc" },
        ];
      }

      // Remove any sorting entries where direction is undefined (safety check)
      newSortConfig = newSortConfig.filter((s) => s.direction !== undefined);

      if (serverSideSorting && onSorting) {
        // For server-side sorting, call the provided `onSorting` function to handle the sorting request externally
        onSorting(newSortConfig);
      } else {
        // For client-side sorting, update the state with the new sorting configuration
        setSortConfig(newSortConfig);
      }

      return newSortConfig;
    });
  };

  /**
   * Sorts the data based on the current sorting configuration.
   *
   * This function applies multi-column sorting by iterating over the sorting configuration (`sortConfig`),
   * sorting the data in ascending or descending order depending on the direction defined for each column.
   * It supports both client-side sorting and server-side sorting by checking the `serverSideSorting` flag.
   *
   * @returns {Array} - The sorted data based on the current sorting configuration.
   */
  const sortedItems = useMemo(() => {
    if (serverSideSorting) return data; // Skip sorting if using server-side sorting

    const sorted = [...data].sort((a, b) => {
      // Iterate through each sorting column and apply the sorting logic
      for (let { key, direction } of sortConfig) {
        const column = columns.find((col) => col.key === key);
        const aValue = a[key];
        const bValue = b[key];

        if (column?.onSort) {
          // If a custom sorting function is provided, use it to compare the values
          const result = column.onSort(aValue, bValue, direction);
          if (result !== 0) return result; // If sorting result is not 0, return it immediately
        } else {
          // Default sorting logic: alphabetical comparison for strings and numerical comparison for numbers
          if (typeof aValue === "string" && typeof bValue === "string") {
            const comparison = aValue.localeCompare(bValue);
            if (comparison !== 0)
              return direction === "asc" ? comparison : -comparison; // Apply ascending/descending order
          } else if (typeof aValue === "number" && typeof bValue === "number") {
            if (aValue !== bValue)
              return direction === "asc" ? aValue - bValue : bValue - aValue; // Compare numerically
          }
        }
      }
      return 0; // Return 0 if no sorting criteria are met (equal values)
    });

    return sorted; // Return the sorted array
  }, [data, sortConfig, columns, serverSideSorting]); // Recompute whenever data or sorting configuration changes

  // Calculate the total number of pages based on the pagination method (client-side or server-side)
  const totalPages = serverSidePagination
    ? Math.ceil((totalRows ?? 0) / rowsPerPage) // For server-side pagination, calculate total pages based on totalRows (from server)
    : Math.ceil(currentData.length / rowsPerPage); // For client-side pagination, calculate total pages based on currentData

  // Slice the data for the current page (only for client-side pagination)
  // For server-side pagination, we use the full data set and the parent handles slicing
  // For client-side pagination, slice the current data array to display only the data for the current page
  const currentPageData = serverSidePagination
    ? currentData // Use full data for server-side pagination; parent component handles slicing
    : currentData.slice(
        (currentPage - 1) * rowsPerPage, // Calculate the starting index for the slice
        currentPage * rowsPerPage // Calculate the ending index for the slice
      );

  // Define pagination components based on the selected pagination type
  // The pagination type determines whether to show the default table pagination or custom arrow pagination
  const pagination: Record<string, JSX.Element> = {
    // "rgx-table-pagination": The default pagination with table-like controls
    "rgx-table-pagination": (
      <RGXTablePagination
        currentPage={currentPage} // Current page number
        totalPages={totalPages} // Total number of pages
        rowsPerPage={rowsPerPage} // Number of rows per page
        totalRows={serverSidePagination ? totalRows ?? 0 : currentData.length} // Total rows count based on server-side or client-side pagination
        onPageChange={onPageChange} // Callback to handle page changes
        onRowsPerPageChange={onRowsPerPageChange} // Callback to handle changes in the number of rows per page
        rowsPerPageOptions={rowsPerPageOptions} // Options for how many rows per page the user can select
        style={paginationStyle} // Custom styling for pagination
        loading={loading} // Show a loading indicator while data is being fetched
      />
    ),
    // "rgx-arrow-pagination": Custom pagination with arrow-based navigation
    "rgx-arrow-pagination": (
      <RGXArrowPagination
        currentPage={currentPage} // Current page number
        totalPages={totalPages} // Total number of pages
        rowsPerPage={rowsPerPage} // Number of rows per page
        totalRows={serverSidePagination ? totalRows ?? 0 : currentData.length} // Total rows count based on server-side or client-side pagination
        onPageChange={onPageChange} // Callback to handle page changes
        onRowsPerPageChange={onRowsPerPageChange} // Callback to handle changes in the number of rows per page
        rowsPerPageOptions={rowsPerPageOptions} // Options for how many rows per page the user can select
        style={paginationStyle} // Custom styling for pagination
        loading={loading} // Show a loading indicator while data is being fetched
      />
    ),
  };

  /**
   * Updates the `currentData` state whenever the `sortedItems` array changes.
   *
   * This effect listens for changes in the `sortedItems` array and updates the
   * `currentData` state accordingly. This ensures that the component always
   * renders the most up-to-date sorted data.
   *
   * @note This effect is triggered every time the `sortedItems` array changes
   * due to sorting changes or any other dependency in `sortedItems`.
   */
  useEffect(() => {
    setCurrentData(sortedItems); // Set the state with the new sorted data
  }, [sortedItems]); // Dependency array ensures the effect runs when `sortedItems` changes

  return (
    <div>
      <div className={loading ? "rgx-table-container" : ""}>
        {/* Conditionally render the loader if loading is true */}
        {loading && loaderComponent && loaderComponent()}

        {/* Render the table structure */}
        <table className={theme} style={tableStyle["table"]}>
          <thead>
            <tr style={tableStyle["thead-tr"]}>
              {/* Render table headers based on column definitions */}
              {columns?.map((column, index) => (
                <th
                  key={index}
                  style={{
                    textAlign: "left", // Align text to the left
                    cursor: column.sortable ? "pointer" : "default", // Show pointer cursor for sortable columns
                    ...tableStyle["th"], // Apply custom styles
                  }}
                  onClick={
                    () =>
                      column.sortable && onSortingMultipleSupportHandler(column) // Trigger sorting on click
                  }
                >
                  {column.name} {/* Render column name */}
                  {column.sortable && (
                    <FontAwesomeIcon
                      icon={
                        // Check if the column is part of the sortConfig and display appropriate icon
                        sortConfig.some((sort) => sort.key === column.key)
                          ? sortConfig.find((sort) => sort.key === column.key)
                              ?.direction === "asc"
                            ? solidIcons.faSortUp
                            : solidIcons.faSortDown
                          : solidIcons.faSort
                      }
                      style={{ marginLeft: "8px" }} // Add margin to the icon
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            style={tableStyle["tbody"]}
            className={`${loading ? "rgx-tobody-loading" : ""}`} // Add loading class if data is loading
          >
            {/* Render table rows for the current page */}
            {currentPageData.map((row, rowIndex) => (
              <React.Fragment
                key={row.id || rowIndex} // Use a unique key for each row
              >
                <tr
                  key={row.id || rowIndex} // Use a unique key for each row
                  className={`rgx-row ${
                    expandedRow === rowIndex ? "rgx-expanded" : ""
                  }`} // Add class for expanded row
                  style={tableStyle["row"]}
                  onClick={() => {
                    // Handle row click for expanding or triggering onRowClick callback
                    expandedComponent &&
                      setExpandedRow(
                        expandedRow === rowIndex ? null : rowIndex
                      );
                    onRowClick && onRowClick(row); // Call user-provided onRowClick handler
                  }}
                >
                  {/* Render cells based on column definitions */}
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} style={tableStyle["td"]}>
                      {/* Conditionally render the arrow icon if expandedComponent is passed */}
                      {expandedComponent && colIndex === 0 && (
                        <span
                          className="rgx-expanded-arrow"
                          style={tableStyle["rgx-expanded-arrow"]}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click event from firing
                            setExpandedRow(
                              expandedRow === rowIndex ? null : rowIndex
                            ); // Toggle expanded row
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

                      {/* Render cell data with optional tooltip and custom render function */}
                      {column.tooltip ? (
                        <Tooltip
                          content={
                            column.tooltipCustomContent
                              ? column.tooltipCustomContent(row)
                              : row[column.key] // Display custom tooltip content if provided
                          }
                        >
                          {
                            column.render
                              ? column.render(row) // Custom render function if available
                              : row[column.key] ?? "" // Default value for cell data
                          }
                        </Tooltip>
                      ) : column.render ? (
                        column.render(row) // Custom render function if available
                      ) : (
                        row[column.key] ?? "" // Default value for cell data
                      )}
                    </td>
                  ))}
                </tr>

                {/* Render expanded row content if expandedRow matches the row index */}
                {expandedRow === rowIndex && expandedComponent && (
                  <tr
                    className="rgx-expanded-row"
                    style={tableStyle["rgx-expanded-row"]}
                  >
                    <td
                      colSpan={columns.length} // Span across all columns for expanded row
                      className="rgx-expanded-row-td"
                      style={tableStyle["rgx-expanded-row-td"]}
                    >
                      {/* Call the expanded component and pass the row data */}
                      {expandedComponent(row)}
                    </td>
                  </tr>
                )}
              </React.Fragment>
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
