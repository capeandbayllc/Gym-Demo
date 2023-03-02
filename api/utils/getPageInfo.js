export const getPageInfo = (server, allRecords, { first, page = 0 }) => {
  // TODO: check these, I did them in a rush and didnt check them
  const total = allRecords?.length || 0;
  const perPage = first;
  const currentPage = page; //Index of the current page.
  const count = perPage > total ? total : perPage; //Number of items in the current page
  const firstItem = currentPage * count; //Index of the first item in the current page.
  const lastItem = firstItem + perPage; // Index of the last item in the current page.
  const hasMorePages = total > firstItem + perPage; //TODO: Are there more pages after this one?
  const lastPage = Math.ceil(total / perPage); // Index of the last available page.

  //creates a PaginatorInfo Model so that it doesnt get stripped from the response
  const paginatorInfo = server.create("paginatorInfo", {
    count,
    currentPage,
    firstItem,
    hasMorePages,
    lastItem,
    lastPage,
    perPage,
    total,
  });
  paginatorInfo.destroy(); //remove the database entry since we don't need it.
  return paginatorInfo;
};
