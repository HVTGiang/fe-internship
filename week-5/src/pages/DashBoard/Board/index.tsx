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
  const { products, pagination, pageSize } = state;
  const { totalItem, currentPage, limit, hasItem } = pagination;

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (!token) {
      navigate("/");
    }
    const response = await axios.get(ENDPOINTS.products, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const { items, pagination } = response.data;
      dispatch(setProducts(items));
      dispatch(setPagination(pagination));
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
