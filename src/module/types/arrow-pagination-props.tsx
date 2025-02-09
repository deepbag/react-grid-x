/**
 * Props interface for the RGXArrowPagination component.
 * This interface defines the expected properties to control the pagination behavior
 * for a table or list display, including navigation, row selection, and loading state.
 */
export interface RGXArrowPaginationProps {
  /**
   * The current active page number.
   * This value determines which page of data is currently being displayed.
   */
  currentPage: number;

  /**
   * The total number of pages available.
   * It is used to calculate the page navigation controls and determine when the user is on the last page.
   */
  totalPages: number;

  /**
   * The number of rows to display per page.
   * This controls the pagination logic, as the table or list will show this many items per page.
   */
  rowsPerPage: number;

  /**
   * The total number of rows in the dataset.
   * This is used to display the total number of items in the dataset and for pagination calculations.
   */
  totalRows: number;

  /**
   * A callback function triggered when the user changes the page.
   * The function receives the new page number as an argument.
   *
   * @param page The page number to navigate to.
   */
  onPageChange: (page: number) => void;

  /**
   * A callback function triggered when the user changes the number of rows displayed per page.
   * The function receives the new number of rows per page as an argument.
   *
   * @param rows The new number of rows to display per page.
   */
  onRowsPerPageChange: (rows: number) => void;

  /**
   * Options for the rows-per-page dropdown.
   * This allows the user to select different numbers of rows to display per page.
   * If not provided, the default options [5, 10, 15] will be used.
   */
  rowsPerPageOptions?: number[];

  /**
   * An optional style object to customize the CSS styling for various pagination elements.
   * This allows users to apply custom styles for different parts of the pagination controls.
   */
  style?: Record<string, React.CSSProperties>;

  /**
   * A boolean flag to indicate whether the pagination controls should be disabled.
   * This is typically used to disable interaction while data is being fetched or loaded.
   * When `true`, pagination buttons and controls should not be interactive.
   */
  loading: boolean;
}
