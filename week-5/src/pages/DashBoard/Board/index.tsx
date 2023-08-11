import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import BoardHeader from "./BoardHeader";
import Table from "../Table";
import BoardFooter from "./BoardFooter";

const StyledBoard = styled.div`
  flex: 1;
  background-color: white;
  box-shadow: 0 0 8px 5px ${theme.color.greyF7};
  border-radius: 20px;
  margin: 20px 40px 20px 0;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Board = () => {
  return (
    <StyledBoard>
      <BoardHeader />
      <Table />
      <BoardFooter />
    </StyledBoard>
  );
};
export default Board;
