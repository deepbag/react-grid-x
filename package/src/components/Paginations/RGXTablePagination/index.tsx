import React from "react";
import { RGXTablePaginationProps } from "../../../types/table-pagination-props";
import SvgIcon from "../../SVGIcons";

const RGXTablePagination: React.FC<RGXTablePaginationProps> = ({
  currentPage,
  totalPages,
  rowsPerPage,
  totalRows,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions = [5, 10, 15],
  style = {},
  loading = false,
  mode = "light",
}) => {
  const darkMode = mode === "dark";

  /**
   * Generates an array of page numbers for pagination with ellipses if necessary.
   * This ensures that the number of visible pages is limited, and ellipses are displayed when
   * there are too many pages to show.
   *
   * @returns {Array<number | string>} - An array of page numbers and ellipsis for navigation.
   */
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxVisiblePages = 4; // Maximum number of pages to show at once

    if (totalPages <= maxVisiblePages) {
      // If total pages are within the max visible, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Add first page and ellipsis if necessary
      if (currentPage > 2) {
        pageNumbers.push(1, "...");
      } else {
        pageNumbers.push(1);
      }

      // Calculate the range of pages to display around the current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add the range of pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis and last page if necessary
      if (currentPage < totalPages - 1) {
        pageNumbers.push("...", totalPages);
      } else {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers(); // Generate the page numbers

  return (
    <div
      className="rgx-table-pagination"
      style={{
        ...style["rgx-table-pagination"],
      }}
    >
      {/* Display pagination information (current page range and total rows) */}
      <div
        className={`rgx-table-pagination-info ${
          darkMode && "rgx-table-pagination-info-dark"
        }`}
        style={{
          ...style["rgx-table-pagination-info"],
          ...(darkMode && {
            ...style["rgx-table-pagination-info-dark"],
          }),
        }}
      >
        Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
        {Math.min(currentPage * rowsPerPage, totalRows)} of {totalRows}
      </div>

      {/* Rows per page selector and pagination controls */}
      <div
        className="rgx-table-pagination-row-per-page"
        style={{
          ...style["rgx-table-pagination-row-per-page"],
        }}
      >
        {/* Rows per page dropdown */}
        <div
          className="rgx-table-pagination-rows-per-page"
          style={{
            ...style["rgx-table-pagination-rows-per-page"],
          }}
        >
          <label
            htmlFor="rowsPerPage"
            className={`rgx-table-pagination-rows-per-page-label ${
              darkMode && "rgx-table-pagination-rows-per-page-label-dark"
            }`}
            style={{
              ...style["rgx-table-pagination-rows-per-page-label"],
              ...(darkMode && {
                ...style["rgx-table-pagination-rows-per-page-label-dark"],
              }),
            }}
          >
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            className={`rgx-table-pagination-rows-per-page-select ${
              darkMode && "rgx-table-pagination-rows-per-page-select-dark"
            }`}
            style={{
              ...style["rgx-table-pagination-rows-per-page-select"],
              ...(darkMode && {
                ...style["rgx-table-pagination-rows-per-page-select-dark"],
              }),
            }}
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
            disabled={loading}
          >
            {rowsPerPageOptions?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Pagination controls (previous, page numbers, next) */}
        <div
          className="rgx-table-pagination-controls"
          style={{
            ...style["rgx-table-pagination-controls"],
          }}
        >
          {/* Previous page button */}
          <button
            disabled={currentPage === 1 || loading}
            onClick={() => onPageChange(currentPage - 1)}
            className={`rgx-table-pagination-button-icon ${
              darkMode && "rgx-table-pagination-button-icon-dark"
            }`}
            style={{
              ...style["rgx-table-pagination-button-icon"],
              ...(darkMode && {
                ...style["rgx-table-pagination-button-icon-dark"],
              }),
            }}
          >
            <SvgIcon
              svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>`}
            />
          </button>

          {/* Page number buttons */}
          {pageNumbers.map((page, index) =>
            typeof page === "number" ? (
              <button
                key={index}
                className={`rgx-table-pagination-button ${
                  currentPage === page && "rgx-table-pagination-active"
                } ${darkMode && "rgx-table-pagination-button-dark"}`}
                style={{
                  ...style["rgx-table-pagination-button"],
                  ...(currentPage === page && {
                    ...style["rgx-table-pagination-button-active"],
                  }),
                  ...(darkMode && {
                    ...style["rgx-table-pagination-button-dark"],
                  }),
                }}
                onClick={() => onPageChange(page)}
                disabled={loading}
              >
                {page}
              </button>
            ) : (
              <button
                key={index}
                disabled
                className={`rgx-table-pagination-button rgx-table-pagination-ellipsis ${
                  darkMode &&
                  "rgx-table-pagination-button-dark rgx-table-pagination-ellipsis-dark"
                }`}
                style={{
                  ...style["rgx-table-pagination-button"],
                  ...style["rgx-table-pagination-ellipsis"],
                  ...(darkMode && {
                    ...style["rgx-table-pagination-button-dark"],
                    ...style["rgx-table-pagination-ellipsis-dark"],
                  }),
                  cursor: "default",
                  opacity: 0.6,
                }}
              >
                {page}
              </button>
            )
          )}

          {/* Next page button */}
          <button
            disabled={currentPage === totalPages || loading}
            onClick={() => onPageChange(currentPage + 1)}
            className={`rgx-table-pagination-button-icon ${
              darkMode && "rgx-table-pagination-button-icon-dark"
            }`}
            style={{
              ...style["rgx-table-pagination-button-icon"],
              ...(darkMode && {
                ...style["rgx-table-pagination-button-icon-dark"],
              }),
            }}
          >
            <SvgIcon
              svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default RGXTablePagination; // Export RGXTablePagination for use in other components
