import Nav from "./Nav";
import styled from "@emotion/styled";
import { theme } from "../../mui-config/theme";
import Board from "./Board";
import Table from "./Table";

const DashBoardLayout = styled.div`
  background-color: ${theme.color.white};
  height: 100%;
  display: flex;
  gap: 20px;
`;

const DashBoard = () => {
  return (
    <DashBoardLayout>
      <Nav />
      <Board />
    </DashBoardLayout>
  );
};
export default DashBoard;
