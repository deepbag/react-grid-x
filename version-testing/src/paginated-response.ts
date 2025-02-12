export interface PaginatedResponse<T> {
  data: T[]; // Paginated data for the current page or all data if no pagination
  totalRows: number; // Total number of rows in the dataset
}

export const _paginatedResponse = async <T>(
  data: T[],
  page?: number,
  pageSize?: number,
  server?: boolean
): Promise<PaginatedResponse<T>> => {
  if (server) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  if (!page || !pageSize) {
    return {
      data: data,
      totalRows: data.length,
    };
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalRows: data.length,
  };
};
