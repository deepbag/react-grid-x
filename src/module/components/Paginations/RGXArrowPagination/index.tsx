import React from "react";
import "module/themes/rgx-theme/rgx-arrow-pagination.css"; // Import custom styles for the arrow pagination component
import { RGXArrowPaginationProps } from "module/types/arrow-pagination-props"; // Import the type definition for the props
import SvgIcon from "module/components/SVGIcons";

const RGXArrowPagination: React.FC<RGXArrowPaginationProps> = ({
  currentPage,
  totalPages,
  rowsPerPage,
  totalRows,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions = [5, 10, 15],
  style = {},
  loading = false,
}) => {
  return (
    <div
      className="rgx-arrow-pagination"
      style={{
        ...style["rgx-arrow-pagination"],
      }}
    >
      {/* Display pagination information: current page and total rows */}
      <div
        className="rgx-arrow-pagination-info"
        style={{
          ...style["rgx-arrow-pagination-info"],
        }}
      >
        Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
        {Math.min(currentPage * rowsPerPage, totalRows)} of {totalRows}
      </div>

      {/* Rows per page selector and pagination controls */}
      <div
        className="rgx-arrow-pagination-row-per-page"
        style={{
          ...style["rgx-arrow-pagination-row-per-page"],
        }}
      >
        {/* Rows per page dropdown */}
        <div
          className="rgx-arrow-pagination-rows-per-page"
          style={{
            ...style["rgx-arrow-pagination-rows-per-page"],
          }}
        >
          <label
            htmlFor="rowsPerPage"
            className="rgx-arrow-pagination-rows-per-page-label"
            style={{
              ...style["rgx-arrow-pagination-rows-per-page-label"],
            }}
          >
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            className="rgx-arrow-pagination-rows-per-page-select"
            style={{
              ...style["rgx-arrow-pagination-rows-per-page-select"],
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

        {/* Pagination controls (previous, next, first, last buttons) */}
        <div
          className="rgx-arrow-pagination-controls"
          style={{
            ...style["rgx-arrow-pagination-controls"],
          }}
        >
          {/* Previous First page button */}
          <button
            disabled={currentPage === 1 || loading}
            onClick={() => onPageChange(1)} // Navigate to the first page
            className="rgx-arrow-pagination-button"
            style={{
              ...style["rgx-arrow-pagination-button"],
            }}
          >
            <SvgIcon
              svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>`}
            />
          </button>
          {/* Previous page button */}
          <button
            disabled={currentPage === 1 || loading}
            onClick={() => onPageChange(currentPage - 1)} // Navigate to the previous page
            className="rgx-arrow-pagination-button"
            style={{
              ...style["rgx-arrow-pagination-button"],
            }}
          >
            <SvgIcon
              svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>`}
            />
          </button>
          {/* Page info (current page and total pages) */}
          <div
            className="rgx-arrow-pagination-page-of"
            style={{
              ...style["rgx-arrow-pagination-page-of"],
            }}
          >
            Page {currentPage} of {totalPages}
          </div>
          {/* Next page button */}
          <button
            disabled={currentPage === totalPages || loading}
            onClick={() => onPageChange(currentPage + 1)} // Navigate to the next page
            className="rgx-arrow-pagination-button"
            style={{
              ...style["rgx-arrow-pagination-button"],
            }}
          >
            <SvgIcon
              svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>`}
            />
          </button>

          {/* Next Last page button */}
          <button
            disabled={currentPage === totalPages || loading}
            onClick={() => onPageChange(totalPages)} // Navigate to the last page
            className="rgx-arrow-pagination-button"
            style={{
              ...style["rgx-arrow-pagination-button"],
            }}
          >
            <SvgIcon
              svgPath={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RGXArrowPagination; // Export the RGXArrowPagination component for use in other parts of the app
