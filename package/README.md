
# 🚧 **Under Development** 🚧

> This library is currently under development. We are actively working on adding new features and improving the overall functionality. Stay tuned for future updates!

---

# @deepbag/react-grid-x

`@deepbag/react-grid-x` is a customizable and flexible React table component that supports pagination, dynamic rendering of table data, and customizable column rendering. It provides an easy-to-use interface for displaying tabular data with configurable columns, pagination, and styling.

## Features

- **Customizable columns**: Define columns with dynamic rendering of data using custom render functions.
- **Pagination support**: Choose from different pagination types (`rgx-table-pagination` or `rgx-arrow-pagination`) with configurable rows per page and pagination controls.
- **Customizable styling**: Apply custom themes and styles to the table and pagination components.
- **Server-side pagination**: Optionally support server-side pagination for large datasets.
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
import "@deepbag/react-grid-x/dist/themes/rgx-theme.css";            // Import the default theme
import "@deepbag/react-grid-x/dist/themes/rgx-table-pagination.css"; // Import the table pagination CSS
import "@deepbag/react-grid-x/dist/themes/rgx-arrow-pagination.css"; // Import the arrow pagination CSS
```

The above CSS files can be found in the `dist` folder after installation.

> **Important**: If you're using a custom build process, ensure that these files are properly linked in your project to apply the styling.

## Usage

Here's a basic example of how to use the `ReactGridX` component in your React project:

```tsx
import React from "react";
import ReactGridX from "@deep/react-grid-x";

// Import the CSS files for styling
import "@deepbag/react-grid-x/dist/themes/rgx-theme.css";            // Import the default theme
import "@deepbag/react-grid-x/dist/themes/rgx-table-pagination.css"; // Import the table pagination CSS
import "@deepbag/react-grid-x/dist/themes/rgx-arrow-pagination.css"; // Import the arrow pagination CSS

const App = () => {
  const columns = [
    { name: "Name" },
    { name: "Age", render: (data) => <span>{data.age}</span> },
    { name: "Country", render: (data) => <span>{data.country}</span> },
  ];

  const data = [
    { id: 1, name: "John", age: 28, country: "USA" },
    { id: 2, name: "Jane", age: 34, country: "Canada" },
    { id: 3, name: "Sam", age: 22, country: "Australia" },
    { id: 4, name: "Anna", age: 25, country: "UK" },
    { id: 5, name: "Peter", age: 30, country: "Germany" },
    // Add more data here
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

## Props

| Prop                 | Type                                  | Description                                                                                                   |
| -------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `columns`            | `ReactGridXColumnProps[]`             | An array of column definitions, each containing a `name` and optional `render` function for custom rendering. |
| `data`               | `any[]`                               | The data to be displayed in the table. Each object should correspond to a row.                                |
| `theme`              | `string`                              | The theme for the table (default is `"rgx-theme"`).                                                           |
| `rowsPerPageOptions` | `number[]`                            | Options for rows per page (default is `[5, 10, 15]`).                                                         |
| `paginationType`     | `"rgx-table-pagination" \| "rgx-arrow-pagination"` | The pagination type to use. Options are `"rgx-table-pagination"` or `"rgx-arrow-pagination"`.                |
| `paginationStyle`    | `Record<string, React.CSSProperties>` | Custom styles for pagination components.                                                                      |
| `tableStyle`         | `Record<string, React.CSSProperties>` | Custom styles for the table and its elements.                                                                 |
| `serverSide`         | `boolean`                             | Flag to indicate if server-side pagination should be used (default is `false`).                               |
| `onPaginationAndRowSizeChange` | `(page: number, rowsPerPage: number) => void` | Callback function for pagination and row size changes.                                                        |
| `totalRows`          | `number`                              | The total number of rows in the database (required for server-side pagination).                               |
| `sortable`           | `boolean`                           | Enables sorting on a column (default is `false`).                                                               |
| `serverSideSorting`  | `boolean`                           | Enables server-side sorting (default is `false`).                                                               |
| `onSortChange`       | `(sortKey: string, sortOrder: "asc" | "desc") => void`                                                                                                | Callback function to handle server-side sorting logic. |

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

## License

MIT License - see the [LICENSE](LICENSE) file for details.
