import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import StarsRating from "react-star-rate";
import { theme } from "../../../mui-config/theme";

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
    padding: 8px 16px;
    background-color: ${theme.color.greyF7};
    border-radius: 5px;
    margin-top: 30px;
  }
`;

const DetailProduct = () => {
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

  return (
    <StyledContainer>
      <ProductImage>
        <img
          src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
          alt=""
        />
      </ProductImage>
      <Info>
        <p className="type">men's clothing</p>
        <h1 className="title">Mens Casual Premium Slim Fit T-Shirts</h1>
        <p className="rate">
          <span className="point">3.9</span>
          <StarsRating value={3.9} disabled style={StarStyle} />
          <span className="rate-count">420 rate</span>
        </p>
        <p className="description">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <p className="price">$109.95</p>
      </Info>
    </StyledContainer>
  );
};
export default DetailProduct;
