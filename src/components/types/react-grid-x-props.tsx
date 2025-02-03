import { ReactGridXColumnProps } from "./react-grid-x-column-props";
import { JSX } from "react";

/**
 * Props interface for configuring the ReactGridX table component.
 *
 * This interface defines all the configurable properties for the ReactGridX table,
 * including columns, data, pagination, sorting, styling, and interaction handlers.
 * It provides flexibility to customize the table's behavior, appearance, and interactivity.
 */
export interface ReactGridXProps {
  /**
   * An array of column definitions that control the structure and behavior of each column.
   * Each column is defined using the `ReactGridXColumnProps` interface.
   * This is a required property, as it dictates how the data is presented in the table.
   *
   * @example [{ name: "Name", key: "name", sortable: true }]
   */
  columns: ReactGridXColumnProps[];

  /**
   * The dataset that will be displayed in the table.
   * It should be an array of objects, where each object corresponds to a row in the table.
   * The keys in the data should match the column keys to ensure proper mapping.
   *
   * @example [{ name: "John Doe", age: 25 }, { name: "Jane Doe", age: 30 }]
   */
  data: any[];

  /**
   * Optional CSS class to apply custom styles to the table.
   * This allows users to customize the table's overall appearance by passing a class name
   * which can be used in external stylesheets.
   *
   * @example "custom-table-style"
   */
  theme?: string;

  /**
   * Options for the rows per page dropdown in pagination.
   * This is an array of numbers representing different row options available to the user.
   * The user can select how many rows should be displayed per page.
   *
   * @example [5, 10, 20]
   */
  rowsPerPageOptions?: number[];

  /**
   * Type of pagination to use.
   * You can choose between a custom pagination component ("rgx-table-pagination")
   * or an alternative pagination style ("rgx-arrow-pagination").
   *
   * @example "rgx-table-pagination"
   */
  paginationType?: "rgx-table-pagination" | "rgx-arrow-pagination";

  /**
   * Styles for pagination components.
   * This allows customization of the pagination elements' appearance using inline styles.
   * The styles should be provided in a `Record<string, React.CSSProperties>` format.
   *
   * @example { container: { backgroundColor: 'lightgray' } }
   */
  paginationStyle?: Record<string, React.CSSProperties>;

  /**
   * Styles for the table components (like the table itself, headers, etc.).
   * This allows you to apply custom inline styles to the table, giving you full control
   * over its appearance.
   *
   * @example { table: { border: '1px solid #ddd' } }
   */
  tableStyle?: Record<string, React.CSSProperties>;

  /**
   * Flag to enable or disable server-side pagination.
   * When `true`, pagination will be handled on the server-side, and only the relevant
   * data for the current page will be loaded.
   *
   * @default false
   */
  serverSidePagination?: boolean;

  /**
   * Callback function triggered when the page or rows per page are changed.
   * This callback allows the parent component to manage the pagination state,
   * such as fetching new data when the page changes.
   *
   * @example (page, rowsPerPage) => { console.log(page, rowsPerPage); }
   */
  onPaginationAndRowSizeChange?: (page: number, rowsPerPage: number) => void;

  /**
   * The total number of rows in the database.
   * This value is used for pagination to calculate the total number of pages.
   * It helps in managing the pagination state and controls the page navigation.
   *
   * @example 100
   */
  totalRows?: number;

  /**
   * Flag to indicate whether sorting is handled on the server-side.
   * When `true`, the sorting logic will be executed on the server, and only the
   * relevant sorted data will be fetched.
   *
   * @default false
   */
  serverSideSorting?: boolean;

  /**
   * Callback function triggered when a column is sorted.
   * This function receives an array of sorted columns, with each column containing its key and sorting direction.
   * The parent component can use this information to trigger server-side sorting or local sorting.
   *
   * @example (column) => { console.log(column); }
   */
  onSorting?: (column: { key: string; direction: "asc" | "desc" }[]) => void;

  /**
   * Callback function triggered when a row is clicked.
   * This allows you to perform actions or navigate to another page when a row is selected.
   * The function receives the clicked row's data as an argument.
   *
   * @example (rowData) => { alert(rowData.name); }
   */
  onRowClick?: (rowData: any) => void;

  /**
   * A custom component to render when a row is expanded.
   * This component will receive the row data as an argument and should return a JSX element
   * to be displayed below the row when it is expanded.
   *
   * @example (row) => <div>{row.name} is expanded</div>
   */
  expandedComponent?: (row: any) => JSX.Element;

  /**
   * Flag to indicate whether the table is in a loading state.
   * When `true`, the table will display a loading spinner or other loading indicator.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * A custom loader component to render while the table is in a loading state.
   * This provides flexibility to customize the loading indicator displayed to the user.
   *
   * @example () => <div>Loading data...</div>
   */
  loaderComponent?: () => JSX.Element;

  /**
   * Flag to enable or disable multi-column sorting.
   * When `true`, users can sort by multiple columns at the same time.
   *
   * @default false
   */
  multiColumnSort?: boolean;

  /**
   * Flag to enable or disable the selection checkbox.
   * When `true`, a checkbox will be rendered in the header and each row to allow users to select/deselect rows.
   *
   * @default false
   */
  selectionCheckbox?: boolean;

  /**
   * Callback function that is called when the selection checkbox is toggled.
   * This function receives the selected rows data as an argument, which contains the rows that are currently selected.
   *
   * @param selectedRows - An array of the rows that are selected, containing row data.
   *
   * @example (selectedRows) => { console.log(selectedRows); }
   */
  onSelectionCheck?: (selectedRows: any[], isAllChecked: boolean) => void;
}
