import styled from "@emotion/styled";
import Item from "../Item";
import { Product } from "../type";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../../api/endpoint";

const StyledBody = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
`;
const Title = styled.h2`
  padding: 20px 0;
`;

const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;
type Props = {
  data: Array<Product>;
};

const Body = () => {
  const [data, setData] = useState(Array<Product>);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(ENDPOINTS.allProducts);
        if (response.status === 200) {
          setData([...response.data]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [data]);

  return (
    <StyledBody>
      <Title>Products</Title>
      <List>
        {data?.map((p: Product) => (
          <Item data={p} key={p.id} />
        ))}
      </List>
    </StyledBody>
  );
};
export default Body;
