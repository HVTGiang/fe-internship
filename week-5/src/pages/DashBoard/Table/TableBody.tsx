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

const TableBody = () => {
  // const data = [
  //   {
  //     name: "Tiệm tập hoá Namiya",
  //     price: 3000,
  //     description: "Hay dữ lắm luôn á nha, đọc mệt nghỉ",
  //     active: true,
  //   },
  //   {
  //     name: "Thông điệp bí ẩn từ vũ trụ",
  //     price: 5483,
  //     description: "Dở ẹc đọc thấy gớm ai mà thèm đọc má",
  //     active: false,
  //   },
  //   {
  //     name: "Tiệm tập hoá Namiya",
  //     price: 3000,
  //     description: "Hay dữ lắm luôn á nha, đọc mệt nghỉ",
  //     active: true,
  //   },
  //   {
  //     name: "Thông điệp bí ẩn từ vũ trụ",
  //     price: 5483,
  //     description:
  //       "Dở ẹc đọc thấy gớm ai mà thèm đọc má Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ea corrupti molestiae ducimus aliquam nihil excepturi vero porro quae non quia earum incidunt sequi provident illum enim, voluptas commodi! Ut?",
  //     active: false,
  //   },
  //   {
  //     name: "Thông điệp bí ẩn từ vũ trụ",
  //     price: 5483,
  //     description:
  //       "Dở ẹc đọc thấy gớm ai mà thèm đọc má Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ea corrupti molestiae ducimus aliquam nihil excepturi vero porro quae non quia earum incidunt sequi provident illum enim, voluptas commodi! Ut?",
  //     active: false,
  //   },
  //   {
  //     name: "Thông điệp bí ẩn từ vũ trụ",
  //     price: 5483,
  //     description:
  //       "Dở ẹc đọc thấy gớm ai mà thèm đọc má Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ea corrupti molestiae ducimus aliquam nihil excepturi vero porro quae non quia earum incidunt sequi provident illum enim, voluptas commodi! Ut?",
  //     active: false,
  //   },
  //   {
  //     name: "Thông điệp bí ẩn từ vũ trụ",
  //     price: 5483,
  //     description:
  //       "Dở ẹc đọc thấy gớm ai mà thèm đọc má Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ea corrupti molestiae ducimus aliquam nihil excepturi vero porro quae non quia earum incidunt sequi provident illum enim, voluptas commodi! Ut?",
  //     active: false,
  //   },
  // ];
  const [state, dispatch] = useStore();
  const { products, pagination, pageSize } = state;

  return (
    <StyledBody>
      {products.map((p: Product, i: number) => {
        if (i < pageSize)
          return (
            <StyledRow key={i}>
              <th className="left">{p.name}</th>
              <td className="left">{p.description}</td>
              <td className="right">${p.price}</td>
              <td className="center">
                <Checkbox checked={p.active} />
              </td>
            </StyledRow>
          );
      })}
    </StyledBody>
  );
};
export default TableBody;
