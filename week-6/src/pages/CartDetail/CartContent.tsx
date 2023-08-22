import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";

import { theme } from "../../mui-config/theme";
import DollarFormarter from "../../utils/dollarFormarter";
import { RootState } from "../../store";
import { deleteItem, setItemCount } from "../../store/cartSlice";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

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

const CartContent = () => {
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

  return (
    <StyledBody>
      <Title>{t("detailCart.title")}</Title>
      {cart.items.length > 0 ? (
        <List>
          {cart.items.map((i) => {
            const { item, count } = i;
            return <CartItem item={item} count={count} />;
          })}
        </List>
      ) : (
        <p className="notify">{t('header.cart.empty')}</p>
      )}
      <CartSummary totalItem={totalItem} total={total} />
    </StyledBody>
  );
};
export default CartContent;
