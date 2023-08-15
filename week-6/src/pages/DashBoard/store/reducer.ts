import ACTION_TYPE from "./constant";
import { Product, ProductsProps, Pagination } from "../type";

interface StateType {
  products?: Array<Product>;
  pagination?: Pagination;
  pageSize?: number;
  page?: number;
  isOverLimit?: boolean;
  sortBy?: string;
  sortType?: string;
  searchTerm?: string;
  active?: boolean;
}

export const initState: StateType = {
  products: [],
  pagination: {
    totalItem: 0,
    currentPage: 1,
    limit: 0,
    hasItem: false,
  },
  pageSize: 12,
  page: 1,
  isOverLimit: false,
  active: true,
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
        page: action.payload,
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
    case ACTION_TYPE.SET_OVER_LIMIT:
      return {
        ...state,
        isOverLimit: action.payload,
      };
    case ACTION_TYPE.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case ACTION_TYPE.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ACTION_TYPE.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ACTION_TYPE.SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
