import styled from "@emotion/styled";
import Item from "../Item";
import { Product } from "../../../type/type";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../../api/endpoint";
import { Link } from "react-router-dom";
import Toasts from "./Toast";
import { useTranslation } from "react-i18next";

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
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

type Props = {
  data: Array<Product>;
};

const Body = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(Array<Product>);
  const ref = useRef();
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
    console.log(ref);
  }, []);
  interface ToastProps {
    message: string;
    type: string;
  }
  const handleAddToast = ({}: ToastProps) => {
    const container = ref.current;
    // TODO: research
  };

  return (
    <StyledBody>
      <Title>{t("products.title")}</Title>
      <List>
        {data?.map((p: Product) => (
          <Item data={p} key={p.id} />
          // <Link to={"/product/" + p.id}>
          //   <Item data={p} key={p.id} />
          // </Link>
        ))}
      </List>
      {/* <Toasts ref={ref}></Toasts> */}
    </StyledBody>
  );
};

export default Body;
