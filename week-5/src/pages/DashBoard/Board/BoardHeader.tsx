import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Product, ProductsProps, Pagination } from "../type";
import { useStore } from "../store";
import SearchBox from "../Table/SearchBox";
import { Checkbox, FormControlLabel } from "@mui/material";
import { setActive } from "../store/action";

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

const BoardHeader = () => {
  const [state, dispatch] = useStore();
  const { products, pagination, pageSize, active } = state;
  return (
    <StyledBoardHeader>
      <StyledTitle>Products</StyledTitle>
      <FormControlLabel
        control={<Checkbox defaultChecked={active} />}
        label="Active?"
        onClick={() => {
          dispatch(setActive(!active));
        }}
      />
      <SearchBox />
      {/* <FilterAltIcon /> */}
    </StyledBoardHeader>
  );
};
export default BoardHeader;
