import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";

import { theme } from "../../mui-config/theme";
import DollarFormarter from "../../utils/dollarFormarter";
import { RootState } from "../../store";
import { deleteItem, setItemCount } from "../../store/cartSlice";

const StyledBody = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0;

  .notify {
    width: 100%;
    padding: 100px 0;
    font-size: 20px;
    opacity: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Title = styled.h2`
  padding: 20px 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 480px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  grid-template-columns: repeat(5, 1fr);
`;
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

const Summary = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: 20px;
  padding: 20px 150px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
  width: 100%;
  margin: 0 auto;
  /* max-width: 1280px; */
  box-shadow: -2px 0 8px 2px #ccc;
  .count-item {
    font-weight: bold;
  }
  .total {
    font-size: 25px;
    font-weight: bold;
    color: ${theme.palette.warning.main};
  }
`;

const Body = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const total = useMemo(() => {
    return cart.items.reduce<number>((previousValue, item, index, arr) => {
      return previousValue + item.item.price * item.count;
    }, 0);
  }, [cart]);
  const totalItem = useMemo(() => {
    return cart.items.reduce<number>((previousValue, item, index, arr) => {
      return previousValue + item.count;
    }, 0);
  }, [cart]);
  
  const toMinimize = (text: string, length: number) => {
    const dots = "...";
    if (text.length <= length) {
      return text;
    } else {
      return text.slice(0, length) + dots;
    }
  };
  const RenderItem = () => {
    return cart.items.map((i) => {
      const { item, count } = i;
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
                dispatch(setItemCount({ item: item, count: count - 1 }));
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
    });
  };

  return (
    <StyledBody>
      <Title>{t("detailCart.title")}</Title>
      {cart.items.length > 0 ? (
        <List>{RenderItem()}</List>
      ) : (
        <p className="notify">Your cart is empty. Let's go shopping!</p>
      )}
      <Summary>
        <p>
          {t("detailCart.total")}{" "}
          <span className="count-item">{totalItem}</span> {t("detailCart.item")}{" "}
        </p>
        <p className="total">{DollarFormarter(total)}</p>
      </Summary>
    </StyledBody>
  );
};
export default Body;
