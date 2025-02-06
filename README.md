`@deepbag/react-grid-x` is a customizable and flexible React table component that supports pagination, sorting (client-side and server-side), dynamic rendering of table data, and customizable column rendering. It provides an easy-to-use interface for displaying tabular data with configurable columns, pagination, sorting, and styling.

## Features

- **Customizable columns**: Define columns with dynamic rendering of data using custom render functions.
- **Sorting support**: Supports sorting by multiple columns, including both numerical and alphabetical sorting and "Clear Sorting" popup is available when sorting is enabled.
- **Server-side sorting**: Optionally support server-side sorting for large datasets.
- **Pagination support**: Choose from different pagination types (`rgx-table-pagination` or `rgx-arrow-pagination`) with configurable rows per page and pagination controls.
- **Customizable styling**: Apply custom themes and styles to the table and pagination components.
- **Server-side pagination**: Optionally support server-side pagination for large datasets.
- **Tooltip support**: Enable tooltips for column headers with customizable content for better user guidance.
- **Row click event**: Capture row clicks using the onRowClick callback to handle user interactions.
- **Expandable rows**: Expand rows with a customizable `expandedComponent` to show additional details or content within the same row.
- **Loader support**: Customize the loader displayed when the table is in a loading state using the `loaderComponent` prop. If not provided, the default loader will be used.
- **Row selection**: Supports row selection with checkboxes, allowing both single and select-all functionality.

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
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme.css"; // Import the default theme (Required)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-table-pagination.css"; // Import the table pagination CSS (Required if you use default pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination.css"; // Import the arrow pagination CSS (Required if you use arrow pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-tooltip.css"; // Import the tooltip CSS (Required if you use tooltip)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-loader.css"; // Import the tooltip CSS (Required for loading effect)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-popover.css"; // Import the popup CSS (Required if you use sorting enabled)
```

The above CSS files can be found in the `dist` folder after installation.

## Usage

Here's a basic example of how to use the `ReactGridX` component in your React project:

```tsx
import React from "react";
import { ReactGridX } from "@deepbag/react-grid-x";

// Import the CSS files for styling
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-theme.css"; // Import the default theme (Required)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-table-pagination.css"; // Import the table pagination CSS (Required if you use default pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-arrow-pagination.css"; // Import the arrow pagination CSS (Required if you use arrow pagination)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-tooltip.css"; // Import the tooltip CSS (Required if you use tooltip)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-loader.css"; // Import the tooltip CSS (Required for loading effect)
import "@deepbag/react-grid-x/dist/themes/rgx-theme/rgx-popover.css"; // Import the popup CSS (Required if you use sorting enabled)

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
        paginationStyle={{
          "rgx-table-pagination": { backgroundColor: "#f5f5f5" },
        }}
        tableStyle={{
          "rgx-table": { width: "100%", borderCollapse: "collapse" },
          "rgx-table-head-tr": { backgroundColor: "#ddd" },
          "rgx-table-head-th": { padding: "8px", textAlign: "left" },
          "rgx-table-body-td": { padding: "8px" },
        }}
        loaderStyle={{
          "rgx-loader-containe": {},
        }}
        popupStyle={{ "rgx-popover-content": {} }}
        tooltipStyle={{ "rgx-tooltip-container": {} }}
      />
    </div>
  );
};

export default App;
```

## Table Props

| Prop                           | Type                                                        | Description                                                                                                                                               |
| ------------------------------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columns`                      | `ReactGridXColumnProps[]`                                   | An array of column definitions, each containing a `name` and optional `render` function for custom rendering.                                             |
| `data`                         | `any[]`                                                     | The data to be displayed in the table. Each object should correspond to a row.                                                                            |
| `theme`                        | `string`                                                    | The theme for the table (default is `"rgx-theme"`).                                                                                                       |
| `rowsPerPageOptions`           | `number[]`                                                  | Options for rows per page (default is `[5, 10, 15]`).                                                                                                     |
| `paginationType`               | `"rgx-table-pagination" \| "rgx-arrow-pagination"`          | The pagination type to use. Options are `"rgx-table-pagination"` or `"rgx-arrow-pagination"`.                                                             |
| `paginationStyle`              | `Record<string, React.CSSProperties>`                       | Custom styles for pagination components.                                                                                                                  |
| `tableStyle`                   | `Record<string, React.CSSProperties>`                       | Custom styles for the table and its elements.                                                                                                             |
| `loaderStyle`                  | `Record<string, React.CSSProperties>`                       | Custom styles for the loader component and its elements.                                                                                                  |
| `popupStyle`                   | `Record<string, React.CSSProperties>`                       | Custom styles for the popop component and its elements.                                                                                                   |
| `tooltipStyle`                 | `Record<string, React.CSSProperties>`                       | Custom styles for the tooltip component and its elements.                                                                                                 |
| `serverSideSorting`            | `boolean`                                                   | Flag to indicate if server-side pagination should be used (default is `false`).                                                                           |
| `onPaginationAndRowSizeChange` | `(page: number, rowsPerPage: number) => void`               | Callback function for pagination and row size changes.                                                                                                    |
| `totalRows`                    | `number`                                                    | The total number of rows in the database (required for server-side pagination).                                                                           |
| `sortable`                     | `boolean`                                                   | Enables sorting on a column (default is `false`).                                                                                                         |
| `serverSideSorting`            | `boolean`                                                   | Enables server-side sorting (default is `false`).                                                                                                         |
| `onSorting`                    | `(column:{key: string, direction: "asc" "desc"}[]) => void` | Callback function to handle server-side sorting logic.                                                                                                    |
| `onRowClick`                   | `(rowData: any) => void`                                    | Callback function triggered when a row is clicked, receiving the clicked row's data.                                                                      |
| `expandedComponent`            | `(rowData: any) => JSX.Element`                             | A function that returns a component to render when a row is expanded, receiving the clicked row's data.                                                   |
| `loading`                      | `boolean`                                                   | A boolean value indicating whether the table is in a loading state. When set to `true`, the table will show a loader.                                     |
| `loaderComponent`              | `({style}:{style?:{}}) => JSX.Element`                      | A function returning a custom loader when the table is loading. The `style` prop is optional for custom styling.                                          |
| `selectionCheckbox`            | `boolean`                                                   | A boolean value that determines whether the table rows will have a checkbox for selection. If set to `true`, checkboxes will be shown for selecting rows. |
| `onSelectionCheck`             | `(selectedRows: any[], isAllChecked: boolean) => void`      | A callback triggered when the selection state changes, receiving an array of selected rows and a boolean indicating if all rows are selected              |

## Column Props (`ReactGridXColumnProps`)

The `ReactGridXColumnProps` interface defines the properties that can be set for each column in the `ReactGridX` component.

| Prop                   | Type                                                     | Description                                                                  |
| ---------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                 | `string`                                                 | The column name displayed in the table header.                               |
| `key`                  | `string`                                                 | The unique key that matches the data field for this column.                  |
| `render`               | `(data: any) => JSX.Element \| string`                   | Optional function to customize how cell data is rendered.                    |
| `sortable`             | `boolean`                                                | Determines whether sorting is enabled for this column.                       |
| `onSort`               | `(a: any, b: any, direction: "asc" \| "desc") => number` | Optional custom sorting function. If provided, it overrides default sorting. |
| `tooltip`              | `boolean`                                                | Enables tooltips for this column when set to `true`.                         |
| `tooltipCustomContent` | `(data: any) => string`                                  | Defines custom tooltip content for the column header.                        |

## Exports

The package exports the following components and props interfaces:

### Components

- `ReactGridX`: The main table component.
- `RGXTablePagination`: Pagination component with table-based navigation.
- `RGXArrowPagination`: Pagination component with arrow-based navigation.
- `RGXTooltip`: The default tooltip component displayed for columns.
- `RGXLoader`: The default loader component displayed when the table is in a loading state, which can be customized using the `loaderComponent` prop.
- `RGXPopover`: The default popover component displayed for sorting and clearing sorting icons in the header.

### Interfaces (Props)

- `ReactGridXProps`: Props for the `ReactGridX` component.
- `RGXTablePaginationProps`: Props for the `RGXTablePagination` component.
- `RGXArrowPaginationProps`: Props for the `RGXArrowPagination` component.
- `ReactGridXColumnProps`: Column props for defining columns in the `ReactGridX` component.
- `RGXTooltipProps`: Props for the `RGXTooltip` component.
- `RGXLoaderProps`: Props for the `RGXLoader` component.
- `RGXPopoverProps`: Props for the `RGXPopover` component.

## Contributers

We welcome contributions from the community! If you find a bug, have a feature request, or would like to contribute code, please open an issue or pull request on our GitHub repository.

<a href="https://github.com/deepbag/react-grid-x/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=deepbag/react-grid-x" />
</a>

## License

MIT License - see the [LICENSE](LICENSE) file for details.
