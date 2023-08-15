import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import { Product, ProductsProps, Pagination } from "../type";

const StyledTable = styled.table`
  border-collapse: collapse;
  vertical-align: middle;
  width: 100%;

  td,
  th {
    padding: 10px;
    border-bottom: 1px solid #e7e7e7;
  }
`;

const TableContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

const Table = () => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHeader />
        <TableBody />
      </StyledTable>
    </TableContainer>
  );
};
export default Table;
