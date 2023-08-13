import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import clsx from "clsx";
import { useStore } from "../store";
import {
  setPage,
  setPageSize,
  setPagination,
  setOverLimit,
} from "../store/action";

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
  const { products, pagination, pageSize, page, isOverLimit } = state;
  const { totalItem, currentPage, limit, hasItem } = pagination;

  const pages = Math.ceil(totalItem / pageSize);
  console.log("Totals page: " + pages);
  const fromProduct = (page - 1) * pageSize + 1;
  const toProduct = page * pageSize;

  const handleChangePage = (toPage: number) => {
    dispatch(
      setPagination({
        currentPage: toPage,
      })
    );
    dispatch(setPage(toPage));
  };

  function createPagination() {
    var renderArray = [];
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;

    if (pages <= 5) {
      renderArray = Array(pages)
        .fill(1)
        .map((item, i) => {
          return (
            <span
              className={clsx(page === i + 1 && "active")}
              onClick={() => handleChangePage(i + 1)}
            >
              {i + 1}
            </span>
          );
        });
      return renderArray;
    }
    
    //if page value is less than 2 then add 1 after the previous button
    if (page > 2) {
      //if page value is less than 2 then add 1 after the previous button
      renderArray.push(
        <span
          className={clsx(page === 1 && "active")}
          onClick={() => handleChangePage(1)}
        >
          1
        </span>
      );
      if (page > 3) {
        //if page value is greater than 3 then add this (...) after the first li or page
        renderArray.push(<span>...</span>);
      }
    }

    // how many pages or li show before the current li
    if (page == pages) {
      beforePage = beforePage - 2;
    } else if (page == pages - 1) {
      beforePage = beforePage - 1;
    }
    // how many pages or li show after the current li
    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > pages) {
        //if plength is greater than totalPage length then continue
        continue;
      }
      if (plength == 0) {
        //if plength is 0 than add +1 in plength value
        plength = plength + 1;
      }
      if (page == plength) {
        //if page is equal to plength than assign active string in the active variable
        active = "active";
      } else {
        //else leave empty to the active variable
        active = "";
      }

      renderArray.push(
        <span
          className={clsx(active)}
          onClick={() => {
            handleChangePage(plength);
          }}
        >
          {plength}
        </span>
      );
    }

    if (page < pages - 1) {
      //if page value is less than totalPage value by -1 then show the last li or page
      if (page < pages - 2) {
        //if page value is less than totalPage value by -2 then add this (...) before the last li or page
        renderArray.push(<span>...</span>);
      }
      renderArray.push(
        <span
          className={clsx(page === pages && "active")}
          onClick={() => handleChangePage(pages)}
        >
          {pages}
        </span>
      );
    }
    return renderArray;
  }

  return (
    <StyleFooter>
      {/* <div>
        <span>Rows per page:</span>
        <PageSizeButton>
          <span
            className={clsx(pageSize != 10 && "active")}
            onClick={() => dispatch(setPageSize(5))}
          >
            5
          </span>
          <span
            className={clsx(pageSize == 10 && "active")}
            onClick={() => dispatch(setPageSize(10))}
          >
            10
          </span>
        </PageSizeButton>
      </div> */}
      <PagePicker>
        {page > 1 ? (
          <ChevronLeftIcon onClick={() => handleChangePage(page - 1)} />
        ) : (
          ""
        )}
        {createPagination()}
        {page < pages ? (
          <ChevronRightIcon onClick={() => handleChangePage(page + 1)} />
        ) : (
          ""
        )}
      </PagePicker>

      <div>
        <strong>
          {hasItem ? fromProduct : 0} -{" "}
          {toProduct <= totalItem ? toProduct : totalItem}
        </strong>{" "}
        of {totalItem}
      </div>
    </StyleFooter>
  );
};
export default BoardFooter;
