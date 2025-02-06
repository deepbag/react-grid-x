Allow users to hide/show columns dynamically

<!-- Allow users to sort by multiple columns -->

Implement lazy loading with an infinite scroll experience instead of paginated views.
Save column order, sorting, and filters in local storage or backend.

<!-- clear sorting popup (important) -->

change theme code
theme builder
<!-- row checkbox selection (single/all) (important) -->

<!-- column width (important) -->



changed 
1. theme files font removed 
2. css changed/added
3. css file route changed theme/rgx-theme
4. style prop added


write same for Tooltip
ReactGridX supports tooltip functionality. You can enable tooltip on a column by setting the tooltip property to true and for custom content tooltipCustomContent proprty to (rowData: any) => string.

const columns = [
  { name: "Name", key: "name", tooltip: true },
  {
    name: "Age",
    key: "age",
    tooltip: true,
    tooltipCustomContent: (rowData: any) => "write custom content",
  },
  { name: "Country", key: "country" },
];