import React$1, { JSX, ReactNode } from 'react';

/**
 * Props interface for defining the configuration of each column in the ReactGridX table component.
 *
 * This interface is used to specify the properties and behavior for individual columns in a grid.
 * It offers flexibility for customization, including cell rendering, sorting behavior, tooltips, and more.
 * The properties enable precise control over how the data is presented and interacted with within the table.
 */
interface ReactGridXColumnProps {
    /**
     * The display name of the column, which will be shown in the header.
     * This is a required property and should represent the label for the column.
     * If the column represents user data, this could be the column's field name.
     *
     * @example "Name"
     */
    name: string;
    /**
     * A unique key corresponding to the data field this column will display.
     * This key must match a key from the dataset to ensure proper mapping.
     * It ensures that the correct data is displayed for each column.
     *
     * @example "name"
     */
    key: string;
    /**
     * An optional custom render function that can be used to modify how cell data is displayed.
     * This function receives the cell's data and should return a JSX element or a string.
     * If not provided, the cell will be rendered with the default behavior (as a string).
     * Use this for custom formatting of data, such as applying conditional styles or adding additional components.
     *
     * @example (data) => <span style={{ color: 'red' }}>{data}</span>
     */
    render?: (data: any) => JSX.Element | string | number;
    /**
     * A flag to indicate whether the column is sortable.
     * If set to true, the user can click the column header to sort the data.
     * Defaults to `false`. This property enhances the table's interactivity,
     * allowing the user to organize the data in ascending or descending order.
     *
     * @default false
     *
     * @example true
     */
    sortable?: boolean;
    /**
     * An optional custom sorting function to control the sorting behavior of the column.
     * This function receives two parameters (`a` and `b` representing the cell values) and the
     * sorting direction (`asc` or `desc`). It should return `-1`, `0`, or `1` to dictate the sort order.
     * This allows for custom sorting logic, such as sorting numerically or alphabetically based on specific needs.
     *
     * @example (a, b, direction) => direction === 'asc' ? a - b : b - a
     */
    onSort?: (a: any, b: any, direction: "asc" | "desc") => number;
    /**
     * A flag to enable or disable tooltips for the column headers.
     * When set to `true`, a tooltip will be shown when the user hovers over the column header.
     * Tooltips can be useful for providing additional information about the column, such as its function or content.
     *
     * @default false
     *
     * @example true
     */
    tooltip?: boolean;
    /**
     * A function that returns custom content for tooltips.
     * This function receives the row data as an argument and returns a string.
     * The string will be displayed as the content inside the tooltip when hovered over.
     * This allows dynamic and context-sensitive tooltips that can adjust based on the content of the row.
     *
     * @example (rowData) => `Details about ${rowData.name}`
     */
    tooltipCustomContent?: (rowData: any) => string;
    /**
     * The width of the column. It must be a number, for example: 200.
     *
     * @example 200
     */
    width?: number;
}

/**
 * Props interface for configuring the ReactGridX table component.
 *
 * This interface defines all the configurable properties for the ReactGridX table,
 * including columns, data, pagination, sorting, styling, and interaction handlers.
 * It provides flexibility to customize the table's behavior, appearance, and interactivity.
 */
interface ReactGridXProps {
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
     * @example "rgx-theme"
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
     * Styles for loader components.
     * This allows customization of the loader elements' appearance using inline styles.
     * The styles should be provided in a `Record<string, React.CSSProperties>` format.
     *
     * @example { container: { backgroundColor: 'lightgray' } }
     */
    loaderStyle?: Record<string, React.CSSProperties>;
    /**
     * Styles for popup components.
     * This allows customization of the popup elements' appearance using inline styles.
     * The styles should be provided in a `Record<string, React.CSSProperties>` format.
     *
     * @example { container: { backgroundColor: 'lightgray' } }
     */
    popupStyle?: Record<string, React.CSSProperties>;
    /**
     * Styles for tooltip components.
     * This allows customization of the tooltip elements' appearance using inline styles.
     * The styles should be provided in a `Record<string, React.CSSProperties>` format.
     *
     * @example { container: { backgroundColor: 'lightgray' } }
     */
    tooltipStyle?: Record<string, React.CSSProperties>;
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
    onSorting?: (column: {
        key: string;
        direction: "asc" | "desc";
    }[]) => void;
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
    loaderComponent?: ({ style }: {
        style?: {};
    }) => JSX.Element;
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
    /**
     * The number of rows to display per page in the table.
     * This value determines how many rows will be visible on each page of the table.
     * If not provided, it will default to a standard number of rows per page.
     *
     * @type {number}
     * @default 10
     *
     * @example
     * // Set the rows per page to 20
     * rowPerPage = 20;
     */
    rowPerPage?: number;
    /**
     * The current page number in the table.
     * This value determines which page of rows is currently displayed.
     * If not provided, it will default to the first page.
     *
     * @type {number}
     * @default 1
     *
     * @example
     * // Set the current page to 2
     * page = 2;
     */
    page?: number;
}

declare const ReactGridX: React$1.FC<ReactGridXProps>;

/**
 * Props interface for the RGXTablePagination component.
 *
 * This interface defines the properties for the pagination component, which handles
 * the navigation of pages in the table. It includes properties for page number,
 * rows per page, total rows, and various callback functions for managing pagination.
 */
interface RGXTablePaginationProps {
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
}

declare const RGXTablePagination: React$1.FC<RGXTablePaginationProps>;

/**
 * Props interface for the RGXArrowPagination component.
 * This interface defines the expected properties to control the pagination behavior
 * for a table or list display, including navigation, row selection, and loading state.
 */
interface RGXArrowPaginationProps {
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

declare const RGXArrowPagination: React$1.FC<RGXArrowPaginationProps>;

/**
 * Props interface for the Tooltip component.
 *
 * This interface defines the properties required to display a tooltip. The tooltip
 * content is customizable, and the element that triggers the tooltip is provided
 * as children.
 */
interface RGXTooltipProps {
    /**
     * The content of the tooltip.
     * This can either be a string or number, which will be displayed when
     * the user hovers over the tooltip trigger element.
     *
     * @example "This is a tooltip"
     * @example 20
     */
    content: string | number;
    /**
     * The element that will trigger the tooltip.
     * This represents the child element that, when hovered over or focused, will
     * show the tooltip content.
     *
     * @example <button>Hover me</button>
     */
    children: React$1.ReactNode;
    /**
     * An optional style object to customize the CSS styling for tooltip.
     * This allows users to apply custom styles for tooltip.
     */
    style?: Record<string, React$1.CSSProperties>;
}

declare const RGXTooltip: React$1.FC<RGXTooltipProps>;

/**
 * Props interface for the Loader component.
 * This interface defines the expected properties for customizing the loader message.
 */
interface RGXLoaderProps {
    /**
     * A custom message to display while the loader is active.
     * If not provided, a default message of "Loading, please wait..." will be shown.
     * This allows flexibility for the component to indicate different loading states.
     *
     * @example "Fetching data..."
     */
    message?: string;
    /**
     * An optional style object to customize the CSS styling for loader.
     * This allows users to apply custom styles for loader.
     */
    style?: Record<string, React.CSSProperties>;
}

declare const RGXLoader: React$1.FC<RGXLoaderProps>;

/**
 * Props for the Popover component
 */
interface RGXPopoverProps {
    /**
     * Content to be displayed inside the popover.
     * This can be text, JSX elements, or any ReactNode.
     */
    children: ReactNode;
    /**
     * Controls whether the popover is visible or not.
     * If `true`, the popover will be shown.
     * If `false`, it will be hidden.
     */
    isOpen: boolean;
    /**
     * Function to close the popover.
     * This should be triggered when clicking outside the popover.
     */
    onClose: () => void;
    /**
     * An optional style object to customize the CSS styling for popover.
     * This allows users to apply custom styles for popover.
     */
    style?: Record<string, React.CSSProperties>;
}

export { RGXArrowPagination, type RGXArrowPaginationProps, RGXLoader, type RGXLoaderProps, type RGXPopoverProps, RGXTablePagination, type RGXTablePaginationProps, RGXTooltip, type RGXTooltipProps, ReactGridX, type ReactGridXColumnProps, type ReactGridXProps };
