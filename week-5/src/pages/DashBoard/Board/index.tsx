import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import BoardHeader from "./BoardHeader";
import Table from "../Table";
import BoardFooter from "./BoardFooter";
import axios from "axios";
import ENDPOINTS from "../../../api/endpoint";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { setPagination, setProducts } from "../store/action";
import { useStore } from "../store";
import { Product } from "../type";
import { getCookie } from "../../../cookie";
import { string } from "yup";

const StyledBoard = styled.div`
  flex: 1;
  background-color: white;
  box-shadow: 0 0 8px 5px ${theme.color.greyF7};
  border-radius: 20px;
  margin: 20px 40px 20px 0;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Board = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useStore();
  const { pagination, sortType, sortBy, searchTerm, active, page } = state;
  const { totalItem, currentPage, limit, hasItem } = pagination;

  useEffect(() => {
    // if (!isOverLimit) {
    //   getProducts(currentPage).then((data) => {
    //     dispatch(setProducts(data?.items));
    //     dispatch(setPagination(data?.pagination));
    //   });
    // } else {
    //   const productList: Array<Product> = [];
    //   const getTwoPagesProduct = async () => {
    //     await getProducts(currentPage - 1).then((data) => {
    //       productList.push(...data?.items);
    //     });
    //     await getProducts(currentPage).then((data) => {
    //       productList.push(...data?.items);
    //       dispatch(setPagination(data?.pagination));
    //     });
    //   };
    //   getTwoPagesProduct();
    //   dispatch(setProducts(productList));
    // }
    getProducts(page, sortBy, sortType, searchTerm, active).then(
      (data) => {
        dispatch(setProducts(data?.items));
        dispatch(setPagination(data?.pagination));
      }
    );
  }, [page, sortBy, sortType, searchTerm]);

  const getProducts = async (
    page: number,
    sortBy: string,
    sortType: string,
    searchTerm: string,
    active: boolean
  ) => {
    const token = getCookie("accessToken");
    console.log(token);
    if (!token) {
      navigate("/");
    }
    const params: {
      page: number;
      sortBy?: string;
      sortType?: string;
      searchTerm?: string;
      active?: boolean;
    } = {
      page: page,
      active,
    };

    if (sortBy) {
      params.sortBy = sortBy;
    }
    if (sortType) {
      params.sortType = sortType;
    }
    if (searchTerm) {
      params.searchTerm = searchTerm;
    }
    console.log(params);
    try {
      const response = await axios.get(ENDPOINTS.products, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: params,
      });
      if (response.status === 200) {
        const { items, pagination } = response.data;
        return { items, pagination };
      }
    } catch (err) {
      navigate("/");
    }
  };

  return (
    <StyledBoard>
      <BoardHeader />
      <Table />
      <BoardFooter />
    </StyledBoard>
  );
};
export default Board;
