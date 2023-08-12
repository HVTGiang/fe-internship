import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Product, ProductsProps, Pagination } from "../type";
import { useStore } from "../store";

const StyledBoardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 0 0;
  gap: 20px;
`;

const StyledTitle = styled.h2`
  flex: 1;
  display: inline-block;
`;

const StyledSearchBox = styled(TextField)`
  width: 40%;
`;

const BoardHeader = () => {
  const [state, dispatch] = useStore();
  const { products, pagination, pageSize } = state;
  return (
    <StyledBoardHeader>
      <StyledTitle>Products</StyledTitle>
      <StyledSearchBox
        id="standard-search"
        label="Search products..."
        type="search"
        variant="outlined"
        size="small"
      />
      <FilterAltIcon />
    </StyledBoardHeader>
  );
};
export default BoardHeader;
