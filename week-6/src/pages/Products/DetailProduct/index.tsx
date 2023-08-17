import styled from "@emotion/styled";
import StarsRating from "react-star-rate";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { theme } from "../../../mui-config/theme";
import ENDPOINTS from "../../../api/endpoint";
import { Product } from "../../../type/type";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice";

const StyledContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 5px 4px #eee;
  max-width: 1280px;
  display: flex;
`;

const ProductImage = styled.div`
  width: 40%;
  min-width: 40%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  height: 500px;

  img {
    display: block;
    width: 100%;
    object-fit: contain;
    height: 100%;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Info = styled.div`
  padding: 0 20px;
  .type {
    color: #aaa;
  }
  .rate {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
  }
  .point {
    font-size: 24px;
  }
  .rate-count {
    border-left: 2px solid #ddd;
    padding-left: 20px;
  }
  .description {
    margin-top: 20px;
  }
  .price {
    color: ${theme.color.green26};
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 30px;
    padding: 8px 32px;
    background-color: ${theme.color.greyF7};
    border-radius: 5px;
    margin-top: 30px;
  }
`;

const Amount = styled.div`
  display: flex;
  font-size: 20px;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;

  .edit-amount {
    padding: 10px 20px;
    font-weight: bold;
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
    font-size: 15px;
    text-align: center;
    border: none;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
`;

const AddToCart = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;
  .button {
    cursor: pointer;
    background-color: ${theme.color.green2A};
    color: white;
    padding: 12px 28px;
    font-weight: 600;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${theme.color.green26};
    }
  }
`;

const DetailProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) {
      navigate("/product");
    } else {
      if (isNaN(+id)) {
        navigate("/product");
      }
    }

    const getProduct = async () => {
      try {
        const response = await axios.get(ENDPOINTS.detailProduct + id);
        if (response.status === 200) {
          setProduct(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);

  const StarStyle = {
    style: {
      padding: "0",
      fontSize: "30px",
    },
    full: {
      second: {
        color: theme.color.saffron,
      },
    },
    half: {
      first: {
        color: theme.color.saffron,
      },
    },
  };

  const handleAddToCart = () => {
    if (product && count > 0) {
      console.log(product);
      dispatch(addItem({ item: product, count: count }));
    }
  };

  return (
    <StyledContainer>
      <ProductImage>
        <img src={product?.image} alt="" />
      </ProductImage>
      <Info>
        <p className="type">{product?.category}</p>
        <h2 className="title">{product?.title}</h2>
        <p className="rate">
          <span className="point">{product?.rating.rate}</span>
          <StarsRating
            value={product?.rating.rate}
            disabled
            style={StarStyle}
          />
          <span className="rate-count">{product?.rating.count} rate</span>
        </p>
        <p className="description">{product?.description}</p>
        <p className="price">${product?.price}</p>
        <AddToCart>
          <Amount>
            <div
              className="edit-amount"
              onClick={() => {
                if (count - 1 > 0) {
                  setCount((prev) => prev - 1);
                }
              }}
            >
              -
            </div>
            <input
              type="number"
              value={count}
              min={1}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
            <div
              className="edit-amount"
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
            >
              +
            </div>
          </Amount>
          <div className="button" onClick={handleAddToCart}>
            Add to cart <AddShoppingCartIcon />
          </div>
        </AddToCart>
      </Info>
    </StyledContainer>
  );
};
export default DetailProduct;
