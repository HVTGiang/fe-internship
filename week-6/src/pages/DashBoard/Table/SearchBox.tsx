import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useStore } from "../store";
import { setPage, setSearchTerm } from "../store/action";
import { useState } from "react";

const StyledSearchBox = styled(FormControl)`
  width: 40%;
`;

const SearchBox = () => {
  const [searchString, setSearchString] = useState("");
  const [state, dispatch] = useStore();
  const { pagination, sortType, sortBy, searchTerm } = state;
  return (
    <StyledSearchBox margin="dense" size="small">
      <InputLabel htmlFor="input-password">Search Product</InputLabel>
      <OutlinedInput
        // notched={true}
        label="Search Product"
        type="text"
        id="input-password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={() => {
                dispatch(setPage(1));
                dispatch(setSearchTerm(searchString));
              }}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        defaultValue={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    </StyledSearchBox>
  );
};
export default SearchBox;
