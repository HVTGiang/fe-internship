import { useSelector } from "react-redux";
import { useMemo } from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";

import { theme } from "../../mui-config/theme";
import { RootState } from "../../store";
import DollarFormarter from "../../utils/dollarFormarter";

const StyledCart = styled.div`
  position: fixed;
  width: 450px;
  top: 65px;
  right: 85px;
  /* height: auto; */
  height: 500px;
  /* overflow-y: scroll; */
  background-color: white;
  z-index: 999999;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px #ccc;
  display: flex;
  display: none;
  flex-direction: column;

  .nothing {
    margin-top: -20px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    font-size: 20px;
  }

  /* border: 0.1px solid #aaa; */
  &::after {
    content: "";
    border: 20px solid transparent;
    border-top: none;
    border-bottom: 20px solid white;
    display: block;
    width: 0px;
    position: absolute;
    right: 17px;
    top: -15px;
  }
  .title {
    padding: 20px 40px 20px 20px;
    position: sticky;
    top: 0;
    background-color: white;
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      font-size: 16px;
      font-weight: bold;
    }
    .button {
      /* padding: 8px 24px; */
      /* background-color: ${theme.color.green2A}; */
      color: ${theme.color.green2A};
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .list {
    padding: 20px;
    padding-top: 0;
    list-style-type: none;
    max-height: 400px;
    flex: 1;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  a:nth-last-child(1) {
    border-bottom: 0;
  }

  .total {
    font-size: 25px;
    font-weight: bold;
    color: ${theme.palette.warning.main};
    text-align: right;
    flex: 1;

    .text {
      display: inline-block;
      margin-right: 10px;
    }
  }
  .total-group {
    background-color: #f9f9f9;
    padding: 20px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    border-radius: 0 0 5px 5px;
  }
`;

const Item = styled.li`
  cursor: pointer;
  color: black;
  display: flex;
  gap: 10px;
  /* border-bottom: 1px solid #ccc; */
  padding: 16px;
  background-color: white;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${theme.color.greyF7};
  }
  .image {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .name {
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: normal;
    height: 25px;
  }
  .info {
    flex: 1;
  }
  .sub-total {
    flex: 0 100px;
    min-width: 100px;
    font-weight: bold;
    color: ${theme.palette.warning.main};
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .count {
    font-size: 13px;
    font-weight: 500;
    color: #999;
    display: inline-block;
    margin-left: 10px;
  }
`;

const Cart = (props: any, ref: any) => {

  const { t } = useTranslation();
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

  return (
    <StyledCart ref={ref}>
      <div className="title">
        <span className="text">{t("header.cart.title")}</span>
        <Link to={"/cart"}>
          <span className="button">{t("header.cart.detail")}</span>
        </Link>
      </div>
      <ul className="list">
        {cart.items.length > 0 ? (
          cart.items.map((i: any) => {
            const { item, count } = i;
            return (
              <Link to={"/product/" + item.id} key={item.id}>
                <Item>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="info">
                    <p className="name">{item.title}</p>
                    <p>
                      <span className="price">
                        {DollarFormarter(item.price)}
                      </span>
                      <span className="count"> x{count}</span>
                    </p>
                  </div>
                  <p className="sub-total">
                    {DollarFormarter(item.price * count)}
                  </p>
                </Item>
              </Link>
            );
          })
        ) : (
          <div className="nothing">{t("header.cart.empty")}</div>
        )}
      </ul>
      {cart.items.length > 0 ? (
        <p className="total-group">
          {" "}
          <span className="text">
            {t("header.cart.total-item")} <b>{totalItem}</b>{" "}
            {t("header.cart.item")}{" "}
          </span>
          <span className="total"> {DollarFormarter(total)}</span>
        </p>
      ) : (
        ""
      )}
    </StyledCart>
  );
};
export default forwardRef(Cart);
