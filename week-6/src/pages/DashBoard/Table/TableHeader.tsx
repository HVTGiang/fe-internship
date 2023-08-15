import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "@emotion/styled";
import { useStore } from "../store";
import clsx from "clsx";
import { setSortBy, setSortType } from "../store/action";

type HeaderCellProps = {
  width?: number;
  active?: boolean;
  alignText: string;
  type?: string;
};

const Cell = styled.th<HeaderCellProps>`
  width: ${(props) => props.width + "%" || "25%"};

  svg {
    transform: rotateZ(
      ${(props) => (props.type === "desc" ? "180deg" : "0deg")}
    );
    width: 20px;
    height: 20px;
    transition: all linear 0.3s;
    opacity: ${(props) => (props.active ? 0.6 : 0)};
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
  const [state, dispatch] = useStore();
  const { products, pagination, pageSize, page, sortBy, sortType } = state;

  const handleChangeSort = (
    fromSortBy: string,
    toSortBy: string,
    fromSortType: string
  ) => {
    dispatch(setSortBy(toSortBy));
    if (fromSortBy !== toSortBy) {
      dispatch(setSortType("asc"));
    } else {
      if (!fromSortType) {
        dispatch(setSortType("asc"));
      }
      dispatch(setSortType(fromSortType === "asc" ? "desc" : "asc"));
    }
  };

  console.log(sortBy, sortType);

  return (
    <thead>
      <Header>
        <Cell
          width={25}
          alignText="left"
          type={sortBy === "name" ? sortType : "acs"}
          active={sortBy === "name"}
          onClick={() => {
            handleChangeSort(sortBy, "name", sortType);
          }}
        >
          <CellConTainer className="start">
            <span>Name</span>
            <ArrowUpwardIcon />
          </CellConTainer>
        </Cell>
        <Cell width={45} alignText="left">
          <CellConTainer className="start">
            <span>Description</span>
            {/* <ArrowUpwardIcon /> */}
          </CellConTainer>
        </Cell>
        <Cell
          width={15}
          alignText="left"
          type={sortBy === "price" ? sortType : "acs"}
          active={sortBy === "price"}
          onClick={() => {
            handleChangeSort(sortBy, "price", sortType);
          }}
        >
          <CellConTainer className="end">
            <ArrowUpwardIcon />
            <span>Price</span>
          </CellConTainer>
        </Cell>

        <Cell width={15} alignText="center">
          <CellConTainer className="center">
            {/* <ArrowUpwardIcon /> */}
            <span>Active</span>
          </CellConTainer>
        </Cell>
      </Header>
    </thead>
  );
};
export default TableHeader;
