import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledSearchBox = styled(FormControl)`
  flex: 1;
  width: 40%;
`;

const SearchBox = ({ label }: any) => {
  const [searchString, setSearchString] = useState("");

  return (
    <StyledSearchBox margin="dense" size="small">
      <InputLabel htmlFor="input-password">{label}</InputLabel>
      <OutlinedInput
        // notched={true}
        label={label}
        type="text"
        id="input-password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
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
