import ACTION_TYPE from "./constant";
export const setProducts = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_PRODUCTS,
    payload,
  };
};
export const setPage = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_PAGE,
    payload,
  };
};
export const setPageSize = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_PAGE_SIZE,
    payload,
  };
};
export const setPagination = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_PAGINATION,
    payload,
  };
};
export const setOverLimit = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_OVER_LIMIT,
    payload,
  };
};
export const setSortBy = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_SORT_BY,
    payload,
  };
};
export const setSortType = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_SORT_TYPE,
    payload,
  };
};
export const setSearchTerm = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_SEARCH_TERM,
    payload,
  };
};
export const setActive = (payload: any) => {
  return {
    type: ACTION_TYPE.SET_ACTIVE,
    payload,
  };
};
