import styled from "@emotion/styled";
import { theme } from "../../mui-config/theme";
import SearchBox from "./SearchBox";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { RootState } from "../../store";
import Cart from "./Cart";

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
  width: 30%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${theme.color.greyF7};
  padding: 10px 40px;
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #ccc;
`;

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const ref = useRef<HTMLDivElement>();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(ref);
  }, []);

  return (
    <StyledHeader>
      <StyledList>
        <StyledItem>
          <h1>Logo</h1>
        </StyledItem>
        <Link to={"/product/"}>
          <StyledItem active>Products</StyledItem>
        </Link>
        <StyledItem>FAQs</StyledItem>
        <StyledItem>About us</StyledItem>
      </StyledList>
      <Info>
        <SearchBox />
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
          <Cart ref={ref}></Cart>
        </div>
        <User>
          <img src="/img/avatar.jpg" alt="" />
        </User>
      </Info>
    </StyledHeader>
  );
};
export default Header;
