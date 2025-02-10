export interface PaginatedResponse<T> {
  data: T[]; // Paginated data for the current page or all data if no pagination
  totalRows: number; // Total number of rows in the dataset
}

export const _paginatedResponse = <T>(
  data: T[],
  page?: number,
  pageSize?: number
): PaginatedResponse<T> => {
  // If no page or pageSize is provided, return all data
  if (!page || !pageSize) {
    return {
      data: data,
      totalRows: data.length,
    };
  }

  // Calculate the start index and end index for pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the data to get the items for the current page
  const paginatedData = data.slice(startIndex, endIndex);

  // Return the paginated data with the total rows
  return {
    data: paginatedData,
    totalRows: data.length, // Total number of items in the dataset
  };
};
