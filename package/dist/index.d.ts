import React, { JSX } from 'react';

interface ReactGridXColumnProps {
    name: string;
    render?: (data: any) => JSX.Element | string;
}
interface ReactGridXProps {
    columns: ReactGridXColumnProps[];
    data: any[];
    theme?: string;
    rowsPerPageOptions?: number[];
    paginationType?: "rgx-table-pagination" | "rgx-arrow-pagination";
    paginationStyle?: Record<string, React.CSSProperties>;
    tableStyle?: Record<string, React.CSSProperties>;
    serverSide?: boolean;
    onPaginationAndRowSizeChange?: (page: number, rowsPerPage: number) => void;
    totalRows?: number;
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
}
declare const RGXArrowPagination: React.FC<RGXArrowPaginationProps>;

export { RGXArrowPagination, RGXArrowPagination as RGXArrowPaginationProps, RGXTablePagination, RGXTablePagination as RGXTablePaginationProps, ReactGridX, ReactGridX as ReactGridXColumnProps, ReactGridX as ReactGridXProps };
