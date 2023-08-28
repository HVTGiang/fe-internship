import { Comment } from "../Type";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const Box = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Avatar = styled.div`
  min-width: 50px;
  flex: 0 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AddComment = () => {
  return (
    <Box>
      <Avatar>
        <img src="/img/avatar.jpg" alt="" />
      </Avatar>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue=""
        variant="outlined"
        size="small"
        placeholder="Leave a message"
      />
    </Box>
  );
};

export default AddComment;
