import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useState } from "react";

const Group = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const StyledButton = styled(Button)`
  margin-left: 4px;
`;

const SearchGroup = () => {
  return (
    <Group>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue=""
        variant="outlined"
        size="small"
      />
      <StyledButton variant="contained" color="success" disableElevation>
        Search
      </StyledButton>
    </Group>
  );
};
export default SearchGroup;
