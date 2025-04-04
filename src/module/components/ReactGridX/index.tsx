import React, { JSX, useEffect, useMemo, useState } from "react";
import RGXArrowPagination from "module/components/Paginations/RGXArrowPagination";
import RGXTablePagination from "module/components/Paginations/RGXTablePagination";
import RGXTooltip from "module/components/Tooltip";
import RGXLoader from "module/components/Loader";
import { ReactGridXProps } from "module/types/react-grid-x-props";
import RGXPopover from "module/components/Popover";
import SvgIcon from "module/components/SVGIcons";

const ReactGridX: React.FC<ReactGridXProps> = ({
  columns,
  data,
  theme = "rgx-theme",
  rowsPerPageOptions = [5, 10, 15],
  paginationType = "rgx-table-pagination",
  paginationStyle = {},
  tableStyle = {},
  loaderStyle = {},
  popupStyle = {},
  tooltipStyle = {},
  serverSidePagination = false,
  onPaginationAndRowSizeChange,
  totalRows,
  serverSideSorting = false,
  onSorting,
  onRowClick,
  expandedComponent,
  loading = false,
  loaderComponent = ({ style }) => <RGXLoader style={style} />,
  multiColumnSort = false,
  selectionCheckbox = false,
  onSelectionCheck,
  rowPerPage = 10,
  page = 1,
  mode = "light",
}) => {
  // Constant to determine if dark mode is active based on the mode prop
  const darkMode = mode === "dark";

  // State for managing the current page number in pagination
  const [currentPage, setCurrentPage] = useState<number>(page);

  // State for storing sorting configuration (column key and direction)
  const [sortConfig, setSortConfig] = useState<
    { key: string; direction: "asc" | "desc" }[]
  >([]);

  // State for controlling the number of rows displayed per page
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0]);

  // State for tracking the currently expanded row index (null if none)
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  // State for managing which column's popover menu is open (null if none)
  const [isDotPopover, setIsDotPopover] = useState<string | null>(null);

  // State for selection info: selected row IDs and "select all" checkbox status
  const [_selectionInfo, _setSelectionInfo] = useState<{
    selectedRows: any[];
    selectAllChecked: boolean;
  }>({
    selectedRows: [],
    selectAllChecked: false,
  });

  // Function to handle page changes and notify parent component
  const onPageChange = (page: number) => {
    setCurrentPage(page); // Update the current page state with the new page number
    setExpandedRow(null);
    onPaginationAndRowSizeChange &&
      onPaginationAndRowSizeChange(page, rowsPerPage); // Trigger the callback with the updated page and rows per page, if provided
  };

  // Function to handle changes in rows per page, resetting to page 1
  const onRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows); // Update the rows per page state with the new number of rows
    setCurrentPage(1); // Reset to the first page as the rows per page changed
    onPaginationAndRowSizeChange && onPaginationAndRowSizeChange(1, rows); // Trigger the callback with page 1 and the updated rows per page
  };

  // Function to toggle the "select all" checkbox in the header
  const onHeaderCheckboxChange = () => {
    const _newSelectAllChecked = !_selectionInfo.selectAllChecked;
    const _newSelectedRows = _newSelectAllChecked
      ? data.map((row) => row.id)
      : [];

    _setSelectionInfo({
      selectedRows: _newSelectedRows,
      selectAllChecked: _newSelectAllChecked,
    });

    onSelectionCheck &&
      onSelectionCheck(_newSelectedRows, _newSelectAllChecked);
  };

  // Function to handle individual row checkbox changes
  const onRowCheckboxChange = (rowId: string | number) => {
    const _newSelectedRows = _selectionInfo.selectedRows.includes(rowId)
      ? _selectionInfo.selectedRows.filter((id) => id !== rowId)
      : [..._selectionInfo.selectedRows, rowId];

    const _newSelectAllChecked = _newSelectedRows.length === data.length;

    _setSelectionInfo({
      selectedRows: _newSelectedRows,
      selectAllChecked: _newSelectAllChecked,
    });

    onSelectionCheck &&
      onSelectionCheck(_newSelectedRows, _newSelectAllChecked);
  };

  // Function to handle sorting, supporting single or multi-column sorting
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

  // Function to clear all sorting configurations
  const onClearSort = () => {
    // Clear the sorting configuration by resetting the sortConfig state to an empty array
    setSortConfig([]);

    // If server-side sorting is used, trigger the server-side clear sort (optional)
    if (serverSideSorting && onSorting) {
      onSorting([]); // Send an empty array to reset sorting on the server
    }
  };

  // Memoized sorted data based on sort configuration
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
  }, [data, sortConfig, columns, serverSideSorting, multiColumnSort]); // Recompute whenever data or sorting configuration changes

  // Calculate the total number of pages based on the pagination method (client-side or server-side)
  const totalPages = serverSidePagination
    ? Math.ceil((totalRows ?? 0) / rowsPerPage) // For server-side pagination, calculate total pages based on totalRows (from server)
    : Math.ceil(sortedItems.length / rowsPerPage); // For client-side pagination, calculate total pages based on currentData

  // Slices the data for the current page based on the pagination method (client-side or server-side)
  const currentPageData = serverSidePagination
    ? data // Use full data for server-side pagination; parent component handles slicing
    : sortedItems.slice(
        (currentPage - 1) * rowsPerPage, // Calculate the starting index for the slice
        currentPage * rowsPerPage // Calculate the ending index for the slice
      );

  // Sums up column widths, using the specified value or defaulting to 100px if missing.
  const totalWidth = columns.reduce(
    (sum, column) => sum + (column.width ? column.width : 100),
    0
  );

  // Define pagination components based on the selected pagination type
  const pagination: Record<string, JSX.Element> = {
    // "rgx-table-pagination": The default pagination with table-like controls
    "rgx-table-pagination": (
      <RGXTablePagination
        currentPage={currentPage} // Current page number
        totalPages={totalPages} // Total number of pages
        rowsPerPage={rowsPerPage} // Number of rows per page
        totalRows={serverSidePagination ? totalRows ?? 0 : sortedItems.length} // Total rows count based on server-side or client-side pagination
        onPageChange={onPageChange} // Callback to handle page changes
        onRowsPerPageChange={onRowsPerPageChange} // Callback to handle changes in the number of rows per page
        rowsPerPageOptions={rowsPerPageOptions} // Options for how many rows per page the user can select
        style={paginationStyle} // Custom styling for pagination
        loading={loading} // Show a loading indicator while data is being fetched
        mode={mode}
      />
    ),
    // "rgx-arrow-pagination": Custom pagination with arrow-based navigation
    "rgx-arrow-pagination": (
      <RGXArrowPagination
        currentPage={currentPage} // Current page number
        totalPages={totalPages} // Total number of pages
        rowsPerPage={rowsPerPage} // Number of rows per page
        totalRows={serverSidePagination ? totalRows ?? 0 : sortedItems.length} // Total rows count based on server-side or client-side pagination
        onPageChange={onPageChange} // Callback to handle page changes
        onRowsPerPageChange={onRowsPerPageChange} // Callback to handle changes in the number of rows per page
        rowsPerPageOptions={rowsPerPageOptions} // Options for how many rows per page the user can select
        style={paginationStyle} // Custom styling for pagination
        loading={loading} // Show a loading indicator while data is being fetched
        mode={mode}
      />
    ),
  };

  // Sync rowsPerPage state with the rowPerPage prop when it changes
  useEffect(() => {
    // Update the rowsPerPage state based on the rowPerPage prop
    setRowsPerPage(
      // Check if the provided rowPerPage is a valid option in rowsPerPageOptions
      rowsPerPageOptions?.includes(rowPerPage)
        ? rowPerPage // If valid, use the prop value
        : rowsPerPageOptions[0] // Otherwise, default to the first option in the array
    );
  }, [rowPerPage]); // Run this effect whenever the rowPerPage prop changes

  // Sync currentPage state with the page prop when using server-side pagination
  useEffect(() => {
    // Only update currentPage if server-side pagination is enabled and both page and rowPerPage are provided
    if (serverSidePagination && page && rowPerPage) {
      setCurrentPage(page); // Set the current page to match the page prop
    }
  }, [page, serverSidePagination, rowPerPage]); // Run this effect when page, serverSidePagination, or rowPerPage changes

  return (
    <div className={theme}>
      <div
        className={`rgx-table-container ${
          loading && "rgx-table-container-loading"
        } ${darkMode && "rgx-table-container-dark"}`}
        style={{
          ...tableStyle["rgx-table-container"],
          ...(loading && {
            ...tableStyle["rgx-table-container-loading"],
          }),
          ...(darkMode && {
            ...tableStyle["rgx-table-container-dark"],
          }),
        }}
      >
        {/* Conditionally render the loader if loading is true */}
        {loading &&
          loaderComponent &&
          loaderComponent({
            style: loaderStyle,
          })}

        {/* Render the table structure */}
        <table
          className="rgx-table"
          style={{
            minWidth: `${totalWidth}px`,
            ...tableStyle["rgx-table"],
          }}
        >
          <thead
            className={`rgx-table-head ${darkMode && "rgx-table-head-dark"}`}
            style={{
              ...tableStyle["rgx-table-head"],
              ...(darkMode && {
                ...tableStyle["rgx-table-head-dark"],
              }),
            }}
          >
            {/* Render header checkbox if enabled */}
            <tr
              className="rgx-table-head-tr"
              style={{
                ...tableStyle["rgx-table-head-tr"],
              }}
            >
              {selectionCheckbox && (
                <th
                  className={`rgx-table-head-th-checkbox ${
                    darkMode && "rgx-table-head-th-checkbox-dark"
                  }`}
                  style={{
                    width: "20px",
                    ...tableStyle["rgx-table-head-th-checkbox"],
                    ...(darkMode && {
                      ...tableStyle["rgx-table-head-th-checkbox-dark"],
                    }),
                  }}
                >
                  <input
                    type="checkbox"
                    className="rgx-table-header-checkbox"
                    style={{
                      ...tableStyle["rgx-table-header-checkbox"],
                    }}
                    checked={_selectionInfo.selectAllChecked}
                    onChange={onHeaderCheckboxChange}
                  />
                </th>
              )}
              {/* Render table headers based on column definitions */}
              {columns?.map((column, index) => (
                <th
                  key={index}
                  className={`rgx-table-head-th ${
                    darkMode && "rgx-table-head-th-dark"
                  }`}
                  style={{
                    textAlign: "left",
                    width: column.width ? `${column.width}px` : "100px",
                    ...tableStyle["rgx-table-head-th"],
                    ...(darkMode && {
                      ...tableStyle["rgx-table-head-th-dark"],
                    }),
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
                        display: "flex",
                        cursor: column.sortable ? "pointer" : "default",
                      }}
                    >
                      {column.name} {/* Render column name */}
                      {column.sortable && (
                        <SvgIcon
                          svgPath={
                            sortConfig.some((sort) => sort.key === column.key)
                              ? sortConfig.find(
                                  (sort) => sort.key === column.key
                                )?.direction === "asc"
                                ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-wide-narrow"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h10"/><path d="M11 16h7"/><path d="M11 20h4"/></svg>`
                                : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-wide-narrow"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/></svg>`
                              : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>`
                          }
                          className="rgx-table-sort-icon"
                          style={{
                            marginLeft: "8px",
                            ...tableStyle["rgx-table-sort-icon"],
                          }}
                        />
                      )}
                    </div>
                    {column.sortable && (
                      <div>
                        <div
                          style={{ cursor: "pointer", display: "inline-block" }}
                          onClick={() => {
                            setIsDotPopover(
                              isDotPopover === column.key ? null : column.key
                            );
                          }}
                        >
                          <SvgIcon
                            svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`}
                            className="rgx-table-ellipsis-vertical-icon"
                            style={{
                              marginRight: "8px",
                              marginTop: "4px",
                              marginBottom: "-4px",
                              ...tableStyle["rgx-table-ellipsis-vertical-icon"],
                            }}
                          />
                        </div>
                        {isDotPopover === column.key && (
                          <RGXPopover
                            isOpen={isDotPopover === column.key}
                            onClose={() => {
                              setIsDotPopover(null);
                            }}
                            style={popupStyle}
                            mode={mode}
                          >
                            {sortConfig.find((sort) => sort.key === column.key)
                              ?.direction === "desc" && (
                              <div
                                className={`rgx-table-popup-items ${
                                  darkMode && "rgx-table-popup-items-dark"
                                }`}
                                style={{
                                  ...tableStyle["rgx-table-popup-items"],
                                  ...(darkMode && {
                                    ...tableStyle["rgx-table-popup-items-dark"],
                                  }),
                                }}
                                onClick={() => {
                                  column.sortable &&
                                    onSortingMultipleSupportHandler(
                                      column,
                                      "asc"
                                    );
                                }}
                              >
                                <SvgIcon
                                  svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-wide-narrow"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h10"/><path d="M11 16h7"/><path d="M11 20h4"/></svg>`}
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "14px",
                                    ...tableStyle["rgx-table-asc-sort-icon"],
                                  }}
                                  className="rgx-table-asc-sort-icon"
                                />
                                <span>Sort Ascending</span>
                              </div>
                            )}

                            {sortConfig.find((sort) => sort.key === column.key)
                              ?.direction === "asc" && (
                              <div
                                className={`rgx-table-popup-items ${
                                  darkMode && "rgx-table-popup-items-dark"
                                }`}
                                style={{
                                  ...tableStyle["rgx-table-popup-items"],
                                  ...(darkMode && {
                                    ...tableStyle["rgx-table-popup-items-dark"],
                                  }),
                                }}
                                onClick={() => {
                                  column.sortable &&
                                    onSortingMultipleSupportHandler(
                                      column,
                                      "desc"
                                    );
                                }}
                              >
                                <SvgIcon
                                  svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-wide-narrow"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/></svg>`}
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "14px",
                                    ...tableStyle["rgx-table-desc-sort-icon"],
                                  }}
                                  className="rgx-table-desc-sort-icon"
                                />
                                <span>Sort Descending</span>
                              </div>
                            )}

                            {!Boolean(
                              sortConfig.some((sort) => sort.key === column.key)
                            ) && (
                              <>
                                <div
                                  className={`rgx-table-popup-items ${
                                    darkMode && "rgx-table-popup-items-dark"
                                  }`}
                                  style={{
                                    ...tableStyle["rgx-table-popup-items"],
                                    ...(darkMode && {
                                      ...tableStyle[
                                        "rgx-table-popup-items-dark"
                                      ],
                                    }),
                                  }}
                                  onClick={() => {
                                    column.sortable &&
                                      onSortingMultipleSupportHandler(
                                        column,
                                        "asc"
                                      );
                                  }}
                                >
                                  <SvgIcon
                                    svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-wide-narrow"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h10"/><path d="M11 16h7"/><path d="M11 20h4"/></svg>`}
                                    style={{
                                      marginRight: "8px",
                                      fontSize: "14px",
                                      ...tableStyle["rgx-table-asc-sort-icon"],
                                    }}
                                    className="rgx-table-asc-sort-icon"
                                  />
                                  <span>Sort Ascending</span>
                                </div>
                                <div
                                  className={`rgx-table-popup-items ${
                                    darkMode && "rgx-table-popup-items-dark"
                                  }`}
                                  style={{
                                    ...tableStyle["rgx-table-popup-items"],
                                    ...(darkMode && {
                                      ...tableStyle[
                                        "rgx-table-popup-items-dark"
                                      ],
                                    }),
                                  }}
                                  onClick={() => {
                                    column.sortable &&
                                      onSortingMultipleSupportHandler(
                                        column,
                                        "desc"
                                      );
                                  }}
                                >
                                  <SvgIcon
                                    svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-wide-narrow"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/></svg>`}
                                    style={{
                                      marginRight: "8px",
                                      fontSize: "14px",
                                      ...tableStyle["rgx-table-desc-sort-icon"],
                                    }}
                                    className="rgx-table-desc-sort-icon"
                                  />
                                  <span>Sort Descending</span>
                                </div>
                              </>
                            )}

                            {Boolean(
                              sortConfig.some((sort) => sort.key === column.key)
                            ) && (
                              <div
                                className={`rgx-table-popup-items ${
                                  darkMode && "rgx-table-popup-items-dark"
                                }`}
                                style={{
                                  ...tableStyle["rgx-table-popup-items"],
                                  ...(darkMode && {
                                    ...tableStyle["rgx-table-popup-items-dark"],
                                  }),
                                }}
                                onClick={() => {
                                  onClearSort();
                                }}
                              >
                                <SvgIcon
                                  svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>`}
                                  style={{
                                    marginRight: "8px",
                                    fontSize: "14px",
                                    ...tableStyle[
                                      "rgx-table-asc-desc-sort-icon"
                                    ],
                                  }}
                                  className="rgx-table-asc-desc-sort-icon"
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
            className={
              loading
                ? "rgx-table-body rgx-table-tobody-loading"
                : "rgx-table-body"
            } // Add loading class if data is loading
            style={
              loading
                ? {
                    ...tableStyle["rgx-table-body"],
                    ...tableStyle["rgx-table-tobody-loading"],
                  }
                : {
                    ...tableStyle["rgx-table-body"],
                  }
            }
          >
            {/* Render table rows for the current page */}
            {currentPageData.map((row, rowIndex) => (
              <React.Fragment
                key={row.id || rowIndex} // Use a unique key for each row
              >
                <tr
                  key={row.id || rowIndex} // Use a unique key for each row
                  className={`rgx-table-body-tr ${
                    expandedRow === rowIndex && "rgx-table-body-tr-expanded"
                  } ${darkMode && "rgx-table-body-tr-dark"}`} // Add class for expanded row
                  style={{
                    ...tableStyle["rgx-table-body-tr"],
                    ...(expandedRow === rowIndex && {
                      ...tableStyle["rgx-table-body-tr-expanded"],
                    }),
                    ...(darkMode && {
                      ...tableStyle["rgx-table-body-tr-dark"],
                    }),
                  }}
                  onClick={() => {
                    // Handle row click for expanding or triggering onRowClick callback
                    expandedComponent &&
                      setExpandedRow(
                        expandedRow === rowIndex ? null : rowIndex
                      );
                    onRowClick && onRowClick(row); // Call user-provided onRowClick handler
                  }}
                >
                  {/* Render row checkbox if enabled */}
                  {selectionCheckbox && (
                    <td
                      className={`rgx-table-body-td-checkbox ${
                        darkMode && "rgx-table-body-td-checkbox-dark"
                      }`}
                      style={{
                        width: "20px",
                        ...tableStyle["rgx-table-body-td-checkbox"],
                        ...(darkMode && {
                          ...tableStyle["rgx-table-body-td-checkbox-dark"],
                        }),
                      }}
                    >
                      <input
                        type="checkbox"
                        className="rgx-table-row-checkbox"
                        style={{
                          ...tableStyle["rgx-table-row-checkbox"],
                        }}
                        checked={_selectionInfo.selectedRows.includes(row.id)}
                        onChange={() => onRowCheckboxChange(row.id)}
                      />
                    </td>
                  )}
                  {/* Render cells based on column definitions */}
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`rgx-table-body-td ${
                        darkMode && "rgx-table-body-td-dark"
                      }`}
                      style={{
                        width: column.width || "auto",
                        ...tableStyle["rgx-table-body-td"],
                        ...(darkMode && {
                          ...tableStyle["rgx-table-body-td-dark"],
                        }),
                      }}
                    >
                      {/* Conditionally render the arrow icon if expandedComponent is passed */}
                      {/* {expandedComponent && colIndex === 0 && (
                        <span
                          className="rgx-table-expanded-arrow"
                          style={{
                            ...tableStyle["rgx-table-expanded-arrow"],
                          }}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click event from firing
                            setExpandedRow(
                              expandedRow === rowIndex ? null : rowIndex
                            ); // Toggle expanded row
                          }}
                        >
                          <SvgIcon
                            svgPath={
                              expandedRow === rowIndex
                                ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`
                                : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>`
                            }
                            className="rgx-table-expanded-arrow-icon"
                            style={{
                              ...tableStyle["rgx-table-expanded-arrow-icon"],
                            }}
                          />
                        </span>
                      )} */}

                      {/* Render cell data with optional tooltip and custom render function */}
                      {column.tooltip ? (
                        <RGXTooltip
                          content={
                            column.tooltipCustomContent
                              ? column.tooltipCustomContent(row)
                              : row[column.key] // Display custom tooltip content if provided
                          }
                          style={tooltipStyle}
                        >
                          {
                            column.render
                              ? column.render(row) // Custom render function if available
                              : row[column.key] ?? "" // Default value for cell data
                          }
                        </RGXTooltip>
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
                    className="rgx-table-expanded-row-tr"
                    style={{
                      ...tableStyle["rgx-table-expanded-row-tr"],
                    }}
                  >
                    <td
                      colSpan={columns.length} // Span across all columns for expanded row
                      className="rgx-table-expanded-row-td"
                      style={{
                        ...tableStyle["rgx-table-expanded-row-td"],
                      }}
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
