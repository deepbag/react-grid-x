export const _paginatedResponse = async (data, page, pageSize, server) => {
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
