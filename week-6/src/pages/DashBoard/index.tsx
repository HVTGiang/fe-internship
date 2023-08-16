import Nav from "./Nav";
import styled from "@emotion/styled";
import { theme } from "../../mui-config/theme";
import Board from "./Board";
import Table from "./Table";
import { StoreProvider } from "./store";

const DashBoardLayout = styled.div`
  background-color: ${theme.color.white};
  height: 100%;
  display: flex;
  gap: 20px;
`;

const DashBoard = () => {
  return (
    <StoreProvider>
      <DashBoardLayout>
        {/* <Nav /> */}
        {/* <Board /> */}
      </DashBoardLayout>
    </StoreProvider>
  );
};
export default DashBoard;
