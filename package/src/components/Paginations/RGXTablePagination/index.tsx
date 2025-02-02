import React from "react";
import "../../../themes/rgx-table-pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solidIcons } from "../../Icons/FontAwesome";

// Props interface for RGXTablePagination component
export interface RGXTablePaginationProps {
  currentPage: number; // The current active page number
  totalPages: number; // Total number of pages
  rowsPerPage: number; // Number of rows displayed per page
  totalRows: number; // Total number of rows in the dataset
  onPageChange: (page: number) => void; // Callback function triggered when the page changes
  onRowsPerPageChange: (rows: number) => void; // Callback function triggered when rows per page changes
  rowsPerPageOptions?: number[]; // Options for rows per page dropdown
  style?: Record<string, React.CSSProperties>; // Optional styles for pagination elements
  loading: boolean; // Added loading prop
}

// RGXTablePagination: A reusable pagination component for tables
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
}) => {
  /**
   * Generates an array of page numbers with ellipsis for navigation
   * @returns {Array<number | string>} - Array of page numbers and ellipsis
   */
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxVisiblePages = 4; // Maximum number of visible pages

    if (totalPages <= maxVisiblePages) {
      // If total pages are within the limit, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Add the first page and ellipsis if necessary
      if (currentPage > 2) {
        pageNumbers.push(1, "...");
      } else {
        pageNumbers.push(1);
      }

      // Calculate the range of visible pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add the range of visible pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis and the last page if necessary
      if (currentPage < totalPages - 1) {
        pageNumbers.push("...", totalPages);
      } else {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers(); // Generate page numbers

  return (
    <div className="rgx-table-pagination" style={style["rgx-table-pagination"]}>
      {/* Display pagination information */}
      <div
        className="rgx-table-pagination-info"
        style={style["rgx-table-pagination-info"]}
      >
        Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
        {Math.min(currentPage * rowsPerPage, totalRows)} of {totalRows}
      </div>

      {/* Rows per page selector and navigation controls */}
      <div
        className="rgx-table-pagination-row-per-page"
        style={style["rgx-table-pagination-row-per-page"]}
      >
        {/* Rows per page dropdown */}
        <div className="rgx-rows-per-page" style={style["rgx-rows-per-page"]}>
          <label
            htmlFor="rowsPerPage"
            className="rgx-rows-per-page-label"
            style={style["rgx-rows-per-page-label"]}
          >
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            className="rgx-rows-per-page-select"
            style={style["rgx-rows-per-page-select"]}
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

        {/* Pagination controls */}
        <div
          className="rgx-table-pagination-controls"
          style={style["rgx-table-pagination-controls"]}
        >
          {/* Previous page button */}
          <button
            disabled={currentPage === 1 || loading}
            onClick={() => onPageChange(currentPage - 1)}
            className="rgx-table-pagination-button"
            style={style["rgx-table-pagination-button"]}
          >
            <FontAwesomeIcon icon={solidIcons.faChevronLeft} />
          </button>

          {/* Page number buttons */}
          {pageNumbers.map((page, index) =>
            typeof page === "number" ? (
              <button
                key={index}
                className={`rgx-table-pagination-button ${
                  currentPage === page ? "rgx-active" : ""
                }`}
                style={
                  currentPage === page
                    ? {
                        ...style["rgx-table-pagination-button"],
                        ...style["rgx-table-pagination-button-active"],
                      }
                    : style["rgx-table-pagination-button"]
                }
                onClick={() => onPageChange(page)}
                disabled={loading}
              >
                {page}
              </button>
            ) : (
              <button
                key={index}
                disabled
                className="rgx-table-pagination-button rgx-table-pagination-ellipsis"
                style={{
                  ...style["rgx-table-pagination-button"],
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
            className="rgx-table-pagination-button"
            style={style["rgx-table-pagination-button"]}
          >
            <FontAwesomeIcon icon={solidIcons.faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RGXTablePagination;
