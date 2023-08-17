import styled from "@emotion/styled";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { theme } from "../../../mui-config/theme";
import { Product } from "../../../type/type";
import { useNavigate } from "react-router-dom";
import ENDPOINTS from "../../../api/endpoint";
import { useDispatch } from "react-redux/es/exports";
import { addItem } from "../../../store/cartSlice";

const StyledItem = styled.div`
  text-decoration: none;
  color: black;
  cursor: pointer;
  /* height: 400px; */
  box-shadow: 4px 4px 8px 4px #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  height: 200px;

  img {
    display: block;
    width: 80%;
    object-fit: contain;
    margin: 0 auto;
    height: 100%;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  .title {
    width: 100%;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    background-color: ${theme.color.green2A};
    padding: 4px 16px;
    border-radius: 5px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${theme.color.green26};
    }
  }
`;
type Props = {
  data: Product;
};
const Item = ({ data }: Props) => {
  const { image, title, price, id } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(
      addItem({
        item: data,
        count: 1,
      })
    );
  };
  const handleShowDetail = (id: number) => {
    navigate("/product/" + id);
  };
  return (
    <StyledItem onClick={() => handleShowDetail(id)}>
      <ProductImage>
        <img src={image} alt="" />
      </ProductImage>
      <ProductInfo>
        <h4 className="title">{title}</h4>
        <div className="group">
          <p>${price}</p>
          <div className="button" onClick={handleAddToCart}>
            <span>Add </span>
            <AddShoppingCartIcon />
          </div>
        </div>
      </ProductInfo>
    </StyledItem>
  );
};
export default Item;
