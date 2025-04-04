import { JSX } from "react";

/**
 * Props interface for defining the configuration of each column in the ReactGridX table component.
 *
 * This interface is used to specify the properties and behavior for individual columns in a grid.
 * It offers flexibility for customization, including cell rendering, sorting behavior, tooltips, and more.
 * The properties enable precise control over how the data is presented and interacted with within the table.
 */
export interface ReactGridXColumnProps {
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
  width?: number; // Only accepts a number

  /**
   * Indicates if the column is fixed (sticky).
   * @default false
   */
  fixed?: boolean;

  /**
   * Specifies the position where the column is fixed.
   * @default "left" if fixed is true and not specified
   * "left" | "right"
   */
  fixedPosition?: string;
}
