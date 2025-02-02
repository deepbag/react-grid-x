import React, { JSX } from 'react';

interface ReactGridXColumnProps {
    name: string;
    key: string;
    render?: (data: any) => JSX.Element | string;
    sortable?: boolean;
    onSort?: (data: any[], order: "asc" | "desc") => any[];
    tooltip?: boolean;
    tooltipCustomContent?: (rowData: any) => string;
}
interface ReactGridXProps {
    columns: ReactGridXColumnProps[];
    data: any[];
    theme?: string;
    rowsPerPageOptions?: number[];
    paginationType?: "rgx-table-pagination" | "rgx-arrow-pagination";
    paginationStyle?: Record<string, React.CSSProperties>;
    tableStyle?: Record<string, React.CSSProperties>;
    serverSidePagination?: boolean;
    onPaginationAndRowSizeChange?: (page: number, rowsPerPage: number) => void;
    totalRows?: number;
    serverSideSorting?: boolean;
    onSorting?: (column: string, order: "asc" | "desc") => void;
    onRowClick?: (rowData: any) => void;
    expandedComponent?: (row: any) => JSX.Element;
    loading?: boolean;
    loaderComponent?: () => JSX.Element;
}
declare const ReactGridX: React.FC<ReactGridXProps>;

interface RGXTablePaginationProps {
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    totalRows: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rows: number) => void;
    rowsPerPageOptions?: number[];
    style?: Record<string, React.CSSProperties>;
    loading: boolean;
}
declare const RGXTablePagination: React.FC<RGXTablePaginationProps>;

interface RGXArrowPaginationProps {
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    totalRows: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rows: number) => void;
    rowsPerPageOptions?: number[];
    style?: Record<string, React.CSSProperties>;
    loading: boolean;
}
declare const RGXArrowPagination: React.FC<RGXArrowPaginationProps>;

interface TooltipProps {
    content: string | JSX.Element;
    children: React.ReactNode;
}
declare const Tooltip: React.FC<TooltipProps>;

interface LoaderProps {
    message?: string;
}
declare const Loader: React.FC<LoaderProps>;

export { Loader as LoaderProps, RGXArrowPagination, RGXArrowPagination as RGXArrowPaginationProps, Loader as RGXLoader, RGXTablePagination, RGXTablePagination as RGXTablePaginationProps, Tooltip as RGXTooltip, ReactGridX, ReactGridX as ReactGridXColumnProps, ReactGridX as ReactGridXProps, Tooltip as TooltipProps };
