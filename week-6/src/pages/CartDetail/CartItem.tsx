import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { deleteItem, setItemCount } from "../../store/cartSlice";

import { theme } from "../../mui-config/theme";
import DollarFormarter from "../../utils/dollarFormarter";

const Item = styled.li`
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid #ccc;
  padding: 16px;
  background-color: white;
  transition: background-color 0.2s;
  &:hover {
    background-color: #fbfbfb;
  }
  .image {
    cursor: pointer;
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .name {
    cursor: pointer;
    font-weight: 600;
    width: 15%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /* word-break: break-all; */
    word-wrap: break-word;
  }
  .price {
    width: 8%;
    min-width: 70px;
    text-align: right;
  }
  .type {
    flex: 0 100px;
  }
  .sub-total {
    flex: 0 100px;
    min-width: 100px;
    font-weight: bold;
    color: ${theme.palette.warning.main};
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .count {
    font-size: 13px;
    font-weight: 500;
    color: #999;
    display: inline-block;
    margin-left: 10px;
  }

  .delete {
    cursor: pointer;
    padding: 4px 16px;
    border: 1px solid ${theme.palette.warning.main};
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      background-color: ${theme.palette.warning.main};
      color: white;
    }
  }
`;

const Amount = styled.div`
  display: flex;
  font-size: 20px;
  width: 170px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;

  .edit-amount {
    padding: 8px 20px;
    background-color: white;
    /* border: 1px solid black; */
    cursor: pointer;
    &:hover {
      background-color: ${theme.color.greyF7};
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    width: 0;
    flex: 1;
    display: inline-block;
    padding: 10px;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
`;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const CartItem = ({ item, count }: { item: Product; count: number }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleReduceQuantity = () => {
    if (count - 1 > 0) {
      dispatch(setItemCount({ item: item, count: count - 1 }));
    } else {
      dispatch(deleteItem({ item }));
    }
  };

  return (
    <Item>
      <div
        className="image"
        onClick={() => {
          navigate("/product/" + item.id);
        }}
      >
        <img src={item.image} alt="" />
      </div>
      <p
        className="name"
        onClick={() => {
          navigate("/product/" + item.id);
        }}
      >
        {item.title}
      </p>
      <p className="type">{item.category}</p>
      <p className="price">{DollarFormarter(item.price)}</p>
      <Amount>
        <div
          className="edit-amount"
          onClick={() => {
            handleReduceQuantity();
          }}
        >
          -
        </div>
        <input
          type="number"
          value={count}
          min={1}
          className="count-input"
          onChange={(e) => {
            e.stopPropagation();
            dispatch(setItemCount({ item: item, count: e.target.value }));
          }}
        />
        <div
          className="edit-amount"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setItemCount({ item: item, count: count + 1 }));
          }}
        >
          +
        </div>
      </Amount>
      <p className="sub-total">{DollarFormarter(item.price * count)}</p>
      <p
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteItem({ item: item }));
        }}
      >
        {t("detailCart.delete")}
      </p>
    </Item>
  );
};
export default CartItem;
