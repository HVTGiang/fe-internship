export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  ProductImage: Array<string>;
  active: boolean;
}
export interface Pagination {
  totalItem: number;
  currentPage: number;
  limit: number;
  hasItem: boolean;
}

export interface ProductsProps {
  data: Array<Product>;
  pagination: Pagination;
}
