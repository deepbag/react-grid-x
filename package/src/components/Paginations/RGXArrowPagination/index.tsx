import React from "react";
import "../../../themes/rgx-arrow-pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solidIcons } from "../../Icons/FontAwesome";

// Props interface for RGXArrowPagination component
export interface RGXArrowPaginationProps {
  currentPage: number; // The current active page number
  totalPages: number; // Total number of pages
  rowsPerPage: number; // Number of rows displayed per page
  totalRows: number; // Total number of rows in the dataset
  onPageChange: (page: number) => void; // Callback function triggered when the page changes
  onRowsPerPageChange: (rows: number) => void; // Callback function triggered when rows per page changes
  rowsPerPageOptions?: number[]; // Options for rows per page dropdown
  style?: Record<string, React.CSSProperties>; // Optional styles for pagination elements
}

// RGXArrowPagination: A reusable pagination component for tables
const RGXArrowPagination: React.FC<RGXArrowPaginationProps> = ({
  currentPage,
  totalPages,
  rowsPerPage,
  totalRows,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions = [5, 10, 15],
  style = {},
}) => {
  return (
    <div className="rgx-arrow-pagination" style={style["rgx-arrow-pagination"]}>
      {/* Display pagination information */}
      <div
        className="rgx-arrow-pagination-info"
        style={style["rgx-arrow-pagination-info"]}
      >
        Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
        {Math.min(currentPage * rowsPerPage, totalRows)} of {totalRows}
      </div>

      {/* Rows per page selector and navigation controls */}
      <div
        className="rgx-arrow-pagination-row-per-page"
        style={style["rgx-arrow-pagination-row-per-page"]}
      >
        {/* Rows per page dropdown */}
        <div
          className="rgx-arrow-rows-per-page"
          style={style["rgx-arrow-rows-per-page"]}
        >
          <label
            htmlFor="rowsPerPage"
            className="rgx-arrow-rows-per-page-label"
            style={style["rgx-arrow-rows-per-page-label"]}
          >
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            className="rgx-arrow-rows-per-page-select"
            style={style["rgx-arrow-rows-per-page-select"]}
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
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
          className="rgx-arrow-pagination-controls"
          style={style["rgx-arrow-pagination-controls"]}
        >
          {/* Previous First page button */}
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(1)}
            className="rgx-arrow-pagination-button"
            style={style["rgx-arrow-pagination-button"]}
          >
            <FontAwesomeIcon icon={solidIcons.faAngleDoubleLeft} />
          </button>
          {/* Previous page button */}
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="rgx-arrow-pagination-button"
            style={style["rgx-arrow-pagination-button"]}
          >
            <FontAwesomeIcon icon={solidIcons.faChevronLeft} />
          </button>
          {/* Display pagination information */}
          <div
            className="rgx-arrow-pagination-page-of"
            style={style["rgx-arrow-pagination-page-of"]}
          >
            Page {currentPage} of {totalPages}
          </div>
          {/* Next page button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="rgx-arrow-pagination-button"
            style={style["rgx-arrow-pagination-button"]}
          >
            <FontAwesomeIcon icon={solidIcons.faChevronRight} />
          </button>

          {/* Next Last page button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
            className="rgx-arrow-pagination-button"
            style={style["rgx-arrow-pagination-button"]}
          >
            <FontAwesomeIcon icon={solidIcons.faAngleDoubleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RGXArrowPagination;
