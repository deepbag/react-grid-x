import React, { JSX, useEffect, useMemo, useState } from "react";
import "../../themes/rgx-theme.css";
import RGXArrowPagination from "components/Paginations/RGXArrowPagination";
import RGXTablePagination from "components/Paginations/RGXTablePagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solidIcons } from "components/Icons/FontAwesome";
import Tooltip from "components/Tooltip";
import Loader from "components/Loader";
import { ReactGridXProps } from "components/types/react-grid-x-props";
import RGXPopover from "components/Popover";

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
  // State to manage the current page of the table. Tracks the active page number for pagination purposes.
  const [currentPage, setCurrentPage] = useState<number>(1);

  // State to store the current dataset to display in the table. This can be updated when data is filtered, sorted, or paginated.
  const [currentData, setCurrentData] = useState<any[]>(data);

  // State to manage the sorting configuration for multiple columns. Allows multi-column sorting with a key and direction.
  const [sortConfig, setSortConfig] = useState<
    { key: string; direction: "asc" | "desc" }[]
  >([]);

  // State to manage the number of rows per page for pagination. Default value is taken from rowsPerPageOptions.
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0]);

  // State to track which row is currently expanded. Holds the index of the expanded row, or null if no row is expanded.
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  // State to manage the popover state for each column. Tracks which column's dot menu is active.
  const [isDotPopover, setIsDotPopover] = useState<string | null>(null);

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
  const onSortingMultipleSupportHandler = (
    column: { key: string },
    customDirection?: "asc" | "desc" // Optional custom direction
  ) => {
    setSortConfig((prev) => {
      if (!multiColumnSort) {
        // If multiSort is false, reset sorting to only one column (single-column sorting)
        return [
          {
            key: column.key,
            direction:
              customDirection ||
              (prev[0]?.key === column.key && prev[0].direction === "asc"
                ? "desc"
                : ("asc" as "asc" | "desc")), // Toggle direction or use custom direction
          },
        ];
      }

      // Check if the column is already in the sorting configuration
      const existingSort = prev.find((s) => s.key === column.key);
      let newSortConfig;

      if (existingSort) {
        // If the column is already in the sort config, toggle the sorting direction or use custom direction
        newSortConfig = prev.map((s) =>
          s.key === column.key
            ? {
                key: s.key,
                direction:
                  customDirection ||
                  (s.direction === "asc" ? "desc" : ("asc" as "asc" | "desc")),
              }
            : s
        );
      } else {
        // If the column is not in the sort config, add it with the custom direction or default to 'asc'
        newSortConfig = [
          ...prev,
          { key: column.key, direction: customDirection || "asc" },
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
   * Clears the sorting configuration and resets the table's sorting state.
   *
   * This function resets the `sortConfig` state to an empty array, effectively clearing any applied sorting.
   * If server-side sorting is enabled, it also triggers a server-side reset by calling the `onSorting` callback
   * with an empty array to reset sorting on the server.
   *
   * @returns {void} - No return value, the sorting is cleared.
   */
  const onClearSort = () => {
    // Clear the sorting configuration by resetting the sortConfig state to an empty array
    setSortConfig([]);

    // If server-side sorting is used, trigger the server-side clear sort (optional)
    if (serverSideSorting && onSorting) {
      onSorting([]); // Send an empty array to reset sorting on the server
    }
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

  // Slices the data for the current page based on the pagination method (client-side or server-side)
  const currentPageData = serverSidePagination
    ? currentData // Use full data for server-side pagination; parent component handles slicing
    : currentData.slice(
        (currentPage - 1) * rowsPerPage, // Calculate the starting index for the slice
        currentPage * rowsPerPage // Calculate the ending index for the slice
      );

  // Define pagination components based on the selected pagination type
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
                    width: column.width || "auto",
                    ...tableStyle["th"], // Apply custom styles
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      onClick={
                        () =>
                          column.sortable &&
                          onSortingMultipleSupportHandler(column) // Trigger sorting on click
                      }
                      style={{
                        cursor: column.sortable ? "pointer" : "default", // Show pointer cursor for sortable columns
                      }}
                    >
                      {column.name} {/* Render column name */}
                      {column.sortable && (
                        <FontAwesomeIcon
                          icon={
                            // Check if the column is part of the sortConfig and display appropriate icon
                            sortConfig.some((sort) => sort.key === column.key)
                              ? sortConfig.find(
                                  (sort) => sort.key === column.key
                                )?.direction === "asc"
                                ? solidIcons.faSortUp
                                : solidIcons.faSortDown
                              : solidIcons.faSort
                          }
                          style={{ marginLeft: "8px" }} // Add margin to the icon
                        />
                      )}
                    </div>
                    {column.sortable && (
                      <div>
                        <div
                          style={{ cursor: "pointer", display: "inline-block" }} // Adding cursor for pointer
                          onClick={() => {
                            setIsDotPopover(
                              isDotPopover === column.key ? null : column.key
                            ); // Toggle popover visibility
                          }}
                        >
                          <FontAwesomeIcon
                            icon={solidIcons.faEllipsisVertical}
                            style={{ marginRight: "8px" }} // Add margin to the icon
                          />
                        </div>
                        {isDotPopover === column.key && (
                          <RGXPopover
                            isOpen={isDotPopover === column.key}
                            onClose={() => {
                              setIsDotPopover(null);
                            }}
                          >
                            {sortConfig.find((sort) => sort.key === column.key)
                              ?.direction === "desc" && (
                              <div
                                className="rgx-popup-items"
                                onClick={() => {
                                  column.sortable &&
                                    onSortingMultipleSupportHandler(
                                      column,
                                      "asc"
                                    ); // Trigger sorting on click
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={solidIcons.faCircleArrowUp}
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "14px",
                                  }} // Add margin to the icon
                                />
                                <span>Sort Ascending</span>
                              </div>
                            )}

                            {sortConfig.find((sort) => sort.key === column.key)
                              ?.direction === "asc" && (
                              <div
                                className="rgx-popup-items"
                                onClick={() => {
                                  column.sortable &&
                                    onSortingMultipleSupportHandler(
                                      column,
                                      "desc"
                                    ); // Trigger sorting on click
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={solidIcons.faCircleArrowDown}
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "14px",
                                  }} // Add margin to the icon
                                />
                                <span>Sort Descending</span>
                              </div>
                            )}

                            {!Boolean(
                              sortConfig.some((sort) => sort.key === column.key)
                            ) && (
                              <>
                                <div
                                  className="rgx-popup-items"
                                  onClick={() => {
                                    column.sortable &&
                                      onSortingMultipleSupportHandler(
                                        column,
                                        "asc"
                                      ); // Trigger sorting on click
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={solidIcons.faCircleArrowUp}
                                    style={{
                                      marginRight: "8px",
                                      fontSize: "14px",
                                    }} // Add margin to the icon
                                  />
                                  <span>Sort Ascending</span>
                                </div>
                                <div
                                  className="rgx-popup-items"
                                  onClick={() => {
                                    column.sortable &&
                                      onSortingMultipleSupportHandler(
                                        column,
                                        "desc"
                                      ); // Trigger sorting on click
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={solidIcons.faCircleArrowDown}
                                    style={{
                                      marginRight: "8px",
                                      fontSize: "14px",
                                    }} // Add margin to the icon
                                  />
                                  <span>Sort Descending</span>
                                </div>
                              </>
                            )}

                            {Boolean(
                              sortConfig.some((sort) => sort.key === column.key)
                            ) && (
                              <div
                                className="rgx-popup-items"
                                onClick={() => {
                                  onClearSort();
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={solidIcons.faSort}
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "14px",
                                  }} // Add margin to the icon
                                />
                                <span>Clear Sort</span>
                              </div>
                            )}
                          </RGXPopover>
                        )}
                      </div>
                    )}
                  </div>
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
                    <td
                      key={colIndex}
                      style={{
                        width: column.width || "auto",
                        ...tableStyle["td"],
                      }}
                    >
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
