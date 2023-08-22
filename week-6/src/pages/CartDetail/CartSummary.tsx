import styled from "@emotion/styled";
import { theme } from "../../mui-config/theme";
import { useTranslation } from "react-i18next";

import DollarFormarter from "../../utils/dollarFormarter";

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
const CartSummary = ({
  totalItem,
  total,
}: {
  totalItem: number;
  total: number;
}) => {
  const { t } = useTranslation();
  return (
    <Summary>
      <p>
        {t("detailCart.total")} <span className="count-item">{totalItem}</span>{" "}
        {t("detailCart.item")}{" "}
      </p>
      <p className="total">{DollarFormarter(total)}</p>
    </Summary>
  );
};

export default CartSummary;
