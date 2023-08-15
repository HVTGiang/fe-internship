import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import { Product, ProductsProps, Pagination } from "../type";
import { useStore } from "../store";

const StyledBody = styled.tbody`
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  .center {
    text-align: center;
  }
`;

const StyledRow = styled.tr`
  &:hover {
    background-color: ${theme.color.greyF7};
    transition: background-color 0.2s;
  }
`;

const StyledCheckBox = styled(Checkbox)`
  cursor: default;
`;

const TableBody = () => {
  const [state, dispatch] = useStore();
  const { products, pagination, pageSize, page } = state;
  const { totalItem, currentPage, limit, hasItem } = pagination;

  const productFrom = (page - 1) * pageSize + 1;
  const productTo = page * pageSize <= totalItem ? page * pageSize : totalItem;

  const toLimitString = (text: string, limit: number) => {
    const dots = "...";
    if (text.length > limit) {
      text = text.substring(0, limit) + dots;
    }
    return text;
  };
  return (
    <StyledBody>
      {products?.map((p: Product, i: number) => {
        const item = i + 1 + pageSize * (page - 1);

        if (item >= productFrom && item <= productTo) {
          return (
            <StyledRow key={p.id}>
              <th className="left">{p.name}</th>
              <td className="left">{toLimitString(p.description, 100)}</td>
              <td className="right">${p.price}</td>
              <td className="center">
                <StyledCheckBox checked={p.active} />
              </td>
            </StyledRow>
          );
        } else {
        }
      })}
    </StyledBody>
  );
};
export default TableBody;
