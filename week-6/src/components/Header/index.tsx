import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";
import { theme } from "../../mui-config/theme";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { RootState } from "../../store";
import CartIcon from "./CartIcon";
import LanguageBox from "../LanguageBox";
import SearchBox from "../SearchBox";

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 40px;
`;

type ToolsHeaderProps = {
  active?: boolean;
};

const StyledItem = styled.li<ToolsHeaderProps>`
  cursor: pointer;
  color: black;
  transition: font-weight 0.2s;

  color: ${(props) =>
    props.active ? theme.color.green2A : theme.color.black39};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  svg {
    padding: 10px;
    box-sizing: content-box;
    border-radius: 50%;
  }

  &:hover {
    font-weight: bold;
  }
`;

const Info = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${theme.color.greyF7};
  padding: 4px 40px;
  position: sticky;
  top: 0;
  z-index: 9999;
  overflow: auto;

  .cart-icon:hover {
  }
`;

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 3,
    border: "1px solid white",
    padding: "0 4px",
  },
}));

const User = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;

const Header = () => {
  const location = useLocation();
  const cart = useSelector((state: RootState) => state.cart);
  const ref = useRef<HTMLDivElement>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [page, setPage] = useState(() => location.pathname);

  return (
    <StyledHeader>
      <StyledList>
        <StyledItem>
          <h1>Logo</h1>
        </StyledItem>
        <Link to={"/product/"}>
          <StyledItem
            active={page === "/product/"}
            onClick={() => {
              setPage("/product/");
            }}
          >
            {t("header.products")}
          </StyledItem>
        </Link>
        <Link to={"/posts/"}>
          <StyledItem
            active={page === "/posts/"}
            onClick={() => {
              setPage("/posts/");
            }}
          >
            {t("header.posts")}
          </StyledItem>
        </Link>
        <StyledItem>FAQs</StyledItem>
        <StyledItem>{t("header.about-us")}</StyledItem>
      </StyledList>
      <Info>
        <LanguageBox />
        <SearchBox label={t("header.search-product")} />
        <div
          onMouseOut={() => {
            if (ref?.current) {
              ref.current.style.display = "none";
            }
          }}
          onMouseOver={() => {
            if (ref?.current) {
              ref.current.style.display = "flex";
            }
          }}
        >
          <IconButton aria-label="cart" onClick={() => navigate("/cart")}>
            <StyledBadge badgeContent={cart.items.length} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <CartIcon ref={ref}></CartIcon>
        </div>
        <User>
          <img src="/img/avatar.jpg" alt="" />
        </User>
      </Info>
    </StyledHeader>
  );
};
export default Header;
