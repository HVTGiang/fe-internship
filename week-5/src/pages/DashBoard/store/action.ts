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
