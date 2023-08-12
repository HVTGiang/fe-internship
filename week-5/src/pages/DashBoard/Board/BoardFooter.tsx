import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import clsx from "clsx";
import { useStore } from "../store";
import { setPageSize } from "../store/action";

const StyleFooter = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`;

const PageSizeButton = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 12px;
  span {
    display: inline-block;
    padding: 4px 20px;
    border-left: 1px solid black;
    border-radius: 0 5px 5px 0;
    cursor: pointer;

    &:nth-child(1) {
      border-left: none;
      border-radius: 5px 0 0 5px;
    }
    &:hover {
      background-color: ${theme.color.greyF7};
    }
    &.active {
      background-color: ${theme.color.green2A};
      font-weight: bold;
      color: white;
    }
  }
`;
const PagePicker = styled.div`
  display: inline-flex;
  align-items: center;
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &.active {
      border: 1px solid ${theme.color.green2A};
    }
  }
  span,
  svg {
    width: 40px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    border-radius: 100px;
    &:hover {
      background-color: ${theme.color.greyF7};
    }
  }
`;

const BoardFooter = () => {
  const [state, dispatch] = useStore();
  const { products, pagination, pageSize, page } = state;
  const { totalItem, currentPage, limit, hasItem } = pagination;

  const pages = Math.ceil(totalItem / pageSize);
  const array = Array(pages).fill("a");

  // Render pagination item
  const renderPageNavigate = () => {
    let renderArray = [];
    if (pages <= 5) {
      renderArray = array.map((item, i) => (
        <span className={clsx(currentPage === i + 1 && "active")}>{i}</span>
      ));
    } else {
      renderArray = array.map((item, i) => {
        if (i + 1 < 4) {
          return (
            <span className={clsx(currentPage === i + 1 && "active")}>
              {i + 1}
            </span>
          );
        } else if (i + 1 !== pages - 1) {
          return;
        }
      });
      renderArray.push(
        <span>...</span>,
        <span className={clsx(currentPage === pages && "active")}>{pages}</span>
      );
    }
    return renderArray;
  };

  return (
    <StyleFooter>
      <div>
        <span>Rows per page:</span>
        <PageSizeButton>
          <span
            className={clsx(pageSize != 10 && "active")}
            onClick={()=>dispatch(setPageSize(5))}
          >
            5
          </span>
          <span
            className={clsx(pageSize == 10 && "active")}
            onClick={()=>dispatch(setPageSize(10))}
          >
            10
          </span>
        </PageSizeButton>
      </div>
      <PagePicker>
        <ChevronLeftIcon />
        {renderPageNavigate()}
        <ChevronRightIcon />
      </PagePicker>

      <div>
        Total: <strong></strong>
      </div>
    </StyleFooter>
  );
};
export default BoardFooter;
