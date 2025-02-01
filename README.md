# 🚧 **Under Development** 🚧

> This library is currently under development. We are actively working on adding new features and improving the overall functionality. Stay tuned for future updates!

---

# @deepbag/react-grid-x

`@deepbag/react-grid-x` is a customizable and flexible React table component that supports pagination, sorting (client-side and server-side), dynamic rendering of table data, and customizable column rendering. It provides an easy-to-use interface for displaying tabular data with configurable columns, pagination, sorting, and styling.

## Features

- **Customizable columns**: Define columns with dynamic rendering of data using custom render functions.
- **Sorting support**: Supports sorting by column, including both numerical and alphabetical sorting.
- **Server-side sorting**: Optionally support server-side sorting for large datasets.
- **Pagination support**: Choose from different pagination types (`rgx-table-pagination` or `rgx-arrow-pagination`) with configurable rows per page and pagination controls.
- **Customizable styling**: Apply custom themes and styles to the table and pagination components.
- **Server-side pagination**: Optionally support server-side pagination for large datasets.
- **Tooltip support**: Enable tooltips for column headers with customizable content for better user guidance.
- **Under development**: More features coming soon!

## Installation

To install the library, you can use either npm or yarn:

### Using Yarn

```bash
yarn add @deepbag/react-grid-x
```

### Using npm

```bash
npm install @deepbag/react-grid-x
```

## CSS Import

To use the component styles, you need to manually import the required CSS files. These CSS files are **not** included by default and need to be imported in your project.

```tsx
// Import the necessary CSS files
import "@deepbag/react-grid-x/dist/themes/rgx-theme.css"; // Import the default theme (Required)
import "@deepbag/react-grid-x/dist/themes/rgx-table-pagination.css"; // Import the table pagination CSS (Required if you use default pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-arrow-pagination.css"; // Import the arrow pagination CSS (Required if you use arrow pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-tooltip.css"; // Import the tooltip CSS (Required if you use tooltip)
```

The above CSS files can be found in the `dist` folder after installation.

## Usage

Here's a basic example of how to use the `ReactGridX` component in your React project:

```tsx
import React from "react";
import { ReactGridX } from "@deep/react-grid-x";

// Import the CSS files for styling
import "@deepbag/react-grid-x/dist/themes/rgx-theme.css"; // Import the default theme (Required)
import "@deepbag/react-grid-x/dist/themes/rgx-table-pagination.css"; // Import the table pagination CSS (Required if you use default pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-arrow-pagination.css"; // Import the arrow pagination CSS (Required if you use arrow pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-tooltip.css"; // Import the tooltip CSS (Required if you use tooltip)

const App = () => {
  const columns = [
    { name: "Name", key: "name", sortable: true },
    {
      name: "Age",
      key: "age",
      sortable: true,
      render: (data) => <span>{data.age}</span>,
    },
    {
      name: "Country",
      key: "country",
      sortable: true,
      render: (data) => <span>{data.country}</span>,
    },
  ];

  const data = [
    { id: 1, name: "John", age: 28, country: "USA" },
    { id: 2, name: "Jane", age: 34, country: "Canada" },
    { id: 3, name: "Sam", age: 22, country: "Australia" },
    { id: 4, name: "Anna", age: 25, country: "UK" },
    { id: 5, name: "Peter", age: 30, country: "Germany" },
  ];

  return (
    <div>
      <h1>React Grid Example</h1>
      <ReactGridX
        columns={columns}
        data={data}
        rowsPerPageOptions={[5, 10, 15]}
        paginationType="rgx-table-pagination"
        paginationStyle={{ "rgx-pagination": { backgroundColor: "#f5f5f5" } }}
        tableStyle={{
          table: { width: "100%", borderCollapse: "collapse" },
          "thead-tr": { backgroundColor: "#ddd" },
          th: { padding: "8px", textAlign: "left" },
          td: { padding: "8px" },
        }}
      />
    </div>
  );
};

export default App;
```

## Sorting

`ReactGridX` supports sorting functionality for both numeric and alphabetical data. You can enable sorting on a column by setting the `sortable` property to `true`.

### Example:

```tsx
const columns = [
  { name: "Name", key: "name", sortable: true },
  { name: "Age", key: "age", sortable: true },
  { name: "Country", key: "country", sortable: true },
];
```

### Custom Sorting

You can provide a custom sorting function using the `onSort` prop for finer control over sorting behavior:

```tsx
const columns = [
  {
    name: "Age",
    key: "age",
    sortable: true,
    onSort: (data, order) => {
      return data.sort((a, b) =>
        order === "asc" ? a.age - b.age : b.age - a.age
      );
    },
  },
];
```

## Server-Side Sorting

For large datasets, server-side sorting can be enabled by setting `serverSideSorting` to `true` and handling sorting logic externally.

### Example:

```tsx
<ReactGridX
  columns={columns}
  data={data}
  serverSideSorting={true}
  onSortChange={(sortKey, sortOrder) => fetchSortedData(sortKey, sortOrder)}
/>
```

## Tooltip

`ReactGridX` supports tooltip functionality. You can enable tooltip on a column by setting the `tooltip` property to `true` and for custom content `tooltipCustomContent` proprty to `string or number`.

### Example:

```tsx
const columns = [
  { name: "Name", key: "name", tooltip: true },
  {
    name: "Age",
    key: "age",
    tooltip: true,
    tooltipCustomContent: "write custom content",
  },
  { name: "Country", key: "country" },
];
```

## Table Props

| Prop                           | Type                                                 | Description                                                                                                   |
| ------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `columns`                      | `ReactGridXColumnProps[]`                            | An array of column definitions, each containing a `name` and optional `render` function for custom rendering. |
| `data`                         | `any[]`                                              | The data to be displayed in the table. Each object should correspond to a row.                                |
| `theme`                        | `string`                                             | The theme for the table (default is `"rgx-theme"`).                                                           |
| `rowsPerPageOptions`           | `number[]`                                           | Options for rows per page (default is `[5, 10, 15]`).                                                         |
| `paginationType`               | `"rgx-table-pagination" \| "rgx-arrow-pagination"`   | The pagination type to use. Options are `"rgx-table-pagination"` or `"rgx-arrow-pagination"`.                 |
| `paginationStyle`              | `Record<string, React.CSSProperties>`                | Custom styles for pagination components.                                                                      |
| `tableStyle`                   | `Record<string, React.CSSProperties>`                | Custom styles for the table and its elements.                                                                 |
| `serverSide`                   | `boolean`                                            | Flag to indicate if server-side pagination should be used (default is `false`).                               |
| `onPaginationAndRowSizeChange` | `(page: number, rowsPerPage: number) => void`        | Callback function for pagination and row size changes.                                                        |
| `totalRows`                    | `number`                                             | The total number of rows in the database (required for server-side pagination).                               |
| `sortable`                     | `boolean`                                            | Enables sorting on a column (default is `false`).                                                             |
| `serverSideSorting`            | `boolean`                                            | Enables server-side sorting (default is `false`).                                                             |
| `onSortChange`                 | `(sortKey: string, sortOrder: "asc" "desc") => void` | Callback function to handle server-side sorting logic.                                                        |

## Column Props (`ReactGridXColumnProps`)

The `ReactGridXColumnProps` interface defines the properties that can be set for each column in the `ReactGridX` component.

| Prop                   | Type                                             | Description                                                                 |
|------------------------|--------------------------------------------------|-----------------------------------------------------------------------------|
| `name`                 | `string`                                         | The column name displayed in the table header.                              |
| `key`                  | `string`                                         | The unique key that matches the data field for this column.                 |
| `render`               | `(data: any) => JSX.Element \| string`           | Optional function to customize how cell data is rendered.                   |
| `sortable`             | `boolean`                                        | Determines whether sorting is enabled for this column.                      |
| `onSort`               | `(data: any[], order: "asc" \| "desc") => any[]` | Optional custom sorting function. If provided, it overrides default sorting.|
| `tooltip`              | `boolean`                                        | Enables tooltips for this column when set to `true`.                        |
| `tooltipCustomContent` | `string \| number`                               | Defines custom tooltip content for the column header.                       |

## Exports

The package exports the following components and props interfaces:

### Components

- `ReactGridX`: The main table component.
- `RGXTablePagination`: Pagination component with table-based navigation.
- `RGXArrowPagination`: Pagination component with arrow-based navigation.

### Interfaces (Props)

- `ReactGridXProps`: Props for the `ReactGridX` component.
- `RGXTablePaginationProps`: Props for the `RGXTablePagination` component.
- `RGXArrowPaginationProps`: Props for the `RGXArrowPagination` component.
- `ReactGridXColumnProps`: Column props for defining columns in the `ReactGridX` component.

## Contributers

We welcome contributions from the community! If you find a bug, have a feature request, or would like to contribute code, please open an issue or pull request on our GitHub repository. [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/deepbag/react-grid-x)
<!-- https://contrib.rocks/preview?repo=angular%2Fangular-ja -->

<a href="https://github.com/deepbag/react-grid-x/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=deepbag/react-grid-x" />
</a>

## License

MIT License - see the [LICENSE](LICENSE) file for details.
