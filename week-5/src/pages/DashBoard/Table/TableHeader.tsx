import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "@emotion/styled";

type HeaderCellProps = {
  width?: number;
  active?: boolean;
  alignText: string;
};

const Cell = styled.th<HeaderCellProps>`
  width: ${(props) => props.width + "%" || "25%"};

  svg {
    transform: rotateZ(${(props) => (props.active ? "180deg" : "0deg")});
    width: 20px;
    height: 20px;
    transition: all linear 0.3s;
    opacity: 0;
  }

  &:hover {
    svg {
      opacity: 0.6;
    }
  }
`;

const CellConTainer = styled.div`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin: 4px;
  }
  &.start {
    justify-content: flex-start;
  }
  &.end {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
  }
`;

const Header = styled.tr`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
`;

const TableHeader = () => {
  return (
    <thead>
      <Header>
        <Cell width={25} alignText="left">
          <CellConTainer className="start">
            <span>Name</span>
            <ArrowUpwardIcon />
          </CellConTainer>
        </Cell>
        <Cell width={45} alignText="left">
          <CellConTainer className="start">
            <span>Description</span>
            <ArrowUpwardIcon />
          </CellConTainer>
        </Cell>
        <Cell width={15} alignText="left">
          <CellConTainer className="end">
            <ArrowUpwardIcon />
            <span>Price</span>
          </CellConTainer>
        </Cell>

        <Cell width={15} alignText="center">
          <CellConTainer className="center">
            <ArrowUpwardIcon />
            <span>Active</span>
          </CellConTainer>
        </Cell>
      </Header>
    </thead>
  );
};
export default TableHeader;
