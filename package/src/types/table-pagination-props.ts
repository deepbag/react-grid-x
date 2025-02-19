/**
 * Props interface for the RGXTablePagination component.
 *
 * This interface defines the properties for the pagination component, which handles
 * the navigation of pages in the table. It includes properties for page number,
 * rows per page, total rows, and various callback functions for managing pagination.
 */
export interface RGXTablePaginationProps {
  /**
   * The current active page number.
   * This represents the page that is currently being displayed in the table.
   *
   * @example 1
   */
  currentPage: number;

  /**
   * The total number of pages.
   * This value is used to determine the range of pages available for navigation.
   *
   * @example 10
   */
  totalPages: number;

  /**
   * The number of rows displayed per page.
   * This value controls how many rows the user will see per page in the table.
   *
   * @example 10
   */
  rowsPerPage: number;

  /**
   * The total number of rows in the dataset.
   * This value is used to calculate the total pages based on the number of rows per page.
   *
   * @example 100
   */
  totalRows: number;

  /**
   * Callback function triggered when the page changes.
   * This function allows the parent component to update the table's data when the user navigates to a new page.
   *
   * @example (page) => { console.log(page); }
   */
  onPageChange: (page: number) => void;

  /**
   * Callback function triggered when the rows per page are changed.
   * This allows the parent component to update the table's data when the user selects a different number of rows per page.
   *
   * @example (rows) => { console.log(rows); }
   */
  onRowsPerPageChange: (rows: number) => void;

  /**
   * Options for the rows per page dropdown.
   * This is an optional property that provides different row options for the user to choose from.
   *
   * @example [5, 10, 20, 50]
   */
  rowsPerPageOptions?: number[];

  /**
   * Optional styles for the pagination elements.
   * This allows customization of the pagination component's appearance using inline styles.
   *
   * @example { container: { backgroundColor: 'lightgray' } }
   */
  style?: Record<string, React.CSSProperties>;

  /**
   * Flag to indicate whether the pagination component is in a loading state.
   * When `true`, a loading indicator is displayed.
   *
   * @default false
   */
  loading: boolean;

  /**
   * The theme mode for the pagination component.
   * When set to `"light"`, the component will use the light theme.
   * When set to `"dark"`, the component will use the dark theme.
   *
   * @default "light"
   */
  mode?: "light" | "dark";
}
