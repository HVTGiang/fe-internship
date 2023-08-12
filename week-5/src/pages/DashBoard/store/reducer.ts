import ACTION_TYPE from "./constant";
import { Product, ProductsProps, Pagination } from "../type";

interface StateType {
  products?: Array<Product>;
  pagination?: Pagination;
  pageSize?: number;
  page?: number;
}

export const initState: StateType = {
  products: [],
  pagination: {
    totalItem: 0,
    currentPage: 1,
    limit: 0,
    hasItem: false,
  },
  pageSize: 5,
  page: 1,
};
type Action = {
  type: string;
  payload: any;
};

export const productReducer = (state: any, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ACTION_TYPE.SET_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload,
        },
      };
    case ACTION_TYPE.SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    case ACTION_TYPE.SET_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload,
        },
      };
  }
};
